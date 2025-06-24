
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "./ProductCard";

const featuredProducts = [
  {
    id: 1,
    title: "Curso Completo de React e TypeScript",
    description: "Aprenda do básico ao avançado com projetos práticos",
    price: 199.90,
    originalPrice: 299.90,
    image: "/placeholder.svg",
    type: "video" as const,
    rating: 4.9,
    students: 1234,
    duration: "12 horas",
    category: "Programação",
    instructor: "João Silva",
    featured: true
  },
  {
    id: 2,
    title: "Guia Definitivo de Marketing Digital",
    description: "PDF completo com estratégias e templates",
    price: 49.90,
    originalPrice: 79.90,
    image: "/placeholder.svg",
    type: "pdf" as const,
    rating: 4.8,
    downloads: 2156,
    pages: 150,
    category: "Marketing",
    instructor: "Maria Santos",
    featured: true
  },
  {
    id: 3,
    title: "Python para Data Science",
    description: "Curso prático com projetos reais de análise de dados",
    price: 149.90,
    originalPrice: 199.90,
    image: "/placeholder.svg",
    type: "video" as const,
    rating: 4.9,
    students: 856,
    duration: "8 horas",
    category: "Data Science",
    instructor: "Carlos Lima",
    featured: true
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
            🔥 Em Destaque
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Produtos Mais Populares
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra os cursos e materiais mais procurados pelos nossos alunos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
