import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

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
          <Link
            to="/"
            className="text-primary dark:text-primary-fixed font-medium"
          >
            Home
          </Link>
          <a
            href="#how-it-works"
            className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
          >
            How it Works
          </a>
          <a
            href="#who-its-for"
            className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
          >
            Who It's For
          </a>
          <a
            href="#features"
            className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
          >
            Features
          </a>
          <Link
            to="/about"
            className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
          >
            About
          </Link>
          <Button size="sm">Request Early Access</Button>
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
          <Link
            to="/"
            className="text-primary font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <a
            href="#how-it-works"
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            How it Works
          </a>
          <a
            href="#who-its-for"
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Who It's For
          </a>
          <a
            href="#features"
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <Link
            to="/about"
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Button className="w-full">Request Early Access</Button>
        </div>
      )}
    </header>
  );
}
