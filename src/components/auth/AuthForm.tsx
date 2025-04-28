
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
    <div className="w-full max-w-md p-8 space-y-6 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-gradient">
          {mode === "login" ? "Log In" : "Create Account"}
        </h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "register" && (
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="name"
                className="pl-10"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              id="email"
              className="pl-10"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <LockIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              id="password"
              className="pl-10"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-algomaster-blue hover:bg-algomaster-blue/80">
          <LogInIcon className="mr-2 h-4 w-4" />
          {mode === "login" ? "Log In" : "Create Account"}
        </Button>
      </form>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-black px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      
      <div className="flex gap-4">
        <Button variant="outline" className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button variant="outline" className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-algomaster-green">
            <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z"/>
            <path d="M11 18.95V22h2v-3.05C18.18 18.51 22 16.53 22 14V9.08L12 14l-11-5V14c0 2.53 3.82 4.51 10 4.95z"/>
          </svg>
          AlgoMaster
        </Button>
      </div>
      
      <div className="text-center text-sm">
        <button
          type="button"
          onClick={toggleMode}
          className="text-algomaster-blue hover:underline"
        >
          {mode === "login" 
            ? "Don't have an account? Sign Up" 
            : "Already have an account? Log In"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
