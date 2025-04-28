import React, { useState } from 'react';
import { Edit, Trash, Plus, Hash, Tag } from 'lucide-react';

// Mock category data
const mockCategories = [
  { 
    id: 1, 
    name: 'Algorithms', 
    icon: <Hash />,
    colorClass: 'bg-blue-500/20 border-blue-500/30',
    description: 'Fundamental algorithms and techniques for solving computational problems.',
    problemCount: 75,
  },
  { 
    id: 2, 
    name: 'Data Structures', 
    icon: <Tag />,
    colorClass: 'bg-green-500/20 border-green-500/30',
    description: 'Essential data structures for organizing and storing data efficiently.',
    problemCount: 58,
  },
  { 
    id: 3, 
    name: 'System Design', 
    icon: <Hash />,
    colorClass: 'bg-purple-500/20 border-purple-500/30',
    description: 'Principles and patterns for designing large-scale distributed systems.',
    problemCount: 32,
  },
  { 
    id: 4, 
    name: 'Object-Oriented Design', 
    icon: <Tag />,
    colorClass: 'bg-amber-500/20 border-amber-500/30',
    description: 'Designing systems using object-oriented principles and patterns.',
    problemCount: 25,
  },
];

const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState(mockCategories);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const handleAddCategory = () => {
    setIsAddCategoryModalOpen(true);
  };

  const handleEdit = (category: any) => {
    setSelectedCategory(category);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const renderCategoryForm = (category?: any) => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Category Name</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50" 
          defaultValue={category?.name || ''}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Icon Type</label>
        <select className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50">
          <option value="hash">Hash</option>
          <option value="tag">Tag</option>
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
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
        <textarea 
          className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50 h-24" 
          defaultValue={category?.description || ''}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">Category Management</h3>
        <button 
          onClick={handleAddCategory}
          className="flex items-center px-4 py-2 bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-500/30 transition-colors duration-200 border border-teal-500/30"
        >
          <Plus size={18} className="mr-2" />
          <span>Add Category</span>
        </button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${category.colorClass}`}>
                    {React.isValidElement(category.icon) ? category.icon : null}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                    <p className="text-sm text-gray-400">
                      {category.problemCount} problems
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEdit(category)}
                    className="p-1 rounded bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200 border border-blue-500/20"
                  >
                    <Edit size={16} className="text-blue-400" />
                  </button>
                  <button 
                    onClick={() => handleDelete(category.id)}
                    className="p-1 rounded bg-red-500/10 hover:bg-red-500/20 transition-colors duration-200 border border-red-500/20"
                  >
                    <Trash size={16} className="text-red-400" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Category Modal */}
      {isAddCategoryModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-800/50 rounded-xl shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-4">Add New Category</h3>
            {renderCategoryForm()}
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setIsAddCategoryModalOpen(false)}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsAddCategoryModalOpen(false)}
                className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-500/30 transition-colors duration-200 border border-teal-500/30"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Category Modal */}
      {isEditModalOpen && selectedCategory && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-800/50 rounded-xl shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-4">Edit Category</h3>
            {renderCategoryForm(selectedCategory)}
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

export default CategoryManagement; 