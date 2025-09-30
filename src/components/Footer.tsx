"use client";

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">EcoMarket</span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Conectando consumidores conscientes com produtos sustentáveis e artesanais de artesãos do mundo todo. 
              Construindo um futuro melhor através do comércio ético.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary-foreground/10">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <nav className="space-y-3">
              <Link href="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Sobre Nós
              </Link>
              <Link href="/artisans" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Nossos Artesãos
              </Link>
              <Link href="/sustainability" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Sustentabilidade
              </Link>
              <Link href="/blog" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Blog
              </Link>
              <Link href="/careers" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Carreiras
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Atendimento ao Cliente</h3>
            <nav className="space-y-3">
              <Link href="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Fale Conosco
              </Link>
              <Link href="/shipping" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Informações de Envio
              </Link>
              <Link href="/returns" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Devoluções e Trocas
              </Link>
              <Link href="/size-guide" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Guia de Tamanhos
              </Link>
              <Link href="/faq" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Perguntas Frequentes
              </Link>
            </nav>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Mantenha-se Conectado</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">ola@ecomarket.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">+55 (11) 9876-5432</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">São Paulo, SP</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-primary-foreground/80">
                Assine nossa newsletter para atualizações sobre novos produtos e dicas de vida sustentável.
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Digite seu email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground rounded-lg px-4"
                >
                  Assinar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 EcoMarket. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/terms" className="hover:text-primary-foreground transition-colors">
                Termos de Serviço
              </Link>
              <Link href="/cookies" className="hover:text-primary-foreground transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;