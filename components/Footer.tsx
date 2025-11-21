import { Hexagon, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Outcomes", href: "#outcomes" },
        { name: "Pricing", href: "#pricing" },
        { name: "Case Studies", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "AI SaaS Playbook", href: "#" },
        { name: "Outbound Guide", href: "#" },
        { name: "Growth Framework", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Hexagon className="h-8 w-8 text-blue-500" fill="currentColor" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-950 rounded-full" />
                </div>
              </div>
              <span className="text-white tracking-tight">Neuhives</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Pipeline-as-a-Service for AI SaaS. Systems that scale distribution, not hacks.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white mb-4 text-sm">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 Neuhives. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
