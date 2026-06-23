export default function WhatsAppButton() {
  return (
    <button
      className="fixed bottom-20 md:bottom-10 right-container-padding z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:scale-110 active:scale-90 transition-all flex items-center gap-2 group"
      aria-label="WhatsApp Us"
    >
      <span
        className="material-symbols-outlined text-2xl"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        chat
      </span>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
        WhatsApp Us
      </span>
    </button>
  );
}
