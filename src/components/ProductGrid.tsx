"use client";

import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Sérum Facial Orgânico",
    price: "R$ 189,00",
    originalPrice: "R$ 260,00",
    image: "/images/product-1.jpg",
    rating: 4.8,
    reviews: 124,
    badge: "Mais Vendido",
  },
  {
    id: 2,
    name: "Vela Artesanal de Soja",
    price: "R$ 108,00",
    image: "/images/product-2.jpg",
    rating: 4.9,
    reviews: 89,
    badge: "Novo",
  },
  {
    id: 3,
    name: "Bolsa Ecobag de Cânhamo",
    price: "R$ 162,00",
    image: "/images/product-3.jpg",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Conjunto de Tigelas Cerâmica",
    price: "R$ 306,00",
    image: "/images/product-4.jpg",
    rating: 4.9,
    reviews: 67,
  },
  {
    id: 5,
    name: "Kit Escova de Bambu",
    price: "R$ 81,00",
    image: "/images/product-5.jpg",
    rating: 4.6,
    reviews: 203,
    badge: "Eco-Amigável",
  },
  {
    id: 6,
    name: "Sabonetes Naturais",
    price: "R$ 144,00",
    image: "/images/product-6.jpg",
    rating: 4.8,
    reviews: 178,
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubra nossa coleção selecionada de produtos sustentáveis e artesanais 
            que causam um impacto positivo no mundo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-large transition-all duration-300 border-card-border bg-card overflow-hidden">
              <div className="relative overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFhck+9bss00/wDZ//2Q=="
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                )}
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 bg-glass border-glass backdrop-blur-glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-accent text-accent' 
                            : 'text-muted-foreground'
                        }`} 
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-foreground">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      className="rounded-full px-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Adicionar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 bg-glass border-glass backdrop-blur-glass hover:bg-secondary"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;