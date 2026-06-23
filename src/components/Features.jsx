const features = [
  {
    icon: "notifications_active",
    iconColor: "text-primary",
    bgColor: "bg-primary-container/20",
    title: "Real-time alerts",
    description:
      "Never miss an update. We ping you for every milestone from pickup to final drop-off.",
  },
  {
    icon: "payments",
    iconColor: "text-secondary",
    bgColor: "bg-secondary-container/20",
    title: "Secure payments via chat",
    description:
      "Pay instantly using integrated payment links. Secure, fast, and fully documented.",
  },
  {
    icon: "smart_toy",
    iconColor: "text-tertiary",
    bgColor: "bg-tertiary-container/20",
    title: "24/7 automated support",
    description:
      "Our AI-powered assistant is always ready to answer questions or resolve issues instantly.",
  },
];

const stats = [
  { icon: "speed", iconColor: "text-primary", value: "15m", label: "Avg. Pickup Time", dark: false },
  { icon: "verified_user", iconColor: "text-secondary", value: "100%", label: "Insured Goods", dark: false },
  { icon: "group", iconColor: "text-tertiary", value: "50k+", label: "Deliveries Done", dark: false },
  { icon: "thumb_up", iconColor: "", value: "4.9/5", label: "User Rating", dark: true },
];

export default function Features() {
  return (
    <section className="py-24 px-container-padding bg-background relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Feature List */}
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-stack-md">
              Built for Speed and Reliability
            </h2>
            <div className="space-y-stack-lg">
              {features.map((f) => (
                <div key={f.title} className="flex gap-stack-md">
                  <div className={`${f.bgColor} p-3 rounded-lg self-start`}>
                    <span className={`material-symbols-outlined ${f.iconColor}`}>{f.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md">{f.title}</h4>
                    <p className="text-body-md text-on-surface-variant">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-stack-md">
            <div className="space-y-stack-md pt-12">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label} className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant">
                  <span className={`material-symbols-outlined ${s.iconColor} mb-2`}>{s.icon}</span>
                  <div className="text-headline-lg font-bold">{s.value}</div>
                  <div className="text-label-sm text-on-surface-variant">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="space-y-stack-md">
              {stats.slice(2).map((s) => (
                <div
                  key={s.label}
                  className={
                    s.dark
                      ? "bg-primary text-white p-6 rounded-2xl shadow-lg border border-primary"
                      : "bg-white p-6 rounded-2xl shadow-sm border border-outline-variant"
                  }
                >
                  <span className={`material-symbols-outlined ${s.iconColor} mb-2`}>{s.icon}</span>
                  <div className="text-headline-lg font-bold">{s.value}</div>
                  <div className={`text-label-sm ${s.dark ? "opacity-80" : "text-on-surface-variant"}`}>
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
