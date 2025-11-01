import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { id: "ai-consulting", label: "AI & DS Consulting", path: "/services?service=ai-consulting" },
    { id: "model-development", label: "Custom AI/ML Models", path: "/services?service=model-development" },
    { id: "data-strategy", label: "Data Strategy & Engineering", path: "/services?service=data-strategy" },
    { id: "generative-ai", label: "Generative AI Solutions", path: "/services?service=generative-ai" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full text-white shadow-lg bg-slate-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                <span className="text-lg font-bold text-white">P</span>
              </div>
              <span className="text-xl font-bold">Pradnyan AI</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="items-center hidden ml-10 space-x-8 md:flex">
            <Link
              to="/"
              className="px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-slate-800"
            >
              Home
            </Link>

   {/* Services Dropdown */}
<div
  className="relative"
  onMouseEnter={() => setServicesOpen(true)} // open on hover
  onClickCapture={() => setServicesOpen(false)} // close only when mouse leaves
>
  <button className="flex items-center px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-slate-800">
    Services <ChevronDown className="w-4 h-4 ml-1" />
  </button>

  {servicesOpen && (
    <div className="absolute left-0 w-64 py-2 mt-2 rounded-md shadow-lg bg-slate-800">
      {services.map((service) => (
        <Link
          key={service.id}
          to={service.path}
          className="block w-full px-4 py-2 text-sm text-left transition-colors hover:bg-slate-700"
        >
          {service.label}
        </Link>
      ))}
    </div>
  )}
</div>



            <Link
              to="/case-studies"
              className="px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-slate-800"
            >
              Case Studies
            </Link>
            <Link
              to="/insights"
              className="px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-slate-800"
            >
              Insights
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-slate-800"
            >
              About
            </Link>
            <Link
              to="/careers"
              className="px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-slate-800"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium transition-colors rounded-md bg-cyan-500 hover:bg-cyan-600"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-slate-800 shadow-lg transform transition-transform duration-300 z-50 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-2 pt-4 pb-3 space-y-1">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full px-3 py-2 text-base font-medium text-left rounded-md hover:bg-slate-700"
          >
            Home
          </Link>

          <div className="px-3 py-2 text-sm font-medium text-slate-400">Services</div>
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-6 py-2 text-sm text-left hover:bg-slate-700"
            >
              {service.label}
            </Link>
          ))}

          <Link
            to="/case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full px-3 py-2 text-base font-medium text-left rounded-md hover:bg-slate-700"
          >
            Case Studies
          </Link>
          <Link
            to="/insights"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full px-3 py-2 text-base font-medium text-left rounded-md hover:bg-slate-700"
          >
            Insights
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full px-3 py-2 text-base font-medium text-left rounded-md hover:bg-slate-700"
          >
            About
          </Link>
          <Link
            to="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full px-3 py-2 text-base font-medium text-left rounded-md hover:bg-slate-700"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full px-3 py-2 text-base font-medium text-left rounded-md bg-cyan-500 hover:bg-cyan-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
