
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Mail } from "lucide-react";
import GoogleIcon from "./icons/GoogleIcon";
import AlgoMasterLogo from "./icons/AlgoMasterLogo";

interface AuthBoxProps {
  activeTab: "signin" | "signup";
  setActiveTab: (tab: "signin" | "signup") => void;
}

export const AuthBox = ({ activeTab, setActiveTab }: AuthBoxProps) => {
  const [email, setEmail] = useState("");

  const handleTabChange = (tab: "signin" | "signup") => {
    setActiveTab(tab);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleContinueWithEmail = () => {
    console.log("Continue with email:", email);
  };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google");
  };

  const handleGithubSignIn = () => {
    console.log("Sign in with GitHub");
  };

  return (
    <div className="w-full max-w-md p-6 rounded-lg bg-[#111111] border border-gray-800 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <AlgoMasterLogo className="h-8 w-auto" />
        <button className="text-gray-400 hover:text-gray-200">×</button>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-500 mb-2">Welcome to AlgoMaster</h1>
        <p className="text-gray-400 text-sm">Choose your preferred way to sign in</p>
      </div>

      <div className="flex gap-2 mb-4">
        <Button
          variant={activeTab === "signin" ? "default" : "outline"}
          className="flex-1"
          onClick={() => handleTabChange("signin")}
        >
          Sign In
        </Button>
        <Button
          variant={activeTab === "signup" ? "default" : "outline"}
          className="flex-1"
          onClick={() => handleTabChange("signup")}
        >
          Sign Up
        </Button>
      </div>

      <div className="space-y-3 mb-4">
        <Button 
          variant="outline" 
          className="w-full relative justify-start ps-12"
          onClick={handleGoogleSignIn}
        >
          <GoogleIcon className="absolute left-4 w-5 h-5" /> 
          Sign in with Google
        </Button>
        <Button 
          variant="outline" 
          className="w-full relative justify-start ps-12"
          onClick={handleGithubSignIn}
        >
          <Github className="absolute left-4 w-5 h-5" /> 
          Sign in with GitHub
        </Button>
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-700"></span>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-2 text-gray-400 bg-[#111111]">OR CONTINUE WITH</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            className="w-full bg-black border-gray-800"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <Button 
          className="w-full bg-green-500 hover:bg-green-600 text-white"
          onClick={handleContinueWithEmail}
        >
          Continue with Email
        </Button>
      </div>
    </div>
  );
};
