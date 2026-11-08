
import {
  CarFront,
  Clock3,
  MapPinned,
  Users,
  Route,
  Headset,
  ArrowUpRight
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Comfortable Travel",
    description:
      "Enjoy a comfortable journey with vehicle options suited to your travel requirements.",
    icon: CarFront,
    tag: "TRAVEL IN COMFORT"
  },
  {
    number: "02",
    title: "Convenient Pickups",
    description:
      "Plan airport, railway station and local pickups around your preferred schedule.",
    icon: Clock3,
    tag: "EASY TRANSFERS"
  },
  {
    number: "03",
    title: "Local Route Knowledge",
    description:
      "Explore Mangalore and nearby destinations with local travel guidance.",
    icon: MapPinned,
    tag: "KNOW THE ROUTE"
  },
  {
    number: "04",
    title: "Travel for Everyone",
    description:
      "Choose suitable travel arrangements for families, individuals and groups.",
    icon: Users,
    tag: "FAMILY & GROUPS"
  },
  {
    number: "05",
    title: "Flexible Travel Options",
    description:
      "From local sightseeing to outstation journeys, find an option for your trip.",
    icon: Route,
    tag: "YOUR JOURNEY"
  },
  {
    number: "06",
    title: "Personalised Assistance",
    description:
      "Get assistance with planning your journey and choosing suitable travel options.",
    icon: Headset,
    tag: "HERE TO HELP"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="mk-why" id="why-us">

      <div className="why-glow why-glow-one"></div>
      <div className="why-glow why-glow-two"></div>
      <div className="why-pattern"></div>

      <div className="why-container">

        {/* HEADING */}
        <div className="why-heading">

          <div className="why-eyebrow">
            <span></span>
            THE MK DIFFERENCE
            <span></span>
          </div>

          <h2>
            Why travel
            <em> with us?</em>
          </h2>

          <p>
            Every journey deserves thoughtful planning,
            convenient travel options and a comfortable experience.
          </p>

        </div>

        {/* CARDS */}
        <div className="why-grid">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article className="why-card" key={reason.number}>

                <div className="why-card-header">

                  <span className="why-number">
                    {reason.number}
                  </span>

                  <div className="why-icon">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                </div>

                <div className="why-card-body">

                  <span className="why-tag">
                    {reason.tag}
                  </span>

                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>

                </div>

                <div className="why-card-footer">
                  <span>MK TOURS & TRAVELS</span>
                  <ArrowUpRight size={18} />
                </div>

                <div className="why-card-shine"></div>

              </article>
            );
          })}

        </div>

        {/* BOTTOM CTA */}
        <div className="why-bottom">

          <div>
            <span>YOUR JOURNEY MATTERS</span>
            <h3>Let's make your next trip memorable.</h3>
          </div>

          <a href="#contact">
            Plan Your Trip
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>
    </section>
  );
}
