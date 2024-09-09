const services = [
  {
    title: "Prescription Refills",
    description: "Get your prescriptions refilled easily and quickly.",
  },
  {
    title: "Medication Therapy Management",
    description:
      "Comprehensive review of your medications to optimize therapy.",
  },
  {
    title: "Immunizations",
    description: "Get your vaccines and stay protected from various diseases.",
  },
  {
    title: "Health Screenings",
    description:
      "Regular health screenings for early detection of health issues.",
  },
  {
    title: "Consultation Services",
    description: "Speak with our pharmacists for personalized health advice.",
  },
  {
    title: "Delivery Services",
    description: "Convenient home delivery of your medications.",
  },
];
const Services = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Our Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card service-card h-100">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
