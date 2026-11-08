
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Arjun Shetty",
    location: "Mangalore",
    text: "A comfortable and convenient travel experience from start to finish.",
  },
  {
    name: "Priya Rao",
    location: "Udupi",
    text: "The booking process was simple and the travel arrangements were convenient.",
  },
  {
    name: "Rahul Bhat",
    location: "Mulki",
    text: "A smooth journey with helpful travel coordination.",
  },
  {
    name: "Sneha Kumar",
    location: "Surathkal",
    text: "A convenient option for planning local and outstation trips.",
  },
  {
    name: "Kiran Poojary",
    location: "Bangalore",
    text: "The trip planning experience was straightforward and comfortable.",
  },
  {
    name: "Ananya Shetty",
    location: "Manipal",
    text: "Helpful arrangements made the journey easier to plan.",
  },
  {
    name: "Vivek Nayak",
    location: "Karkala",
    text: "A pleasant travel experience with convenient pickup arrangements.",
  },
  {
    name: "Meghana Pai",
    location: "Kundapura",
    text: "A useful choice for organising family travel.",
  },
  {
    name: "Rohit Acharya",
    location: "Kasaragod",
    text: "The travel arrangements were easy to understand and organise.",
  },
  {
    name: "Nisha Shetty",
    location: "Bajpe",
    text: "A simple and convenient way to plan a trip.",
  },
];

function ReviewCard({ review }) {
  return (
    <article className="mk-review-card">
      <div className="mk-review-top">
        <Quote size={25} />
      </div>

      <div className="mk-review-stars" aria-hidden="true">
        ★★★★★
      </div>

      <p className="mk-review-text">
        {review.text}
      </p>

      <div className="mk-review-author">
        <div className="mk-review-avatar">
          {review.name.charAt(0)}
        </div>

        <div>
          <h4>{review.name}</h4>
          <span>{review.location}</span>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  const firstRow = [...reviews, ...reviews];
  const secondRow = [
    ...reviews.slice().reverse(),
    ...reviews.slice().reverse(),
  ];

  return (
    <section className="mk-reviews" id="reviews">
      <div className="mk-reviews-heading">
        <span className="mk-section-label">
          TRAVEL EXPERIENCES
        </span>

        <h2>
          Every Journey Has
          <br />
          A <span>Story.</span>
        </h2>

        <p>
          Discover the experiences that make every journey special.
        </p>
      </div>

      <div className="mk-review-marquee">
        <div className="mk-review-track mk-review-track-left">
          {firstRow.map((review, index) => (
            <ReviewCard
              review={review}
              key={`first-${index}`}
            />
          ))}
        </div>
      </div>

      <div className="mk-review-marquee">
        <div className="mk-review-track mk-review-track-right">
          {secondRow.map((review, index) => (
            <ReviewCard
              review={review}
              key={`second-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
