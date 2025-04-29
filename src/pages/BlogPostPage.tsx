
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag, 
  Share2, 
  MessageCircle, 
  ThumbsUp, 
  Bookmark,
  ArrowLeft,
  Copy,
  Code as CodeIcon
} from 'lucide-react';
import { Button } from '../components/ui/button';

// Mock blog post data
const blogPost = {
  id: 1,
  title: 'Understanding Algorithm Complexity and Big O Notation',
  content: `
    <p>Algorithm complexity is a measure of the amount of resources (time and space) that an algorithm needs to run as a function of the size of its input. Understanding complexity is crucial for comparing algorithms and predicting how they will perform with different inputs.</p>
    
    <h2>Time Complexity</h2>
    <p>Time complexity measures how the runtime of an algorithm increases with the size of the input. It's usually expressed using Big O notation.</p>
    
    <h3>Common Time Complexities:</h3>
    <ul>
      <li><strong>O(1)</strong> - Constant time: The algorithm takes the same amount of time regardless of the input size.</li>
      <li><strong>O(log n)</strong> - Logarithmic time: The runtime grows logarithmically with the input size.</li>
      <li><strong>O(n)</strong> - Linear time: The runtime grows linearly with the input size.</li>
      <li><strong>O(n log n)</strong> - Linearithmic time: Common in efficient sorting algorithms like merge sort and heap sort.</li>
      <li><strong>O(n²)</strong> - Quadratic time: Often seen in algorithms with nested loops.</li>
      <li><strong>O(2^n)</strong> - Exponential time: The runtime doubles with each addition to the input.</li>
    </ul>
    
    <h2>Example: Binary Search</h2>
    <p>Binary search is an efficient algorithm for finding an element in a sorted array. Let's look at its implementation:</p>
  `,
  author: 'Jane Smith',
  authorTitle: 'Senior Algorithm Engineer',
  authorBio: 'Jane specializes in algorithm optimization and teaches advanced computer science courses at MIT.',
  authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  date: '2025-04-15',
  readTime: '8 min read',
  coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  tags: ['Algorithms', 'Computer Science', 'Performance'],
  category: 'Education',
  codeSnippets: [
    {
      language: 'javascript',
      code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    // Found the target
    if (arr[mid] === target) {
      return mid;
    }
    
    // Search in the left half
    if (arr[mid] > target) {
      right = mid - 1;
    } 
    // Search in the right half
    else {
      left = mid + 1;
    }
  }
  
  // Target not found
  return -1;
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(sortedArray, 7)); // Output: 3
console.log(binarySearch(sortedArray, 6)); // Output: -1`
    }
  ],
  relatedPosts: [
    {
      id: 2,
      title: 'Mastering Dynamic Programming: A Step-by-Step Guide',
      excerpt: 'Learn how to approach and solve dynamic programming problems with practical examples.',
      coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    },
    {
      id: 3,
      title: 'Graph Algorithms Every Developer Should Know',
      excerpt: 'A comprehensive overview of essential graph algorithms and their real-world applications.',
      coverImage: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
    }
  ]
};

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState<number | null>(null);
  
  const handleCopyCode = (index: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(index);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <Link to="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>
        
        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center space-x-2 mb-4">
            <span className="px-3 py-1 bg-blue-500/30 text-blue-300 text-sm font-medium rounded-full border border-blue-500/50">
              {blogPost.category}
            </span>
            <span className="text-gray-400 text-sm">{blogPost.readTime}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center">
            <img 
              src={blogPost.authorAvatar} 
              alt={blogPost.author}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-medium">{blogPost.author}</p>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                <span>
                  {new Date(blogPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
            
            <div className="ml-auto flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-700 bg-gray-900/50 text-gray-300 hover:bg-gray-800"
                onClick={() => setSaved(!saved)}
              >
                <Bookmark 
                  size={16} 
                  className={`mr-1.5 ${saved ? 'fill-blue-400 text-blue-400' : ''}`} 
                />
                {saved ? 'Saved' : 'Save'}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-700 bg-gray-900/50 text-gray-300 hover:bg-gray-800"
              >
                <Share2 size={16} className="mr-1.5" />
                Share
              </Button>
            </div>
          </div>
        </header>
        
        {/* Cover Image */}
        <div className="mb-10">
          <img 
            src={blogPost.coverImage}
            alt={blogPost.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
        
        {/* Article Content */}
        <div className="prose prose-invert prose-blue max-w-none mb-10">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          
          {/* Code Snippets */}
          {blogPost.codeSnippets.map((snippet, index) => (
            <div key={index} className="relative my-8 rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
              <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                <div className="text-sm font-mono text-gray-300">{snippet.language}</div>
                <button 
                  className="p-1.5 hover:bg-gray-700 rounded-md transition-colors"
                  onClick={() => handleCopyCode(index, snippet.code)}
                >
                  {copiedSnippet === index ? (
                    <span className="text-green-400 text-xs font-medium">Copied!</span>
                  ) : (
                    <Copy size={16} className="text-gray-400" />
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code>{snippet.code}</code>
              </pre>
            </div>
          ))}
          
          <p>
            Understanding Big O notation is fundamental for any programmer. It helps you make informed decisions about which algorithms to use for different scenarios and predict how your code will perform as your data grows.
          </p>
          
          <p>
            In the next article, we'll explore space complexity and how it differs from time complexity.
          </p>
        </div>
        
        {/* Tags */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Tag size={16} className="mr-2 text-blue-400" />
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag, index) => (
              <Link 
                key={index} 
                to={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Author Bio */}
        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold mb-4">About the Author</h3>
          <div className="flex items-start">
            <img 
              src={blogPost.authorAvatar}
              alt={blogPost.author}
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div>
              <h4 className="font-medium">{blogPost.author}</h4>
              <p className="text-blue-400 text-sm mb-2">{blogPost.authorTitle}</p>
              <p className="text-gray-300">{blogPost.authorBio}</p>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPost.relatedPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <article className="rounded-xl overflow-hidden bg-gray-900/40 border border-gray-800/50 hover:bg-gray-800/40 transition-colors group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Article Actions */}
        <div className="border-t border-gray-800 pt-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full ${
                liked 
                  ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
              onClick={() => setLiked(!liked)}
            >
              <ThumbsUp size={16} className={liked ? 'fill-blue-400' : ''} />
              <span>{liked ? 'Liked' : 'Like'}</span>
            </button>
            
            <button className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700">
              <MessageCircle size={16} />
              <span>Comment</span>
            </button>
          </div>
          
          <Button 
            variant="outline" 
            className="border-gray-700 bg-gray-900/50 text-gray-300 hover:bg-gray-800"
          >
            <Share2 size={16} className="mr-1.5" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
