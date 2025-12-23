import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent("Hello! I would like to make a reservation at Nilgar Restaurant.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Book via WhatsApp"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <MessageCircle className="w-6 h-6" />
          <span className="font-medium text-sm whitespace-nowrap">Book Now</span>
        </div>
      </div>
      
      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-card border border-border text-foreground text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Reserve Table • Book Party • Enquiry
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
