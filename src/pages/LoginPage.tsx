
import React from 'react';
import Globe from '../components/ui/Globe';
import AuthForm from '../components/auth/AuthForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 p-6">
      <div className="flex-1 flex items-center justify-center w-full max-w-xl">
        <Globe />
      </div>
      
      <div className="flex-1 flex items-center justify-center w-full max-w-md">
        <AuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
