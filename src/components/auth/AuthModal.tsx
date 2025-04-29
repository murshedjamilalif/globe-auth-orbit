import React from 'react';
import { X } from 'lucide-react';
import AuthForm from './AuthForm';
import Globe from '../ui/Globe';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-between bg-black/80 backdrop-blur-sm" onClick={onClose}>
      {/* Left side with Globe */}
      <div className="hidden md:block w-full h-full overflow-hidden pointer-events-none select-none">
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] lg:w-[700px] lg:h-[700px]">
            <Globe className="opacity-80" />
          </div>
        </div>
      </div>
      
      {/* Right side with Auth Form */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center px-4 md:px-8 lg:px-12">
        <div 
          className="max-w-md w-full relative z-10" 
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="absolute top-2 right-2 z-10 p-2 text-white bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40"
            onClick={onClose}
          >
            <X size={20} />
          </button>
          <AuthForm />
        </div>
      </div>
      
      {/* Mobile Globe Background (shown on small screens) */}
      <div className="fixed inset-0 -z-10 md:hidden pointer-events-none select-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[500px] h-[500px] opacity-40">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal; 