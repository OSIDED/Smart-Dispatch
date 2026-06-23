export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 px-container-padding bg-gradient-to-b from-primary-container/20 to-background overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-stack-md leading-tight">
            Delivery, Simplified via WhatsApp
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-stack-lg max-w-lg mx-auto md:mx-0">
            Order, track, and manage your deliveries through the chat you
            already use. No apps to download, just simple messaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-stack-md justify-center md:justify-start">
            <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-stack-sm">
              <span className="material-symbols-outlined">bolt</span>
              Start Shipping Now
            </button>
            <button className="bg-surface-container-lowest text-primary border border-outline-variant px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-low transition-colors">
              View Pricing
            </button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="md:w-1/2 relative w-full flex justify-center">
          <div className="relative w-full max-w-[320px] aspect-[9/19] bg-on-background rounded-[40px] border-8 border-on-background shadow-2xl overflow-hidden">
            <div className="h-full w-full bg-[#E5DDD5] flex flex-col">
              {/* Chat Header */}
              <div className="bg-secondary p-3 flex items-center gap-2 text-white shadow-sm">
                <div
                  className="w-8 h-8 rounded-full bg-surface-container bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2M--39B_LMlo6x8Y5OLr1_vk-7_7aUbqURJQDOYB_QNnQArRIu49TUlAep4Ub8oOQfA4F6qKxu51yd7dby_9TwDcOJ0lcaJviA8-OSBzJWzOuKrNPlQjEnavOvkeC6FK2narix_W36JpnoDiEM_9qx2GvxBQa06s2ekRXw6uCPS36bmx7nJ_K7oztSb9Bi3B39yl3IwrHHNh57tlks2zGGRi8hUgPSvTqGT1T8Ik6V1v9ICBMnzsSO7SuYq25sJc8pp8s-OgQIS8')",
                  }}
                />
                <div>
                  <p className="font-bold text-sm">Smart Dispatch Bot</p>
                  <p className="text-[10px] opacity-80">Online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-grow p-3 space-y-4 overflow-hidden">
                <div className="whatsapp-bubble-left bg-white p-3 rounded-lg shadow-sm max-w-[80%] text-xs">
                  Welcome to Smart Dispatch! How can I help you today?
                  <p className="text-[9px] text-gray-400 text-right mt-1">
                    10:02 AM
                  </p>
                </div>
                <div className="whatsapp-bubble-right bg-[#DCF8C6] p-3 rounded-lg shadow-sm max-w-[80%] text-xs ml-auto">
                  I need to send a package to Downtown.
                  <p className="text-[9px] text-gray-400 text-right mt-1">
                    10:03 AM ✓✓
                  </p>
                </div>
                <div className="whatsapp-bubble-left bg-white p-3 rounded-lg shadow-sm max-w-[80%] text-xs">
                  Sure! Please choose a service:
                  <div className="mt-2 space-y-1">
                    <div className="border border-primary-container text-primary p-2 rounded text-center font-bold">
                      Express (30m)
                    </div>
                    <div className="border border-primary-container text-primary p-2 rounded text-center font-bold">
                      Standard (2h)
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-400 text-right mt-1">
                    10:03 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative floating icon */}
          <div className="absolute -top-10 -right-4 bg-tertiary-container p-4 rounded-2xl shadow-lg hidden md:block animate-bounce">
            <span className="material-symbols-outlined text-white">map</span>
          </div>
        </div>
      </div>
    </section>
  );
}
