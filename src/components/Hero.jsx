
import {
  ArrowRight,
  ArrowUpRight,
  MapPin
} from "lucide-react";

export default function Hero() {
  return (
    <section className="mk-hero" id="home">

      {/* Background Image */}
      <div className="mk-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2200&q=90"
          alt="Premium Mercedes-Benz luxury car"
        />
      </div>

      <div className="mk-hero-overlay" />

      {/* Navigation */}
      <header className="mk-header">

        {/* <a href="#home" className="mk-brand">
          <span className="mk-brand-symbol">MK</span>
          <span className="mk-brand-name">
            TOURS & TRAVELS
          </span>
        </a> */}

        <nav className="mk-nav">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#fleet">Fleet</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="mk-nav-cta">
          Book Now
          <ArrowRight size={16} />
        </a>

      </header>

      {/* Hero Content */}
      <div className="mk-hero-content">

        <div className="mk-location">
          <MapPin size={17} />
          <span>MULKI · MANGALORE</span>
        </div>

        <div className="mk-overline">
          TRAVEL IN COMFORT. ARRIVE IN STYLE.
        </div>

        <h1>
          Every Journey
          <br />
          Deserves <span>Excellence.</span>
        </h1>

        <p className="mk-description">
          Experience comfortable, reliable and personalised
          travel with MK Tours and Travels. Wherever you're
          headed, let us take you there.
        </p>

        <div className="mk-buttons">

          <a href="#contact" className="mk-book-btn">
            Book Your Journey
            <ArrowUpRight size={19} />
          </a>

          <a href="#fleet" className="mk-fleet-btn">
            Explore Our Fleet
          </a>

        </div>

      </div>

    </section>
  );
}
