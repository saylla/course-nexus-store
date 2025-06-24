
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductCard } from "./ProductCard";
import { Search, Filter } from "lucide-react";

const allProducts = [
  {
    id: 4,
    title: "JavaScript Moderno ES6+",
    description: "Domine as funcionalidades mais recentes do JavaScript",
    price: 89.90,
    originalPrice: 129.90,
    image: "/placeholder.svg",
    type: "video" as const,
    rating: 4.7,
    students: 945,
    duration: "6 horas",
    category: "Programação",
    instructor: "Ana Costa"
  },
  {
    id: 5,
    title: "Manual de Design UX/UI",
    description: "Guia completo para criar interfaces incríveis",
    price: 39.90,
    originalPrice: 59.90,
    image: "/placeholder.svg",
    type: "pdf" as const,
    rating: 4.6,
    downloads: 1678,
    pages: 120,
    category: "Design",
    instructor: "Pedro Oliveira"
  },
  {
    id: 6,
    title: "Excel Avançado para Negócios",
    description: "Dashboards, fórmulas complexas e automação",
    price: 79.90,
    originalPrice: 119.90,
    image: "/placeholder.svg",
    type: "video" as const,
    rating: 4.8,
    students: 1456,
    duration: "5 horas",
    category: "Produtividade",
    instructor: "Lucas Ferreira"
  },
  {
    id: 7,
    title: "Estratégias de Vendas B2B",
    description: "PDF com técnicas comprovadas de vendas corporativas",
    price: 34.90,
    originalPrice: 49.90,
    image: "/placeholder.svg",
    type: "pdf" as const,
    rating: 4.5,
    downloads: 892,
    pages: 85,
    category: "Vendas",
    instructor: "Carla Mendes"
  },
  {
    id: 8,
    title: "Node.js e APIs RESTful",
    description: "Construa backends robustos e escaláveis",
    price: 159.90,
    originalPrice: 219.90,
    image: "/placeholder.svg",
    type: "video" as const,
    rating: 4.9,
    students: 734,
    duration: "10 horas",
    category: "Programação",
    instructor: "Roberto Silva"
  },
  {
    id: 9,
    title: "Fotografia Profissional",
    description: "Técnicas e composição para fotos profissionais",
    price: 119.90,
    originalPrice: 169.90,
    image: "/placeholder.svg",
    type: "video" as const,
    rating: 4.7,
    students: 623,
    duration: "7 horas",
    category: "Arte",
    instructor: "Marina Santos"
  }
];

const categories = ["Todos", "Programação", "Marketing", "Design", "Produtividade", "Vendas", "Data Science", "Arte"];

export const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesType = selectedType === "all" || product.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Catálogo Completo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore nossa coleção completa de cursos e materiais educativos
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="video">Vídeo Cursos</SelectItem>
                <SelectItem value="pdf">PDFs</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Mais populares</SelectItem>
                <SelectItem value="price-low">Menor preço</SelectItem>
                <SelectItem value="price-high">Maior preço</SelectItem>
                <SelectItem value="rating">Melhor avaliação</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Badges de filtros ativos */}
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedCategory !== "Todos" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {selectedCategory}
              <button onClick={() => setSelectedCategory("Todos")} className="ml-1 hover:text-red-500">
                ×
              </button>
            </Badge>
          )}
          {selectedType !== "all" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {selectedType === "video" ? "Vídeo Cursos" : "PDFs"}
              <button onClick={() => setSelectedType("all")} className="ml-1 hover:text-red-500">
                ×
              </button>
            </Badge>
          )}
          {searchTerm && (
            <Badge variant="secondary" className="flex items-center gap-1">
              "{searchTerm}"
              <button onClick={() => setSearchTerm("")} className="ml-1 hover:text-red-500">
                ×
              </button>
            </Badge>
          )}
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Grid de produtos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar os filtros ou buscar por outros termos
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todos");
                setSelectedType("all");
              }}
              className="mt-4"
            >
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
