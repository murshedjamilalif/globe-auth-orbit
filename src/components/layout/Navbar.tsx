
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="h-8 w-auto" />
              <span className="text-xl font-bold">Alifinity</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/learn" className="font-medium hover:text-primary transition-colors">Learn</Link>
            <Link to="/practice" className="font-medium hover:text-primary transition-colors">Practice</Link>
            <Link to="/roadmaps" className="font-medium hover:text-primary transition-colors">Roadmaps</Link>
            <Link to="/community" className="font-medium hover:text-primary transition-colors">Community</Link>
            <Link to="/newsletter" className="font-medium hover:text-primary transition-colors">Newsletter</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link to="/login">
              <Button>Sign In</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/learn" className="font-medium hover:text-primary transition-colors py-2">Learn</Link>
            <Link to="/practice" className="font-medium hover:text-primary transition-colors py-2">Practice</Link>
            <Link to="/roadmaps" className="font-medium hover:text-primary transition-colors py-2">Roadmaps</Link>
            <Link to="/community" className="font-medium hover:text-primary transition-colors py-2">Community</Link>
            <Link to="/newsletter" className="font-medium hover:text-primary transition-colors py-2">Newsletter</Link>
            <div className="pt-2 flex flex-col space-y-3">
              <Link to="/dashboard">
                <Button variant="outline" className="w-full">Dashboard</Button>
              </Link>
              <Link to="/login">
                <Button className="w-full">Sign In</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
