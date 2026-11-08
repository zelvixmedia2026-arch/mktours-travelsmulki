
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919964696933";
const PHONE_NUMBER = "+91 9449105402";

export default function FloatingActions() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="mk-floating-actions">

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mk-float-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={23} />
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${PHONE_NUMBER}`}
        className="mk-float-call"
        aria-label="Call MK Tours and Travels"
      >
        <Phone size={21} />
        <span>Call Now</span>
      </a>

    </div>
  );
}
