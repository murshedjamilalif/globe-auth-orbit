
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Code, Brain, Sun, Moon, Menu, X, Mail, Grid, BookOpen, Award, LogIn } from 'lucide-react';
import AuthModal from '../auth/AuthModal';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const navLinks = [
    { name: 'Blog', path: '/blog', icon: <BookOpen size={18} /> },
    { name: 'Practice', path: '/practice', icon: <Brain size={18} /> },
    { name: 'Prepare', path: '/certifications', icon: <Award size={18} /> },
    { name: 'Newsletter', path: '/newsletter', icon: <Mail size={18} /> },
    { name: 'Admin', path: '/admin', icon: <Grid size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  const openAuthModal = () => {
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Code className="h-8 w-8 text-white" />
                <span className="ml-2 text-xl font-bold text-white">AlgoMaster</span>
              </Link>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? "font-semibold text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="ml-1">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-400 hover:text-white"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={openAuthModal}
                className="hidden md:flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:from-blue-500 hover:to-blue-400 transition-all duration-200"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Log In
              </button>
              
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-md text-gray-400 hover:text-white"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? "text-white font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex items-center">
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </span>
                </Link>
              ))}
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal();
                }}
                className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white"
              >
                <LogIn size={18} />
                <span className="ml-2">Log In</span>
              </button>
            </div>
          </div>
        )}
      </nav>
      
      <AuthModal isOpen={authModalOpen} onClose={closeAuthModal} />
    </>
  );
};

export default Navbar;
