import { CompanyName } from "../assets/globalConsts.js";
import Testimonials from "../components/CustomerReviews";

const Home = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-white my-5 radius-5">
        <div className="container text-center">
          <h1 className="display-4">Welcome to {CompanyName}</h1>
          <p className="lead">Your trusted partner in health and wellness.</p>
          <a className="btn btn-lg refill-button" href="/refill">
            <span className="refill-word">Refill</span>
            <span className="prescription-word">Prescription</span>
          </a>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h2>About Us</h2>
            <p>
              At {CompanyName}, we are committed to providing exceptional health
              services and personalized care. Our experienced team is dedicated
              to ensuring your health and wellness needs are met with the
              highest standards of service.
            </p>
          </div>
        </div>
      </div>

      {/* Key Services */}
      <div className="container mt-5">
        <h2>Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Prescription Refills</h5>
                <p className="card-text">
                  Easily refill your prescriptions online with just a few
                  clicks.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Health Services</h5>
                <p className="card-text">
                  We offer a range of health services, including vaccinations
                  and health screenings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Consultations</h5>
                <p className="card-text">
                  Schedule a consultation with our knowledgeable pharmacists for
                  personalized advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};
export default Home;
