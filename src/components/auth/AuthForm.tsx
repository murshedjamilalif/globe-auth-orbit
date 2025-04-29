import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { LockIcon, LogInIcon, UserIcon } from "lucide-react";

type AuthMode = "login" | "register";

const AuthForm = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", { email, password, name, mode });
    // Authentication logic would go here
  };
  
  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };
  
  return (
    <div className="w-full max-w-md bg-black/40 backdrop-blur-md rounded-xl border border-gray-800/50 overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-6 pb-8 bg-gradient-to-b from-blue-700 to-blue-900 text-center">
        <div className="flex justify-center">
          <div className="inline-block p-2.5 bg-gradient-to-br from-blue-400 to-cyan-400 rounded mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" fill="#fff"/>
              <path d="M11 18.95V22h2v-3.05C18.18 18.51 22 16.53 22 14V9.08L12 14l-11-5V14c0 2.53 3.82 4.51 10 4.95z" fill="#fff"/>
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white">Welcome to AlgoMaster</h1>
        <p className="text-blue-200 mt-2">Choose your preferred way to sign in</p>
      </div>
      
      {/* Body */}
      <div className="p-6 space-y-6">
        {/* OAuth Buttons */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-center items-center border-gray-700 bg-black/30 hover:bg-black/50 text-white">
            <span className="mr-2">Sign Up</span>
          </Button>
          
          <Button variant="outline" className="w-full justify-start items-center border-gray-700 bg-black/30 hover:bg-black/50 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </Button>
          
          <Button variant="outline" className="w-full justify-start items-center border-gray-700 bg-transparent hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="none">
              <rect width="24" height="24" rx="12" fill="#000"/>
              <path d="M16.63 16.45c-.34.44-.9.71-1.48.71-.58 0-1.14-.27-1.48-.71L12 13.75l-1.67 2.7c-.34.44-.9.71-1.48.71-.58 0-1.14-.27-1.48-.71-.29-.37-.4-.87-.31-1.34.09-.47.37-.88.76-1.12l2.31-1.56-2.31-1.56c-.39-.24-.67-.65-.76-1.12-.09-.47.02-.97.31-1.34.34-.44.9-.71 1.48-.71.58 0 1.14.27 1.48.71L12 10.25l1.67-2.7c.34-.44.9-.71 1.48-.71.58 0 1.14.27 1.48.71.29.37.4.87.31 1.34-.09.47-.37.88-.76 1.12l-2.31 1.56 2.31 1.56c.39.24.67.65.76 1.12.09.47-.02.97-.31 1.34z" fill="#fff"/>
            </svg>
            GitHub
          </Button>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full bg-gray-700/50" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-black/30 px-2 text-gray-400 backdrop-blur-sm">
              OR CONTINUE WITH
            </span>
          </div>
        </div>
        
        {/* Email Form */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="bg-black/30 border-gray-700/50 text-white placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white"
            onClick={() => console.log("Continue with email")}
          >
            Continue with Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
