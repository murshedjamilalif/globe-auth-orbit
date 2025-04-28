import React, { useState } from 'react';
import { Edit, Trash, Plus, ExternalLink, Github, Code } from 'lucide-react';

// Mock problem data
const mockProblems = [
  { 
    id: 1, 
    title: 'Two Sum', 
    difficulty: 'Easy', 
    pattern: 'Arrays', 
    category: 'Algorithms',
    solved: 1250,
    links: {
      leetcode: 'https://leetcode.com/problems/two-sum/',
      github: 'https://github.com/example/two-sum-solution'
    }
  },
  { 
    id: 2, 
    title: 'Add Two Numbers', 
    difficulty: 'Medium', 
    pattern: 'Linked Lists', 
    category: 'Algorithms',
    solved: 750,
    links: {
      leetcode: 'https://leetcode.com/problems/add-two-numbers/',
      github: 'https://github.com/example/add-two-numbers-solution'
    }
  },
  { 
    id: 3, 
    title: 'Median of Two Sorted Arrays', 
    difficulty: 'Hard', 
    pattern: 'Arrays', 
    category: 'Algorithms',
    solved: 320,
    links: {
      leetcode: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
      github: 'https://github.com/example/median-two-sorted-arrays'
    }
  },
  { 
    id: 4, 
    title: 'Valid Parentheses', 
    difficulty: 'Easy', 
    pattern: 'Stacks', 
    category: 'Data Structures',
    solved: 1450,
    links: {
      leetcode: 'https://leetcode.com/problems/valid-parentheses/',
      github: 'https://github.com/example/valid-parentheses'
    }
  },
];

const ProblemManagement: React.FC = () => {
  const [problems, setProblems] = useState(mockProblems);
  const [isAddProblemModalOpen, setIsAddProblemModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState<any>(null);

  const handleAddProblem = () => {
    setIsAddProblemModalOpen(true);
  };

  const handleEdit = (problem: any) => {
    setSelectedProblem(problem);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setProblems(problems.filter(problem => problem.id !== id));
  };

  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-500/10 text-green-400 border border-green-500/30';
      case 'Medium':
        return 'bg-amber-500/10 text-amber-400 border border-amber-500/30';
      case 'Hard':
        return 'bg-red-500/10 text-red-400 border border-red-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border border-gray-500/30';
    }
  };

  const renderProblemForm = (problem?: any) => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Problem Title</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50" 
          defaultValue={problem?.title || ''}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Difficulty</label>
          <select className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50">
            <option value="Easy" selected={problem?.difficulty === 'Easy'}>Easy</option>
            <option value="Medium" selected={problem?.difficulty === 'Medium'}>Medium</option>
            <option value="Hard" selected={problem?.difficulty === 'Hard'}>Hard</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Pattern</label>
          <select className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50">
            <option value="Arrays" selected={problem?.pattern === 'Arrays'}>Arrays</option>
            <option value="Linked Lists" selected={problem?.pattern === 'Linked Lists'}>Linked Lists</option>
            <option value="Trees" selected={problem?.pattern === 'Trees'}>Trees</option>
            <option value="Stacks" selected={problem?.pattern === 'Stacks'}>Stacks</option>
            <option value="Dynamic Programming" selected={problem?.pattern === 'Dynamic Programming'}>Dynamic Programming</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
        <select className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50">
          <option value="Algorithms" selected={problem?.category === 'Algorithms'}>Algorithms</option>
          <option value="Data Structures" selected={problem?.category === 'Data Structures'}>Data Structures</option>
          <option value="System Design" selected={problem?.category === 'System Design'}>System Design</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">LeetCode Link</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50" 
          defaultValue={problem?.links?.leetcode || ''}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">GitHub Solution Link</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50" 
          defaultValue={problem?.links?.github || ''}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Problem Description</label>
        <textarea 
          className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50 h-32" 
          defaultValue={problem?.description || ''}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">Problem Management</h3>
        <button 
          onClick={handleAddProblem}
          className="flex items-center px-4 py-2 bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-500/30 transition-colors duration-200 border border-teal-500/30"
        >
          <Plus size={18} className="mr-2" />
          <span>Add Problem</span>
        </button>
      </div>

      {/* Problems Table */}
      <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Difficulty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Pattern</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Solved</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Links</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {problems.map((problem) => (
                <tr key={problem.id} className="hover:bg-gray-800/40 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-white">{problem.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getDifficultyClass(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{problem.pattern}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{problem.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{problem.solved}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      {problem.links.leetcode && (
                        <a 
                          href={problem.links.leetcode} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-1 rounded bg-amber-500/10 hover:bg-amber-500/20 transition-colors duration-200 border border-amber-500/20"
                        >
                          <Code size={16} className="text-amber-400" />
                        </a>
                      )}
                      {problem.links.github && (
                        <a 
                          href={problem.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-1 rounded bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-200 border border-purple-500/20"
                        >
                          <Github size={16} className="text-purple-400" />
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEdit(problem)}
                        className="p-1 rounded bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200 border border-blue-500/20"
                      >
                        <Edit size={16} className="text-blue-400" />
                      </button>
                      <button 
                        onClick={() => handleDelete(problem.id)}
                        className="p-1 rounded bg-red-500/10 hover:bg-red-500/20 transition-colors duration-200 border border-red-500/20"
                      >
                        <Trash size={16} className="text-red-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Problem Modal */}
      {isAddProblemModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-800/50 rounded-xl shadow-lg p-6 w-full max-w-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Add New Problem</h3>
            {renderProblemForm()}
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setIsAddProblemModalOpen(false)}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsAddProblemModalOpen(false)}
                className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-500/30 transition-colors duration-200 border border-teal-500/30"
              >
                Add Problem
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Problem Modal */}
      {isEditModalOpen && selectedProblem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-800/50 rounded-xl shadow-lg p-6 w-full max-w-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Edit Problem</h3>
            {renderProblemForm(selectedProblem)}
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-500/30 transition-colors duration-200 border border-teal-500/30"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemManagement; 