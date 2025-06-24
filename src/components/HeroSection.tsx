
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Aprenda com os
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}melhores{" "}
                </span>
                cursos digitais
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Acesse uma biblioteca completa de PDFs educativos e vídeos de cursos 
                profissionais. Conteúdo de qualidade para acelerar seu aprendizado.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
                Explorar Cursos
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Ver PDFs Gratuitos
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Cursos Disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">Alunos Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Taxa de Satisfação</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg"
                alt="Estudante aprendendo online"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};
