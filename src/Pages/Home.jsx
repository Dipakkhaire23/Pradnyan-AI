import { Brain, Database, Sparkles, TrendingUp, ArrowRight, CheckCircle, Users } from 'lucide-react';
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const services = [
    {
      icon: Brain,
      title: 'AI & DS Consulting',
      description: 'Strategic AI guidance to transform your business with data-driven insights.',
      id: 'ai-consulting'
    },
    {
      icon: Sparkles,
      title: 'Custom AI/ML Models',
      description: 'Tailored machine learning solutions designed for your specific challenges.',
      id: 'model-development'
    },
    {
      icon: Database,
      title: 'Data Strategy & Engineering',
      description: 'End-to-end data pipelines, warehousing, and infrastructure solutions.',
      id: 'data-strategy'
    },
    {
      icon: TrendingUp,
      title: 'Generative AI Solutions',
      description: 'Cutting-edge LLMs and generative models to unlock new possibilities.',
      id: 'generative-ai'
    }
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Enterprise Clients' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '10+', label: 'AI Specialists' }
  ];

  const testimonials = [
    {
      quote: 'Pradnyan AI transformed our data infrastructure and delivered ML models that increased our revenue by 40%.',
      author: 'Sarah Chen',
      role: 'CTO, TechCorp'
    },
    {
      quote: 'Their expertise in generative AI helped us launch a revolutionary product ahead of schedule.',
      author: 'Michael Rodriguez',
      role: 'VP of Product, InnovateLabs'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 255, 255, 0.2) 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative max-w-6xl px-2 mx-auto py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-6xl font-bold leading-tight lg:text-4xl">
                We Build Intelligent Systems to Solve Your
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text"> Toughest Challenges</span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-slate-300">
                Transform your business with cutting-edge AI and machine learning solutions.
                From strategy to deployment, we're your trusted partner in the AI revolution.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
              
                <button
                  onClick={() => navigate('/case-studies')}
                  className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold transition-all rounded-lg bg-cyan-500 hover:bg-cyan-600 hover:scale-105"
                >
                  View Case Studies
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center w-full border h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border-cyan-500/30">
                <Brain className="w-48 h-48 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold lg:text-5xl text-cyan-400">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">Our Services</h2>
            <p className="text-xl text-slate-600">Comprehensive AI solutions tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
             {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 transition-all bg-white border shadow-lg cursor-pointer rounded-xl hover:shadow-xl border-slate-200 hover:border-cyan-400 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-4 transition-transform rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mb-4 text-slate-600">{service.description}</p>
                  <div
                    className="flex items-center font-medium cursor-pointer text-cyan-500 group-hover:translate-x-2"
                    onClick={() => navigate(`/services?service=${service.id}`)}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-slate-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">Why Choose Pradnyan AI?</h2>
            <p className="text-xl text-slate-600">We deliver measurable results with proven expertise</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: 'Deep Technical Expertise', description: 'Our team of PhDs and ML engineers brings cutting-edge research into production.' },
              { title: 'Business-First Approach', description: 'We focus on ROI and measurable outcomes, not just technology for its sake.' },
              { title: 'End-to-End Solutions', description: 'From strategy to deployment and maintenance, we handle the entire lifecycle.' }
            ].map((item, index) => (
              <div key={index} className="p-8 bg-white shadow-md rounded-xl">
                <CheckCircle className="w-12 h-12 mb-4 text-cyan-500" />
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-white bg-slate-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">What Our Clients Say</h2>
            <p className="text-xl text-slate-300">Trusted by industry leaders worldwide</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 border bg-slate-800 rounded-xl border-slate-700">
                <div className="flex items-center mb-4">
                  <Users className="w-12 h-12 text-cyan-400" />
                </div>
                <p className="mb-6 text-lg italic leading-relaxed text-slate-300">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mb-8 text-xl text-cyan-50">
            Let's discuss how AI can drive your next breakthrough innovation.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-8 py-4 space-x-2 text-lg font-semibold transition-all bg-white rounded-lg text-cyan-600 hover:bg-slate-100 hover:scale-105"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
