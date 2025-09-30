'use client';

import { useState, useEffect } from 'react';
import { User, LoginData, RegisterData } from '@/types';
import { api } from '@/lib/api';
import { toast } from 'sonner';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      loadUser();
    } else {
      setLoading(false);
    }
  }, []);

  const loadUser = async () => {
    try {
      const response = await api.getProfile();
      setUser(response.data);
    } catch (error) {
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: LoginData) => {
    try {
      setLoading(true);
      const response = await api.login(data);
      setUser(response.data.user);
      toast.success('Login realizado com sucesso!');
      return response;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erro no login';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    try {
      setLoading(true);
      const response = await api.register(data);
      toast.success('Cadastro realizado com sucesso! Faça login para continuar.');
      return response;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erro no cadastro';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    api.logout();
    setUser(null);
    toast.success('Logout realizado com sucesso!');
  };

  return {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };
}