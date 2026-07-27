import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/site/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Machines from "./pages/Machines";
import GalleryPage from "./pages/Gallery";
import ClientsPage from "./pages/Clients";
import QualityPage from "./pages/Quality";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Certifications from "./pages/Certifications";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import ThankYouPage from "./pages/ThankYouPage";
import ServicePage from "./pages/ServicePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/quality" element={<QualityPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;