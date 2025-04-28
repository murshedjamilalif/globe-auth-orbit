import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { User, Calendar, Award, TrendingUp, Clock, CheckCircle, Github, Mail, Code, Bookmark, Star } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { theme } = useTheme();
  
  // Mock user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    joined: 'January 2023',
    streak: 15,
    totalSolved: 128,
    achievements: [
      { name: 'DSA Beginner', description: 'Solved 50 problems', icon: <Award className="text-amber-500" size={24} /> },
      { name: 'Array Master', description: 'Completed all array patterns', icon: <Code className="text-teal-500" size={24} /> },
      { name: 'Consistent Coder', description: 'Maintained a 7-day streak', icon: <Calendar className="text-purple-500" size={24} /> },
    ],
    recentActivity: [
      { type: 'solved', problem: 'Two Sum', difficulty: 'Easy', date: '2 hours ago' },
      { type: 'attempted', problem: 'Merge Intervals', difficulty: 'Medium', date: 'Yesterday' },
      { type: 'bookmarked', problem: 'LRU Cache', difficulty: 'Hard', date: '3 days ago' },
    ],
    stats: {
      easy: { solved: 72, total: 98 },
      medium: { solved: 48, total: 145 },
      hard: { solved: 8, total: 57 },
    }
  };
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - User profile */}
          <div className="lg:col-span-1 space-y-6">
            {/* User card */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="h-24 bg-gradient-to-r from-teal-500 to-purple-500"></div>
              <div className="px-6 pb-6">
                <div className="flex justify-center -mt-12">
                  <div className="h-24 w-24 rounded-full border-4 border-gray-800 bg-gray-700 flex items-center justify-center">
                    <User size={48} className="text-teal-500" />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                  <div className="flex items-center justify-center mt-1 text-gray-400">
                    <Mail size={16} className="mr-1" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center justify-center mt-1 text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    <span>Joined {user.joined}</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-teal-500">{user.totalSolved}</p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Solved</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-500">{user.streak}</p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Day Streak</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-amber-500">{user.achievements.length}</p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Badges</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition-colors duration-200">
                    <Github size={18} className="mr-2" />
                    Connect GitHub
                  </button>
                </div>
              </div>
            </div>
            
            {/* Achievements */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Award size={20} className="mr-2 text-amber-500" />
                  Achievements
                </h2>
                <div className="space-y-4">
                  {user.achievements.map((achievement, index) => (
                    <div key={index} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} flex items-center`}>
                      <div className="mr-4">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{achievement.name}</h3>
                        <p className="text-sm text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                  
                  <Link to="#" className="text-teal-500 text-sm flex items-center hover:underline">
                    View all achievements
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Stats & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress overview */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                  <TrendingUp size={20} className="mr-2 text-teal-500" />
                  Problem Solving Progress
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-green-500">Easy</h3>
                      <span className="text-sm text-gray-400">
                        {user.stats.easy.solved}/{user.stats.easy.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2.5 mb-2">
                      <div 
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${(user.stats.easy.solved / user.stats.easy.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-xs text-gray-400">
                      {Math.round((user.stats.easy.solved / user.stats.easy.total) * 100)}% Complete
                    </p>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-amber-500">Medium</h3>
                      <span className="text-sm text-gray-400">
                        {user.stats.medium.solved}/{user.stats.medium.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2.5 mb-2">
                      <div 
                        className="bg-amber-500 h-2.5 rounded-full"
                        style={{ width: `${(user.stats.medium.solved / user.stats.medium.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-xs text-gray-400">
                      {Math.round((user.stats.medium.solved / user.stats.medium.total) * 100)}% Complete
                    </p>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-red-500">Hard</h3>
                      <span className="text-sm text-gray-400">
                        {user.stats.hard.solved}/{user.stats.hard.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2.5 mb-2">
                      <div 
                        className="bg-red-500 h-2.5 rounded-full"
                        style={{ width: `${(user.stats.hard.solved / user.stats.hard.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-xs text-gray-400">
                      {Math.round((user.stats.hard.solved / user.stats.hard.total) * 100)}% Complete
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white mb-4">Top Categories</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                      <p className="text-lg font-bold text-teal-500">85%</p>
                      <p className="text-sm text-gray-400">Arrays</p>
                    </div>
                    <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                      <p className="text-lg font-bold text-teal-500">72%</p>
                      <p className="text-sm text-gray-400">Strings</p>
                    </div>
                    <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                      <p className="text-lg font-bold text-teal-500">64%</p>
                      <p className="text-sm text-gray-400">Sorting</p>
                    </div>
                    <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                      <p className="text-lg font-bold text-teal-500">45%</p>
                      <p className="text-sm text-gray-400">Trees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent activity */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Clock size={20} className="mr-2 text-purple-500" />
                  Recent Activity
                </h2>
                
                <div className="space-y-4">
                  {user.recentActivity.map((activity, index) => (
                    <div key={index} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-between`}>
                      <div className="flex items-center">
                        {activity.type === 'solved' ? (
                          <CheckCircle size={20} className="text-green-500 mr-3" />
                        ) : activity.type === 'attempted' ? (
                          <Code size={20} className="text-amber-500 mr-3" />
                        ) : (
                          <Bookmark size={20} className="text-purple-500 mr-3" />
                        )}
                        <div>
                          <h3 className="font-medium text-white">{activity.problem}</h3>
                          <div className="flex items-center text-sm">
                            <span className={`mr-2 ${
                              activity.difficulty === 'Easy' 
                                ? 'text-green-500' 
                                : activity.difficulty === 'Medium'
                                ? 'text-amber-500' 
                                : 'text-red-500'
                            }`}>
                              {activity.difficulty}
                            </span>
                            <span className="text-gray-400">
                              {activity.type === 'solved' ? 'Solved' : activity.type === 'attempted' ? 'Attempted' : 'Bookmarked'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">{activity.date}</div>
                    </div>
                  ))}
                  
                  <Link to="#" className="text-teal-500 text-sm flex items-center hover:underline">
                    View all activity
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Bookmarked and starred */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <div className="flex border-b border-gray-700">
                  <button className="px-6 py-3 text-sm font-medium border-b-2 border-teal-500 text-teal-500">
                    Bookmarked
                  </button>
                  <button className="px-6 py-3 text-sm font-medium text-gray-400 hover:text-gray-300">
                    Starred
                  </button>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-white flex items-center">
                      <Bookmark size={16} className="text-teal-500 mr-2" />
                      Bookmarked Problems
                    </h3>
                    <span className="text-sm text-gray-400">5 problems</span>
                  </div>
                  
                  <div className="space-y-3">
                    <Link to="/problem/1" className="block p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-teal-500">Two Sum</h4>
                          <div className="flex items-center mt-1">
                            <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full mr-2">Easy</span>
                            <span className="text-xs text-gray-400">Arrays</span>
                          </div>
                        </div>
                        <CheckCircle size={16} className="text-green-500" />
                      </div>
                    </Link>
                    
                    <Link to="/problem/2" className="block p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-teal-500">Merge Intervals</h4>
                          <div className="flex items-center mt-1">
                            <span className="text-xs bg-amber-500/20 text-amber-500 px-2 py-0.5 rounded-full mr-2">Medium</span>
                            <span className="text-xs text-gray-400">Arrays</span>
                          </div>
                        </div>
                        <CheckCircle size={16} className="text-green-500" />
                      </div>
                    </Link>
                    
                    <Link to="/problem/3" className="block p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-teal-500">LRU Cache</h4>
                          <div className="flex items-center mt-1">
                            <span className="text-xs bg-red-500/20 text-red-500 px-2 py-0.5 rounded-full mr-2">Hard</span>
                            <span className="text-xs text-gray-400">Design</span>
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm">Not solved</div>
                      </div>
                    </Link>
                    
                    <Link to="#" className="text-teal-500 text-sm flex items-center hover:underline">
                      View all bookmarks
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;