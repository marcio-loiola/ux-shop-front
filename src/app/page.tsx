'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para produtos (home real da aplicação)
    router.push('/produtos');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">UX Software Marketplace</h1>
        <p>Redirecionando para produtos...</p>
      </div>
    </div>
  );
}
