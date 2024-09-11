import { CompanyName } from "../assets/globalConsts.js";

const AboutUs = () => {
  //src/assets/pharmacist.jpg
  const workers = [
    {
      name: "John Doe",
      role: "Pharmacist",
      description:
        "John has over 10 years of experience in the pharmaceutical industry. He is dedicated to providing the best healthcare services to our community.",
      image: "https://images.unsplash.com/photo-1657551856874-d492ef8ecba0",
    },
    {
      name: "Jane Smith",
      role: "Assistant Pharmacist",
      description:
        "Jane is a skilled assistant pharmacist who has been with us for 5 years. She is known for her friendly demeanor and excellent customer service.",
      image: "https://images.unsplash.com/photo-1657470179442-12be86434e22",
    },
    {
      name: "Michael Johnson",
      role: "Pharmacy Technician",
      description:
        "Michael is a certified pharmacy technician with a passion for helping patients. He ensures that our pharmacy runs smoothly and efficiently.",
      image: "https://images.unsplash.com/photo-1580281658626-ee379f3cce93",
    },
  ];

  return (
    <div className="container mt-5">
      <h1>About Us</h1>
      <p>
        Welcome to {CompanyName}. We are dedicated to providing the highest
        quality healthcare services to our community. Our team of professionals
        is here to assist you with all your pharmaceutical needs.
      </p>
      <h2>Our Team</h2>
      <div className="row">
        {workers.map((worker, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 worker-card">
              <img
                src={worker.image}
                className="card-img-top"
                alt={`${worker.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">{worker.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{worker.role}</h6>
                <p className="card-text">{worker.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
