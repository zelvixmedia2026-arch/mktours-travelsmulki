
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Images,
} from "lucide-react";

const galleryImages = [
  { src: "/images/gallery-1.jpg", title: "Travel Destination 01" },
  { src: "/images/gallery-2.jpg", title: "Travel Destination 02" },
  { src: "/images/gallery-3.jpg", title: "Travel Destination 03" },
  { src: "/images/gallery-4.jpg", title: "Travel Destination 04" },
  { src: "/images/gallery-5.jpg", title: "Travel Destination 05" },
  { src: "/images/gallery-6.jpg", title: "Travel Destination 06" },
  { src: "/images/gallery-7.jpg", title: "Travel Destination 07" },
  { src: "/images/gallery-8.jpg", title: "Travel Destination 08" },
  { src: "/images/gallery-9.jpg", title: "Travel Destination 09" },
  { src: "/images/gallery-10.jpg", title: "Travel Destination 10" },
  { src: "/images/gallery-11.jpg", title: "Travel Destination 11" },
  { src: "/images/gallery-12.jpg", title: "Travel Destination 12" },
  { src: "/images/gallery-13.jpg", title: "Travel Destination 13" },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  const closeLightbox = () => setActiveImage(null);

  const showNext = () => {
    setActiveImage((current) =>
      (current + 1) % galleryImages.length
    );
  };

  const showPrevious = () => {
    setActiveImage((current) =>
      (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <section className="mk-gallery" id="gallery">
      <div className="mk-gallery-container">

        <div className="mk-gallery-heading">
          <div>
            <span className="mk-section-label">
              EXPLORE THROUGH OUR LENS
            </span>

            <h2>
              Moments & <span>Destinations.</span>
            </h2>

            <p>
              Discover beautiful places and memorable travel
              experiences through our destination gallery.
            </p>
          </div>

          <div className="mk-gallery-count">
            <Images size={18} />
            <span>13 PHOTOGRAPHS</span>
          </div>
        </div>

        <div className="mk-gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              className={`mk-gallery-item mk-gallery-item-${index + 1}`}
              key={image.src}
              onClick={() => setActiveImage(index)}
              aria-label={`View ${image.title}`}
            >
              <img
                src={image.src}
                alt={`${image.title} - MK Tours and Travels`}
                loading="lazy"
              />

              <div className="mk-gallery-overlay">
                <span>{image.title}</span>
                <ArrowUpRight size={21} />
              </div>

              <span className="mk-gallery-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        <div className="mk-gallery-bottom">
          <span>13 PLACES. ENDLESS MEMORIES.</span>
          <a href="#contact">
            Plan Your Journey <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      {activeImage !== null && (
        <div
          className="mk-lightbox"
          onClick={closeLightbox}
          role="presentation"
        >
          <button
            className="mk-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X size={25} />
          </button>

          <button
            className="mk-lightbox-arrow mk-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>

          <div
            className="mk-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={galleryImages[activeImage].src}
              alt={galleryImages[activeImage].title}
            />

            <div className="mk-lightbox-caption">
              <span>{galleryImages[activeImage].title}</span>
              <span>
                {String(activeImage + 1).padStart(2, "0")} / 13
              </span>
            </div>
          </div>

          <button
            className="mk-lightbox-arrow mk-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  );
}
