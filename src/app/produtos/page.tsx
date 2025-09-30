'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { api } from '@/lib/api';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, ShoppingCart, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ProdutosPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToCart, itemCount } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await api.getProducts();
      setProducts(response.data);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao carregar produtos';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      const priceNumber = Number(formData.price);
      if (Number.isNaN(priceNumber) || priceNumber <= 0) {
        toast.error('Informe um preço válido');
        return;
      }

      const payload = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        price: priceNumber,
        category: formData.category.trim() || undefined,
        image: formData.image.trim() || undefined,
      };

      if (editingProduct) {
        const response = await api.updateProduct(editingProduct.id, payload);
        setProducts((prev) =>
          prev.map((p) => (p.id === editingProduct.id ? response.data : p))
        );
        toast.success('Produto atualizado!');
      } else {
        const response = await api.createProduct(payload);
        setProducts((prev) => [...prev, response.data]);
        toast.success('Produto criado!');
      }

      setShowForm(false);
      setEditingProduct(null);
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao salvar produto';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price?.toString() ?? '',
      category: product.category || '',
      image: product.image || '',
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Deseja excluir este produto?')) {
      return;
    }

    try {
      await api.deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success('Produto excluído!');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao excluir produto';
      toast.error(message);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    toast.success('Produto adicionado ao carrinho');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando produtos...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">UX Software Marketplace</h1>
            <div className="flex gap-4">
              <Link href="/carrinho">
                <Button variant="outline" className="relative">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Carrinho
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Actions */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Produtos</h2>
          <Button
            onClick={() => {
              setShowForm(true);
              setEditingProduct(null);
              setFormData({
                name: '',
                description: '',
                price: '',
                category: '',
                image: '',
              });
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Novo Produto
          </Button>
        </div>

        {/* Product Form */}
        {showForm && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                {editingProduct ? 'Editar Produto' : 'Novo Produto'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Nome
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Preço
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          price: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Descrição
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={3}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Categoria
                    </label>
                    <Input
                      value={formData.category}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      URL da Imagem
                    </label>
                    <Input
                      value={formData.image}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          image: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting
                      ? editingProduct
                        ? 'Atualizando...'
                        : 'Criando...'
                      : editingProduct
                        ? 'Atualizar'
                        : 'Criar'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowForm(false);
                      setEditingProduct(null);
                      setFormData({
                        name: '',
                        description: '',
                        price: '',
                        category: '',
                        image: '',
                      });
                    }}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              {product.image && (
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Imagem do produto</span>
                </div>
              )}
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-green-600">
                    R$ {Number(product.price).toFixed(2)}
                  </span>
                  {product.category && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="flex-1"
                  >
                    Adicionar ao Carrinho
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(product)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(product.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum produto encontrado</p>
            <Button onClick={() => setShowForm(true)} className="mt-4">
              Criar primeiro produto
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
