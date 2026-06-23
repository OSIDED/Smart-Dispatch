const steps = [
  {
    number: 1,
    title: "Send a Message",
    description: "Simply message our verified WhatsApp number to start a new delivery request.",
    icon: "chat",
    detail: '"Hello, I need a pickup"',
    detailClass: "text-primary font-bold",
    bubbleClass: "whatsapp-bubble-right bg-[#DCF8C6]",
  },
  {
    number: 2,
    title: "Choose your Service",
    description: "Select from Express, Standard, or Scheduled deliveries with transparent pricing.",
    icon: "check_circle",
    detail: '"Selecting Express..."',
    detailClass: "text-on-surface-variant italic",
    bubbleClass: "whatsapp-bubble-left bg-white border border-outline-variant",
  },
  {
    number: 3,
    title: "Track in Real-time",
    description: "Receive live location updates and status notifications directly in your chat thread.",
    icon: null,
    showProgress: true,
    bubbleClass: "whatsapp-bubble-right bg-[#DCF8C6]",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-container-padding bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest">
            Process
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-background mt-2">
            How it Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="mb-stack-md flex justify-center md:justify-start">
                <div className={`${step.bubbleClass} p-6 rounded-2xl shadow-md w-full max-w-[280px]`}>
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-2">{step.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{step.description}</p>

                  {step.showProgress ? (
                    <div className="mt-4 h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-3/4 rounded-full" />
                    </div>
                  ) : (
                    <div className={`mt-4 flex items-center gap-2 text-sm ${step.detailClass}`}>
                      <span className="material-symbols-outlined">{step.icon}</span>
                      {step.detail}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
