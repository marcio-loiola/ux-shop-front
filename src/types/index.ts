// Tipos essenciais para a vaga UX Software

// Usuário
export interface User {
  id: string;
  cpf: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt?: string;
}

// Produto
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
  createdAt?: string;
}

// Autenticação
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  cpf: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// Carrinho
export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// API Response
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// Carrinho
export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// API Response
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
