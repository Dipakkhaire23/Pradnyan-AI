import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';

export default function Insights({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'generative-ai', label: 'Generative AI' },
    { id: 'data-engineering', label: 'Data Engineering' },
    { id: 'industry-trends', label: 'Industry Trends' },
    { id: 'case-studies', label: 'Case Studies' }
  ];

  const posts = [
    {
      id: '1',
      title: 'The Future of Enterprise AI: Trends Shaping 2025',
      excerpt:
        'Explore the key AI trends that will define enterprise technology in 2025, from autonomous agents to multimodal AI systems.',
      author: 'Dr. Sarah Johnson',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'industry-trends',
      image: 'trends'
    },
    {
      id: '2',
      title: 'Building Production-Ready LLM Applications: Lessons Learned',
      excerpt:
        'A comprehensive guide to deploying large language models in production environments, including performance optimization and cost management.',
      author: 'Michael Chen',
      date: '2024-12-10',
      readTime: '12 min read',
      category: 'generative-ai',
      image: 'llm'
    },
    {
      id: '3',
      title: 'Data Mesh Architecture: When and Why You Need It',
      excerpt:
        'Understanding data mesh principles and determining if this decentralized approach is right for your organization.',
      author: 'Emily Rodriguez',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'data-engineering',
      image: 'data-mesh'
    },
    {
      id: '4',
      title: 'Ethical AI: Building Trust and Transparency in ML Systems',
      excerpt:
        'Best practices for developing AI systems that are fair, transparent, and accountable to stakeholders.',
      author: 'Dr. James Liu',
      date: '2024-11-28',
      readTime: '15 min read',
      category: 'ai-ml',
      image: 'ethics'
    },
    {
      id: '5',
      title: 'RAG vs Fine-tuning: Choosing the Right Approach for Your Use Case',
      excerpt:
        'A detailed comparison of Retrieval Augmented Generation and fine-tuning strategies for customizing language models.',
      author: 'Alex Kumar',
      date: '2024-11-20',
      readTime: '9 min read',
      category: 'generative-ai',
      image: 'rag'
    },
    {
      id: '6',
      title: 'Real-time ML: Building Low-Latency Prediction Systems',
      excerpt:
        'Technical insights into architecting machine learning systems that deliver predictions in milliseconds.',
      author: 'Sofia Martinez',
      date: '2024-11-15',
      readTime: '11 min read',
      category: 'ai-ml',
      image: 'realtime'
    },
    {
      id: '7',
      title: 'From Proof of Concept to Production: Scaling AI Successfully',
      excerpt:
        'Common pitfalls in scaling AI initiatives and proven strategies for moving from pilot to production.',
      author: 'Dr. Sarah Johnson',
      date: '2024-11-08',
      readTime: '13 min read',
      category: 'industry-trends',
      image: 'scaling'
    },
    {
      id: '8',
      title: 'Vector Databases: The Backbone of Modern AI Applications',
      excerpt:
        'Understanding vector databases and their critical role in building semantic search and recommendation systems.',
      author: 'Michael Chen',
      date: '2024-11-01',
      readTime: '7 min read',
      category: 'data-engineering',
      image: 'vector'
    },
    {
      id: '9',
      title: 'Multi-Modal AI: Beyond Text and Images',
      excerpt:
        'Exploring the latest advances in multi-modal AI that can process and generate content across different formats.',
      author: 'Emily Rodriguez',
      date: '2024-10-25',
      readTime: '10 min read',
      category: 'ai-ml',
      image: 'multimodal'
    }
  ];

  const filteredPosts = posts
    .filter((post) => selectedCategory === 'all' || post.category === selectedCategory)
    .filter(
      (post) =>
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const featuredPost = posts[0];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 text-white bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-5xl font-bold">Insights & Research</h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-300">
              Thought leadership, technical deep-dives, and industry analysis from our AI experts
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute w-5 h-5 transform -translate-y-1/2 left-4 top-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 pl-12 pr-4 text-white border rounded-lg bg-slate-800 border-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky z-40 py-8 bg-white border-b top-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex pb-2 space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Featured Article</h2>
            <div className="grid grid-cols-1 gap-8 overflow-hidden shadow-2xl lg:grid-cols-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl">
              <div className="flex items-center justify-center h-96 bg-gradient-to-br from-cyan-500 to-blue-600">
                <div className="text-6xl font-bold text-white opacity-20">AI</div>
              </div>
              <div className="flex flex-col justify-center p-8 text-white lg:p-12">
                <div className="mb-3 text-sm font-semibold text-cyan-400">
                  {categories.find((c) => c.id === featuredPost.category)?.label}
                </div>
                <h3 className="mb-4 text-3xl font-bold">{featuredPost.title}</h3>
                <p className="mb-6 text-lg text-slate-300">{featuredPost.excerpt}</p>
                <div className="flex items-center mb-6 space-x-6 text-sm text-slate-400">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <button className="inline-flex items-center self-start px-6 py-3 space-x-2 font-semibold transition-all rounded-lg bg-cyan-500 hover:bg-cyan-600">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Latest Articles */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Latest Articles</h2>
            {filteredPosts.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-lg text-slate-600">No articles found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.slice(1).map((post) => (
                  <div
                    key={post.id}
                    className="overflow-hidden transition-all bg-white border shadow-lg cursor-pointer rounded-xl hover:shadow-2xl border-slate-200 group"
                  >
                    <div className="flex items-center justify-center h-48 bg-gradient-to-br from-slate-700 to-slate-900">
                      <div className="text-4xl font-bold text-white opacity-20">AI</div>
                    </div>
                    <div className="p-6">
                      <div className="mb-2 text-xs font-semibold text-cyan-600">
                        {categories.find((c) => c.id === post.category)?.label}
                      </div>
                      <h3 className="mb-3 text-xl font-bold transition-colors text-slate-900 group-hover:text-cyan-600 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mb-4 text-slate-600 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center mb-4 space-x-4 text-xs text-slate-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center font-medium transition-transform text-cyan-600 group-hover:translate-x-2">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Stay Updated</h2>
          <p className="mb-8 text-xl text-slate-600">
            Subscribe to our newsletter for the latest AI insights and industry trends
          </p>
          <form className="flex flex-col max-w-2xl gap-4 mx-auto sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border rounded-lg border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 py-3 font-semibold text-white transition-colors rounded-lg bg-cyan-500 hover:bg-cyan-600 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
