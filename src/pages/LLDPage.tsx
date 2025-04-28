import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Monitor, Code, ChevronRight, BookOpen, PenTool, GitMerge, Package, ArrowRight,
  Car, CreditCard, ShoppingCart, MessageSquare, Calendar, Coffee, Users, Wallet, FileCog, Database
} from 'lucide-react';
import { lldCourses } from '../data/lldCourses';

// Icon mapping component
const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  const iconProps = { size: 24, className: className || "" };
  switch (name) {
    case 'Car': return <Car {...iconProps} />;
    case 'CreditCard': return <CreditCard {...iconProps} />;
    case 'ShoppingCart': return <ShoppingCart {...iconProps} />;
    case 'MessageSquare': return <MessageSquare {...iconProps} />;
    case 'Calendar': return <Calendar {...iconProps} />;
    case 'Coffee': return <Coffee {...iconProps} />;
    case 'Users': return <Users {...iconProps} />;
    case 'Wallet': return <Wallet {...iconProps} />;
    case 'FileCog': return <FileCog {...iconProps} />;
    case 'Database': return <Database {...iconProps} />;
    default: return <Package {...iconProps} />;
  }
};

const LLDPage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className={`rounded-2xl overflow-hidden shadow-lg relative ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 pointer-events-none"></div>
            <div className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3">
                  <h1 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">
                    Low Level Design (LLD)
                  </h1>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                    Master the art of designing robust, maintainable object-oriented systems. 
                    Learn how to translate requirements into clean, testable code using SOLID principles, 
                    design patterns, and best practices.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="#courses" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center">
                      <BookOpen size={18} className="mr-2" />
                      Explore Courses
                    </Link>
                    <Link to="#design-patterns" className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center">
                      <PenTool size={18} className="mr-2" />
                      Design Patterns
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/3 ml-10">
                  <Monitor size={200} className="text-purple-500/40" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What is LLD Section */}
        <section className="mb-12">
          <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-purple-500 mb-6">
                What is Low Level Design?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                    Low Level Design (LLD) focuses on the detailed design of individual components and their interactions within a software system. 
                    It bridges the gap between high-level architecture and actual code implementation.
                  </p>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                    While system design (HLD) deals with the overall architecture of a system, LLD goes deeper into:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <ChevronRight size={18} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Class structures and their relationships
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={18} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Interfaces and abstract classes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={18} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Design patterns application
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={18} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        SOLID principles implementation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={18} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Error handling and edge cases
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-purple-400 mb-4">Why Learn LLD?</h3>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className="flex items-center mb-2">
                        <Code size={20} className="text-purple-500 mr-3" />
                        <h4 className="text-lg font-medium text-white">Coding Interviews</h4>
                      </div>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        LLD questions are common in technical interviews at top companies, especially for mid to senior-level roles.
                      </p>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className="flex items-center mb-2">
                        <Package size={20} className="text-purple-500 mr-3" />
                        <h4 className="text-lg font-medium text-white">Better Software</h4>
                      </div>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Create more maintainable, extensible code that's easier to test and less prone to bugs.
                      </p>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className="flex items-center mb-2">
                        <GitMerge size={20} className="text-purple-500 mr-3" />
                        <h4 className="text-lg font-medium text-white">Career Growth</h4>
                      </div>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Essential skill for moving beyond junior roles and leading technical projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* LLD Courses */}
        <section id="courses" className="mb-12">
          <h2 className="text-2xl font-bold text-purple-500 mb-6 flex items-center">
            <BookOpen size={24} className="mr-2" />
            LLD Courses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lldCourses.map((course, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}
              >
                <div className={`h-2 ${course.colorClass}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent name={course.icon} className={course.iconColor} />
                    <h3 className="text-xl font-semibold text-white ml-3">{course.title}</h3>
                  </div>
                  
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4 min-h-[4rem]`}>
                    {course.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">Difficulty</span>
                      <span className={`text-xs ${
                        course.difficulty === 'Easy' 
                          ? 'text-green-500' 
                          : course.difficulty === 'Medium'
                          ? 'text-amber-500' 
                          : 'text-red-500'
                      }`}>
                        {course.difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">Lessons</span>
                      <span className="text-xs text-purple-500">{course.lessons}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Duration</span>
                      <span className="text-xs text-purple-500">{course.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">Completion</span>
                      <span className="text-xs text-purple-500">{course.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={course.colorClass}
                        style={{ width: `${course.completion}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to={`/lld/${course.id}`}
                      className={`w-full inline-flex justify-center items-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white ${course.buttonColorClass} hover:${course.buttonHoverClass} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${course.colorName}-500 transition-colors duration-200`}
                    >
                      Start Learning
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Design Patterns Section */}
        <section id="design-patterns" className="mb-12">
          <h2 className="text-2xl font-bold text-purple-500 mb-6 flex items-center">
            <PenTool size={24} className="mr-2" />
            Design Patterns
          </h2>
          
          <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="p-8">
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                Design patterns are proven solutions to common problems in software design. They represent best practices used by experienced object-oriented software developers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Creational Patterns */}
                <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Creational Patterns</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                    Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link to="#" className="flex items-center text-purple-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Singleton Pattern
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-purple-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Factory Method
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-purple-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Abstract Factory
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-purple-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Builder Pattern
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-purple-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Prototype Pattern
                      </Link>
                    </li>
                  </ul>
                </div>
                
                {/* Structural Patterns */}
                <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h3 className="text-xl font-medium text-teal-400 mb-3">Structural Patterns</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                    Deal with object composition or defining ways to compose objects to obtain new functionality.
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link to="#" className="flex items-center text-teal-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Adapter Pattern
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-teal-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Bridge Pattern
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-teal-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Composite Pattern
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-teal-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Decorator Pattern
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-teal-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Facade Pattern
                      </Link>
                    </li>
                  </ul>
                </div>
                
                {/* Behavioral Patterns */}
                <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h3 className="text-xl font-medium text-amber-400 mb-3">Behavioral Patterns</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                    Deal with object collaboration and delegation of responsibilities between objects.
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link to="#" className="flex items-center text-amber-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Observer Pattern
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-amber-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Strategy Pattern
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-amber-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Command Pattern
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-amber-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Iterator Pattern
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center text-amber-500 hover:underline">
                        <ChevronRight size={16} className="mr-1" />
                        Mediator Pattern
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  Ready to become an LLD expert?
                </h2>
                <p className="mt-4 text-lg text-purple-100">
                  Start your journey to mastering object-oriented design today. From interview prep to better code organization.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link
                    to="/lld/parking-lot"
                    className="px-8 py-3 rounded-full bg-white text-purple-600 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 shadow-lg transition-colors duration-200"
                  >
                    Start First Course
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LLDPage;