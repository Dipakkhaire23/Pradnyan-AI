import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

export default function GenerativeAI() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Settings className="w-16 h-16 mx-auto mb-4 text-purple-500" />
          <h1 className="mb-4 text-4xl font-bold text-slate-900">
            Generative AI Solutions
          </h1>
          <p className="text-lg text-slate-600">
            Create AI-powered content, images, and innovative solutions.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Content Generation</h2>
            <p className="text-slate-500">
              Generate high-quality text content for blogs, ads, and more.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Image Synthesis</h2>
            <p className="text-slate-500">
              Create realistic images using AI-powered models.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">AI Design Tools</h2>
            <p className="text-slate-500">
              Generate creative designs and prototypes using AI.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-xl">
            <h2 className="mb-2 text-xl font-semibold">Automation & Innovation</h2>
            <p className="text-slate-500">
              Automate creative tasks and accelerate innovation cycles.
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
