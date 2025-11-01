import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ScrollToTop from "./Pages/ScrollToTop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Careers from "./Pages/Careers";
import Insights from "./Pages/Insights";
import CaseStudy from "./Pages/CaseStudies";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-hidden bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
<Route path="/contact" element={<Contact />} />
<Route path="/careers" element={<Careers />} />
<Route path="/insights" element={<Insights />} />
<Route path="/about" element={<About />} />
<Route path="/case-studies" element={<CaseStudy />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
