export default function Roadmap() {
  const versions = [
    {
      version: "Version 1",
      title: "WhatsApp Dispatch",
      description: "Core dispatch functionality via WhatsApp",
      features: [
        "Automatic Driver Assignment",
        "Driver Management",
        "Basic Order Processing"
      ],
      status: "available"
    },
    {
      version: "Version 2",
      title: "Restaurant Dashboard",
      description: "Self-service tools for restaurant management",
      features: [
        "Restaurant Dashboard",
        "Authentication System",
        "Business Self-Onboarding"
      ],
      status: "coming"
    },
    {
      version: "Version 3",
      title: "Driver Mobile App",
      description: "Native mobile application for drivers",
      features: [
        "Driver Mobile Application",
        "GPS Tracking",
        "Push Notifications"
      ],
      status: "planned"
    },
    {
      version: "Version 4",
      title: "AI Dispatch Optimization",
      description: "Advanced AI-powered optimization features",
      features: [
        "AI Dispatch Optimization",
        "Fleet Management",
        "Advanced Analytics"
      ],
      status: "future"
    }
  ];

  return (
    <section className="py-24 px-container-padding bg-background">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest">
            Product Roadmap
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-background mt-2">
            Our Vision for the Future
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {versions.map((version) => (
            <div key={version.version} className="border border-outline-variant rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 flex-shrink-0 ${version.status === 'available' ? 'bg-primary/10' : version.status === 'coming' ? 'bg-secondary/10' : version.status === 'planned' ? 'bg-tertiary/10' : 'bg-surface-container-lowest'} rounded-lg flex items-center justify-center`}>
                  <span className={`material-symbols-outlined ${version.status === 'available' ? 'text-primary' : version.status === 'coming' ? 'text-secondary' : version.status === 'planned' ? 'text-tertiary' : 'text-on-surface-variant'}`}>
                    {/* Different icons based on status */}
                    {version.status === 'available' ? 'check_circle' : 
                     version.status === 'coming' ? 'construction' : 
                     version.status === 'planned' ? 'psychology' : 
                     'auto_awesome'}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md mb-1">{version.version}</h3>
                  <p className="text-body-md text-on-surface-variant">{version.title}</p>
                </div>
              </div>
              
              <p className="text-body-md text-on-surface-variant mb-4">{version.description}</p>
              
              {version.status !== 'future' && (
                <div className="space-y-2 mb-4">
                  <h4 className="font-label-sm text-label-sm mb-1 text-on-background">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-on-surface-variant">
                    {version.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {version.status === 'available' && (
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Available Now
                </span>
              )}
              {version.status === 'coming' && (
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                  Coming Soon
                </span>
              )}
              {version.status === 'planned' && (
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-tertiary/10 text-tertiary rounded-full">
                  Planned
                </span>
              )}
              {version.status === 'future' && (
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-surface-container-lowest/10 text-on-surface-variant rounded-full">
                  Future Vision
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}