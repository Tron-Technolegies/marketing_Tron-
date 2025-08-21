import React from "react";
import "./ClientReview.css";

// Using a reusable component for the star rating
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
        &#9733;
      </span>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

export default function ClientReview() {
  const reviews = [
    {
      name: "Olivia Green",
      position: "CEO",
      company: "ABC Company",
      rating: 5,
      comment:
        "We are thrilled with the results from Tron Digital. Their strategic approach and creative content have significantly boosted our brand awareness and engagement. They don't just create noise; they create meaning.",
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=OLIVIA+GREEN",
    },
    {
      name: "Alex Johnson",
      position: "Marketing Director",
      company: "XYZ Corp",
      rating: 5,
      comment:
        "The team at Tron Digital is truly a pleasure to work with. Their deep understanding of social media trends and commitment to our goals has been invaluable. Our online presence has never been stronger.",
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=ALEX+JOHNSON",
    },
    {
      name: "Sarah Kim",
      position: "Founder",
      company: "Innovate Ltd.",
      rating: 5,
      comment:
        "I highly recommend Tron Digital for anyone looking to elevate their brand. Their creative ideas and data-driven strategies are a winning combination. They are a true partner in our success.",
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=SARAH+KIM",
    },
  ];
  return (
    <section className="client-review-section">
      <div className="client-review-title">
        <h3>
          What our clients <br /> have to say
        </h3>
      </div>
      <div className="client-review-cards">
        {reviews.map((review, index) => (
          <div key={index} className="client-review-card">
            <div className="client-review-card-top">
              <StarRating rating={review.rating} />
            </div>
            <p className="client-review-card-comment">{review.comment}</p>
            <div className="client-review-card-bottom">
              <div className="client-review-card-image">
                <img src={review.image} alt="Client" />
              </div>
              <div className="client-review-details">
                <p className="client-review-card-name">{review.name}</p>
                <p className="client-review-card-company">
                  {review.position}, {review.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
