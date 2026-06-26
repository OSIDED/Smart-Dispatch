import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 px-container-padding bg-gradient-to-b from-primary-container/20 to-background overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-stack-md leading-tight">
            Automate Delivery Operations Without the Chaos.
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-stack-lg max-w-lg mx-auto md:mx-0">
            Smart Dispatch automatically processes orders, assigns available drivers, and simplifies delivery management.
          </p>
          <div className="flex flex-col sm:flex-row gap-stack-md justify-center md:justify-start">
            <Button size="xl" className="!flex items-center gap-stack-sm mx-auto">
              Request Early Access
            </Button>
            <Button variant="secondary" size="lg" className="ml-4">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* WhatsApp Chat Mockup */}
        <div className="md:w-1/2 relative w-full flex justify-center">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 rounded-3xl blur-2xl opacity-60" />
          <div className="relative w-full max-w-[320px] aspect-[9/16] bg-[#efeae2] rounded-3xl border-4 border-on-background shadow-2xl overflow-hidden flex flex-col">
            {/* Chat Header */}
            <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white text-sm font-bold">
                SD
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-semibold">Smart Dispatch</div>
                <div className="text-[#7ae0d6] text-xs">Online</div>
              </div>
              <span className="material-symbols-outlined text-white/80 text-xl">more_vert</span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 px-3 py-3 space-y-3 overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjLTEgMC0yIDEtMiAydjJjMCAxIDAgMiAyIDJoMmMxIDAgMi0xIDItMnYtMmMwLTEtMS0yLTItMmgtMnpNMjYgMzRjLTEgMC0yIDEtMiAydjJjMCAxIDAgMiAyIDJoMmMxIDAgMi0xIDItMnYtMmMwLTEtMS0yLTItMmgtMnpNMTYgMzRjLTEgMC0yIDEtMiAydjJjMCAxIDAgMiAyIDJoMmMxIDAgMi0xIDItMnYtMmMwLTEtMS0yLTItMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]">
              
              {/* Customer message */}
              <div className="flex justify-start">
                <div className="whatsapp-bubble-right bg-[#dcf8c6] px-3 py-2 rounded-2xl max-w-[85%] shadow-sm">
                  <p className="text-sm text-[#303030] leading-relaxed">
                    I'd like to order 2 burgers, 1 fries, deliver to 123 Main St
                  </p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">12:30 PM</p>
                </div>
              </div>

              {/* System auto-reply */}
              <div className="flex justify-start">
                <div className="whatsapp-bubble-left bg-white px-3 py-2 rounded-2xl max-w-[85%] shadow-sm border border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="material-symbols-outlined text-[#25D366] text-base">check_circle</span>
                    <span className="text-xs font-semibold text-[#075e54]">Order Confirmed</span>
                  </div>
                  <p className="text-sm text-[#303030] leading-relaxed">
                    Order #8472 confirmed! Driver assigned. ETA: 15 min
                  </p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">12:31 PM</p>
                </div>
              </div>

              {/* Driver status card */}
              <div className="flex justify-start">
                <div className="bg-white px-3 py-2 rounded-2xl max-w-[85%] shadow-sm border border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="material-symbols-outlined text-secondary text-base">local_shipping</span>
                    <span className="text-xs font-semibold text-secondary">Driver En Route</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-sm">person</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-[#303030]">James • Toyota Corolla</div>
                      <div className="text-[10px] text-gray-400">2.3 km away</div>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 text-right mt-1">12:32 PM</p>
                </div>
              </div>

              {/* Map preview */}
              <div className="flex justify-start">
                <div className="bg-white px-3 py-2 rounded-2xl max-w-[85%] shadow-sm border border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="material-symbols-outlined text-tertiary text-base">map</span>
                    <span className="text-xs font-semibold text-tertiary">Live Location</span>
                  </div>
                  <div className="h-14 bg-gradient-to-br from-tertiary-container/10 to-secondary-container/10 rounded-lg border border-outline-variant flex items-center justify-center mt-1">
                    <span className="text-[10px] text-on-surface-variant/60">📍 Live Map</span>
                  </div>
                  <p className="text-[10px] text-gray-400 text-right mt-1">12:33 PM</p>
                </div>
              </div>
            </div>

            {/* Chat Input Bar */}
            <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2 flex-shrink-0">
              <span className="material-symbols-outlined text-on-surface-variant/50 text-xl">mood</span>
              <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-on-surface-variant/50">
                Type a message...
              </div>
              <span className="material-symbols-outlined text-on-surface-variant/50 text-xl">mic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
