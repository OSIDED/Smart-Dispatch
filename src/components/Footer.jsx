const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-on-background text-surface py-16 px-container-padding">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="sm:col-span-2">
          <div className="flex items-center gap-stack-sm mb-stack-md">
            <span className="material-symbols-outlined text-primary-fixed">
              logistics
            </span>
            <span className="font-headline-md text-headline-md font-bold text-primary-fixed">
              Smart Dispatch
            </span>
          </div>
          <p className="text-surface-variant max-w-sm">
            Automating delivery operations for businesses through intelligent WhatsApp-based dispatch.
            Reliable, scalable, and built for growth.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h5 className="font-bold mb-stack-md text-surface-bright">Company</h5>
          <ul className="space-y-stack-sm text-surface-variant">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="hover:text-primary-fixed transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="font-bold mb-stack-md text-surface-bright">Resources</h5>
          <ul className="space-y-stack-sm text-surface-variant">
            <li>
              <a className="hover:text-primary-fixed transition-colors" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-primary-fixed transition-colors" href="#">
                Documentation
              </a>
            </li>
            <li>
              <a className="hover:text-primary-fixed transition-colors" href="#">
                API Reference
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h5 className="font-bold mb-stack-md text-surface-bright">Legal</h5>
          <ul className="space-y-stack-sm text-surface-variant">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="hover:text-primary-fixed transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-xl mx-auto mt-16 pt-8 border-t border-outline/30 text-surface-variant text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 Smart Dispatch, Inc. All rights reserved.</p>
        <div className="flex gap-stack-md">
          <a className="w-8 h-8 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-fixed/20 transition-colors" href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-surface-variant" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a className="w-8 h-8 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-fixed/20 transition-colors" href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-surface-variant" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a className="w-8 h-8 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-fixed/20 transition-colors" href="#" aria-label="GitHub">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-surface-variant" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
