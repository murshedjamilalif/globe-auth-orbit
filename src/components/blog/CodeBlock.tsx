
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };
  
  return (
    <div className="relative my-6 rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <div className="text-sm font-mono text-gray-300">{language}</div>
        <button 
          onClick={handleCopy}
          className="p-1.5 hover:bg-gray-700 rounded-md transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="text-gray-400" />
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-gray-300 font-mono text-sm">{code}</code>
      </pre>
    </div>
  );
};
