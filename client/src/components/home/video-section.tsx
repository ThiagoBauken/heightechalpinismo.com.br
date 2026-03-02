import { Play } from "lucide-react";

export default function VideoSection() {
  const videos = [
    {
      title: "Limpeza de Fachada de Vidro",
      description: "Demonstração completa do processo de limpeza profissional de fachadas de vidro em edifício comercial",
      // Exemplo de como ficará o código quando ele colar:
      // instagramEmbedHtml: '<blockquote class="instagram-media" data-instgrm-permalink...></blockquote>',
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
    <section id="video-section" className="py-20 bg-white dark:bg-slate-900 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Veja Nosso Trabalho em Ação</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Assista aos vídeos demonstrativos dos nossos serviços profissionais em alpinismo industrial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-gray-100 dark:bg-slate-800 rounded-xl p-6 border border-border">
              {/* Se tiver o código do Instagram, renderiza ele. Se não tiver, renderiza a imagem padrão */}
              {(video as any).instagramEmbedHtml ? (
                <div
                  className="instagram-container w-full flex justify-center overflow-hidden rounded-lg mb-4"
                  dangerouslySetInnerHTML={{ __html: (video as any).instagramEmbedHtml }}
                />
              ) : (
                <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-200 relative overflow-hidden group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{video.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{video.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Script do Instagram necessário para renderizar os embeds dinamicamente */}
      <script async src="//www.instagram.com/embed.js"></script>
    </section>
  );
}
