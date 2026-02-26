import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511922029387?text=Quero%20saber%20mais%20sobre%20os%20criativos";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-primary-foreground" />
  </a>
);

export default WhatsAppFloat;
