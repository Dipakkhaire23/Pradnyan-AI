import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CaseStudies() {
    const navigate = useNavigate();

  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: "1",
      title: "Predictive Maintenance System for Manufacturing",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      image: "manufacturing",
      problem:
        "The client was experiencing costly equipment failures and unplanned downtime across their 50+ manufacturing facilities. Traditional maintenance schedules were inefficient, leading to both over-maintenance and unexpected breakdowns.",
      solution:
        "We developed a comprehensive predictive maintenance system using IoT sensors, time-series analysis, and deep learning models. The system analyzes equipment vibration, temperature, and performance data in real-time to predict failures 2-4 weeks in advance.",
      impact: [
        "67% reduction in unplanned downtime",
        "$12M annual savings in maintenance costs",
        "43% increase in equipment lifespan",
        "ROI achieved within 8 months",
      ],
      technologies: [
        "TensorFlow",
        "Python",
        "IoT",
        "Time Series Analysis",
        "AWS",
        "Apache Kafka",
      ],
      metrics: [
        { label: "Downtime Reduction", value: "67%" },
        { label: "Cost Savings", value: "$12M" },
        { label: "Equipment Lifespan", value: "+43%" },
      ],
    },
    {
      id: "2",
      title: "AI-Powered Customer Service Platform",
      client: "TechRetail Solutions",
      industry: "E-commerce",
      image: "ecommerce",
      problem:
        "The client's customer service team was overwhelmed with 50,000+ monthly inquiries. Response times averaged 24 hours, leading to poor customer satisfaction scores and lost sales opportunities.",
      solution:
        "We built an intelligent customer service platform using large language models and RAG (Retrieval Augmented Generation). The system handles routine inquiries automatically, provides smart suggestions to human agents, and learns from every interaction.",
      impact: [
        "85% of inquiries resolved automatically",
        "Response time reduced from 24 hours to 2 minutes",
        "Customer satisfaction increased by 41%",
        "60% reduction in support costs",
      ],
      technologies: [
        "GPT-4",
        "LangChain",
        "Vector Database",
        "React",
        "Node.js",
        "PostgreSQL",
      ],
      metrics: [
        { label: "Auto-Resolution Rate", value: "85%" },
        { label: "Response Time", value: "2 min" },
        { label: "CSAT Increase", value: "+41%" },
      ],
    },
    {
      id: "3",
      title: "Fraud Detection System for Fintech",
      client: "SecurePayments Inc",
      industry: "Financial Services",
      image: "fintech",
      problem:
        "The client was losing $5M annually to fraudulent transactions. Their rule-based system had high false positive rates, frustrating legitimate customers and requiring extensive manual review.",
      solution:
        "We implemented a sophisticated fraud detection system using ensemble machine learning models, graph neural networks, and real-time anomaly detection. The system analyzes transaction patterns, user behavior, and network relationships to identify fraud with high precision.",
      impact: [
        "94% fraud detection accuracy",
        "False positives reduced by 78%",
        "$4.2M annual fraud losses prevented",
        "Processing time under 50ms per transaction",
      ],
      technologies: [
        "XGBoost",
        "Graph Neural Networks",
        "Redis",
        "Apache Flink",
        "Scikit-learn",
        "Docker",
      ],
      metrics: [
        { label: "Detection Accuracy", value: "94%" },
        { label: "False Positives", value: "-78%" },
        { label: "Fraud Prevented", value: "$4.2M" },
      ],
    },
    {
      id: "4",
      title: "Personalized Content Recommendation Engine",
      client: "StreamMedia Platform",
      industry: "Media & Entertainment",
      image: "media",
      problem:
        "User engagement was declining as viewers struggled to discover relevant content in a catalog of 100,000+ titles. The existing recommendation system was generic and failed to capture individual preferences.",
      solution:
        "We designed a multi-faceted recommendation engine combining collaborative filtering, content-based filtering, and deep learning. The system analyzes viewing history, real-time behavior, and contextual factors to deliver hyper-personalized suggestions.",
      impact: [
        "156% increase in content discovery",
        "Average watch time increased by 38%",
        "User retention improved by 52%",
        "3.2x increase in content library utilization",
      ],
      technologies: [
        "PyTorch",
        "Recommendation Systems",
        "Spark",
        "Cassandra",
        "FastAPI",
        "Redis",
      ],
      metrics: [
        { label: "Content Discovery", value: "+156%" },
        { label: "Watch Time", value: "+38%" },
        { label: "Retention", value: "+52%" },
      ],
    },
  ];

  const selectedCaseStudy = caseStudies.find((cs) => cs.id === selectedCase);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 text-white bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold">Case Studies</h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300">
            Real-world AI solutions delivering measurable business impact
          </p>
        </div>
      </section>

      {/* Case Study Grid */}
      {!selectedCase ? (
        <section className="py-20 bg-white">
          <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="overflow-hidden transition-all bg-white border shadow-lg cursor-pointer rounded-xl hover:shadow-2xl border-slate-200 group"
                onClick={() => setSelectedCase(study.id)}
              >
                <div className="flex items-center justify-center h-48 bg-gradient-to-br from-cyan-500 to-blue-600">
                  <TrendingUp className="w-20 h-20 text-white opacity-80" />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-semibold text-cyan-600">
                    {study.industry}
                  </div>
                  <h3 className="mb-3 text-xl font-bold transition-colors text-slate-900 group-hover:text-cyan-600">
                    {study.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-cyan-600">
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center font-medium transition-transform text-cyan-600 group-hover:translate-x-2">
                    <span>Read case study</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="py-20 bg-white">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedCase(null)}
              className="flex items-center mb-8 space-x-2 font-medium text-cyan-600 hover:text-cyan-700"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to all case studies</span>
            </button>

            {selectedCaseStudy && (
              <div>
                <div className="mb-8">
                  <div className="mb-2 text-sm font-semibold text-cyan-600">
                    {selectedCaseStudy.industry}
                  </div>
                  <h1 className="mb-4 text-4xl font-bold text-slate-900">
                    {selectedCaseStudy.title}
                  </h1>
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">
                      {selectedCaseStudy.client}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center h-64 mb-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
                  <TrendingUp className="w-32 h-32 text-white opacity-80" />
                </div>

                <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
                  {selectedCaseStudy.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-6 text-center bg-slate-50 rounded-xl"
                    >
                      <div className="mb-2 text-4xl font-bold text-cyan-600">
                        {metric.value}
                      </div>
                      <div className="text-slate-700">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-12">
                  <div>
                    <div className="flex items-center mb-4 space-x-3">
                      <Zap className="w-6 h-6 text-red-500" />
                      <h2 className="text-2xl font-bold text-slate-900">
                        The Challenge
                      </h2>
                    </div>
                    <p className="text-lg leading-relaxed text-slate-700">
                      {selectedCaseStudy.problem}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-4 space-x-3">
                      <TrendingUp className="w-6 h-6 text-blue-500" />
                      <h2 className="text-2xl font-bold text-slate-900">
                        Our Solution
                      </h2>
                    </div>
                    <p className="mb-6 text-lg leading-relaxed text-slate-700">
                      {selectedCaseStudy.solution}
                    </p>
                    <div className="p-6 bg-slate-50 rounded-xl">
                      <h3 className="mb-4 font-semibold text-slate-900">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCaseStudy.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-cyan-100 text-cyan-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4 space-x-3">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                      <h2 className="text-2xl font-bold text-slate-900">
                        Business Impact
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {selectedCaseStudy.impact.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start p-4 space-x-3 rounded-lg bg-slate-50"
                        >
                          <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full" />
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-12 mt-12 text-center border-t border-slate-200">
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Ready to achieve similar results?
                  </h3>
                  <p className="mb-6 text-slate-600">
                    Let's discuss how we can help transform your business with
                    AI
                  </p>
                  <button
                    onClick={() => navigate("/contact")}
                    className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all rounded-lg bg-cyan-500 hover:bg-cyan-600"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {!selectedCase && (
        <section className="py-20 text-center text-white bg-gradient-to-br from-cyan-500 to-blue-600">
          <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
            <h2 className="mb-6 text-4xl font-bold">Start Your Success Story</h2>
            <p className="mb-8 text-xl text-cyan-50">
              Join leading companies that have transformed their business with
              our AI solutions
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center px-8 py-4 space-x-2 text-lg font-semibold transition-all bg-white rounded-lg text-cyan-600 hover:bg-slate-100 hover:scale-105"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
