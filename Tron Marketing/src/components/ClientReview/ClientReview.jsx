import React from "react";
import "./ClientReview.css";

// Using a reusable component for the star rating
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
        &#9733;
      </span>,
    );
  }
  return <div className="star-rating">{stars}</div>;
};

export default function ClientReview() {
  const reviews = [
    {
      name: "Leo",
      position: "CEO",
      company: "Handcar ",
      rating: 5,
      comment:
        "The experience of working with Tron Digital has been very great. Their team also knew our business objectives and presented an approach that proved to be effective. Since they are a digital marketing agency in Abu Dhabi, they are result-driven and not promise-orientated. We have observed visible visibility and quality of leads. ",
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=OLIVIA+GREEN",
    },
    {
      name: "Hilal Mohammad",
      position: "Marketing Manager",
      company: "Dahab Miners",
      rating: 5,
      comment:
        "Tron Digital assisted us with our online presence by increasing our online presence by means of SEO and paid campaigns. They were transparent, professional and performance-orientated. Their team is reliable in terms of collaboration with a digital marketing agency in Abu Dhabi.",
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=ALEX+JOHNSON",
    },
    {
      name: "Mohammad Fayis",
      position: "CEO",
      company: "Innovate Ltd.",
      rating: 5,
      comment:
        "The most important feature of Tron Digital that we liked and admired was the detailed care and clear communication. Everything was planned, even up to execution. Their digital marketing services assisted us in the identification of the right audience and the tangible growth they provided.",
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=SARAH+KIM",
    },
  ];
  return (
    <section className="client-review-section" id="client-review">
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
