
import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Booking', href: '#booking', id: 'booking' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 group">
          <Utensils className={`w-8 h-8 ${isScrolled ? 'text-amber-600' : 'text-white'}`} />
          <span className={`text-2xl font-bold tracking-tight serif ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            LUMIÈRE
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-amber-600 ${
                activeSection === link.id 
                  ? 'text-amber-600' 
                  : isScrolled ? 'text-stone-600' : 'text-white/80'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => scrollToSection(e, '#booking')}
            className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
              isScrolled 
                ? 'bg-amber-600 text-white hover:bg-amber-700' 
                : 'bg-white text-stone-900 hover:bg-stone-100'
            }`}
          >
            Inquire Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-stone-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-lg font-medium tracking-widest uppercase ${
                activeSection === link.id ? 'text-amber-600' : 'text-stone-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => scrollToSection(e, '#booking')}
            className="bg-amber-600 text-white text-center py-4 rounded-xl font-bold"
          >
            Inquire Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
