import { LoginData, RegisterData, Product, User, ApiResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro na requisição');
      }

      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Erro desconhecido');
    }
  }

  // Auth
  async login(data: LoginData) {
    const response = await this.request<{ token: string; user: User }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    
    if (response.data.token) {
      this.token = response.data.token;
      localStorage.setItem('token', response.data.token);
    }
    
    return response;
  }

  async register(data: RegisterData) {
    return this.request<{ user: User }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }

  // Products
  async getProducts() {
    return this.request<Product[]>('/products');
  }

  async createProduct(data: Omit<Product, 'id' | 'createdAt'>) {
    return this.request<Product>('/products', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateProduct(id: string, data: Partial<Product>) {
    return this.request<Product>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteProduct(id: string) {
    return this.request<void>(`/products/${id}`, {
      method: 'DELETE',
    });
  }

  // User profile
  async getProfile() {
    return this.request<User>('/users/profile');
  }
}

export const api = new ApiClient(API_BASE_URL);