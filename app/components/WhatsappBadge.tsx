// components/WhatsAppBadge.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppBadge = () => {
  const phoneNumber = '+971543097783';

  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <FaWhatsapp size={20} />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppBadge;
