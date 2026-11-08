
import {
  ArrowUpRight,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

const vehicles = [
  {
    name: "Innova Crysta",
    category: "PREMIUM MUV",
    description:
      "Experience comfortable and spacious travel for family trips and long journeys.",
    image: "/images/innova-crysta.jpg",
    passengers: "Capacity on request",
    luggage: "Luggage details on request",
  },
  {
    name: "Toyota Etios",
    category: "SEDAN",
    description:
      "A practical and comfortable choice for city rides and outstation journeys.",
    image: "/images/etios.jpg",
    passengers: "Capacity on request",
    luggage: "Luggage details on request",
  },
  {
    name: "Maruti Ertiga",
    category: "MUV",
    description:
      "Enjoy convenient family travel with a spacious and versatile vehicle.",
    image: "/images/ertiga.jpg",
    passengers: "Capacity on request",
    luggage: "Luggage details on request",
  },
  {
    name: "Force Urbania",
    category: "PREMIUM GROUP TRAVEL",
    description:
      "A premium group travel option designed for comfortable journeys.",
    image: "/images/force-urbania.jpg",
    passengers: "Capacity on request",
    luggage: "Luggage details on request",
  },
  {
    name: "Force Traveller",
    category: "GROUP TRAVEL",
    description:
      "A spacious travel option for group tours, family outings and trips.",
    image: "/images/force-traveller.jpg",
    passengers: "Capacity on request",
    luggage: "Luggage details on request",
  },
  {
    name: "Tourist Bus",
    category: "BUS",
    description:
      "Convenient group transportation for tours, events and long-distance journeys.",
    image: "/images/tourist-bus.jpg",
    passengers: "Capacity on request",
    luggage: "Luggage details on request",
  },
];

function VehicleCard({ vehicle, index }) {
  return (
    <article className="mk-vehicle-card">
      {/* Vehicle Image */}
      <div className="mk-vehicle-image">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} vehicle`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.classList.add(
              "image-missing"
            );
          }}
        />

        <span className="mk-vehicle-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="mk-vehicle-category">
          {vehicle.category}
        </span>
      </div>

      {/* Vehicle Information */}
      <div className="mk-vehicle-info">
        <h3>{vehicle.name}</h3>

        <p className="mk-vehicle-description">
          {vehicle.description}
        </p>

        {/* Vehicle Details */}
        <div className="mk-vehicle-details">
          <span>
            <Users size={16} />
            <span>{vehicle.passengers}</span>
          </span>

          <span>
            <BriefcaseBusiness size={16} />
            <span>{vehicle.luggage}</span>
          </span>
        </div>

        {/* Enquiry Button */}
        <a href="#contact" className="mk-vehicle-link">
          Enquire Now
          <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  );
}

export default function Fleet() {
  return (
    <section className="mk-fleet" id="fleet">
      <div className="mk-fleet-container">

        {/* Section Heading */}
        <div className="mk-fleet-heading">
          <div>
            <span className="mk-section-label">
              OUR VEHICLES
            </span>

            <h2>
              The Right Ride
              <br />
              For <span>Every Journey.</span>
            </h2>
          </div>

          <p>
            Explore our range of travel options, from
            comfortable cars to spacious group vehicles.
            Choose the ride that suits your journey.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="mk-fleet-grid">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={vehicle.name}
              vehicle={vehicle}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mk-fleet-bottom">
          <p>
            Not sure which vehicle to choose?
            <span>
              {" "}We'll help you find the right option.
            </span>
          </p>

          <a href="#contact">
            Find Your Ride
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
