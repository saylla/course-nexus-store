
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { CartDrawer } from "./CartDrawer";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduMarket
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Cursos
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                PDFs
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </a>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar cursos, PDFs..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Entrar
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Carrinho
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingCart className="h-4 w-4" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Buscar cursos, PDFs..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Início
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Cursos
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                  PDFs
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Sobre
                </a>
                <Button variant="ghost" size="sm" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Entrar
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
