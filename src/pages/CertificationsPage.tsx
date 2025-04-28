import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Award, Code, Brain, CheckCircle, Terminal, Database, Boxes, Server, GitBranch, FunctionSquare } from 'lucide-react';

const CertificationsPage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Certification</h1>
        
        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Problem Solving Basic */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  Problem Solving (Basic)
                  <span className="ml-2 text-gray-400">
                    <Award size={16} />
                  </span>
                </h2>
              </div>
              <div className="h-36 flex items-center justify-center">
                <Brain className="w-24 h-24 text-blue-500 opacity-50" />
              </div>
              <div className="flex justify-start mt-4">
                <Link to="#" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-md transition-colors duration-200">
                  View Certificate
                </Link>
              </div>
            </div>
          </div>
          
          {/* Python Basic */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  Python (Basic)
                  <span className="ml-2 text-gray-400">
                    <Award size={16} />
                  </span>
                </h2>
              </div>
              <div className="h-36 flex items-center justify-center">
                <Code className="w-24 h-24 text-blue-500 opacity-50" />
              </div>
              <div className="flex justify-start mt-4">
                <Link to="#" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-md transition-colors duration-200">
                  View Certificate
                </Link>
              </div>
            </div>
          </div>
          
          {/* Stand Out Card */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden shadow-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Stand out from the crowd</h2>
              <p className="text-gray-300 text-sm mb-4">
                Take the HackerRank Certification Test and make your profile stand out
              </p>
              <div className="flex justify-start mt-12">
                <Link to="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors duration-200">
                  View all certifications
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Prepare By Topics Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Prepare By Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Boxes className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">Algorithms</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <GitBranch className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">Data Structures</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">Mathematics</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Brain className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">Artificial Intelligence</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Terminal className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">C</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Terminal className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">C++</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Code className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">Java</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Code className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">Python</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Server className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">Ruby</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Database className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">SQL</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Database className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">Databases</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Terminal className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">Linux Shell</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <FunctionSquare className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">Functional Programming</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Terminal className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">Regex</span>
            </div>
            <div className="flex items-center p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
              <Code className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-200">React</span>
            </div>
          </div>
        </div>
        
        {/* Preparation Kits Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Preparation Kits</h2>
            <Link to="#" className="text-blue-400 text-sm">View all kits</Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 1 Week Preparation Kit */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden shadow-lg relative">
              <div className="absolute top-0 right-0 h-full flex items-center">
                <div className="w-24 h-24 md:w-40 md:h-40 text-gray-800 opacity-20 flex items-center justify-center">
                  <span className="text-5xl md:text-7xl font-bold">1W</span>
                </div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">1 Week Preparation Kit</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold text-gray-400 mr-2">Challenges:</span> 9/21
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold text-gray-400 mr-2">Attempts:</span> 107,144
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold text-gray-400 mr-2">Mock Tests:</span> 6
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md">Problem Solving (Basic)</span>
                  <span className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md">Problem Solving (Intermediate)</span>
                  <span className="px-1 py-2 text-gray-300 text-sm">+1</span>
                </div>
              </div>
            </div>
            
            {/* 1 Month Preparation Kit */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden shadow-lg relative">
              <div className="absolute top-0 right-0 h-full flex items-center">
                <div className="w-24 h-24 md:w-40 md:h-40 text-gray-800 opacity-20 flex items-center justify-center">
                  <span className="text-5xl md:text-7xl font-bold">1M</span>
                </div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">1 Month Preparation Kit</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold text-gray-400 mr-2">Challenges:</span> 1/54
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold text-gray-400 mr-2">Attempts:</span> 506,489
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold text-gray-400 mr-2">Mock Tests:</span> 4
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md">Problem Solving (Basic)</span>
                  <span className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md">Problem Solving (Intermediate)</span>
                  <span className="px-1 py-2 text-gray-300 text-sm">+1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage; 