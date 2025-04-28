
import { useState } from "react";
import { Globe } from "@/components/Globe";
import { AuthBox } from "@/components/AuthBox";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white overflow-hidden">
      {/* Left side - Globe */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <Globe />
      </div>
      
      {/* Right side - Auth Box */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <AuthBox activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default Index;
