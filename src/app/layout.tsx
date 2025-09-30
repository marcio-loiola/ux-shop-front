import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UX Software Marketplace',
  description: 'Marketplace desenvolvido para o desafio UX Software - Sistema completo com autenticação, CRUD de produtos e carrinho de compras.',
  keywords: 'marketplace, e-commerce, ux software, next.js, typescript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
