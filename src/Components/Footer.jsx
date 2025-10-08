import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo & About */}
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                <span className="text-lg font-bold text-white">P</span>
              </div>
              <span className="text-xl font-bold text-white">Pradnyan AI</span>
            </div>
            <p className="text-sm text-slate-400">
              Building intelligent systems to solve your toughest challenges.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="transition-colors hover:text-cyan-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="transition-colors hover:text-cyan-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="transition-colors hover:text-cyan-400">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  AI & DS Consulting
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Custom AI/ML Models
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Data Strategy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Generative AI
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Insights
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>contact@pradnyan.ai</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 AI Boulevard, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 text-sm text-center border-t border-slate-800 text-slate-400">
          <p>&copy; {new Date().getFullYear()} Pradnyan AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
