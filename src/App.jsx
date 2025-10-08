import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Services from "./Pages/Services";
import ScrollToTop from "./Pages/ScrollToTop";

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
