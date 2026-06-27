import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: "home", label: "Home", to: "/", isRoute: true },
  { icon: "description", label: "How It Works", href: "#how-it-works" },
  { icon: "group", label: "Who It's For", href: "#who-its-for" },
  { icon: "work", label: "Features", href: "#features" },
  { icon: "contact_support", label: "Get Started", to: "/contact", isRoute: true },
];

export default function BottomNav() {
  const location = useLocation();

  const handleHashClick = (e, href) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      window.location.hash = "";
      window.location.href = "/";
      setTimeout(() => {
        const id = href.slice(1);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 pb-[env(safe-area-inset-bottom)] bg-surface-container-lowest dark:bg-on-background border-t border-outline-variant dark:border-outline shadow-md">
      <div className="flex justify-around items-center h-16 w-full px-gutter">
        {navItems.map((item) =>
          item.isRoute ? (
            <Link
              key={item.label}
              to={item.to}
              className="flex flex-col items-center justify-center px-4 py-2 text-sm font-medium"
            >
              <span className="material-symbols-outlined mb-1">
                {item.icon}
              </span>
              <span className="truncate w-[6rem] text-center">{item.label}</span>
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleHashClick(e, item.href)}
              className="flex flex-col items-center justify-center px-4 py-2 text-sm font-medium"
            >
              <span className="material-symbols-outlined mb-1">
                {item.icon}
              </span>
              <span className="truncate w-[6rem] text-center">{item.label}</span>
            </a>
          )
        )}
      </div>
    </nav>
  );
}
