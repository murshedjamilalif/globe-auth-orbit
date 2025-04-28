import React from 'react';
import { Users, FileText, Tag, List, Star, CheckCircle, Award, Activity } from 'lucide-react';

const DashboardOverview: React.FC = () => {
  // Mock stats for demonstration
  const stats = [
    { title: 'Total Users', value: 2560, icon: <Users className="text-blue-400" />, color: 'bg-blue-500/20 border-blue-500/30' },
    { title: 'Problems', value: 165, icon: <FileText className="text-amber-400" />, color: 'bg-amber-500/20 border-amber-500/30' },
    { title: 'Patterns', value: 12, icon: <List className="text-green-400" />, color: 'bg-green-500/20 border-green-500/30' },
    { title: 'Categories', value: 8, icon: <Tag className="text-purple-400" />, color: 'bg-purple-500/20 border-purple-500/30' },
    { title: 'Completed', value: 47520, icon: <CheckCircle className="text-emerald-400" />, color: 'bg-emerald-500/20 border-emerald-500/30' },
    { title: 'Starred', value: 32145, icon: <Star className="text-yellow-400" />, color: 'bg-yellow-500/20 border-yellow-500/30' },
    { title: 'Active Streak', value: 145, icon: <Activity className="text-red-400" />, color: 'bg-red-500/20 border-red-500/30' },
    { title: 'Achievements', value: 450, icon: <Award className="text-teal-400" />, color: 'bg-teal-500/20 border-teal-500/30' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`bg-gray-900/60 backdrop-blur-sm border ${stat.color} rounded-xl p-4 shadow-md flex items-center`}
          >
            <div className={`p-3 rounded-lg ${stat.color} mr-4`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold text-white">{stat.value.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent Activity */}
      <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl p-5 shadow-md">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="flex items-start pb-4 border-b border-gray-800/50 last:border-0 last:pb-0">
              <div className={`p-2 rounded-lg ${stats[index % stats.length].color} mr-3`}>
                {stats[index % stats.length].icon}
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  {index % 3 === 0 && "New user registered"}
                  {index % 3 === 1 && "New problem added to Dynamic Programming"}
                  {index % 3 === 2 && "Pattern category updated"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {index === 0 ? '3 minutes ago' : index === 1 ? '1 hour ago' : `${index + 1} hours ago`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl p-5 shadow-md">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button className="flex items-center p-3 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 rounded-lg transition-colors border border-teal-500/30">
            <Users size={18} className="mr-2" />
            <span>Add New User</span>
          </button>
          <button className="flex items-center p-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg transition-colors border border-amber-500/30">
            <FileText size={18} className="mr-2" />
            <span>Create Problem</span>
          </button>
          <button className="flex items-center p-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors border border-purple-500/30">
            <List size={18} className="mr-2" />
            <span>Manage Patterns</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview; 