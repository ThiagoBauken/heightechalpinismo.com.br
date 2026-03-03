// Shared WhatsApp utility for the entire site
const WHATSAPP_PHONE = "554792145961"; // +55 47 9214-5961

export function getWhatsAppOrcamentoUrl(): string {
    const message = "Olá! Gostaria de fazer um orçamento.";
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppOrcamento(): void {
    window.open(getWhatsAppOrcamentoUrl(), '_blank');
}
