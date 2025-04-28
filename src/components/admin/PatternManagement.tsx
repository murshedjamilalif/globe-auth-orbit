import React, { useState } from 'react';
import { Edit, Trash, Plus, Code, List, Hash, Database, LineChart } from 'lucide-react';

// Mock pattern data
const mockPatterns = [
  { 
    id: 1, 
    name: 'Arrays', 
    icon: <List />,
    colorClass: 'bg-blue-500/20 border-blue-500/30',
    description: 'Problems involving array manipulation, traversal, and transformation.',
    problemCount: 45,
    completedCount: 28,
    difficultyCount: { easy: 18, medium: 20, hard: 7 }
  },
  { 
    id: 2, 
    name: 'Linked Lists', 
    icon: <Hash />,
    colorClass: 'bg-green-500/20 border-green-500/30',
    description: 'Problems involving linked list operations, traversal and modifications.',
    problemCount: 32,
    completedCount: 15,
    difficultyCount: { easy: 12, medium: 15, hard: 5 }
  },
  { 
    id: 3, 
    name: 'Trees', 
    icon: <Database />,
    colorClass: 'bg-purple-500/20 border-purple-500/30',
    description: 'Problems involving binary trees, BSTs, and tree traversal algorithms.',
    problemCount: 38,
    completedCount: 20,
    difficultyCount: { easy: 10, medium: 18, hard: 10 }
  },
  { 
    id: 4, 
    name: 'Dynamic Programming', 
    icon: <LineChart />,
    colorClass: 'bg-amber-500/20 border-amber-500/30',
    description: 'Problems that can be solved using dynamic programming approach.',
    problemCount: 50,
    completedCount: 22,
    difficultyCount: { easy: 8, medium: 25, hard: 17 }
  },
];

const PatternManagement: React.FC = () => {
  const [patterns, setPatterns] = useState(mockPatterns);
  const [isAddPatternModalOpen, setIsAddPatternModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPattern, setSelectedPattern] = useState<any>(null);

  const handleAddPattern = () => {
    setIsAddPatternModalOpen(true);
  };

  const handleEdit = (pattern: any) => {
    setSelectedPattern(pattern);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setPatterns(patterns.filter(pattern => pattern.id !== id));
  };

  const renderPatternForm = (pattern?: any) => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Pattern Name</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50" 
          defaultValue={pattern?.name || ''}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Icon Type</label>
        <select className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50">
          <option value="list">List</option>
          <option value="hash">Hash</option>
          <option value="database">Database</option>
          <option value="linechart">Line Chart</option>
          <option value="code">Code</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Color Theme</label>
        <div className="grid grid-cols-4 gap-3 mt-2">
          <button className="h-10 rounded-md bg-blue-500/20 border border-blue-500/30"></button>
          <button className="h-10 rounded-md bg-green-500/20 border border-green-500/30"></button>
          <button className="h-10 rounded-md bg-purple-500/20 border border-purple-500/30"></button>
          <button className="h-10 rounded-md bg-amber-500/20 border border-amber-500/30"></button>
          <button className="h-10 rounded-md bg-red-500/20 border border-red-500/30"></button>
          <button className="h-10 rounded-md bg-pink-500/20 border border-pink-500/30"></button>
          <button className="h-10 rounded-md bg-indigo-500/20 border border-indigo-500/30"></button>
          <button className="h-10 rounded-md bg-teal-500/20 border border-teal-500/30"></button>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
        <textarea 
          className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50 h-24" 
          defaultValue={pattern?.description || ''}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">When to Use (Add multiple points)</label>
        <textarea 
          className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50 h-32" 
          placeholder="Enter points separated by new lines"
          defaultValue={pattern?.whenToUse?.join('\n') || ''}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">Pattern Management</h3>
        <button 
          onClick={handleAddPattern}
          className="flex items-center px-4 py-2 bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-500/30 transition-colors duration-200 border border-teal-500/30"
        >
          <Plus size={18} className="mr-2" />
          <span>Add Pattern</span>
        </button>
      </div>

      {/* Patterns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {patterns.map((pattern) => (
          <div 
            key={pattern.id} 
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${pattern.colorClass}`}>
                    {React.isValidElement(pattern.icon) ? pattern.icon : null}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{pattern.name}</h3>
                    <p className="text-sm text-gray-400">
                      {pattern.problemCount} problems · {pattern.completedCount} completed
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEdit(pattern)}
                    className="p-1 rounded bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200 border border-blue-500/20"
                  >
                    <Edit size={16} className="text-blue-400" />
                  </button>
                  <button 
                    onClick={() => handleDelete(pattern.id)}
                    className="p-1 rounded bg-red-500/10 hover:bg-red-500/20 transition-colors duration-200 border border-red-500/20"
                  >
                    <Trash size={16} className="text-red-400" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {pattern.description}
              </p>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                  Easy: {pattern.difficultyCount.easy}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Medium: {pattern.difficultyCount.medium}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                  Hard: {pattern.difficultyCount.hard}
                </span>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-400">
                    Progress: {pattern.completedCount}/{pattern.problemCount}
                  </span>
                  <span className="text-xs text-gray-400">
                    {Math.round((pattern.completedCount / pattern.problemCount) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-800/70 rounded-full h-1.5">
                  <div
                    className="bg-teal-500 h-1.5 rounded-full"
                    style={{ width: `${(pattern.completedCount / pattern.problemCount) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Pattern Modal */}
      {isAddPatternModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-800/50 rounded-xl shadow-lg p-6 w-full max-w-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Add New Pattern</h3>
            {renderPatternForm()}
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setIsAddPatternModalOpen(false)}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsAddPatternModalOpen(false)}
                className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-500/30 transition-colors duration-200 border border-teal-500/30"
              >
                Add Pattern
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Pattern Modal */}
      {isEditModalOpen && selectedPattern && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-800/50 rounded-xl shadow-lg p-6 w-full max-w-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Edit Pattern</h3>
            {renderPatternForm(selectedPattern)}
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

export default PatternManagement;