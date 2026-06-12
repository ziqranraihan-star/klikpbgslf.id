import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink, generalConsultationMessage } from '../data/site';

const WhatsAppFloatingButton = () => {
  const link = buildWhatsAppLink(generalConsultationMessage);

  return (
    <Link
      href={link}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-primary/40 transition hover:-translate-y-1"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={18} />
      Konsultasi WA
    </Link>
  );
};

export default WhatsAppFloatingButton;
