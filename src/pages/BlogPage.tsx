
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Algorithm Complexity and Big O Notation',
    excerpt: 'An in-depth explanation of algorithm complexity analysis and why it matters for efficient code.',
    author: 'Jane Smith',
    date: '2025-04-15',
    coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['Algorithms', 'Computer Science', 'Performance'],
    category: 'Education'
  },
  {
    id: 2,
    title: 'Mastering Dynamic Programming: A Step-by-Step Guide',
    excerpt: 'Learn how to approach and solve dynamic programming problems with practical examples.',
    author: 'John Doe',
    date: '2025-04-10',
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['Dynamic Programming', 'Algorithms', 'Problem Solving'],
    category: 'Tutorials'
  },
  {
    id: 3,
    title: 'Graph Algorithms Every Developer Should Know',
    excerpt: 'A comprehensive overview of essential graph algorithms and their real-world applications.',
    author: 'Alex Johnson',
    date: '2025-04-05',
    coverImage: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
    tags: ['Graphs', 'Algorithms', 'Data Structures'],
    category: 'Education'
  },
  {
    id: 4,
    title: 'The Art of Technical Interviews: Algorithms Edition',
    excerpt: 'Strategies and practice tips to ace the algorithm portion of technical interviews.',
    author: 'Sarah Miller',
    date: '2025-03-28',
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    tags: ['Interviews', 'Career', 'Algorithms'],
    category: 'Career'
  },
];

// Categories for filtering
const categories = [
  'All',
  'Education',
  'Tutorials',
  'Career',
  'Research',
  'News'
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  useEffect(() => {
    let result = blogPosts;
    
    if (searchTerm) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(result);
  }, [searchTerm, selectedCategory]);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-2 bg-blue-500/20 rounded-full mb-4">
              <BookOpen className="h-6 w-6 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              AlgoMaster Blog
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mb-8">
              Dive into expert insights on algorithms, data structures, system design, and programming best practices to level up your technical skills.
            </p>
            
            {/* Search and Filter */}
            <div className="w-full max-w-3xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 pl-10 bg-gray-900/60 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <section className="mb-16">
            <Link to={`/blog/${filteredPosts[0].id}`} className="block">
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                <img
                  src={filteredPosts[0].coverImage}
                  alt={filteredPosts[0].title}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/30 text-blue-300 text-sm font-medium rounded-full border border-blue-500/50">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 max-w-3xl">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-gray-400">
                    <User size={16} className="mr-1" />
                    <span className="mr-4">{filteredPosts[0].author}</span>
                    <Calendar size={16} className="mr-1" />
                    <span>
                      {new Date(filteredPosts[0].date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}
        
        {/* Blog Posts Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <article className="rounded-xl overflow-hidden bg-gray-900/40 border border-gray-800/50 backdrop-blur-sm hover:bg-gray-800/40 transition-colors group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-blue-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <User size={14} className="mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar size={14} className="mr-1" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-3 rounded-full bg-blue-500/20 mb-4">
              <Search size={24} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search or filter to find what you're looking for</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
