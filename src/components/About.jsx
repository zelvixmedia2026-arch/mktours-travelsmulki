
import {
  ArrowUpRight,
  Compass,
  MapPin,
  ShieldCheck
} from "lucide-react";

export default function About() {
  return (
    <section className="mk-about" id="about">

      <div className="about-glow"></div>
      <div className="about-pattern"></div>

      <div className="about-container">

        {/* LEFT VISUAL */}
        <div className="about-visual">

          <div className="about-image-main">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=90"
              alt="Beautiful scenic travel landscape"
            />
            <div className="image-shade"></div>
          </div>

          <div className="about-image-small">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=90"
              alt="Mountain road travel"
            />
          </div>

          <div className="about-stamp">
            <span className="stamp-mk">MK</span>
            <span>YOUR JOURNEY</span>
            <span>OUR PRIORITY</span>
          </div>

          <div className="about-location">
            <MapPin size={14} />
            <span>MULKI, KARNATAKA</span>
          </div>

          <div className="about-orbit"></div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <div className="about-eyebrow">
            <span></span>
            ABOUT OUR COMPANY
          </div>

          <h2>
            More than just
            <br />
            a journey.
            <br />
            <em>A better way to travel.</em>
          </h2>

          <p className="about-description">
            At MK Tours and Travels, we believe every journey
            should be comfortable, convenient and memorable.
            Whether you're planning a short trip or a longer
            adventure, we're here to help you travel with ease.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <div className="feature-icon">
                <Compass size={21} />
              </div>
              <div>
                <h4>Thoughtful Travel Planning</h4>
                <p>Journeys planned around your travel needs.</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                <ShieldCheck size={21} />
              </div>
              <div>
                <h4>Comfort & Convenience</h4>
                <p>A smooth and convenient travel experience.</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                <MapPin size={21} />
              </div>
              <div>
                <h4>Local Travel Expertise</h4>
                <p>Explore destinations across Karnataka and beyond.</p>
              </div>
            </div>

          </div>

          <a href="#services" className="about-link">
            Discover Our Services
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>

      <div className="about-bottom-line"></div>

    </section>
  );
}
