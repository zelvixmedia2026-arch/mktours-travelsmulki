
import { Compass, ArrowUpRight } from "lucide-react";

export default function Destinations() {
  return (
    <section className="mk-destinations" id="destinations">
      <div className="mk-coming-soon">

        <div className="mk-coming-icon">
          <Compass size={34} strokeWidth={1.3} />
        </div>

        <span className="mk-section-label">
          SOMETHING EXCITING IS ON THE WAY
        </span>

        <h2>
          New Destinations.
          <br />
          <span>New Adventures.</span>
        </h2>

        <p>
          We're preparing exciting travel experiences
          and destinations for your next journey.
          Stay tuned for what's coming next.
        </p>

        <div className="mk-coming-line">
          <span />
          <small>DESTINATIONS COMING SOON</small>
          <span />
        </div>

        <a href="#contact" className="mk-coming-btn">
          Plan Your Journey
          <ArrowUpRight size={18} />
        </a>

      </div>
    </section>
  );
}
