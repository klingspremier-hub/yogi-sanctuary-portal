import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=31627088945"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl whatsapp-float hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-current text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
