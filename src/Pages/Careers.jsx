import { Briefcase, MapPin, Clock, ArrowRight, Users, TrendingUp, Award, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Careers({ onNavigate }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    resume: '',
    coverLetter: ''
  });

  const benefits = [
    { icon: TrendingUp, title: 'Career Growth', description: 'Clear career paths and continuous learning opportunities' },
    { icon: Users, title: 'Amazing Team', description: 'Work with world-class AI researchers and engineers' },
    { icon: Award, title: 'Competitive Pay', description: 'Industry-leading salaries and equity packages' },
    { icon: Heart, title: 'Work-Life Balance', description: 'Flexible schedules and remote work options' }
  ];

  const jobs = [
    {
      id: '1',
      title: 'Senior Machine Learning Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      description: "We're looking for an experienced ML engineer to design, build, and deploy production machine learning systems for our enterprise clients.",
      requirements: [
        '5+ years of experience in machine learning engineering',
        'Strong programming skills in Python and experience with ML frameworks (TensorFlow, PyTorch)',
        'Experience deploying ML models to production environments',
        'Strong understanding of ML algorithms, model optimization, and MLOps',
        'Excellent communication and collaboration skills',
        'MS or PhD in Computer Science, ML, or related field preferred'
      ],
      responsibilities: [
        'Design and implement scalable ML systems',
        'Collaborate with data scientists to productionize models',
        'Build and maintain ML infrastructure and pipelines',
        'Optimize model performance and cost-efficiency',
        'Mentor junior engineers and contribute to technical strategy'
      ]
    },
    {
      id: '2',
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'Remote / Boston, MA',
      type: 'Full-time',
      description: 'Join our research team to push the boundaries of AI and develop novel algorithms that solve real-world problems.',
      requirements: [
        'PhD in Computer Science, Machine Learning, AI, or related field',
        'Strong publication record in top-tier conferences (NeurIPS, ICML, ICLR, etc.)',
        'Deep expertise in one or more areas: NLP, Computer Vision, Reinforcement Learning',
        'Proficiency in Python and deep learning frameworks',
        'Ability to translate research into practical applications',
        'Strong mathematical background'
      ],
      responsibilities: [
        'Conduct cutting-edge research in machine learning',
        'Publish research findings in top-tier conferences',
        'Collaborate with engineering teams to apply research',
        'Stay current with latest AI/ML research trends',
        'Contribute to patent applications and technical whitepapers'
      ]
    },
    {
      id: '3',
      title: 'Data Engineer',
      department: 'Data',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      description: 'Build robust data pipelines and infrastructure that power our AI solutions and enable data-driven decision making.',
      requirements: [
        '4+ years of experience in data engineering',
        'Strong SQL skills and experience with modern data warehouses (Snowflake, BigQuery)',
        'Experience with ETL/ELT tools and data pipeline orchestration (Airflow, dbt)',
        'Proficiency in Python and/or Scala',
        'Knowledge of cloud platforms (AWS, GCP, or Azure)',
        'Understanding of data modeling and architecture'
      ],
      responsibilities: [
        'Design and build scalable data pipelines',
        'Develop and maintain data warehouse infrastructure',
        'Optimize data storage and query performance',
        'Implement data quality monitoring and validation',
        'Collaborate with data scientists and analysts'
      ]
    },
    {
      id: '4',
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      description: 'Work directly with clients to understand their challenges and design AI solutions that deliver measurable business value.',
      requirements: [
        '6+ years of experience in technical consulting or solution architecture',
        'Deep understanding of AI/ML technologies and use cases',
        'Experience with cloud platforms and modern tech stacks',
        'Strong presentation and communication skills',
        'Ability to translate business requirements into technical solutions',
        'Experience leading client engagements and workshops'
      ],
      responsibilities: [
        'Lead discovery sessions with enterprise clients',
        'Design end-to-end AI solution architectures',
        'Create technical proposals and presentations',
        'Collaborate with engineering teams on implementation',
        'Serve as trusted advisor to clients on AI strategy'
      ]
    },
    {
      id: '5',
      title: 'NLP Engineer',
      department: 'Engineering',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      description: 'Build state-of-the-art natural language processing systems including chatbots, document analysis, and language understanding applications.',
      requirements: [
        '3+ years of experience in NLP or related field',
        'Strong knowledge of modern NLP techniques and transformers',
        'Experience with LLMs and prompt engineering',
        'Proficiency in Python and NLP libraries (spaCy, NLTK, Hugging Face)',
        'Experience with production deployment of NLP systems',
        'MS in Computer Science or related field preferred'
      ],
      responsibilities: [
        'Develop and deploy NLP models and applications',
        'Fine-tune and optimize large language models',
        'Build RAG systems and conversational AI applications',
        'Evaluate and improve model performance',
        'Stay current with latest NLP research and techniques'
      ]
    },
    {
      id: '6',
      title: 'Computer Vision Engineer',
      department: 'Engineering',
      location: 'Remote / Los Angeles, CA',
      type: 'Full-time',
      description: 'Create innovative computer vision solutions for object detection, image classification, and visual AI applications.',
      requirements: [
        '3+ years of experience in computer vision',
        'Strong knowledge of CNNs and modern CV architectures',
        'Experience with image processing and augmentation techniques',
        'Proficiency in Python and CV libraries (OpenCV, PIL)',
        'Experience with PyTorch or TensorFlow',
        'MS in Computer Science, Computer Vision, or related field preferred'
      ],
      responsibilities: [
        'Design and implement computer vision models',
        'Optimize models for real-time inference',
        'Work on object detection, segmentation, and classification tasks',
        'Collaborate with product teams on feature development',
        'Contribute to technical documentation and code reviews'
      ]
    }
  ];

  const selectedJobDetails = jobs.find(j => j.id === selectedJob);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will review it and get back to you soon.');
    setShowApplicationForm(false);
    setFormData({ name: '', email: '', phone: '', linkedin: '', resume: '', coverLetter: '' });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold">Join Our Team</h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300">
            Build the future of AI with a team of world-class researchers, engineers, and innovators
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">Why Pradnyan AI?</h2>
            <p className="text-xl text-slate-600">More than just a job—it's a career-defining opportunity</p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">Open Positions</h2>
          <p className="mb-12 text-xl text-slate-600">Find your next opportunity</p>

          {!selectedJob ? (
            <div className="grid grid-cols-1 gap-6 text-left">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="p-8 transition-all bg-white border shadow-md cursor-pointer rounded-xl hover:shadow-xl border-slate-200"
                  onClick={() => setSelectedJob(job.id)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="mb-3 text-2xl font-bold text-slate-900">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4 text-slate-600">
                        <div className="flex items-center space-x-2"><Briefcase className="w-4 h-4" /><span>{job.department}</span></div>
                        <div className="flex items-center space-x-2"><MapPin className="w-4 h-4" /><span>{job.location}</span></div>
                        <div className="flex items-center space-x-2"><Clock className="w-4 h-4" /><span>{job.type}</span></div>
                      </div>
                      <p className="text-slate-600">{job.description}</p>
                    </div>
                    <button className="inline-flex items-center px-6 py-3 mt-6 space-x-2 font-semibold text-white transition-colors rounded-lg lg:mt-0 bg-cyan-500 hover:bg-cyan-600">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto text-left">
              <button
                onClick={() => setSelectedJob(null)}
                className="flex items-center mb-8 space-x-2 font-medium text-cyan-600 hover:text-cyan-700"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                <span>Back to all positions</span>
              </button>

              {selectedJobDetails && (
                <div className="p-8 bg-white shadow-lg rounded-xl">
                  <h2 className="mb-4 text-3xl font-bold text-slate-900">{selectedJobDetails.title}</h2>
                  <div className="flex flex-wrap gap-4 mb-6 text-slate-600">
                    <div className="flex items-center space-x-2"><Briefcase className="w-5 h-5" /><span>{selectedJobDetails.department}</span></div>
                    <div className="flex items-center space-x-2"><MapPin className="w-5 h-5" /><span>{selectedJobDetails.location}</span></div>
                    <div className="flex items-center space-x-2"><Clock className="w-5 h-5" /><span>{selectedJobDetails.type}</span></div>
                  </div>

                  <p className="mb-8 text-lg text-slate-700">{selectedJobDetails.description}</p>

                  <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-bold">Responsibilities</h3>
                    <ul className="space-y-3">
                      {selectedJobDetails.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 mt-2 rounded-full bg-cyan-500" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-bold">Requirements</h3>
                    <ul className="space-y-3">
                      {selectedJobDetails.requirements.map((r, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 mt-2 rounded-full bg-cyan-500" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className="inline-flex items-center justify-center w-full px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all rounded-lg bg-cyan-500 hover:bg-cyan-600"
                  >
                    <span>Apply for this Position</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 text-center text-white bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold">Don't See the Right Role?</h2>
          <p className="mb-8 text-xl text-cyan-50">
            We're always looking for exceptional talent. Send us your resume and let's talk about future opportunities.
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
