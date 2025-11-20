import whatsappIcon from "@assets/134w1500.jpg";
import { analytics } from "@/lib/analytics-tracker";
import { useState } from "react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "554792145961"; // +55 47 9214-5961
  const message = "Olá! Vi o site heightechalpinismo.com.br e gostaria de solicitar um orçamento para serviços de alpinismo industrial.";

  const handleWhatsAppClick = () => {
    // Track o clique do WhatsApp
    analytics.trackWhatsAppClick('floating_button');

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Verificar horário de atendimento (Seg-Sex: 8h-18h, Sáb: 8h-12h)
  const isOnline = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 6 = Sábado
    const hour = now.getHours();

    if (day === 0) return false; // Domingo
    if (day === 6) return hour >= 8 && hour < 12; // Sábado 8h-12h
    return hour >= 8 && hour < 18; // Seg-Sex 8h-18h
  };

  const online = isOnline();

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
          Fale conosco no WhatsApp!
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
        </div>
      )}

      {/* Botão Principal */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Animação de Pulse */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Ícone do WhatsApp */}
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="relative w-14 h-14 object-cover rounded-full"
        />

        {/* Badge Online/Offline */}
        <span className={`absolute top-0 right-0 w-4 h-4 rounded-full border-2 border-white ${online ? 'bg-green-400' : 'bg-gray-400'}`}>
          {online && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-pulse"></span>
          )}
        </span>
      </button>

      {/* Texto de status (oculto no mobile) */}
      <div className="hidden md:block absolute bottom-full right-0 mb-20 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm font-medium text-gray-700">
          {online ? '🟢 Online agora' : '🔴 Offline'}
        </p>
        <p className="text-xs text-gray-500">
          {online ? 'Respondemos em minutos!' : 'Horário: Seg-Sex 8h-18h'}
        </p>
      </div>
    </div>
  );
}