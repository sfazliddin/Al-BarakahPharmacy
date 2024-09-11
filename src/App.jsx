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
import { base } from "./assets/globalConsts";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path={base} element={<Home />} />
          <Route path={base + "about"} element={<AboutUs />} />
          <Route path={base + "services"} element={<Services />} />
          <Route path={base + "contact"} element={<ContactUs />} />
          <Route path={base + "refill"} element={<RefillPrescription />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
