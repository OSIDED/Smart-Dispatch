const steps = [
  {
    number: 1,
    title: "Send Order via WhatsApp",
    description: "Simply send your order details to our verified WhatsApp number in your preferred format.",
    icon: "chat",
    detail: '"2 burgers, 1 fries, deliver to 123 Main St"',
    detailClass: "text-primary font-bold",
    bubbleClass: "whatsapp-bubble-right bg-[#DCF8C6]",
    numberBg: "bg-primary",
  },
  {
    number: 2,
    title: "Automatic Processing",
    description: "Our AI-powered system parses your order, checks driver availability, and assigns the optimal driver.",
    icon: "auto_awesome",
    detail: "",
    detailClass: "",
    bubbleClass: "whatsapp-bubble-left bg-[#e6f7f4] border border-secondary-container/50",
    showIcon: true,
    numberBg: "bg-secondary",
  },
  {
    number: 3,
    title: "Real-time Tracking",
    description: "Get live updates on delivery status directly in your WhatsApp chat, from pickup to drop-off.",
    icon: "map",
    detail: "",
    detailClass: "",
    bubbleClass: "whatsapp-bubble-right bg-[#e8f4fd] border border-tertiary-container/50",
    showIcon: true,
    numberBg: "bg-tertiary",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-container-padding bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-background mt-2">
            Simple WhatsApp-Based Workflow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="mb-stack-md flex justify-center md:justify-start">
                <div className={`${step.bubbleClass} p-6 rounded-2xl shadow-md w-full max-w-[280px]`}>
                  <div className={`${step.numberBg} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4`}>
                    {step.number}
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-2">{step.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{step.description}</p>

                  {step.detail && step.detail !== "" ? (
                    <div className={`mt-4 flex items-center gap-2 text-sm ${step.detailClass}`}>
                      <span className="material-symbols-outlined">{step.icon}</span>
                      {step.detail}
                    </div>
                  ) : (
                    <>
                      {step.showIcon && (
                        <div className="mt-4 flex items-center gap-2 text-sm">
                          <span className="material-symbols-outlined">{step.icon}</span>
                          <span className="text-on-surface-variant">AI-powered automation</span>
                        </div>
                      )}
                    </>
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
