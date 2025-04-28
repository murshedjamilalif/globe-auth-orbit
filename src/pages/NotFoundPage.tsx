import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Home, ChevronRight } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} py-16`}>
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-9xl font-bold text-teal-500">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-white">Page Not Found</h2>
        <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            <Home size={20} className="mr-2" />
            Go to Homepage
          </Link>
        </div>
        <div className="mt-12">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
            Or try one of these pages:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/learn"
              className={`flex items-center justify-center px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} transition-colors duration-200`}
            >
              Learn DSA
              <ChevronRight size={16} className="ml-1" />
            </Link>
            <Link
              to="/practice"
              className={`flex items-center justify-center px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} transition-colors duration-200`}
            >
              Practice Problems
              <ChevronRight size={16} className="ml-1" />
            </Link>
            <Link
              to="/lld"
              className={`flex items-center justify-center px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} transition-colors duration-200`}
            >
              LLD Courses
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;