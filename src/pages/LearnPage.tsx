import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { BookOpen, ChevronRight, Code, Share2, BookOpenCheck, CloudLightning as Lightning, CheckCircle, ChevronDown } from 'lucide-react';
import { patternData } from '../data/patterns';

const LearnPage: React.FC = () => {
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
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10 pointer-events-none"></div>
            <div className="p-8 md:p-12 relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
                Master DSA Patterns
              </h1>
              <p className="text-lg max-w-3xl text-gray-300 mb-6">
                Stop memorizing random problems. Learn the fundamental patterns to solve any algorithm challenge with confidence. Our pattern-based approach helps you develop problem-solving intuition.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="#patterns" className="px-6 py-3 bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-600/30 transition-colors duration-200 flex items-center border border-teal-500/30">
                  <BookOpen size={18} className="mr-2" />
                  Start Learning
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
          <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center">
            <Lightning size={24} className="mr-2" />
            Our Learning Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 shadow-md">
              <div className="bg-teal-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 border border-teal-500/30">
                <span className="text-teal-400 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Learn The Pattern</h3>
              <p className="text-gray-300">
                Understand the fundamental approach behind solving a specific class of problems. See visual explanations and examples.
              </p>
            </div>
            
            <div className="rounded-xl p-6 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 shadow-md">
              <div className="bg-purple-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 border border-purple-500/30">
                <span className="text-purple-400 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Apply The Pattern</h3>
              <p className="text-gray-300">
                Practice progressively more challenging problems that use the same pattern. Build muscle memory and intuition.
              </p>
            </div>
            
            <div className="rounded-xl p-6 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 shadow-md">
              <div className="bg-amber-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 border border-amber-500/30">
                <span className="text-amber-400 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Master & Recognize</h3>
              <p className="text-gray-300">
                Learn to quickly identify which pattern to apply to new problems. Solve complex, mixed problems with confidence.
              </p>
            </div>
          </div>
        </section>
        
        {/* Pattern List */}
        <section id="patterns" className="mb-12">
          <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center">
            <BookOpenCheck size={24} className="mr-2" />
            DSA Patterns Library
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
                        <h4 className="text-lg font-medium text-teal-400 mb-3">Pattern Description</h4>
                        <p className="text-gray-300 mb-4">
                          {pattern.description}
                        </p>
                        <h4 className="text-lg font-medium text-teal-400 mb-3">When to Use</h4>
                        <ul className="space-y-2 mb-4">
                          {pattern.whenToUse.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <ChevronRight size={18} className="text-teal-400 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex space-x-4">
                          <Link
                            to={`/learn/${pattern.id}`}
                            className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-600/30 transition-colors duration-200 flex items-center border border-teal-500/30"
                          >
                            <BookOpen size={16} className="mr-2" />
                            Learn More
                          </Link>
                          <Link
                            to={`/practice?pattern=${pattern.id}`}
                            className="px-4 py-2 bg-gray-800/70 text-gray-200 rounded-lg hover:bg-gray-700/70 transition-colors duration-200 flex items-center border border-gray-700/50"
                          >
                            <Code size={16} className="mr-2" />
                            Practice
                          </Link>
                          <button className="p-2 text-gray-400 hover:text-teal-400 transition-colors duration-200">
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-teal-400 mb-3">Example Problems</h4>
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
                                      className="text-teal-300 hover:text-teal-200"
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
        
        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-teal-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  Ready to start learning patterns?
                </h2>
                <p className="mt-4 text-lg text-teal-100">
                  Begin your DSA journey today and build a strong foundation for technical interviews.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link
                    to="/practice"
                    className="px-8 py-3 rounded-full bg-white text-teal-600 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 shadow-lg transition-colors duration-200"
                  >
                    Start Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnPage;