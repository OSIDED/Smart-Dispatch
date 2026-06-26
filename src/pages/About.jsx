import Button from "../components/Button";

export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="font-headline-lg text-headline-lg text-on-background mb-6">
              About Smart Dispatch
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Revolutionizing logistics automation for businesses across Africa
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="font-headline-md text-headline-md text-on-background">
                Our Mission
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                To help businesses automate delivery operations through intelligent
                WhatsApp-based dispatch, eliminating manual coordination and
                reducing operational overhead.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="font-headline-md text-headline-md text-on-background">
                Our Vision
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                To become the operating system for delivery logistics across
                Africa, powering seamless commerce through reliable, affordable,
                and accessible delivery services.
              </p>
            </div>
          </div>

          {/* How We Help */}
          <div className="space-y-12">
            <h2 className="font-headline-md text-headline-md text-on-background">
              How We Help Businesses
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant">
                <h3 className="font-headline-md text-headline-md mb-2">For Restaurants & Food Services</h3>
                <p className="text-body-md text-on-surface-variant">
                  Automatically dispatch drivers for food orders received via
                  WhatsApp, phone, or other channels. Reduce delivery delays and
                  improve customer satisfaction.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant">
                <h3 className="font-headline-md text-headline-md mb-2">For Retail & E-commerce</h3>
                <p className="text-body-md text-on-surface-variant">
                  Streamline last-mile delivery for online orders. Track
                  shipments in real-time and provide customers with accurate
                  delivery estimates.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant">
                <h3 className="font-headline-md text-headline-md mb-2">For Healthcare & Pharmacies</h3>
                <p className="text-body-md text-on-surface-variant">
                  Ensure timely delivery of medications and medical supplies with
                  priority handling and temperature-controlled options.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant">
                <h3 className="font-headline-md text-headline-md mb-2">For Manufacturing & Distribution</h3>
                <p className="text-body-md text-on-surface-variant">
                  Manage complex supply chain deliveries with optimized routing
                  and real-time visibility into shipment status.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-12">
            <h2 className="font-headline-md text-headline-md text-on-background">
              Why Choose Smart Dispatch
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    automation
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md">Fully Automated</h3>
                  <p className="text-body-md text-on-surface-variant">
                    From order receipt to driver assignment and tracking -
                    everything happens automatically through our intelligent
                    dispatch system.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    smart_toy
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md">AI-Powered</h3>
                  <p className="text-body-md text-on-surface-variant">
                    Advanced algorithms optimize routing, predict delivery times,
                    and continuously improve dispatch efficiency.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    security
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md">Secure & Reliable</h3>
                  <p className="text-body-md text-on-surface-variant">
                    Enterprise-grade security with 99.9% uptime guarantee and
                    GDPR-compliant data protection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-12 border-t border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-on-background mb-6">
              Ready to transform your delivery operations?
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-6 max-w-2xl mx-auto">
              Join the growing number of businesses streamlining their logistics
              with Smart Dispatch.
            </p>
            <Button as="a" href="#">
              Request Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}