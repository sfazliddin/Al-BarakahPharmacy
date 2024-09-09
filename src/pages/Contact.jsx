import { location, operationTimes } from "../assets/globalConsts.js";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <ContactForm />
        </div>
        <div className="col-md-6">
          <h2>Find Us Here</h2>
          <div className="map-responsive">
            <iframe
              src={location}
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps"
            ></iframe>
          </div>
          <h2>Times of Operation</h2>
          <table className="table">
            <tbody>
              {Array.from(operationTimes.entries()).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
