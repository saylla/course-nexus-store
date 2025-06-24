
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingCart, FileText, Play } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Seu carrinho está vazio!");
      return;
    }
    toast.success("Redirecionando para o checkout...");
    // Aqui você implementaria a lógica de checkout real
  };

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Carrinho de Compras
            {items.length > 0 && (
              <Badge variant="secondary">{items.length}</Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Carrinho vazio
                </h3>
                <p className="text-gray-500">
                  Adicione alguns produtos para começar
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                              {item.title}
                            </h4>
                            <div className="mt-1 flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {item.type === 'video' ? (
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
                            </div>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="text-sm font-bold text-green-600">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700"
                  >
                    Limpar Carrinho
                  </Button>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Total</div>
                    <div className="text-xl font-bold text-green-600">
                      {formatPrice(getTotalPrice())}
                    </div>
                  </div>
                </div>

                <Separator />

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  size="lg"
                >
                  Finalizar Compra
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
