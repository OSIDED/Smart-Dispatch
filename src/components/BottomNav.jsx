const navItems = [
  { icon: "home", label: "Home", active: true },
  { icon: "package_2", label: "Orders", active: false },
  { icon: "chat", label: "Support", active: false },
  { icon: "person", label: "Profile", active: false },
];

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest dark:bg-on-background border-t border-outline-variant dark:border-outline shadow-md">
      <div className="flex justify-around items-center h-16 w-full px-gutter">
        {navItems.map((item) =>
          item.active ? (
            <a
              key={item.label}
              className="flex flex-col items-center justify-center bg-primary-container dark:bg-on-primary-fixed-variant text-on-primary-container dark:text-primary-fixed rounded-full px-4 py-1"
              href="#"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label-sm text-label-sm">{item.label}</span>
            </a>
          ) : (
            <a
              key={item.label}
              className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label-sm text-label-sm">{item.label}</span>
            </a>
          )
        )}
      </div>
    </nav>
  );
}
