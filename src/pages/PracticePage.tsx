import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Code, Search, Star, RefreshCw, CheckCircle, Filter, ChevronDown, ExternalLink, PlayCircle, Github, Calendar } from 'lucide-react';
import { problemData } from '../data/problems';

const PracticePage: React.FC = () => {
  const { theme } = useTheme();
  const [activePattern, setActivePattern] = useState('All Patterns');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  
  // Filter problems based on filters
  const filteredProblems = problemData.filter((problem) => {
    // Filter by pattern
    if (activePattern !== 'All Patterns' && problem.pattern !== activePattern) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !problem.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by status
    if (selectedStatus === 'Solved' && !problem.solved) {
      return false;
    } else if (selectedStatus === 'Unsolved' && problem.solved) {
      return false;
    } else if (selectedStatus === 'Starred' && !problem.starred) {
      return false;
    }
    
    // Filter by difficulty
    if (selectedDifficulty !== 'All' && problem.difficulty !== selectedDifficulty) {
      return false;
    }
    
    return true;
  });

  // Count problems by difficulty
  const totalProblems = problemData.length;
  const easyProblems = problemData.filter(p => p.difficulty === 'Easy').length;
  const mediumProblems = problemData.filter(p => p.difficulty === 'Medium').length;
  const hardProblems = problemData.filter(p => p.difficulty === 'Hard').length;
  
  // Count solved problems
  const solvedProblems = problemData.filter(p => p.solved).length;
  const solvedEasy = problemData.filter(p => p.difficulty === 'Easy' && p.solved).length;
  const solvedMedium = problemData.filter(p => p.difficulty === 'Medium' && p.solved).length;
  const solvedHard = problemData.filter(p => p.difficulty === 'Hard' && p.solved).length;

  // Group problems by pattern
  const patterns = ['Arrays', 'Strings', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming', 'Sorting & Searching', 'Greedy', 'Backtracking'];
  
  // Statistics
  const problemStats = {
    solved: solvedProblems,
    total: totalProblems,
    submissions: problemData.length,
    starred: problemData.filter(p => p.starred).length,
    streak: 15 // Assuming a default streak
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Track Selection */}
        <div className="flex overflow-x-auto mb-8 gap-4">
          <button className="flex-shrink-0 bg-amber-500/10 border border-amber-500/40 rounded-lg px-6 py-3 flex items-center space-x-2 hover:bg-amber-500/20 transition-colors duration-200">
            <span className="text-amber-300 text-xl font-bold">🏆 Alifinity 300</span>
            <span className="text-gray-300 text-sm">(3+ Months)</span>
          </button>
          
          <button className="flex-shrink-0 bg-teal-500/10 border border-teal-500/40 rounded-lg px-6 py-3 flex items-center space-x-2 hover:bg-teal-500/20 transition-colors duration-200">
            <span className="text-teal-300 text-xl font-bold">💪 Alifinity 150</span>
            <span className="text-gray-300 text-sm">(1-3 Months)</span>
          </button>
          
          <button className="flex-shrink-0 bg-purple-500/10 border border-purple-500/40 rounded-lg px-6 py-3 flex items-center space-x-2 hover:bg-purple-500/20 transition-colors duration-200">
            <span className="text-purple-300 text-xl font-bold">⚡ Alifinity 75</span>
            <span className="text-gray-300 text-sm">(&lt;1 Month)</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left side - Pattern navigation */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats card */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-900/60 backdrop-blur-sm border border-gray-800/50">
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Your Progress</h2>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-200">Overall</span>
                    <span className="text-sm text-teal-400 font-medium">{solvedProblems} / {totalProblems}</span>
                  </div>
                  <div className="w-full bg-gray-800/70 rounded-full h-2">
                    <div
                      className="bg-teal-400 h-2 rounded-full"
                      style={{ width: `${(solvedProblems / totalProblems) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-200">Easy</span>
                      <span className="text-sm text-green-400 font-medium">{solvedEasy} / {easyProblems}</span>
                    </div>
                    <div className="w-full bg-gray-800/70 rounded-full h-2">
                      <div
                        className="bg-green-400 h-2 rounded-full"
                        style={{ width: `${(solvedEasy / easyProblems) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-200">Medium</span>
                      <span className="text-sm text-amber-400 font-medium">{solvedMedium} / {mediumProblems}</span>
                    </div>
                    <div className="w-full bg-gray-800/70 rounded-full h-2">
                      <div
                        className="bg-amber-400 h-2 rounded-full"
                        style={{ width: `${(solvedMedium / mediumProblems) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-200">Hard</span>
                      <span className="text-sm text-red-400 font-medium">{solvedHard} / {hardProblems}</span>
                    </div>
                    <div className="w-full bg-gray-800/70 rounded-full h-2">
                      <div
                        className="bg-red-400 h-2 rounded-full"
                        style={{ width: `${(solvedHard / hardProblems) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pattern navigation */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-900/60 backdrop-blur-sm border border-gray-800/50">
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">DSA Patterns</h2>
                <ul className="space-y-2">
                  <li>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                        activePattern === 'All Patterns' 
                          ? 'bg-teal-500/80 text-white' 
                          : 'text-gray-200 hover:bg-gray-800/70'
                      }`}
                      onClick={() => setActivePattern('All Patterns')}
                    >
                      <span className="flex items-center">
                        <Code size={18} className="mr-2" />
                        All Patterns
                      </span>
                      <span className="text-sm bg-gray-800/80 text-gray-200 px-2 py-0.5 rounded-full">
                        {totalProblems}
                      </span>
                    </button>
                  </li>
                  
                  {patterns.map((pattern, index) => (
                    <li key={index}>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                          activePattern === pattern 
                            ? 'bg-teal-500/80 text-white' 
                            : 'text-gray-200 hover:bg-gray-800/70'
                        }`}
                        onClick={() => setActivePattern(pattern)}
                      >
                        <span className="flex items-center">
                          <Code size={18} className="mr-2" />
                          {pattern}
                        </span>
                        <span className="text-sm bg-gray-800/80 text-gray-200 px-2 py-0.5 rounded-full">
                          {problemData.filter(p => p.pattern === pattern).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right side - Problem list */}
          <div className="lg:col-span-3 space-y-6">
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mb-4">
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 p-4 rounded-xl flex items-center shadow-md">
                <div className="bg-emerald-500/20 p-2.5 rounded-lg mr-3 border border-emerald-500/30">
                  <CheckCircle size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium">Problems Solved</p>
                  <p className="text-xl font-semibold text-white">{problemStats.solved} <span className="text-gray-400 text-xs font-normal">/ {problemStats.total}</span></p>
                </div>
              </div>
              
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 p-4 rounded-xl flex items-center shadow-md">
                <div className="bg-blue-500/20 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                  <Code size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium">Total Solutions</p>
                  <p className="text-xl font-semibold text-white">{problemStats.submissions}</p>
                </div>
              </div>
              
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 p-4 rounded-xl flex items-center shadow-md">
                <div className="bg-amber-500/20 p-2.5 rounded-lg mr-3 border border-amber-500/30">
                  <Star size={20} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium">Starred Problems</p>
                  <p className="text-xl font-semibold text-white">{problemStats.starred}</p>
                </div>
              </div>
              
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 p-4 rounded-xl flex items-center shadow-md">
                <div className="bg-purple-500/20 p-2.5 rounded-lg mr-3 border border-purple-500/30">
                  <Calendar size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium">Streak</p>
                  <p className="text-xl font-semibold text-white">{problemStats.streak} <span className="text-gray-400 text-xs font-normal">days</span></p>
                </div>
              </div>
            </div>

            {/* Filter controls - Simplified to match screenshot */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 mb-6 shadow-lg">
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative w-64">
                  <input
                    type="text"
                    placeholder="Search problems..."
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-800/90 text-gray-200 rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-gray-600 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-gray-800/90 text-gray-200 rounded-lg border border-gray-700/50 py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-gray-600 appearance-none transition-all"
                >
                  <option value="All">All Status</option>
                  <option value="Solved">Solved</option>
                  <option value="Unsolved">Unsolved</option>
                  <option value="Starred">Starred</option>
                </select>

                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="bg-gray-800/90 text-gray-200 rounded-lg border border-gray-700/50 py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-gray-600 appearance-none transition-all"
                >
                  <option value="All">All Difficulties</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>

                <select
                  value={activePattern}
                  onChange={(e) => setActivePattern(e.target.value)}
                  className="bg-gray-800/90 text-gray-200 rounded-lg border border-gray-700/50 py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-gray-600 appearance-none transition-all"
                >
                  <option value="All Patterns">All Patterns</option>
                  {patterns.map((pattern, index) => (
                    <option key={index} value={pattern}>{pattern}</option>
                  ))}
                </select>

                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-gray-800/90 text-gray-200 rounded-lg border border-gray-700/50 py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-gray-600 appearance-none transition-all"
                >
                  <option value="All">All Languages</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C++">C++</option>
                </select>

                <button 
                  onClick={() => {
                    setSelectedStatus('All');
                    setSelectedDifficulty('All');
                    setActivePattern('All Patterns');
                    setSelectedLanguage('All');
                    setSearchQuery('');
                  }}
                  className="bg-gray-800/90 text-gray-200 rounded-lg border border-gray-700/50 py-2.5 px-4 hover:bg-gray-700/90 transition-colors flex items-center gap-2"
                >
                  <RefreshCw size={16} />
                  <span>Reset</span>
                </button>
              </div>
            </div>
            
            {/* Pattern header */}
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Code size={20} className="mr-2 text-teal-400" />
                {activePattern} <span className="text-gray-400 ml-1">({filteredProblems.length})</span>
              </h2>
            </div>
            
            {/* Problem list */}
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-900/80 backdrop-blur-sm border border-gray-800/50">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-16">Status</th>
                      <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Problem</th>
                      <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-24">Difficulty</th>
                      <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-24">Solution</th>
                      <th className="px-6 py-2.5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-16">Star</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/50">
                    {filteredProblems.map((problem, index) => (
                      <tr key={index} className="hover:bg-gray-800/40 transition-colors duration-150">
                        <td className="px-6 py-3">
                          {problem.solved ? (
                            <CheckCircle size={18} className="text-green-400" />
                          ) : (
                            <div className="w-4.5 h-4.5 border border-gray-600/70 rounded"></div>
                          )}
                        </td>
                        <td className="px-6 py-3">
                          <Link to={`/problem/${problem.id}`} className="text-gray-200 hover:text-teal-300 font-medium flex items-center">
                            {problem.title}
                            <ExternalLink size={14} className="ml-1 opacity-70" />
                          </Link>
                          <div className="flex mt-1 space-x-2">
                            {problem.tags && problem.tags.map((tag, i) => (
                              <span key={i} className="px-1.5 py-0.5 text-xs rounded-full bg-gray-800/80 text-gray-400 border border-gray-700/50">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-3">
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            problem.difficulty === 'Easy' 
                              ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                              : problem.difficulty === 'Medium'
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                                : 'bg-red-500/10 text-red-400 border border-red-500/30'
                          }`}>
                            {problem.difficulty}
                          </span>
                        </td>
                        <td className="px-6 py-3">
                          <div className="flex space-x-2">
                            <button className="p-1 rounded bg-teal-500/10 hover:bg-teal-500/20 transition-colors duration-200 border border-teal-500/20">
                              <PlayCircle size={16} className="text-teal-400" />
                            </button>
                            <button className="p-1 rounded bg-gray-800/60 hover:bg-gray-700/80 transition-colors duration-200 border border-gray-700/30">
                              <Github size={16} className="text-gray-400" />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-3">
                          <button>
                            <Star size={16} className={problem.starred ? 'text-amber-400' : 'text-gray-500/70 hover:text-amber-300/50'} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;