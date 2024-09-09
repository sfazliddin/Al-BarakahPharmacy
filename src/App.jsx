import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.scss";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import RefillPrescription from "./pages/RefillPrescription";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/refill" element={<RefillPrescription />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
