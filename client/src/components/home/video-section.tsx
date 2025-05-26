import { Play } from "lucide-react";

export default function VideoSection() {
  const videos = [
    {
      title: "Limpeza de Fachada de Vidro",
      description: "Demonstração completa do processo de limpeza profissional de fachadas de vidro em edifício comercial",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Pintura de Fachada Predial",
      description: "Processo de preparação e pintura de fachada predial utilizando técnicas de acesso por corda",
      thumbnail: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Manutenção em Altura",
      description: "Serviços de manutenção predial e reparo de revestimentos em locais de difícil acesso",
      thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Técnicas de Segurança",
      description: "Demonstração dos equipamentos de segurança e técnicas utilizadas no alpinismo industrial",
      thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Veja Nosso Trabalho em Ação</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Assista aos vídeos demonstrativos dos nossos serviços profissionais em alpinismo industrial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-6">
              <div className="aspect-video bg-gray-300 rounded-lg mb-4 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors duration-200 relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
