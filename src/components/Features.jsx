const features = [
  {
    icon: "electric_rickshaw",
    iconColor: "text-primary",
    bgColor: "bg-primary-container/20",
    title: "Faster Driver Assignment",
    description:
      "Automatically find and assign an available driver within seconds.",
  },
  {
    icon: "call_end",
    iconColor: "text-secondary",
    bgColor: "bg-secondary-container/20",
    title: "Less Manual Coordination",
    description:
      "Reduce constant phone calls and WhatsApp messages between staff and riders.",
  },
  {
    icon: "sentiment_satisfied",
    iconColor: "text-tertiary",
    bgColor: "bg-tertiary-container/20",
    title: "Better Customer Experience",
    description:
      "Customers receive updates without staff manually sending messages.",
  },
  {
    icon: "account_tree",
    iconColor: "text-primary",
    bgColor: "bg-primary-container/20",
    title: "Organized Delivery Operations",
    description:
      "Orders, drivers, and delivery statuses are managed in one system instead of scattered across chats and calls.",
  },
  {
    icon: "chat",
    iconColor: "text-secondary",
    bgColor: "bg-secondary-container/20",
    title: "Built Around WhatsApp",
    description:
      "Businesses continue using WhatsApp, eliminating the need to learn a completely new ordering system.",
  },
  {
    icon: "trending_up",
    iconColor: "text-tertiary",
    bgColor: "bg-tertiary-container/20",
    title: "Designed to Scale",
    description:
      "Smart Dispatch starts with simple WhatsApp order processing today and is designed to grow into a complete delivery management platform with dashboards, mobile applications, AI automation, and analytics.",
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
              Why Businesses Choose Smart Dispatch
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
