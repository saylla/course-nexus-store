
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
  type: string;
  created_at?: string;
}

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_featured', true)
        .eq('status', 'active')
        .limit(3);

      if (error) {
        console.error('Erro ao buscar produtos em destaque:', error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produtos em Destaque</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-video rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Produtos em Destaque</h2>
          <p className="text-xl text-gray-600">Nossos melhores cursos e materiais selecionados especialmente para você</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: Number(product.id.split('-')[0]) || 1,
                title: product.title,
                description: product.description || '',
                price: product.price,
                originalPrice: undefined,
                image: product.image_url || "/placeholder.svg",
                type: (product.type as 'video' | 'pdf') || 'pdf',
                rating: 4.5,
                students: 100,
                downloads: 50,
                duration: '2h',
                pages: 50,
                category: 'Categoria',
                instructor: 'Instrutor',
                featured: true
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
