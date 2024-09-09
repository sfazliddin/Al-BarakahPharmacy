import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "John Doe",
    review: "Excellent service and friendly staff!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "Quick and reliable prescription refills.",
    rating: 4,
  },
  { name: "Samuel Green", review: "Great consultation services.", rating: 4 },
];

const Testimonials = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2>What Our Customers Say</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text">{testimonial.review}</p>
                <div className="star-rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      color={i < testimonial.rating ? "#ffd700" : "#e4e5e9"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
