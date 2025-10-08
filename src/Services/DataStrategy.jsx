import { Link } from "react-router-dom";
import { Database } from "lucide-react";

export default function DataStrategy() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Database className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h1 className="mb-4 text-4xl font-bold text-slate-900">
            Data Strategy & Engineering
          </h1>
          <p className="text-lg text-slate-600">
            Transform your data into actionable insights.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Data Architecture</h2>
            <p className="text-slate-500">
              Design scalable and secure data infrastructures.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Data Integration</h2>
            <p className="text-slate-500">
              Combine data from multiple sources seamlessly.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">ETL Pipelines</h2>
            <p className="text-slate-500">
              Automate data extraction, transformation, and loading.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Analytics & BI</h2>
            <p className="text-slate-500">
              Turn data into business insights and actionable dashboards.
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
