import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Brain, Sparkles, Database, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

export default function Services({ onNavigate }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceFromUrl = queryParams.get("service"); // get ?service=

  const [selectedService, setSelectedService] = useState(serviceFromUrl || "ai-consulting");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: serviceFromUrl || "ai-consulting",
    message: "",
  });

  useEffect(() => {
    if (serviceFromUrl) {
      setSelectedService(serviceFromUrl);
      setFormData((prev) => ({ ...prev, service: serviceFromUrl }));
    }
  }, [serviceFromUrl]);

  const services = [
    {
      id: "ai-consulting",
      icon: Brain,
      title: "AI & DS Consulting",
      tagline: "Strategic AI guidance for business transformation",
      description:
        "Navigate the complex AI landscape with confidence. Our expert consultants help you develop a clear AI strategy, identify high-value opportunities, and build a roadmap for successful implementation.",
      benefits: [
        "AI Readiness Assessment",
        "Custom AI Strategy Development",
        "Technology Stack Recommendations",
        "ROI Analysis and Business Case Development",
        "Change Management and Training",
        "Vendor Selection and Partnership Strategy",
      ],
      useCases: [
        "Enterprise AI transformation initiatives",
        "AI maturity assessment and roadmapping",
        "Building AI Centers of Excellence",
        "Data governance and ethics frameworks",
      ],
    },
    {
      id: "model-development",
      icon: Sparkles,
      title: "Custom AI/ML Model Development",
      tagline: "Purpose-built machine learning solutions",
      description:
        "From proof-of-concept to production-ready systems, we design and deploy custom ML models that solve your unique business challenges with precision and scalability.",
      benefits: [
        "Custom Model Architecture Design",
        "Training on Your Proprietary Data",
        "Model Optimization and Fine-tuning",
        "A/B Testing and Experimentation",
        "MLOps and Deployment Pipelines",
        "Ongoing Model Monitoring and Maintenance",
      ],
      useCases: [
        "Predictive analytics and forecasting",
        "Computer vision and image recognition",
        "Natural language processing",
        "Recommendation systems",
        "Anomaly detection and fraud prevention",
        "Time series analysis",
      ],
    },
    {
      id: "data-strategy",
      icon: Database,
      title: "Data Strategy & Engineering",
      tagline: "Build the foundation for AI success",
      description:
        "Great AI starts with great data. We design and implement robust data infrastructure that ensures your data is clean, accessible, and ready to power intelligent applications.",
      benefits: [
        "Data Architecture and Design",
        "ETL Pipeline Development",
        "Data Warehouse and Lake Implementation",
        "Real-time Data Processing",
        "Data Quality and Governance",
        "Cloud Migration and Optimization",
      ],
      useCases: [
        "Building scalable data lakes and warehouses",
        "Real-time analytics platforms",
        "Data migration and modernization",
        "Master data management",
        "Compliance and regulatory reporting",
        "Business intelligence infrastructure",
      ],
    },
    {
      id: "generative-ai",
      icon: TrendingUp,
      title: "Generative AI Solutions",
      tagline: "Harness the power of large language models",
      description:
        "Unlock transformative capabilities with cutting-edge generative AI. From chatbots to content generation, we help you leverage LLMs and generative models to create entirely new experiences.",
      benefits: [
        "Custom GPT and LLM Fine-tuning",
        "RAG (Retrieval Augmented Generation) Systems",
        "Conversational AI and Chatbots",
        "Content Generation and Automation",
        "Image and Video Generation",
        "Prompt Engineering and Optimization",
      ],
      useCases: [
        "Intelligent customer service assistants",
        "Document analysis and summarization",
        "Code generation and developer tools",
        "Creative content production",
        "Knowledge management systems",
        "Automated report generation",
      ],
    },
  ];

  const currentService = services.find((s) => s.id === selectedService) || services[0];
  const Icon = currentService.icon;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Request submitted successfully!");
    setShowLeadForm(false);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold">Our Services</h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-300">
              End-to-end AI solutions designed to transform your business and drive measurable results
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="sticky z-40 py-8 bg-white border-b top-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex pb-2 space-x-4 overflow-x-auto">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setSelectedService(service.id);
                  setFormData((prev) => ({ ...prev, service: service.id }));
                }}
                className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedService === service.id
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-start grid-cols-1 gap-12 mb-16 lg:grid-cols-2">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4 text-4xl font-bold text-slate-900">{currentService.title}</h2>
              <p className="mb-6 text-xl text-cyan-600">{currentService.tagline}</p>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">{currentService.description}</p>
              <button
                onClick={() => setShowLeadForm(true)}
                className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all rounded-lg bg-cyan-500 hover:bg-cyan-600"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl">
              <h3 className="mb-6 text-2xl font-bold text-slate-900">What We Deliver</h3>
              <ul className="space-y-4">
                {currentService.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-12 text-white bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl">
            <h3 className="mb-8 text-3xl font-bold">Common Use Cases</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {currentService.useCases.map((useCase, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-cyan-400" />
                  <span className="text-slate-300">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showLeadForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <h2 className="mb-2 text-3xl font-bold text-slate-900">Get Started</h2>
              <p className="mb-6 text-slate-600">Fill out this form and we'll be in touch within 24 hours</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">Company</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">Service of Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">Tell us about your project</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 font-semibold text-white transition-colors rounded-lg bg-cyan-500 hover:bg-cyan-600"
                  >
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(false)}
                    className="px-6 py-3 font-semibold transition-colors rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Not sure which service is right for you?</h2>
          <p className="mb-8 text-xl text-slate-600">
            Let's talk about your challenges and goals. We'll help you find the perfect solution.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-colors rounded-lg bg-slate-900 hover:bg-slate-800"
          >
            <span>Schedule a Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
