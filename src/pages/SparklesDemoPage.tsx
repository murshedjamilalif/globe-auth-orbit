import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SparklesPreview, SparklesPreviewDark, SparklesPreviewColorful } from '../components/ui/sparkles-demo';

const SparklesDemoPage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">
          Sparkles Component Demos
        </h1>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Basic Sparkles
            </h2>
            <p className="mb-6 text-gray-300">
              A simple sparkles effect with a title and gradient.
            </p>
            <SparklesPreview />
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Full Page Dark Sparkles
            </h2>
            <p className="mb-6 text-gray-300">
              Sparkles that cover the entire background in a dark theme.
            </p>
            <SparklesPreviewDark />
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Colorful Sparkles
            </h2>
            <p className="mb-6 text-gray-300">
              Sparkles with custom color and gradient text.
            </p>
            <SparklesPreviewColorful />
          </section>
        </div>
      </div>
    </div>
  );
};

export default SparklesDemoPage; 