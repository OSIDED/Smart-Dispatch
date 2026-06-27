import Button from "./Button";

export default function CTA() {
  return (
    <section className="py-24 px-container-padding bg-primary/5">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center font-headline-lg text-headline-lg text-on-background mb-stack-md">
          Ready to Simplify Your Delivery Operations?
        </h2>
        <p className="text-center text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mx-auto">
          Whether you manage a restaurant, pharmacy, grocery store, or retail business, Smart Dispatch helps you spend less time coordinating deliveries and more time serving customers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button size="lg" className="flex-1 sm:max-w-xs">
            Request Early Access
          </Button>
          <Button variant="secondary" size="lg" className="flex-1 sm:max-w-xs">
            Book a Demo
          </Button>
        </div>
        <p className="text-center text-body-md text-on-surface-variant mt-8 max-w-xl mx-auto">
          We're currently onboarding early business partners. Join us and help shape the future of delivery operations.
        </p>
      </div>
    </section>
  );
}
