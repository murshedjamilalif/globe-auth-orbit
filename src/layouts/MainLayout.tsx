import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useTheme } from '../contexts/ThemeContext';

const MainLayout: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col relative bg-black text-white">
      {/* Content */}
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;