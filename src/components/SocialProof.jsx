export default function SocialProof() {
  return (
    <section className="py-16 px-container-padding bg-surface-container-low border-y border-outline-variant">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-on-surface-variant font-medium mb-stack-lg">
          Trusted by leading restaurants, retailers, and businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {[95, 87, 92, 88, 90].map((value, i) => (
            <div
              key={i}
              className="h-8 bg-on-surface-variant/20 rounded"
              style={{ width: `${value * 3}px` }}
              title={[
                "On-time Delivery Rate",
                "Order Accuracy",
                "Customer Satisfaction",
                "Driver Retention",
                "Monthly Growth"
              ][i]}
            />
          ))}
        </div>
        <div className="mt-6 text-sm text-on-surface-variant flex justify-center gap-8 flex-wrap">
          <span>On-time Delivery Rate</span>
          <span>Order Accuracy</span>
          <span>Customer Satisfaction</span>
          <span>Driver Retention</span>
          <span>Monthly Growth</span>
        </div>
      </div>
    </section>
  );
}
