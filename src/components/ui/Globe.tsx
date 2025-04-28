
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    let phi = 0;
    let width = 0;
    
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    
    window.addEventListener("resize", onResize);
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
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers: [],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005;
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    
    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    });
    
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);
  
  return (
    <div
      className="w-full max-w-[600px] mx-auto relative"
      style={{ aspectRatio: "1" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full transition-opacity duration-1000 opacity-0"
        style={{ contain: "layout paint size" }}
      />
    </div>
  );
}

export default Globe;
