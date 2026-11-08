import {
  Plane,
  MapPinned,
  Route,
  Palmtree,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Airport & Railway Transfers",
    description:
      "24/7 pick-up and drop services for Mangalore International Airport and local railway stations.",
    icon: Plane,
    tag: "24/7 TRANSFERS"
  },
  {
    number: "02",
    title: "Local Sightseeing",
    description:
      "Full-day or half-day city cab rentals to explore Mangalore's beaches, temples and landmarks.",
    icon: MapPinned,
    tag: "EXPLORE THE CITY"
  },
  {
    number: "03",
    title: "Outstation Trips",
    description:
      "Intercity and long-distance travel to destinations like Mysore, Coorg, Chikmagalur, Bangalore and Goa.",
    icon: Route,
    tag: "TRAVEL BEYOND"
  },
  {
    number: "04",
    title: "Customized Tour Packages",
    description:
      "Customized holiday itineraries, coastal Karnataka tours, temple tours and honeymoon packages.",
    icon: Palmtree,
    tag: "YOUR OWN JOURNEY"
  }
];

export default function Services() {
  return (
    <section className="mk-services" id="services">

      {/* Background elements that the glass will blur */}
      <div className="services-glow"></div>
      <div className="services-grid-bg"></div>

      <div className="services-container">

        {/* SECTION HEADING */}
        <div className="services-heading reveal reveal-up">
          <div className="services-eyebrow">
            <span></span>
            WHAT WE OFFER
            <span></span>
          </div>

          <h2>
            Travel made
            <em> effortless.</em>
          </h2>

          <p>
            From quick airport transfers to memorable holiday
            journeys, discover travel services designed around you.
          </p>
        </div>

        {/* SERVICE CARDS - Glassmorphism Applied via CSS */}
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delayClass = `reveal-delay-${index + 1}`;

            return (
              <article 
                className={`service-card glass-effect reveal reveal-up ${delayClass}`} 
                key={service.number}
              >
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>
                  <span className="service-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                </div>

                <div className="service-card-content">
                  <span className="service-tag">
                    {service.tag}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-card-bottom">
                  <a href="#contact" aria-label={`Enquire about ${service.title}`}>
                    Enquire Now
                    <ArrowUpRight size={18} />
                  </a>
                  <span className="service-bottom-line"></span>
                </div>

                {/* Optional: Adds a subtle internal glow to the glass */}
                <div className="service-card-glow"></div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM STRIP */}
        <div className="services-bottom reveal reveal-up">
          <span>YOUR DESTINATION. OUR COMMITMENT.</span>
          <a href="#contact">
            Plan Your Journey
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>

    </section>
  );
}