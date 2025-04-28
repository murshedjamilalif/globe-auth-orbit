
import React, { useRef, useEffect } from 'react';
import createGlobe from 'cobe';

const Globe: React.FC = () => {
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
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [0.1, 0.1, 0.2],
      markerColor: [0.9, 0.4, 0.1],
      glowColor: [0.4, 0.4, 1],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
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
      className="w-full max-w-xl aspect-square mx-auto relative"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-1000"
        style={{ contain: 'layout paint size' }}
      />
    </div>
  );
};

export default Globe;
