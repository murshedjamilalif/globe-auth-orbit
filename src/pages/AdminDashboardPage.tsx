import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  Tag, 
  List, 
  Settings, 
  Grid, 
  LogOut, 
  Plus, 
  Search
} from 'lucide-react';

// Admin Panel Components
import UserManagement from '../components/admin/UserManagement';
import PatternManagement from '../components/admin/PatternManagement';
import ProblemManagement from '../components/admin/ProblemManagement';
import CategoryManagement from '../components/admin/CategoryManagement';
import DashboardOverview from '../components/admin/DashboardOverview';

const AdminDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  // Admin tabs
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <Grid size={18} /> },
    { id: 'users', label: 'Users', icon: <Users size={18} /> },
    { id: 'problems', label: 'Problems', icon: <FileText size={18} /> },
    { id: 'patterns', label: 'Patterns', icon: <List size={18} /> },
    { id: 'categories', label: 'Categories', icon: <Tag size={18} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
  ];

  // Render the active component based on the tab
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'users':
        return <UserManagement />;
      case 'problems':
        return <ProblemManagement />;
      case 'patterns':
        return <PatternManagement />;
      case 'categories':
        return <CategoryManagement />;
      case 'settings':
        return <div className="text-white">Settings Component</div>;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900/40 backdrop-blur-md border-r border-gray-800/30 flex flex-col">
        <div className="p-4 border-b border-gray-800/30">
          <h1 className="text-xl font-bold text-white flex items-center">
            <Grid className="mr-2 text-teal-400" />
            Admin Panel
          </h1>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {tabs.map(tab => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30 backdrop-blur-sm'
                      : 'text-gray-300 hover:bg-gray-800/40 hover:backdrop-blur-sm'
                  }`}
                >
                  <span className="mr-3">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-800/30">
          <button className="w-full flex items-center p-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:backdrop-blur-sm hover:border hover:border-red-500/30 transition-colors duration-200">
            <LogOut size={18} className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-gray-900/40 backdrop-blur-md border-b border-gray-800/30 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">{tabs.find(tab => tab.id === activeTab)?.label}</h2>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-gray-800/50 backdrop-blur-sm text-gray-200 rounded-lg border border-gray-700/30 focus:outline-none focus:ring-1 focus:ring-teal-500/50 w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <button className="flex items-center px-4 py-2 bg-teal-500/20 backdrop-blur-sm text-teal-300 rounded-lg hover:bg-teal-500/30 transition-colors duration-200 border border-teal-500/30">
              <Plus size={18} className="mr-2" />
              <span>Add New</span>
            </button>
          </div>
        </header>
        
        <main className="p-6">
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage; 