import React from 'react';

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
  const hoverStyle = pauseOnHover ? { 
    '&:hover div': { 
      animationPlayState: 'paused' 
    } 
  } : {};

  return (
    <div 
      className={`w-full overflow-hidden ${className}`}
      style={hoverStyle as React.CSSProperties}
    >
      <div className="inline-flex flex-nowrap">
        <div
          className={`flex items-center ${
            direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee'
          } whitespace-nowrap`}
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
          className={`flex items-center ${
            direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee'
          } whitespace-nowrap`}
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
