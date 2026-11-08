
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "91996469693";
const PHONE_NUMBER = "+91 9449105402";
const EMAIL_ADDRESS = "mkthsf32@gmail.com";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Airport & Railway Transfers",
  "Local Sightseeing",
  "Outstation Trips",
  "Customized Tour Packages",
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
      stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18"
      fill="currentColor">
      <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V21h3.4Z" />
    </svg>
  );
}

export default function Footer() {
  const whatsappLink = WHATSAPP_NUMBER.includes("X")
    ? "#contact"
    : `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="mk-footer" id="footer">
      <div className="mk-footer-container">

        <div className="mk-footer-cta">
          <div>
            <span className="mk-section-label">
              YOUR JOURNEY BEGINS HERE
            </span>

            <h2>
              Ready to Hit
              <br />
              the <span>Road?</span>
            </h2>
          </div>

          <a href="#contact" className="mk-footer-cta-btn">
            Plan Your Journey
            <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="mk-footer-main">

          <div className="mk-footer-brand">
            <a href="#home" className="mk-footer-logo">
              <span className="mk-footer-logo-symbol">MK</span>
              <span>
                <strong>MK TOURS</strong>
                <small>&amp; TRAVELS</small>
              </span>
            </a>

            <p>
              Making every journey comfortable, convenient
              and memorable. Travel with confidence with
              MK Tours &amp; Travels.
            </p>

            <div className="mk-footer-socials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="mk-footer-column">
            <h3>Quick Links</h3>

            {quickLinks.map((link) => (
              <a key={link.label} href={link.href}>
                <ArrowRight size={13} />
                {link.label}
              </a>
            ))}
          </div>

          <div className="mk-footer-column">
            <h3>Our Services</h3>

            {services.map((service) => (
              <a key={service} href="#services">
                <ArrowRight size={13} />
                {service}
              </a>
            ))}
          </div>

          <div className="mk-footer-column mk-footer-contact">
            <h3>Get In Touch</h3>

            <div>
              <MapPin size={17} />
              <span>Mulki, Karnataka, India</span>
            </div>

            <div>
              <Phone size={17} />
              <a href={`tel:${PHONE_NUMBER}`}>
                {PHONE_NUMBER}
              </a>
            </div>

            <div>
              <Mail size={17} />
              <a href={`mailto:${EMAIL_ADDRESS}`}>
                {EMAIL_ADDRESS}
              </a>
            </div>

            <a
              className="mk-footer-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

        <div className="mk-footer-bottom">
          <p>
            © {new Date().getFullYear()} MK Tours &amp; Travels.
            All Rights Reserved.
          </p>

          <p className="mk-footer-credit">
            Designed &amp; Developed by{" "}
            <a
              href="https://zelvixmedia.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zelvix Media
            </a>
          </p>

          <a href="#home" className="mk-footer-back-top">
            Back to Top
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </footer>
  );
}
