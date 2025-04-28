
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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = React.useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      const updateWidth = () => {
        if (marqueeRef.current) {
          const containerWidth = marqueeRef.current.scrollWidth;
          setContentWidth(containerWidth);
        }
      };

      // Initial measurement
      updateWidth();
      
      // Update on resize
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, [children]);

  return (
    <div className={`overflow-hidden relative w-full ${className}`}>
      <motion.div
        ref={marqueeRef}
        className="flex whitespace-nowrap items-center"
        animate={{
          x: direction === 'left' ? -contentWidth : contentWidth,
        }}
        initial={{
          x: direction === 'left' ? 0 : -contentWidth,
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
      >
        {children}
        {/* Duplicate children for seamless looping */}
        {children}
      </motion.div>
    </div>
  );
};
