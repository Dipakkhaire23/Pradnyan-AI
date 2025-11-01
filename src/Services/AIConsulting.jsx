import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

export default function AIConsulting() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <Cpu className="w-16 h-16 mx-auto mb-4 text-cyan-500" />
          <h1 className="mb-4 text-4xl font-bold text-slate-900">
            AI & DS Consulting
          </h1>
          <p className="text-lg text-slate-600">
            Strategize your business with data-driven AI solutions.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Business Analysis</h2>
            <p className="text-slate-500">
              We analyze your current processes and identify opportunities for AI-driven improvement.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">AI Strategy Roadmap</h2>
            <p className="text-slate-500">
              Design a step-by-step roadmap for implementing AI solutions effectively.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Data Assessment</h2>
            <p className="text-slate-500">
              Evaluate your data quality and readiness for AI and machine learning.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Implementation Guidance</h2>
            <p className="text-slate-500">
              Provide expert guidance to ensure your AI initiatives succeed.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 font-medium text-white transition rounded-md bg-cyan-500 hover:bg-cyan-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
