import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Star, Github, PlayCircle, CheckCircle, ChevronLeft, Code, Lightbulb, BookOpen, Share2, RotateCcw } from 'lucide-react';
import { problemData } from '../data/problems';

const ProblemPage: React.FC = () => {
  const { theme } = useTheme();
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('description');
  const [solutionApproach, setSolutionApproach] = useState('optimal');
  
  // Find the problem from the mock data
  const problem = problemData.find(p => p.id === id) || {
    id: '1',
    title: 'Two Sum',
    difficulty: 'Easy',
    pattern: 'Arrays',
    tags: ['Array', 'Hash Table'],
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    solutions: {
      brute: {
        approach: 'Brute Force',
        description: 'We can use two nested loops to check all possible pairs of numbers.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        code: 'function twoSum(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] + nums[j] === target) {\n        return [i, j];\n      }\n    }\n  }\n  return [];\n}'
      },
      optimal: {
        approach: 'Hash Map',
        description: 'We can use a hash map to store the numbers we\'ve seen so far and their indices. For each number, we check if the complement (target - current number) exists in the hash map.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        code: 'function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}'
      },
      alternative: {
        approach: 'Two Pointers',
        description: 'If the array is sorted, we can use two pointers (left and right) to find the pair that sums to the target.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        code: 'function twoSum(nums, target) {\n  const sorted = [...nums].map((val, idx) => ({ val, idx }));\n  sorted.sort((a, b) => a.val - b.val);\n  \n  let left = 0;\n  let right = sorted.length - 1;\n  \n  while (left < right) {\n    const sum = sorted[left].val + sorted[right].val;\n    \n    if (sum === target) {\n      return [sorted[left].idx, sorted[right].idx];\n    } else if (sum < target) {\n      left++;\n    } else {\n      right--;\n    }\n  }\n  \n  return [];\n}'
      }
    },
    hints: [
      'Think about what data structure allows O(1) lookups.',
      'For each number, can you efficiently check if its complement exists?',
      'What if you store each number and its index as you iterate through the array?'
    ],
    companies: ['Google', 'Amazon', 'Facebook', 'Microsoft'],
    solved: false,
    starred: false
  };
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem header */}
        <div className="mb-6">
          <Link to="/practice" className="flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-200 mb-4">
            <ChevronLeft size={20} className="mr-1" />
            Back to Problems
          </Link>
          
          <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white">{problem.title}</h1>
                <div className="flex items-center mt-2 space-x-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    problem.difficulty === 'Easy' 
                      ? 'bg-green-500/20 text-green-500' 
                      : problem.difficulty === 'Medium'
                      ? 'bg-amber-500/20 text-amber-500' 
                      : 'bg-red-500/20 text-red-500'
                  }`}>
                    {problem.difficulty}
                  </span>
                  <span className="text-teal-500 flex items-center text-sm">
                    <Code size={16} className="mr-1" />
                    {problem.pattern}
                  </span>
                  {problem.tags && problem.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 rounded-full bg-gray-700 text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className={`p-2 rounded-full ${problem.starred ? 'text-amber-400' : 'text-gray-400'} hover:text-amber-400 transition-colors duration-200`}>
                  <Star size={20} />
                </button>
                <button className="px-4 py-2 flex items-center bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200">
                  <CheckCircle size={18} className="mr-2" />
                  Mark as Solved
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Problem details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex border-b border-gray-700">
                <button
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'description' 
                      ? 'border-b-2 border-teal-500 text-teal-500' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'solution' 
                      ? 'border-b-2 border-teal-500 text-teal-500' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('solution')}
                >
                  Solution
                </button>
                <button
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'hints' 
                      ? 'border-b-2 border-teal-500 text-teal-500' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('hints')}
                >
                  Hints
                </button>
              </div>
              
              <div className="p-6">
                {/* Description Tab */}
                {activeTab === 'description' && (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-white mb-3">Problem Statement</h2>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {problem.description}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-white mb-3">Examples</h2>
                      {problem.examples.map((example, index) => (
                        <div key={index} className={`mb-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <div className="mb-2">
                            <strong className="text-teal-500">Input:</strong>
                            <pre className={`p-2 rounded mt-1 font-mono text-sm ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                              {example.input}
                            </pre>
                          </div>
                          <div className="mb-2">
                            <strong className="text-teal-500">Output:</strong>
                            <pre className={`p-2 rounded mt-1 font-mono text-sm ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                              {example.output}
                            </pre>
                          </div>
                          {example.explanation && (
                            <div>
                              <strong className="text-teal-500">Explanation:</strong>
                              <p className={`mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                {example.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-3">Constraints</h2>
                      <ul className="list-disc pl-5 space-y-1">
                        {problem.constraints.map((constraint, index) => (
                          <li key={index} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {constraint}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {/* Solution Tab */}
                {activeTab === 'solution' && (
                  <div>
                    <div className="mb-6">
                      <div className="flex space-x-2 mb-4">
                        <button
                          className={`px-4 py-2 rounded text-sm ${
                            solutionApproach === 'brute' 
                              ? 'bg-teal-600 text-white' 
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                          onClick={() => setSolutionApproach('brute')}
                        >
                          {problem.solutions.brute.approach}
                        </button>
                        <button
                          className={`px-4 py-2 rounded text-sm ${
                            solutionApproach === 'optimal' 
                              ? 'bg-teal-600 text-white' 
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                          onClick={() => setSolutionApproach('optimal')}
                        >
                          {problem.solutions.optimal.approach}
                        </button>
                        <button
                          className={`px-4 py-2 rounded text-sm ${
                            solutionApproach === 'alternative' 
                              ? 'bg-teal-600 text-white' 
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                          onClick={() => setSolutionApproach('alternative')}
                        >
                          {problem.solutions.alternative.approach}
                        </button>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {problem.solutions[solutionApproach].approach}
                        </h3>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                          {problem.solutions[solutionApproach].description}
                        </p>
                        <div className="flex space-x-6 mb-4">
                          <div>
                            <span className="text-sm text-gray-400">Time Complexity:</span>
                            <p className="text-teal-500">{problem.solutions[solutionApproach].timeComplexity}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-400">Space Complexity:</span>
                            <p className="text-teal-500">{problem.solutions[solutionApproach].spaceComplexity}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold text-white">Code</h3>
                          <div className="flex space-x-2">
                            <button className="p-1 text-gray-400 hover:text-teal-500 transition-colors">
                              <RotateCcw size={16} />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-teal-500 transition-colors">
                              <Github size={16} />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-teal-500 transition-colors">
                              <PlayCircle size={16} />
                            </button>
                          </div>
                        </div>
                        <pre className={`p-4 rounded-lg font-mono text-sm overflow-x-auto ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                          <code>{problem.solutions[solutionApproach].code}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Hints Tab */}
                {activeTab === 'hints' && (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <Lightbulb size={20} className="mr-2 text-amber-500" />
                        Hints
                      </h2>
                      <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Need a push in the right direction? Here are some hints to help you solve the problem without giving away the full solution.
                      </p>
                      
                      <div className="space-y-4">
                        {problem.hints.map((hint, index) => (
                          <div key={index} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <div className="flex items-center mb-2">
                              <div className="bg-amber-500/20 text-amber-500 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                                {index + 1}
                              </div>
                              <h3 className="text-sm font-medium text-amber-500">Hint {index + 1}</h3>
                            </div>
                            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              {hint}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right column - Additional info */}
          <div className="space-y-6">
            {/* Company tags */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-white mb-3">Companies</h2>
                <div className="flex flex-wrap gap-2">
                  {problem.companies && problem.companies.map((company, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-gray-700 text-sm text-gray-300">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Similar problems */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-white mb-3">Similar Problems</h2>
                <ul className="space-y-4">
                  {problemData.slice(0, 3).map((similarProblem, index) => (
                    <li key={index}>
                      <Link 
                        to={`/problem/${similarProblem.id}`}
                        className="flex items-center justify-between hover:bg-gray-700 p-2 rounded transition-colors duration-200"
                      >
                        <div>
                          <span className="text-teal-500 hover:underline">{similarProblem.title}</span>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              similarProblem.difficulty === 'Easy' 
                                ? 'bg-green-500/20 text-green-500' 
                                : similarProblem.difficulty === 'Medium'
                                ? 'bg-amber-500/20 text-amber-500' 
                                : 'bg-red-500/20 text-red-500'
                            }`}>
                              {similarProblem.difficulty}
                            </span>
                            <span className="text-gray-400 text-xs">{similarProblem.pattern}</span>
                          </div>
                        </div>
                        {similarProblem.solved ? (
                          <CheckCircle size={16} className="text-green-500" />
                        ) : (
                          <ChevronRight size={16} className="text-gray-400" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Learning resources */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-white mb-3">Learning Resources</h2>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to={`/learn/arrays`}
                      className="flex items-center text-teal-500 hover:underline"
                    >
                      <BookOpen size={16} className="mr-2" />
                      Arrays Pattern Guide
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="#"
                      className="flex items-center text-teal-500 hover:underline"
                    >
                      <PlayCircle size={16} className="mr-2" />
                      Video Tutorial: Hash Map Approach
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#"
                      className="flex items-center text-teal-500 hover:underline"
                    >
                      <Share2 size={16} className="mr-2" />
                      Community Discussion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;