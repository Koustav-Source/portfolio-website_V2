import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Shield, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenAdmin: () => void;
  onOpenResume: () => void;
}

export function Navbar({ onOpenAdmin, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Engineering', href: '#engineering' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-[#0c0d0e]/90 backdrop-blur-md border-[#222326] shadow-2xl py-3' 
        : 'bg-[#0c0d0e]/60 backdrop-blur-sm border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#18191c] border border-[#2d2e33] flex items-center justify-center text-[#c29b38] group-hover:border-[#c29b38]/50 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-[#ededed] group-hover:text-white transition-colors">
              Koustav Dey
            </span>
            <span className="text-[10px] text-[#9a9b9f] tracking-wider uppercase font-mono">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#131417]/80 border border-[#222326] px-3 py-1.5 rounded-full shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1 text-xs font-medium text-[#9a9b9f] hover:text-[#ededed] hover:bg-[#1c1d21] rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#ededed] bg-[#18191c] hover:bg-[#222326] border border-[#2d2e33] rounded-md transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#c29b38]" />
            <span>Resume</span>
          </button>
          <button
            onClick={onOpenAdmin}
            title="Private Admin Panel"
            className="flex items-center justify-center w-8 h-8 text-[#9a9b9f] hover:text-[#ededed] bg-[#18191c] hover:bg-[#222326] border border-[#2d2e33] rounded-md transition-all"
          >
            <Shield className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenAdmin}
            className="p-2 text-[#9a9b9f] hover:text-white bg-[#18191c] border border-[#2d2e33] rounded-md"
          >
            <Shield className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#ededed] bg-[#18191c] border border-[#2d2e33] rounded-md"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-[#0c0d0e] border-b border-[#222326] px-4 py-4 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#9a9b9f] hover:text-[#ededed] hover:bg-[#18191c] rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#222326] flex gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium text-[#ededed] bg-[#18191c] border border-[#2d2e33] rounded-md"
            >
              <FileText className="w-4 h-4 text-[#c29b38]" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
