import { useState } from "react";
import { ArrowUpRight, Images } from "lucide-react";

const galleryImages = Array.from({ length: 13 }, (_, index) => ({
  id: index + 1,
  src: `/images/gallery-${index + 1}.jpg`,
  alt: `Travel destination ${index + 1}`,
}));

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, 3);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        <div className="gallery-heading">
          <div>
            <span className="gallery-eyebrow">OUR GALLERY</span>
            <h2>Moments Along <span>The Journey</span></h2>
            <p>
              Explore beautiful destinations and memorable travel experiences.
            </p>
          </div>
        </div>

        <div className="gallery-grid">
          {visibleImages.map((image) => (
            <div className="gallery-card" key={image.id}>
              <img src={image.src} alt={image.alt} loading="lazy" />

              {/* <div className="gallery-card-overlay">
                <span>
                  TRAVEL DESTINATION {String(image.id).padStart(2, "0")}
                </span>
                <ArrowUpRight size={23} />
              </div> */}
            </div>
          ))}
        </div>

        <div className="gallery-button-wrapper">
          <button
            className="explore-gallery-btn"
            onClick={() => setShowAll(!showAll)}
          >
            <Images size={19} />
            {showAll ? "Show Less" : "Explore Gallery"}
            <ArrowUpRight size={19} />
          </button>
        </div>

      </div>
    </section>
  );
}