export default function CTA() {
  return (
    <section className="py-24 px-container-padding text-center">
      <div className="max-w-screen-md mx-auto">
        <h2 className="font-headline-lg text-headline-lg mb-stack-md">
          Ready to optimize your logistics?
        </h2>
        <p className="text-body-lg text-on-surface-variant mb-stack-lg">
          Join the thousands of businesses scaling their operations with WhatsApp-based logistics flow.
        </p>
        <button className="bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-stack-sm mx-auto">
          <span className="material-symbols-outlined">rocket_launch</span>
          Start Your First Delivery
        </button>
      </div>
    </section>
  );
}
