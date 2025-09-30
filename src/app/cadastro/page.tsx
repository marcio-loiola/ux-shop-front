'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { maskCPF, maskPhone, unmask, validateCPF } from '@/lib/masks';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

export default function CadastroPage() {
  const router = useRouter();
  const { register: registerUser } = useAuth();
  const [formData, setFormData] = useState({
    cpf: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    let maskedValue = value;

    if (field === 'cpf') {
      maskedValue = maskCPF(value);
    } else if (field === 'phone') {
      maskedValue = maskPhone(value);
    }

    setFormData((prev) => ({ ...prev, [field]: maskedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Senhas não coincidem');
      return;
    }

    if (!validateCPF(formData.cpf)) {
      toast.error('CPF inválido');
      return;
    }

    if (formData.phone.length < 15) {
      toast.error('Telefone inválido');
      return;
    }

    try {
      setIsSubmitting(true);

      await registerUser({
        cpf: unmask(formData.cpf),
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: unmask(formData.phone),
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      router.push('/login');
    } catch (error) {
      console.error('Erro ao cadastrar usuário', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Cadastro</h1>
          <p className="text-gray-600 mt-2">Crie sua conta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">CPF</label>
            <Input
              value={formData.cpf}
              onChange={(e) => handleInputChange('cpf', e.target.value)}
              placeholder="000.000.000-00"
              maxLength={14}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Nome Completo
            </label>
            <Input
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Telefone</label>
            <Input
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(00) 00000-0000"
              maxLength={15}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Senha</label>
            <Input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Sua senha"
              minLength={6}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Confirmar Senha
            </label>
            <Input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange('confirmPassword', e.target.value)
              }
              placeholder="Confirme sua senha"
              minLength={6}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-gray-600">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
