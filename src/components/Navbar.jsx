import { useState } from "react";
// 1. Replaced "Instagram" with "Globe"
import { Menu, X, ArrowUpRight, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Destinations", href: "#destinations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="main-header">
      
      {/* 1. TOP CONTACT BAR */}
      <div className="top-contact-bar">
        <div className="top-bar-inner">
          <div className="top-welcome">
            <span>Welcome to MK Tours and Travels</span>
            {/* 2. Replaced the component here */}
            <Globe size={16} className="top-social-icon" /> 
          </div>

          <div className="top-contact-info">
            <a href="#" className="top-info-item">
              <MapPin size={14} /> <span>Mulki, Karnataka</span>
            </a>
            <a href="tel:+91998664008" className="top-info-item">
              <Phone size={14} /> <span>+91 99866 64008</span>
            </a>
            <a href="mailto:info@mktours.com" className="top-info-item">
              <Mail size={14} /> <span>info@mktours.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. FLOATING NAVBAR PILL */}
      <div className="floating-nav-wrapper">
        <div className="floating-nav">
          
          <a href="#home" className="brand">
            <div className="brand-text">
              <span>MK TRAVELS</span>
              
            </div>
          </a>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta desktop-cta">
            Plan Your Trip
            <ArrowUpRight size={17} />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

    </header>
  );
}