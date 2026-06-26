const variants = {
  primary: "bg-primary text-on-primary hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl",
  secondary: "bg-surface-container-lowest text-primary border border-outline-variant hover:bg-surface-container-low",
};

const sizes = {
  sm: "px-4 py-2 rounded-lg text-sm",
  md: "px-6 py-3 rounded-lg text-base",
  lg: "px-10 py-4 rounded-xl text-lg",
  xl: "px-12 py-5 rounded-full text-xl",
};

export default function Button({ variant = "primary", size = "md", className = "", children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center font-bold transition-all ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
