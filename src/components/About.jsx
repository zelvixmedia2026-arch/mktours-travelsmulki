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

      <div className="about-container centered-about">

        {/* RIGHT CONTENT - Now centered entirely */}
        <div className="about-content">

          <div className="about-eyebrow">
            <span></span>
            ABOUT OUR COMPANY
          </div>

          <h2>
            More than just a journey.<br />
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