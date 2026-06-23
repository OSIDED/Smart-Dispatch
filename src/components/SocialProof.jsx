export default function SocialProof() {
  return (
    <section className="py-16 px-container-padding bg-surface-container-low border-y border-outline-variant">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-on-surface-variant font-medium mb-stack-lg">
          Trusted by 500+ local businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {[24, 32, 28, 36, 24].map((w, i) => (
            <div
              key={i}
              className={`h-8 w-${w} bg-on-surface-variant/20 rounded`}
              style={{ width: `${w * 4}px` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
