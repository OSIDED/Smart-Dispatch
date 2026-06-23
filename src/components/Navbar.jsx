import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-surface dark:bg-on-background w-full top-0 sticky z-50 border-b border-outline-variant dark:border-outline">
      <nav className="flex justify-between items-center px-container-padding h-16 w-full max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-stack-sm">
          <span className="material-symbols-outlined text-primary dark:text-primary-fixed">
            local_shipping
          </span>
          <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
            Smart Dispatch
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-stack-lg">
          <a
            className="text-primary dark:text-primary-fixed font-medium"
            href="#"
          >
            Home
          </a>
          <a
            className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            How it Works
          </a>
          <a
            className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Features
          </a>
          <button className="bg-primary text-on-primary px-stack-md py-2 rounded-lg font-bold hover:scale-105 transition-transform active:scale-95">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-on-surface-variant">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant px-container-padding py-4 flex flex-col gap-4">
          <a
            className="text-primary font-medium"
            href="#"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
            onClick={() => setMenuOpen(false)}
          >
            How it Works
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <button className="bg-primary text-on-primary px-stack-md py-2 rounded-lg font-bold w-full">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
