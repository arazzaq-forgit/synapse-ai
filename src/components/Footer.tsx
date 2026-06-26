import { IconLogo } from "./Icons";

const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Developers: ["Docs", "API Reference", "Status", "GitHub"],
  Company: ["About", "Blog", "Careers", "Contact"],
};

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative border-t border-border/60 px-6 py-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4" aria-label="Synapse AI Home">
              <IconLogo size={28} />
              <span className="font-display font-600 text-base text-text">
                Synapse<span className="text-accent">AI</span>
              </span>
            </a>
            <p className="text-text-faint text-sm max-w-xs leading-relaxed">
              Enterprise-grade neural orchestration for modern data
              pipelines. Built for scale, engineered for speed.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <h3 className="font-display font-600 text-sm text-text mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-faint hover:text-text-dim text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="section-divider mb-8" aria-hidden="true" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-text-faint text-xs">
          <p>&copy; {new Date().getFullYear()} Synapse AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-text-dim transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-text-dim transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>

        <p className="text-center text-text-faint text-xs mt-6">
          Built by{" "}
          <span className="text-text-dim font-medium">
            Mohammed Abdul Razzaq
          </span>
        </p>
      </div>
    </footer>
  );
}
