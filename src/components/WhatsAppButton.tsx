const WhatsAppButton = () => {
  const phoneNumber = "918900074438";

  const message =
    "Hello Weborix Technologies, I want to know more about your services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
      
      {/* Text Bubble */}
      <div className="bg-white text-black px-4 py-2 rounded-full shadow-lg opacity-0 translate-x-5 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-gray-200">
        Chat with us
      </div>

      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-110"
      >
        <img
          src="IMG/whatsapp.png"
          alt="WhatsApp"
          className="w-14 h-14"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;