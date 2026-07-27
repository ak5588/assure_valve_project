import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
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
    </Routes>
  );
}

export default App;