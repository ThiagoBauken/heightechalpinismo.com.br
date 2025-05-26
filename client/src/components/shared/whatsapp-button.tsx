import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "5511999999999"; // Substitua pelo número real da empresa
  const message = "Olá! Gostaria de solicitar um orçamento para serviços de alpinismo industrial.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="whatsapp-float"
      onClick={handleWhatsAppClick}
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle />
    </div>
  );
}