import whatsappIcon from "@assets/134w1500.jpg";
import { analytics } from "@/lib/analytics-tracker";

export default function WhatsAppButton() {
  const phoneNumber = "5511999999999"; // Substitua pelo número real da empresa
  const message = "Olá! Gostaria de solicitar um orçamento para serviços de alpinismo industrial.";
  
  const handleWhatsAppClick = () => {
    // Track o clique do WhatsApp
    analytics.trackWhatsAppClick('floating_button');
    
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
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
}