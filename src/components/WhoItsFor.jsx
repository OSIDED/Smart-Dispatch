const categories = [
  {
    icon: "restaurant",
    title: "Restaurants",
    description: "Restaurants often receive orders from WhatsApp, phone calls, Instagram, and walk-in customers.",
    challenge: "Managing delivery riders manually can slow operations and increase mistakes.",
    solution: "Smart Dispatch automatically assigns available drivers, reducing delays and allowing staff to focus on preparing food instead of coordinating deliveries.",
  },
  {
    icon: "medication",
    title: "Pharmacies",
    description: "Pharmacies regularly deliver prescription medication, over-the-counter medicine, and medical supplies.",
    challenge: "Many pharmacies coordinate deliveries manually through phone calls.",
    solution: "Smart Dispatch helps organize deliveries, assign drivers faster, and improve customer communication.",
  },
  {
    icon: "storefront",
    title: "Grocery Stores",
    description: "Local grocery stores frequently offer same-day deliveries.",
    challenge: "Instead of calling multiple riders to find availability, there's a better way.",
    solution: "Smart Dispatch automates driver assignment and tracks delivery progress.",
  },
  {
    icon: "shopping_bag",
    title: "Retail Businesses",
    description: "Electronics stores, fashion shops, and other retailers often receive orders through social media or messaging platforms.",
    challenge: "Last-mile delivery coordination takes staff away from sales.",
    solution: "Smart Dispatch simplifies delivery coordination so staff can focus on sales instead of logistics.",
  },
  {
    icon: "local_florist",
    title: "Flower & Gift Shops",
    description: "Time-sensitive deliveries require quick driver assignment.",
    challenge: "Every minute counts when delivering perishable or special-occasion items.",
    solution: "Smart Dispatch helps businesses dispatch drivers quickly while keeping customers informed.",
  },
  {
    icon: "delivery_dining",
    title: "Any Business That Delivers",
    description: "If a business receives customer orders and uses delivery riders, Smart Dispatch can help.",
    challenge: "Manual delivery coordination is inefficient regardless of industry.",
    solution: "The platform is designed to simplify operations regardless of industry.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-24 px-container-padding bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest">
            Who It's For
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-background mt-2">
            Who Smart Dispatch Is For
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-4 max-w-2xl mx-auto">
            A delivery operations platform that serves businesses of all types.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary">
                  {cat.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background mb-3">
                {cat.title}
              </h3>
              <p className="text-body-md text-on-surface-variant mb-4">
                {cat.description}
              </p>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="material-symbols-outlined text-sm text-error flex-shrink-0 mt-0.5">error_outline</span>
                  <p className="text-body-sm text-on-surface-variant">
                    <span className="font-medium text-on-surface">Challenge:</span> {cat.challenge}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="material-symbols-outlined text-sm text-primary flex-shrink-0 mt-0.5">check_circle</span>
                  <p className="text-body-sm text-on-surface-variant">
                    <span className="font-medium text-primary">Solution:</span> {cat.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
