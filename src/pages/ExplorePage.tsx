import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Compass, ChevronRight, Code, Share2, Search, ChevronDown, CheckCircle, Map, Lightbulb, BarChart } from 'lucide-react';
import { patternData } from '../data/patterns';

const ExplorePage: React.FC = () => {
  const { theme } = useTheme();
  const [expandedPattern, setExpandedPattern] = useState<string | null>(null);
  
  const toggleExpand = (patternId: string) => {
    if (expandedPattern === patternId) {
      setExpandedPattern(null);
    } else {
      setExpandedPattern(patternId);
    }
  };
  
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="rounded-2xl overflow-hidden shadow-md relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none"></div>
            <div className="p-8 md:p-12 relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
                Explore Algorithm Patterns
              </h1>
              <p className="text-lg max-w-3xl text-gray-300 mb-6">
                Discover key algorithmic concepts through interactive visualizations and guided examples. Explore patterns that help you build a strong problem-solving foundation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="#patterns" className="px-6 py-3 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-600/30 transition-colors duration-200 flex items-center border border-blue-500/30">
                  <Compass size={18} className="mr-2" />
                  Start Exploring
                </Link>
                <Link to="/practice" className="px-6 py-3 bg-gray-800/70 text-gray-200 rounded-lg hover:bg-gray-700/70 transition-colors duration-200 flex items-center border border-gray-700/50">
                  <Code size={18} className="mr-2" />
                  Practice Problems
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Learning Approach */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
            <Lightbulb size={24} className="mr-2" />
            Exploration Framework
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 shadow-md">
              <div className="bg-blue-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 border border-blue-500/30">
                <span className="text-blue-400 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visualize Concepts</h3>
              <p className="text-gray-300">
                See algorithms in action with interactive visualizations that build intuition about how different techniques work.
              </p>
            </div>
            
            <div className="rounded-xl p-6 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 shadow-md">
              <div className="bg-purple-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 border border-purple-500/30">
                <span className="text-purple-400 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Understand Patterns</h3>
              <p className="text-gray-300">
                Learn the fundamental patterns that appear across algorithms and develop a framework for approaching new problems.
              </p>
            </div>
            
            <div className="rounded-xl p-6 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 shadow-md">
              <div className="bg-amber-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 border border-amber-500/30">
                <span className="text-amber-400 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Apply Knowledge</h3>
              <p className="text-gray-300">
                Test your understanding with guided examples and challenges that progressively build your skills and confidence.
              </p>
            </div>
          </div>
        </section>
        
        {/* Pattern List */}
        <section id="patterns" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
            <Map size={24} className="mr-2" />
            Algorithm Patterns Explorer
          </h2>
          
          <div className="space-y-4">
            {patternData.map((pattern) => (
              <div
                key={pattern.id}
                className="rounded-xl overflow-hidden shadow-md bg-gray-900/60 backdrop-blur-sm border border-gray-800/50"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-gray-800/70 transition-colors duration-200"
                  onClick={() => toggleExpand(pattern.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg mr-4 ${pattern.colorClass}`}>
                        {React.isValidElement(pattern.icon) ? pattern.icon : null}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{pattern.name}</h3>
                        <p className="text-sm text-gray-400">
                          {pattern.problemCount} problems · {pattern.completedCount} completed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="hidden md:block mr-4">
                        <div className="flex items-center space-x-1">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                            Easy: {pattern.difficultyCount.easy}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
                            Medium: {pattern.difficultyCount.medium}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                            Hard: {pattern.difficultyCount.hard}
                          </span>
                        </div>
                      </div>
                      <div>
                        <ChevronDown
                          size={20}
                          className={`text-gray-400 transition-transform duration-300 ${
                            expandedPattern === pattern.id ? 'transform rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">
                        Progress: {pattern.completedCount}/{pattern.problemCount}
                      </span>
                      <span className="text-xs text-gray-400">
                        {Math.round((pattern.completedCount / pattern.problemCount) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800/70 rounded-full h-2">
                      <div
                        className={pattern.progressColorClass}
                        style={{ width: `${(pattern.completedCount / pattern.problemCount) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {expandedPattern === pattern.id && (
                  <div className="px-6 pb-6">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium text-blue-400 mb-3">Pattern Description</h4>
                        <p className="text-gray-300 mb-4">
                          {pattern.description}
                        </p>
                        <h4 className="text-lg font-medium text-blue-400 mb-3">When to Use</h4>
                        <ul className="space-y-2 mb-4">
                          {pattern.whenToUse.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <ChevronRight size={18} className="text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex space-x-4">
                          <Link
                            to={`/explore/${pattern.id}`}
                            className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-600/30 transition-colors duration-200 flex items-center border border-blue-500/30"
                          >
                            <Search size={16} className="mr-2" />
                            Explore More
                          </Link>
                          <Link
                            to={`/practice?pattern=${pattern.id}`}
                            className="px-4 py-2 bg-gray-800/70 text-gray-200 rounded-lg hover:bg-gray-700/70 transition-colors duration-200 flex items-center border border-gray-700/50"
                          >
                            <Code size={16} className="mr-2" />
                            Practice
                          </Link>
                          <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200">
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-blue-400 mb-3">Example Problems</h4>
                        <div className="border border-gray-800/50 rounded-lg overflow-hidden">
                          <table className="min-w-full divide-y divide-gray-800/70">
                            <thead className="bg-gray-800/80">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Problem</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Difficulty</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                              </tr>
                            </thead>
                            <tbody className="bg-gray-900/70 divide-y divide-gray-800/70">
                              {pattern.exampleProblems.map((problem, index) => (
                                <tr key={index} className="hover:bg-gray-800/50 transition-colors duration-150">
                                  <td className="px-4 py-3 whitespace-nowrap">
                                    <Link
                                      to={`/problem/${problem.id}`}
                                      className="text-blue-300 hover:text-blue-200"
                                    >
                                      {problem.title}
                                    </Link>
                                  </td>
                                  <td className="px-4 py-3 whitespace-nowrap">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      problem.difficulty === 'Easy' 
                                        ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                                        : problem.difficulty === 'Medium'
                                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' 
                                        : 'bg-red-500/10 text-red-400 border border-red-500/30'
                                    }`}>
                                      {problem.difficulty}
                                    </span>
                                  </td>
                                  <td className="px-4 py-3 whitespace-nowrap">
                                    {problem.completed ? (
                                      <span className="text-green-400 flex items-center">
                                        <CheckCircle size={16} className="mr-1" />
                                        Solved
                                      </span>
                                    ) : (
                                      <span className="text-gray-400">Not solved</span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Comparison Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
            <BarChart size={24} className="mr-2" />
            Algorithm Complexity Comparison
          </h2>
          
          <div className="rounded-xl p-6 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 shadow-md">
            <p className="text-gray-300 mb-6">
              Understanding the time and space complexity of different algorithms is crucial for making the right choices in your code.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Algorithm Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Best Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Average Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Worst Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Space</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-blue-300">Array Search</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(1)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(n)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(n)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(1)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-blue-300">Binary Search</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(1)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(log n)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(log n)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(1)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-blue-300">Quick Sort</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(n log n)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(n log n)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(n²)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(log n)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-blue-300">Merge Sort</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(n log n)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(n log n)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(n log n)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(n)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-blue-300">Breadth-First Search</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(V + E)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(V + E)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(V + E)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(V)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-blue-300">Depth-First Search</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(V + E)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(V + E)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(V + E)</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">O(V)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExplorePage; 