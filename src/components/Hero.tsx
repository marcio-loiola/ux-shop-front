"use client";

import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <Star className="w-4 h-4 fill-accent text-accent" />
                <Star className="w-4 h-4 fill-accent text-accent" />
                <Star className="w-4 h-4 fill-accent text-accent" />
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm font-medium ml-2">Confiado por mais de 50.000 clientes</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Descubra
                <span className="text-accent"> Produtos</span>
                <br />
                Artesanais Sustentáveis
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Compre produtos ecológicos e éticos de artesãos do mundo todo. 
                Cada compra apoia práticas sustentáveis e comércio justo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 shadow-medium hover:shadow-large transition-all">
                Ver Coleção
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 bg-glass border-glass backdrop-blur-glass hover:bg-secondary"
              >
                Saiba Mais
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Frete Grátis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Devoluções em 30 Dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Compra Segura</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image 
                src="/images/hero-image.jpg"
                alt="Sustainable handmade products showcase"
                width={600}
                height={600}
                className="rounded-3xl shadow-large w-full h-[500px] lg:h-[600px] object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFhck+9bss00/wDZ//2Q=="
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-accent/10 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;