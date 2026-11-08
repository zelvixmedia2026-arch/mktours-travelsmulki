import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=90",
    overline: "DISCOVER THE BEAUTY OF EVERY JOURNEY",
    title: "Explore Beyond",
    highlight: "Boundaries.",
    description:
      "From peaceful landscapes to unforgettable destinations, discover more with MK Tours and Travels.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90",
    overline: "YOUR NEXT ADVENTURE STARTS HERE",
    title: "Chase New",
    highlight: "Horizons.",
    description:
      "Experience breathtaking mountain escapes and beautiful destinations with comfortable travel.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90",
    overline: "MAKE EVERY MILE MEMORABLE",
    title: "Travel More.",
    highlight: "Live More.",
    description:
      "Whether it's a family holiday or a weekend getaway, let us make your journey memorable.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="mk-hero" id="home">

      {/* Scenic Background Slideshow */}
      <div className="mk-hero-bg">
        {slides.map((item, index) => (
          <img
            key={item.image}
            src={item.image}
            alt={`Scenic travel destination ${index + 1}`}
            className={currentSlide === index ? "active" : ""}
          />
        ))}
      </div>

      <div className="mk-hero-overlay" />

      {/* Navigation */}
      <header className="mk-header">
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

      {/* Changing Hero Content */}
      <div className="mk-hero-content" key={currentSlide}>

        <div className="mk-location">
          <MapPin size={17} />
          <span>MULKI · MANGALORE</span>
        </div>

        <div className="mk-overline">
          {slide.overline}
        </div>

        <h1>
          {slide.title}
          <br />
          <span>{slide.highlight}</span>
        </h1>

        <p className="mk-description">
          {slide.description}
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