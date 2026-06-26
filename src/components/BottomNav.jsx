import { useLocation } from "react-router-dom";

const navItems = [
  { icon: "home", label: "Home", href: "/" },
  { icon: "description", label: "How It Works", href: "/#how-it-works" },
  { icon: "work", label: "Features", href: "/#features" },
  { icon: "contact_support", label: "Get Started", href: "/contact" },
];

export default function BottomNav() {
  const location = useLocation();

  const handleClick = (href) => {
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        const id = href.slice(2);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 pb-[env(safe-area-inset-bottom)] bg-surface-container-lowest dark:bg-on-background border-t border-outline-variant dark:border-outline shadow-md">
      <div className="flex justify-around items-center h-16 w-full px-gutter">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => handleClick(item.href)}
            className="flex flex-col items-center justify-center px-4 py-2 text-sm font-medium"
          >
            <span className="material-symbols-outlined mb-1">
              {item.icon}
            </span>
            <span className="truncate w-[6rem] text-center">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
