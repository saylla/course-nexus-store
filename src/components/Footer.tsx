
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              EduMarket
            </h3>
            <p className="text-gray-300 text-sm">
              Sua plataforma de confiança para cursos digitais e materiais educativos de qualidade.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-lg font-bold">500+</div>
                <div className="text-xs text-gray-400">Cursos</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">10k+</div>
                <div className="text-xs text-gray-400">Alunos</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">98%</div>
                <div className="text-xs text-gray-400">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cursos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">PDFs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Programação</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Produtividade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Data Science</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Receba as últimas novidades e ofertas especiais
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Seu email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 EduMarket. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
