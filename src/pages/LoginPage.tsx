
import React from 'react';
import Globe from '../components/ui/Globe';
import AuthForm from '../components/auth/AuthForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-black overflow-hidden">
      {/* Globe section (Left) */}
      <div className="flex-1 flex items-center justify-center w-full relative z-10 p-6">
        <div className="max-w-xl w-full">
          <Globe />
        </div>
      </div>
      
      {/* Form section (Right) */}
      <div className="flex-1 flex items-center justify-center w-full p-6">
        <AuthForm />
      </div>
      
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-[20%] w-[40rem] h-[40rem] rounded-full bg-blue-600/10 filter blur-[6rem]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[35rem] h-[35rem] rounded-full bg-purple-600/10 filter blur-[6rem]"></div>
      </div>
    </div>
  );
};

export default LoginPage;
