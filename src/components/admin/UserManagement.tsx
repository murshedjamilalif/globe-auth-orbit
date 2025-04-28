import React, { useState } from 'react';
import { MoreHorizontal, Edit, Trash, CheckCircle, XCircle, User } from 'lucide-react';

// Mock user data
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', joined: '2023-01-15', problemsSolved: 125 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active', joined: '2023-02-20', problemsSolved: 87 },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'user', status: 'inactive', joined: '2023-03-05', problemsSolved: 32 },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'moderator', status: 'active', joined: '2023-03-18', problemsSolved: 156 },
  { id: 5, name: 'David Brown', email: 'david@example.com', role: 'user', status: 'active', joined: '2023-04-10', problemsSolved: 67 },
  { id: 6, name: 'Emily Davis', email: 'emily@example.com', role: 'user', status: 'pending', joined: '2023-05-22', problemsSolved: 0 },
];

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState(mockUsers);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDelete = (user: any) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedUser) {
      setUsers(users.filter(user => user.id !== selectedUser.id));
      setIsDeleteModalOpen(false);
      setSelectedUser(null);
    }
  };

  const getRoleClass = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
      case 'moderator':
        return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border border-green-500/30';
      case 'inactive':
        return 'bg-red-500/20 text-red-400 border border-red-500/30';
      case 'pending':
        return 'bg-amber-500/20 text-amber-400 border border-amber-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  };

  // User stats cards
  const userStats = [
    { 
      title: 'Total Users', 
      value: users.length, 
      icon: <User className="text-blue-400" />,
      color: 'bg-blue-500/20 border-blue-500/30' 
    },
    { 
      title: 'Active Users', 
      value: users.filter(u => u.status === 'active').length, 
      icon: <CheckCircle className="text-green-400" />,
      color: 'bg-green-500/20 border-green-500/30' 
    },
    { 
      title: 'Inactive Users', 
      value: users.filter(u => u.status === 'inactive').length, 
      icon: <XCircle className="text-red-400" />,
      color: 'bg-red-500/20 border-red-500/30' 
    }
  ];

  return (
    <div className="space-y-6">
      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {userStats.map((stat, index) => (
          <div 
            key={index} 
            className={`bg-gray-900/60 backdrop-blur-sm border ${stat.color} rounded-xl p-4 shadow-md flex items-center`}
          >
            <div className={`p-3 rounded-lg ${stat.color} mr-4`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Problems Solved</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-800/40 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-white">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getRoleClass(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusClass(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{user.joined}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-gray-300 mr-2">{user.problemsSolved}</span>
                      <div className="w-24 bg-gray-800/70 rounded-full h-1.5">
                        <div 
                          className="bg-teal-500 h-1.5 rounded-full" 
                          style={{ width: `${Math.min(100, (user.problemsSolved / 200) * 100)}%` }} 
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEdit(user)}
                        className="p-1 rounded bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200 border border-blue-500/20"
                      >
                        <Edit size={16} className="text-blue-400" />
                      </button>
                      <button 
                        onClick={() => handleDelete(user)}
                        className="p-1 rounded bg-red-500/10 hover:bg-red-500/20 transition-colors duration-200 border border-red-500/20"
                      >
                        <Trash size={16} className="text-red-400" />
                      </button>
                      <button className="p-1 rounded bg-gray-800/60 hover:bg-gray-700/80 transition-colors duration-200 border border-gray-700/30">
                        <MoreHorizontal size={16} className="text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit User Modal */}
      {isEditModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-800/50 rounded-xl shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-4">Edit User</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50" 
                  defaultValue={selectedUser.name}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50" 
                  defaultValue={selectedUser.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Role</label>
                <select className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50">
                  <option value="user" selected={selectedUser.role === 'user'}>User</option>
                  <option value="moderator" selected={selectedUser.role === 'moderator'}>Moderator</option>
                  <option value="admin" selected={selectedUser.role === 'admin'}>Admin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                <select className="w-full px-4 py-2 bg-gray-800/90 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-teal-500/50">
                  <option value="active" selected={selectedUser.status === 'active'}>Active</option>
                  <option value="inactive" selected={selectedUser.status === 'inactive'}>Inactive</option>
                  <option value="pending" selected={selectedUser.status === 'pending'}>Pending</option>
                </select>
              </div>
            </div>
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

      {/* Delete User Modal */}
      {isDeleteModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-800/50 rounded-xl shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-4">Delete User</h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to delete the user <span className="font-semibold text-white">{selectedUser.name}</span>? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors duration-200 border border-red-500/30"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement; 