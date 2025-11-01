import { Target, Eye, Award, Users, Linkedin, ArrowRight } from 'lucide-react';

export default function About({ onNavigate }) {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description:
        'We push boundaries and embrace cutting-edge research to deliver breakthrough solutions.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description:
        'Your success is our success. We work as an extension of your team, not just a vendor.',
    },
    {
      icon: Award,
      title: 'Excellence & Integrity',
      description:
        'We maintain the highest standards in our work and our relationships.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description:
        'Clear communication, honest assessments, and no overselling or underdelivering.',
    },
  ];

  const team = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      role: 'Co-Founder & Chief AI Officer',
      bio: 'PhD in Machine Learning from MIT. Previously led AI research at Google. Published 50+ papers in top-tier conferences.',
      linkedin: '#',
      image: 'avatar1',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Co-Founder & CEO',
      bio: '15+ years in tech leadership. Former VP of Engineering at a Fortune 500 company. Expert in scaling AI products.',
      linkedin: '#',
      image: 'avatar2',
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Data Science',
      bio: 'PhD in Computer Science. Specializes in deep learning and NLP. Former senior researcher at Microsoft Research.',
      linkedin: '#',
      image: 'avatar3',
    },
    {
      id: '4',
      name: 'Alex Kumar',
      role: 'Head of Engineering',
      bio: '12+ years building scalable ML systems. Led engineering teams at multiple startups through successful exits.',
      linkedin: '#',
      image: 'avatar4',
    },
    {
      id: '5',
      name: 'Dr. James Liu',
      role: 'Principal ML Engineer',
      bio: 'PhD in Applied Mathematics. Expert in optimization algorithms and reinforcement learning. 30+ patents.',
      linkedin: '#',
      image: 'avatar5',
    },
    {
      id: '6',
      name: 'Sofia Martinez',
      role: 'Director of AI Solutions',
      bio: '10+ years in consulting and solution architecture. Specializes in translating business needs into technical solutions.',
      linkedin: '#',
      image: 'avatar6',
    },
  ];

  const stats = [
    { value: '2019', label: 'Founded' },
    { value: '50+', label: 'Team Members' },
    { value: '30+', label: 'Enterprise Clients' },
    { value: '100+', label: 'Projects Delivered' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold">About Pradnyan AI</h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300">
            We're on a mission to democratize AI and help organizations unlock the full potential of their data
          </p>
        </div>
      </section>

      {/* Stats + Story */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 mb-20 text-center lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="mb-2 text-4xl font-bold lg:text-5xl text-cyan-600">{stat.value}</div>
                <div className="text-slate-700">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-slate-900">Our Story</h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-700">
                <p>
                  Pradnyan AI was founded in 2019 by a team of AI researchers and engineers who saw a
                  critical gap between cutting-edge research and practical business applications.
                </p>
                <p>
                  We set out to change that. Our approach combines deep technical expertise with a
                  business-first mindset. We don't just build impressive models—we build solutions that
                  drive real ROI and transform operations.
                </p>
                <p>
                  Today, we're proud to partner with leading organizations across industries, from Fortune
                  500 enterprises to innovative startups.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center w-full border h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border-cyan-500/30">
                <Users className="w-48 h-48 text-cyan-600 opacity-40" />
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-20">
            <h2 className="mb-4 text-4xl font-bold text-center text-slate-900">Our Mission</h2>
            <div className="max-w-4xl p-12 mx-auto text-center text-white bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl">
              <Target className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
              <p className="text-2xl leading-relaxed">
                To empower organizations with intelligent systems that solve their most complex challenges.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="mb-20">
            <h2 className="mb-4 text-4xl font-bold text-center text-slate-900">Our Vision</h2>
            <div className="max-w-4xl p-12 mx-auto text-center text-white bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
              <Eye className="w-16 h-16 mx-auto mb-6 text-white" />
              <p className="text-2xl leading-relaxed">
                A world where every organization can harness the transformative power of AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">Our Values</h2>
          <p className="mb-12 text-xl text-slate-600">The principles that guide everything we do</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="p-8 text-center bg-white shadow-md rounded-xl">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">Meet Our Team</h2>
          <p className="mb-12 text-xl text-slate-600">World-class experts passionate about AI and your success</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.id}
                className="overflow-hidden transition-all bg-white border shadow-lg rounded-xl hover:shadow-2xl border-slate-200"
              >
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-slate-700 to-slate-900">
                  <div className="flex items-center justify-center w-32 h-32 rounded-full bg-slate-600">
                    <Users className="w-16 h-16 text-slate-400" />
                  </div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="mb-1 text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="mb-4 font-medium text-cyan-600">{member.role}</p>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center space-x-2 font-medium text-cyan-600 hover:text-cyan-700"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 text-white bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="grid items-center grid-cols-1 gap-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">Join Our Team</h2>
            <p className="mb-8 text-xl leading-relaxed text-slate-300">
              We're always looking for talented individuals passionate about AI.
            </p>
            <button
              onClick={() => onNavigate('careers')}
              className="inline-flex items-center px-8 py-4 space-x-2 text-lg font-semibold transition-all rounded-lg bg-cyan-500 hover:bg-cyan-600 hover:scale-105"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8 border bg-slate-800 rounded-2xl border-slate-700">
            <h3 className="mb-6 text-2xl font-bold">Why Join Pradnyan AI?</h3>
            <ul className="space-y-4 text-left text-slate-300">
              {[
                'Work on cutting-edge AI projects with real impact',
                'Collaborate with world-class researchers and engineers',
                'Competitive compensation and equity packages',
                'Flexible remote work options',
                'Continuous learning and development opportunities',
                'Inclusive, diverse, and supportive culture',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-cyan-400" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center text-white bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mb-8 text-xl text-cyan-50">
            Let's discuss how our team can help you achieve your AI goals
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-8 py-4 space-x-2 text-lg font-semibold transition-all bg-white rounded-lg text-cyan-600 hover:bg-slate-100 hover:scale-105"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
