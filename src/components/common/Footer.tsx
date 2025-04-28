import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Code, Twitter, Linkedin, Github, MessageSquare, Instagram, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="py-12 border-t bg-black text-white border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column: Newsletter subscription */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="bg-green-800/50 text-green-400 text-xs font-medium px-3 py-1 rounded-full border border-green-600">
                Stay Updated
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              Level up your <span className="text-green-400">engineering</span> <span className="text-blue-400">career</span>
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Subscribe to our weekly newsletter for in-depth articles on Coding, DSA, and System Design.
            </p>
            
            <div className="flex justify-start space-x-4 text-gray-400 mt-6">
              <a href="#" className="hover:text-white transition-colors">
                <MessageSquare size={22} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Code size={22} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={22} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={22} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github size={22} />
              </a>
            </div>
          </div>
          
          {/* Right column: Subscription form */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">AlgoMaster Newsletter</h3>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-1">
                <span>By Ashish Pratap Singh</span>
                <Check size={16} className="text-green-500" />
                <span>Over 85,000 subscribers</span>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Type your email..." 
                  className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-r-lg transition-colors sm:mt-0 mt-2 sm:rounded-l-none rounded-l-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                By subscribing you agree to Substack's Terms of Use, our Privacy Policy and our Information collection notice
              </p>
              <div className="flex justify-end mt-2">
                <span className="text-gray-400 text-xs">Powered by Substack</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © 2025 AlgoMasterIO LLC
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 text-xs">
            <Link to="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-gray-400 hover:text-white">
              Shipping policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;