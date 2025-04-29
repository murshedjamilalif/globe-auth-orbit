import React, { useRef, useEffect } from 'react';
import createGlobe from 'cobe';

interface GlobeProps {
  className?: string;
}

const Globe: React.FC<GlobeProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    
    window.addEventListener('resize', onResize);
    onResize();
    
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.1,
      mapSamples: 30000,
      mapBrightness: 8,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.3, 0.7, 1],
      glowColor: [0.3, 0.5, 1],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.002;
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    
    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = '1';
      }
    }, 100);
    
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);
  
  return (
    <div
      className={`w-full aspect-square mx-auto relative ${className || ''}`}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-br from-blue-500/30 via-blue-300/10 to-transparent opacity-50" />
      
      {/* Outer glow effect */}
      <div className="absolute inset-[10%] rounded-full blur-[100px] bg-blue-500/20 opacity-70" />
      
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-1000 relative z-10"
        style={{ contain: 'layout paint size' }}
      />
    </div>
  );
};

export default Globe;
