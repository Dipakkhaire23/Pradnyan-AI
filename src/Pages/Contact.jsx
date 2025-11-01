import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'contact@pradnyan.ai',
      link: 'mailto:contact@pradnyan.ai'
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Office',
      detail: '123 AI Boulevard, Tech City, TC 12345',
      link: '#'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 AI Boulevard, Suite 100',
      region: 'San Francisco, CA 94105',
      phone: '+1 (555) 123-4567'
    },
    {
      city: 'New York',
      address: '456 Data Street, Floor 15',
      region: 'New York, NY 10001',
      phone: '+1 (555) 234-5678'
    },
    {
      city: 'London',
      address: '789 ML Road, Level 5',
      region: 'London, UK EC1A 1BB',
      phone: '+44 20 1234 5678'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 text-white bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold">Get in Touch</h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300">
            Ready to transform your business with AI? Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 mb-16 lg:grid-cols-3">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="p-8 text-center transition-all border bg-slate-50 rounded-xl hover:bg-slate-100 border-slate-200 hover:border-cyan-400 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-transform rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{info.title}</h3>
                  <p className="text-slate-600">{info.detail}</p>
                </a>
              );
            })}
          </div>

          {/* Contact Form & Office Info */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold text-slate-900">Send Us a Message</h2>
                <p className="text-lg text-slate-600">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center border border-green-200 bg-green-50 rounded-xl">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-green-900">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border rounded-lg border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border rounded-lg border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border rounded-lg border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border rounded-lg border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border rounded-lg border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Message *</label>
                    <textarea
                      rows="6"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border rounded-lg resize-none border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all rounded-lg bg-cyan-500 hover:bg-cyan-600 hover:scale-105"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Office Info */}
            <div>
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold text-slate-900">Our Offices</h2>
                <p className="text-lg text-slate-600">
                  Visit us at one of our global locations.
                </p>
              </div>

              <div className="mb-8 space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="p-6 border bg-slate-50 rounded-xl border-slate-200">
                    <h3 className="mb-3 text-xl font-bold text-slate-900">{office.city}</h3>
                    <div className="space-y-2 text-slate-600">
                      <p>{office.address}</p>
                      <p>{office.region}</p>
                      <p className="flex items-center space-x-2 font-medium text-cyan-600">
                        <Phone className="w-4 h-4" />
                        <span>{office.phone}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 text-white bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl">
                <h3 className="mb-4 text-2xl font-bold">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-400">
                  * Times shown are in local timezone for each office
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Map Section */}
<section className="py-16 bg-slate-50">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
      {/* Map Info */}
      <div className="p-6 shadow-lg bg-green-50 rounded-2xl">
        <h2 className="mb-4 text-2xl font-bold text-green-900">Our Main Office</h2>
        <p className="mb-2 text-gray-700">
          <strong>Address:</strong> Vishwakarma Institute of Information Technology, Pune, Maharashtra, India
        </p>
        <p className="mb-2 text-gray-700">
          <strong>Phone:</strong> +91 9876543210
        </p>
        <p className="mb-2 text-gray-700">
          <strong>Email:</strong> info@viitpune.edu.in
        </p>
        <p className="mt-4 text-gray-600">
          Visit our main office for business queries, collaborations, or to learn more about our initiatives.
        </p>
      </div>

      {/* Embedded Google Map */}
      <div className="p-6 shadow-lg bg-green-50 rounded-2xl">
        <iframe
          title="Main Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.563195809777!2d73.94924927496153!3d18.559043268566573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c29f8f04d5cf%3A0x4c0fbe88d7d8dc7d!2sVishwakarma%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1716549876983!5m2!1sen!2sin"
          width="100%"
          height="300"
          loading="lazy"
          className="w-full border rounded-lg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Prefer to Talk?</h2>
          <p className="mb-8 text-xl text-slate-600">
            Schedule a call with our team to discuss your AI needs in detail.
          </p>
          <button className="inline-flex items-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all rounded-lg bg-slate-900 hover:bg-slate-800">
            <Phone className="w-5 h-5" />
            <span>Schedule a Call</span>
          </button>
        </div>
      </section>
    </div>
  );
}
