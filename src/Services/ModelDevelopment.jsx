import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

export default function ModelDevelopment() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Brain className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <h1 className="mb-4 text-4xl font-bold text-slate-900">
            Custom AI/ML Models
          </h1>
          <p className="text-lg text-slate-600">
            Build machine learning models tailored to your business needs.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Predictive Models</h2>
            <p className="text-slate-500">
              Forecast trends, sales, and customer behavior with precision.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Recommendation Engines</h2>
            <p className="text-slate-500">
              Personalized recommendations to enhance user engagement.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">NLP & Computer Vision</h2>
            <p className="text-slate-500">
              Advanced AI solutions for text, images, and video processing.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Custom Pipelines</h2>
            <p className="text-slate-500">
              End-to-end ML pipelines optimized for your infrastructure.
            </p>
          </div>
        </div>

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
