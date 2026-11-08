
import { useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  MessageCircle,
  Users,
} from "lucide-react";

// Add MK Tours & Travels' confirmed contact details.
const WHATSAPP_NUMBER = "919964696933";
const PHONE_NUMBER = "+91 9449105402";
const EMAIL_ADDRESS = "mkthsf32@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    passengers: "",
    tripType: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (WHATSAPP_NUMBER.includes("X")) {
      alert("Please add the confirmed WhatsApp number in Contact.jsx.");
      return;
    }

    const bookingMessage = `
Hello MK Tours & Travels!

I would like to enquire about a journey.

Name: ${form.name}
Phone: ${form.phone}
Pickup: ${form.pickup}
Destination: ${form.destination}
Travel Date: ${form.date || "Not specified"}
Passengers: ${form.passengers || "Not specified"}
Trip Type: ${form.tripType || "Not specified"}
Vehicle: ${form.vehicle || "Not decided"}

Additional Details:
${form.message || "None"}

Please share the availability and quotation. Thank you!
    `.trim();

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mk-contact" id="contact">
      <div className="mk-contact-container">
        <div className="mk-contact-heading">
          <span className="mk-section-label">
            LET'S PLAN YOUR JOURNEY
          </span>

          <h2>
            Your Next Journey
            <br />
            Starts <span>Right Here.</span>
          </h2>

          <p>
            Share your travel requirements and let us help
            you plan a comfortable journey.
          </p>
        </div>

        <div className="mk-contact-layout">
          <div className="mk-contact-info">
            <span className="mk-contact-small-title">
              GET IN TOUCH
            </span>

            <h3>
              Let's make your
              <br />
              travel plans happen.
            </h3>

            <p className="mk-contact-info-description">
              Have a question or planning a trip?
              Contact MK Tours & Travels for your travel enquiry.
            </p>

            <div className="mk-contact-details">
              <div className="mk-contact-detail">
                <div className="mk-contact-icon">
                  <Phone size={19} />
                </div>
                <div>
                  <span>CALL US</span>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="mk-contact-detail">
                <div className="mk-contact-icon">
                  <Mail size={19} />
                </div>
                <div>
                  <span>EMAIL US</span>
                  <a href={`mailto:${EMAIL_ADDRESS}`}>
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              <div className="mk-contact-detail">
                <div className="mk-contact-icon">
                  <MapPin size={19} />
                </div>
                <div>
                  <span>OUR LOCATION</span>
                  <p>Mulki, Karnataka, India</p>
                </div>
              </div>

              <div className="mk-contact-detail">
                <div className="mk-contact-icon">
                  <Clock3 size={19} />
                </div>
                <div>
                  <span>TRAVEL ENQUIRIES</span>
                  <p>Contact us for availability</p>
                </div>
              </div>
            </div>

            <a
              href={
                WHATSAPP_NUMBER.includes("X")
                  ? "#booking-form"
                  : `https://wa.me/${WHATSAPP_NUMBER}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="mk-contact-whatsapp"
            >
              <MessageCircle size={19} />
              Chat on WhatsApp
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mk-contact-form-wrapper" id="booking-form">
            <div className="mk-form-heading">
              <div>
                <span>BOOK YOUR JOURNEY</span>
                <h3>Send an Enquiry</h3>
              </div>
              <Send size={23} />
            </div>

            <form className="mk-contact-form" onSubmit={handleSubmit}>
              <div className="mk-form-row">
                <div className="mk-form-group">
                  <label htmlFor="mk-name">Your Name *</label>
                  <input
                    id="mk-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="mk-form-group">
                  <label htmlFor="mk-phone">Phone Number *</label>
                  <input
                    id="mk-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              <div className="mk-form-row">
                <div className="mk-form-group">
                  <label htmlFor="mk-pickup">Pickup Location *</label>
                  <input
                    id="mk-pickup"
                    name="pickup"
                    type="text"
                    placeholder="Pickup location"
                    value={form.pickup}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mk-form-group">
                  <label htmlFor="mk-destination">Destination *</label>
                  <input
                    id="mk-destination"
                    name="destination"
                    type="text"
                    placeholder="Your destination"
                    value={form.destination}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mk-form-row">
                <div className="mk-form-group">
                  <label htmlFor="mk-date">Travel Date</label>
                  <input
                    id="mk-date"
                    name="date"
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="mk-form-group">
                  <label htmlFor="mk-passengers">Passengers</label>
                  <div className="mk-input-with-icon">
                    <Users size={17} />
                    <input
                      id="mk-passengers"
                      name="passengers"
                      type="number"
                      min="1"
                      max="100"
                      placeholder="Number of passengers"
                      value={form.passengers}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mk-form-row">
                <div className="mk-form-group">
                  <label htmlFor="mk-trip-type">Trip Type</label>
                  <select
                    id="mk-trip-type"
                    name="tripType"
                    value={form.tripType}
                    onChange={handleChange}
                  >
                    <option value="">Select trip type</option>
                    <option value="One Way">One Way</option>
                    <option value="Round Trip">Round Trip</option>
                    <option value="Local Travel">Local Travel</option>
                    <option value="Airport Transfer">Airport Transfer</option>
                    <option value="Tour Package">Tour Package</option>
                  </select>
                </div>

                <div className="mk-form-group">
                  <label htmlFor="mk-vehicle">Vehicle Preference</label>
                  <select
                    id="mk-vehicle"
                    name="vehicle"
                    value={form.vehicle}
                    onChange={handleChange}
                  >
                    <option value="">Select a vehicle</option>
                    <option value="Innova Crysta">Innova Crysta</option>
                    <option value="Toyota Etios">Toyota Etios</option>
                    <option value="Maruti Ertiga">Maruti Ertiga</option>
                    <option value="Force Urbania">Force Urbania</option>
                    <option value="Force Traveller">Force Traveller</option>
                    <option value="Tourist Bus">Tourist Bus</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="mk-form-group">
                <label htmlFor="mk-message">Additional Details</label>
                <textarea
                  id="mk-message"
                  name="message"
                  placeholder="Any special requirements or details about your journey?"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="mk-submit-btn">
                Send Booking Enquiry
                <ArrowUpRight size={18} />
              </button>

              <p className="mk-form-note">
                Your enquiry will open in WhatsApp. No online payment is required.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
