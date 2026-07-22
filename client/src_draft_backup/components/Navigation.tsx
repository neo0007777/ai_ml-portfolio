import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Experience & Achievements", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 bg-black/50 backdrop-blur-md border-b border-white/10">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
          <span className="font-playfair italic text-white font-bold text-lg">A</span>
        </div>
        <span className="font-playfair italic text-white text-xl hidden sm:inline">Portfolio</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Resume Button (Desktop) */}
      <a
        href="#"
        className="hidden md:block bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30"
      >
        Resume
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 md:hidden">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#"
              className="bg-[#e8702a] hover:bg-[#d2611f] text-white font-semibold px-4 py-2 rounded-lg transition-all text-center mt-2"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
