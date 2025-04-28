import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Brain, CheckCircle, BarChart4, Trophy, Star, Users, Shield, Rocket, Zap } from 'lucide-react';
import { GoogleGeminiEffect } from '../components/ui/google-gemini-effect';
import { AnimatedSpan, Terminal, TypingAnimation } from '../components/magicui/terminal';

const HomePage: React.FC = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 10 } }
  };

  // Gemini effect scroll handling
  const geminiRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: geminiRef,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  
  const features = [
    {
      title: 'Pattern Recognition',
      description: 'Identify recurring patterns across different problem types to solve new challenges effortlessly.',
      icon: <Brain className="h-12 w-12 text-blue-500" />
    },
    {
      title: 'Interactive Visualizations',
      description: 'Learn complex algorithms through interactive step-by-step visualizations and code walkthroughs.',
      icon: <Code className="h-12 w-12 text-blue-500" />
    },
    {
      title: 'Smart Progress Tracking',
      description: 'Get personalized insights on your strengths and areas for improvement with AI-powered analytics.',
      icon: <BarChart4 className="h-12 w-12 text-blue-500" />
    },
    {
      title: 'Professional Certifications',
      description: 'Earn industry-recognized badges and certifications to showcase your technical expertise.',
      icon: <Trophy className="h-12 w-12 text-blue-500" />
    },
    {
      title: 'Time & Space Complexity',
      description: 'Master the art of optimizing your solutions with detailed complexity analysis and benchmarks.',
      icon: <Zap className="h-12 w-12 text-blue-500" />
    },
    {
      title: 'Vibrant Community',
      description: 'Connect with thousands of developers to discuss solutions, share insights, and grow together.',
      icon: <Users className="h-12 w-12 text-blue-500" />
    }
  ];

  function TerminalDemo() {
    return (
      <Terminal className="w-full max-w-lg shadow-xl shadow-blue-500/10">
        <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Preflight checks.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Verifying framework. Found Next.js.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Validating Tailwind CSS.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Validating import alias.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Writing components.json.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Checking registry.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Updating tailwind.config.ts</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Updating app/globals.css</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Installing dependencies.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ Updated 1 file:</span>
          <span className="pl-2">- lib/utils.ts</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-gray-400">
          Success! Project initialization completed.
        </TypingAnimation>

        <TypingAnimation delay={7000} className="text-gray-400">
          You may now add components.
        </TypingAnimation>
      </Terminal>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Gemini Effect */}
      <section 
        ref={geminiRef}
        className="relative min-h-[150vh] w-full"
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title="Code. Learn. Conquer."
          description="Master algorithms and data structures with our innovative learning platform designed for modern developers."
          className="z-10"
        />

        <div className="absolute inset-x-0 top-[35vh] flex justify-center z-30">
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="relative font-bold bg-white rounded-full px-10 py-5 text-xl text-black w-fit overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            AlgoMaster Pro
          </motion.button>
        </div>

        {/* Center content container */}
        <div className="absolute inset-0 top-[45vh] flex items-start justify-center z-20 px-4">
          <div className="flex flex-col items-center max-w-2xl w-full">
            {/* Start Coding Journey Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full blur-md opacity-70 group-hover:opacity-100 animate-pulse-slow transition-opacity duration-500"></div>
                <Link 
                  to="/practice" 
                  className="relative px-14 py-7 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 rounded-full font-bold text-white flex items-center shadow-2xl group border border-blue-600/50 text-xl overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    Start Coding Journey
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="ml-4 bg-blue-500 rounded-full p-1"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Terminal Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-10 w-full"
            >
              <TerminalDemo />
            </motion.div>
          </div>
        </div>
        
        {/* Floating tech stack */}
        <div className="absolute bottom-[5vh] left-0 right-0 hidden md:flex justify-center z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-6 flex-wrap justify-center"
          >
            {[
              { 
                name: 'Python', 
                color: 'bg-gradient-to-br from-blue-500 to-blue-700',
                borderColor: 'border-blue-400',
                icon: '🐍',
                hoverGlow: 'blue'
              },
              { 
                name: 'JavaScript', 
                color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
                borderColor: 'border-yellow-400',
                icon: '🟨',
                hoverGlow: 'yellow'
              },
              { 
                name: 'Java', 
                color: 'bg-gradient-to-br from-red-500 to-red-700',
                borderColor: 'border-red-400',
                icon: '☕',
                hoverGlow: 'red'
              },
              { 
                name: 'C++', 
                color: 'bg-gradient-to-br from-blue-700 to-indigo-900',
                borderColor: 'border-blue-400',
                icon: '⚡',
                hoverGlow: 'blue'
              },
              { 
                name: 'System Design', 
                color: 'bg-gradient-to-br from-green-500 to-green-700',
                borderColor: 'border-green-400',
                icon: '🔄',
                hoverGlow: 'green'
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: skill.hoverGlow === 'blue' 
                    ? '0 0 30px rgba(59, 130, 246, 0.5)' 
                    : skill.hoverGlow === 'yellow'
                    ? '0 0 30px rgba(251, 191, 36, 0.5)'
                    : skill.hoverGlow === 'red'
                    ? '0 0 30px rgba(239, 68, 68, 0.5)'
                    : skill.hoverGlow === 'green'
                    ? '0 0 30px rgba(16, 185, 129, 0.5)'
                    : '0 0 30px rgba(255, 255, 255, 0.5)'
                }}
                className={`px-6 py-3 rounded-xl ${skill.color} text-white font-medium text-base border border-opacity-30 ${skill.borderColor} shadow-lg backdrop-blur-sm transition-all duration-300 cursor-pointer relative overflow-hidden group`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;