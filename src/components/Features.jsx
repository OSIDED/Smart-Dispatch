const features = [
  {
    icon: "assignment",
    iconColor: "text-primary",
    bgColor: "bg-primary-container/20",
    title: "Automatic Driver Assignment",
    description:
      "Our intelligent dispatch system automatically assigns the most suitable available driver based on location, capacity, and delivery requirements.",
  },
  {
    icon: "delivery_dining",
    iconColor: "text-secondary",
    bgColor: "bg-secondary-container/20",
    title: "Delivery Management",
    description:
      "Manage all your deliveries from a single interface. Track progress, handle exceptions, and communicate with drivers and customers.",
  },
  {
    icon: "track_changes",
    iconColor: "text-tertiary",
    bgColor: "bg-tertiary-container/20",
    title: "Order Tracking",
    description:
      "Real-time tracking updates for both businesses and customers. Know exactly where every delivery is at any moment.",
  },
  {
    icon: "analytics",
    iconColor: "text-primary",
    bgColor: "bg-primary-container/20",
    title: "Operational Analytics",
    description:
      "Get insights into delivery performance, driver efficiency, and customer satisfaction to optimize your operations.",
  },
  {
    icon: "whatsapp",
    iconColor: "text-secondary",
    bgColor: "bg-secondary-container/20",
    title: "WhatsApp Integration",
    description:
      "Seamless WhatsApp communication for orders, updates, and notifications. No new apps to learn or install.",
  },
  {
    icon: "psychology",
    iconColor: "text-tertiary",
    bgColor: "bg-tertiary-container/20",
    title: "AI Order Parsing",
    description:
      "Coming Soon: Advanced AI that understands natural language orders and converts them into actionable delivery requests.",
  },
];

const stats = [
  {
    icon: "speed",
    iconColor: "text-primary",
    value: "15m",
    label: "Avg. Assignment Time",
    dark: false,
  },
  {
    icon: "verified_user",
    iconColor: "text-secondary",
    value: "99.8%",
    label: "Order Accuracy",
    dark: false,
  },
  {
    icon: "group",
    iconColor: "text-tertiary",
    value: "50k+",
    label: "Deliveries Processed",
    dark: false,
  },
  {
    icon: "thumb_up",
    iconColor: "",
    value: "4.9/5",
    label: "Customer Satisfaction",
    dark: true,
  },
];

export default function Features() {
  return (
    <section className="py-24 px-container-padding bg-background relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Feature List */}
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-stack-md">
              Built for Reliable Logistics Operations
            </h2>
            <div className="space-y-stack-lg">
              {features.map((f) => (
                <div key={f.title} className="flex gap-stack-md">
                  <div className={`${f.bgColor} p-3 rounded-lg self-start`}>
                    <span
                      className={`material-symbols-outlined ${f.iconColor}`}
                    >
                      {f.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md">
                      {f.title}
                    </h4>
                    <p className="text-body-md text-on-surface-variant">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-stack-md">
            <div className="space-y-stack-md pt-12">
              {stats.slice(0, 2).map((s) => (
                <div
                  key={s.label}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant"
                >
                  <span
                    className={`material-symbols-outlined ${s.iconColor} mb-2`}
                  >
                    {s.icon}
                  </span>
                  <div className="text-headline-lg font-bold">{s.value}</div>
                  <div className="text-label-sm text-on-surface-variant">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-stack-md">
              {stats.slice(2).map((s) => (
                <div
                  key={s.label}
                  className={
                    s.dark
                      ? "bg-gradient-to-br from-primary to-primary/90 text-white p-6 rounded-2xl shadow-lg border border-primary"
                      : "bg-white p-6 rounded-2xl shadow-sm border border-outline-variant"
                  }
                >
                  <span
                    className={`material-symbols-outlined ${s.iconColor} mb-2`}
                  >
                    {s.icon}
                  </span>
                  <div className="text-headline-lg font-bold">{s.value}</div>
                  <div
                    className={`text-label-sm ${s.dark ? "opacity-80" : "text-on-surface-variant"}`}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
