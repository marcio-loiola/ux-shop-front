"use client";

import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-nav backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-primary">EcoMarket</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors font-medium">
              Produtos
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden rounded-full">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;