import { useState, useEffect } from "react";

interface VideoBackgroundProps {
  // Opção 1: URL do YouTube (RECOMENDADO - mais rápido!)
  youtubeId?: string; // Ex: "dQw4w9WgXcQ" da URL https://youtube.com/watch?v=dQw4w9WgXcQ

  // Opção 2: Vídeo local (para quando hospedar o vídeo)
  videoUrl?: string; // Ex: "/videos/hero.mp4"

  // Imagem de fallback (mostrada enquanto carrega ou se vídeo falhar)
  posterImage: string;

  // Opções
  className?: string;
}

export default function VideoBackground({
  youtubeId,
  videoUrl,
  posterImage,
  className = ""
}: VideoBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [useVideo, setUseVideo] = useState(true);

  // Detectar se é mobile para economizar dados
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReducedData = navigator.connection?.saveData;

    // Desabilitar vídeo em mobile ou conexão lenta
    if (isMobile || prefersReducedData) {
      setUseVideo(false);
    }
  }, []);

  // YouTube (mais rápido e não usa seu servidor)
  if (youtubeId && useVideo) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Imagem de fundo enquanto carrega */}
        {!isLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${posterImage}')` }}
          />
        )}

        {/* YouTube iframe otimizado */}
        <iframe
          className="absolute inset-0 w-full h-full object-cover scale-150"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          title="Video Background"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          onLoad={() => setIsLoaded(true)}
          style={{
            pointerEvents: 'none',
            // Esconder controles do YouTube
            marginTop: '-60px',
            marginBottom: '-60px'
          }}
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
    );
  }

  // Vídeo Local (MP4)
  if (videoUrl && useVideo) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Imagem de fundo enquanto carrega */}
        {!isLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${posterImage}')` }}
          />
        )}

        {/* Vídeo HTML5 otimizado */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={posterImage}
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setUseVideo(false)}
        >
          <source src={videoUrl} type="video/mp4" />
          {/* Fallback para navegadores antigos */}
          Seu navegador não suporta vídeo.
        </video>

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
    );
  }

  // Fallback: apenas imagem
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${posterImage}')` }}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
