import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Play } from "lucide-react";
import VideoBackground from "@/components/shared/video-background";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Video Background - CONFIGURE AQUI! */}
      <VideoBackground
        // OPÇÃO 1 (RECOMENDADO): Cole o ID do vídeo do YouTube
        // Ex: se a URL é https://youtube.com/watch?v=ABC123, use youtubeId="ABC123"
        youtubeId="SEU_YOUTUBE_ID_AQUI"

        // OPÇÃO 2: Ou use vídeo local (depois que fizer upload)
        // videoUrl="/videos/hero.mp4"

        // Imagem que aparece enquanto carrega
        posterImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Serviços Profissionais em
            <span className="text-accent block">Alpinismo Industrial</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Especialistas em acesso por corda para manutenção predial, limpeza de fachadas e serviços técnicos em altura em todo o Brasil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Vídeos
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-8 animate-float">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 text-center text-white">
          <div className="text-2xl font-bold">500+</div>
          <div className="text-sm">Projetos Realizados</div>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 text-center text-white">
          <div className="text-2xl font-bold">15+</div>
          <div className="text-sm">Anos de Experiência</div>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 text-center text-white">
          <div className="text-2xl font-bold">100%</div>
          <div className="text-sm">Segurança</div>
        </div>
      </div>
    </section>
  );
}
