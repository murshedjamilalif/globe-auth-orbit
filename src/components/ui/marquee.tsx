import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // Time in seconds for one complete cycle
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 20,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        className="inline-flex flex-nowrap"
        style={{
          '--animation-duration': `${speed}s`,
        } as React.CSSProperties}
      >
        <div
          className={`flex items-center animate-marquee whitespace-nowrap ${direction === 'right' ? 'animate-marquee-reverse' : ''}`}
          style={{
            animationDuration: `${speed}s`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <React.Fragment key={`item-${index}`}>
              {child}
            </React.Fragment>
          ))}
        </div>
        
        <div
          className={`flex items-center animate-marquee whitespace-nowrap ${direction === 'right' ? 'animate-marquee-reverse' : ''}`}
          style={{
            animationDuration: `${speed}s`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <React.Fragment key={`duplicate-${index}`}>
              {child}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
