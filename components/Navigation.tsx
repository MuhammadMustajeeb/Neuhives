"use client";

import { Button } from "./ui/button";
import { Hexagon, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Outcomes", href: "#outcomes" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Hexagon className="h-8 w-8 text-blue-500" fill="currentColor" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-950 rounded-full" />
              </div>
            </div>
            <span className="text-white tracking-tight">Neuhives</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              size="sm" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Book a Call
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}