"use client";

import { ArrowRight, Users, Award, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-dark text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Junte-se à Nossa Comunidade de
                <span className="text-accent"> Consumidores Conscientes</span>
              </h2>
              
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Seja parte de um movimento que valoriza sustentabilidade, artesanato e práticas comerciais éticas. 
                Juntos, estamos causando um impacto positivo no mundo, uma compra de cada vez.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-accent" />
                </div>
                <span className="text-primary-foreground/90">Mais de 50.000 clientes satisfeitos mundialmente</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                <span className="text-primary-foreground/90">Produtos certificados sustentáveis e éticos</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-accent" />
                </div>
                <span className="text-primary-foreground/90">Envio e embalagem carbono neutro</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground rounded-full px-8 shadow-large"
              >
                Começar a Comprar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Assinar Newsletter
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20">
              <div className="text-3xl font-bold text-accent mb-2">50K+</div>
              <div className="text-sm text-primary-foreground/80">Clientes Felizes</div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20">
              <div className="text-3xl font-bold text-accent mb-2">1200+</div>
              <div className="text-sm text-primary-foreground/80">Produtos Eco</div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20">
              <div className="text-3xl font-bold text-accent mb-2">300+</div>
              <div className="text-sm text-primary-foreground/80">Parceiros Artesãos</div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-primary-foreground/80">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;