import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Experience & Achievements", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-xl border-b border-white/10 nav-enter">
      {/* Logo / Monogram */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-7 h-7 bg-orange-500 rounded flex items-center justify-center transition-transform group-hover:scale-105">
          <span className="font-mono text-black font-bold text-sm tracking-tighter">S</span>
        </div>
        <span className="font-playfair italic text-white text-lg font-normal tracking-tight">Shiva Sharma</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-full px-2 py-1">
        {navItems.map((item) => {
          const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? "bg-white text-black font-semibold"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Action Button (Desktop) */}
      <a
        href="https://github.com/neo0007777"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-5 py-2 rounded-full border border-white/15 transition-all hover:border-white/30"
      >
        GitHub
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden">
          <div className="flex flex-col p-5 gap-2">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive ? "bg-white/15 text-white font-medium" : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://github.com/neo0007777"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white font-medium px-4 py-2.5 rounded-lg transition-all text-center text-sm mt-2"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
