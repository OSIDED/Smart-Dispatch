const companyLinks = ["About Us", "Pricing", "Careers", "Contact"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="bg-on-background text-surface py-16 px-container-padding">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-stack-sm mb-stack-md">
            <span className="material-symbols-outlined text-primary-fixed">
              local_shipping
            </span>
            <span className="font-headline-md text-headline-md font-bold text-primary-fixed">
              Smart Dispatch
            </span>
          </div>
          <p className="text-surface-variant max-w-sm">
            Making global logistics as easy as sending a text message. Reliable,
            fast, and always in your pocket.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h5 className="font-bold mb-stack-md text-surface-bright">Company</h5>
          <ul className="space-y-stack-sm text-surface-variant">
            {companyLinks.map((link) => (
              <li key={link}>
                <a
                  className="hover:text-primary-fixed transition-colors"
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h5 className="font-bold mb-stack-md text-surface-bright">Legal</h5>
          <ul className="space-y-stack-sm text-surface-variant">
            {legalLinks.map((link) => (
              <li key={link}>
                <a
                  className="hover:text-primary-fixed transition-colors"
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-xl mx-auto mt-16 pt-8 border-t border-outline/30 text-surface-variant text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024 LogisticsFlow Inc. All rights reserved.</p>
        <div className="flex gap-stack-md">
          {["public", "alternate_email"].map((icon) => (
            <a
              key={icon}
              className="w-8 h-8 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-fixed/20 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-xs">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
