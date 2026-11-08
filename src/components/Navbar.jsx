import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="brand">
          {/* <div className="brand-mark">MK</div> */}

          <div className="brand-text">
            <span>MK TOURS</span>
            <small>AND TRAVELS · MULKI</small>
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

        <a href="#contact" className="nav-cta">
          Plan Your Trip
          <ArrowUpRight size={17} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}