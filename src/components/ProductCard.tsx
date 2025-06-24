
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Clock, Users, FileText, Play, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  type: 'video' | 'pdf';
  rating: number;
  students?: number;
  downloads?: number;
  duration?: string;
  pages?: number;
  category: string;
  instructor: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      type: product.type
    });
    toast.success("Produto adicionado ao carrinho!");
  };

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Type badge */}
        <Badge className={`absolute top-3 left-3 ${
          product.type === 'video' 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-green-500 hover:bg-green-600'
        }`}>
          {product.type === 'video' ? (
            <>
              <Play className="h-3 w-3 mr-1" />
              Vídeo
            </>
          ) : (
            <>
              <FileText className="h-3 w-3 mr-1" />
              PDF
            </>
          )}
        </Badge>

        {/* Discount badge */}
        {discount > 0 && (
          <Badge className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600">
            -{discount}%
          </Badge>
        )}

        {/* Featured badge */}
        {product.featured && (
          <Badge className="absolute top-12 right-3 bg-gradient-to-r from-yellow-400 to-orange-500">
            ⭐ Destaque
          </Badge>
        )}
      </div>

      <CardContent className="p-6">
        <div className="mb-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
        </div>
        
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            {product.type === 'video' ? (
              <>
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  {product.students}
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {product.duration}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  {product.downloads}
                </div>
                <div className="flex items-center">
                  <FileText className="h-3 w-3 mr-1" />
                  {product.pages} pág.
                </div>
              </>
            )}
          </div>
        </div>

        <div className="text-xs text-gray-500 mb-4">
          Por {product.instructor}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};
