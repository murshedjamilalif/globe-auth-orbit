
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      viewBox="0 0 512 512" 
      fill="none"
    >
      <path 
        d="M256 56L56 456H456L256 56Z" 
        fill="url(#logo-gradient)" 
        stroke="url(#logo-stroke)" 
        strokeWidth="16" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="logo-gradient" x1="56" y1="56" x2="456" y2="456" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A3FF" />
          <stop offset="1" stopColor="#0BFFD5" />
        </linearGradient>
        <linearGradient id="logo-stroke" x1="56" y1="56" x2="456" y2="456" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A3FF" />
          <stop offset="1" stopColor="#0BFFD5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
