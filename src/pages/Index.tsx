
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, BookOpen, UsersIcon, Layers, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseCard from '@/components/ui/CourseCard';
import ProblemCard from '@/components/ui/ProblemCard';
import { dsaCourses, systemDesignCourses } from '@/data/courseData';
import { popularProblems } from '@/data/problemData';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">
              Master DSA with Pattern-Based Learning
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Unlock your coding potential with our structured, pattern-based approach to Data Structures & Algorithms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/learn">Start Learning</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/practice">Practice Problems</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Learn with Alifinity?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-xl border hover:border-primary/50 transition-all">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pattern-Based Learning</h3>
              <p className="text-muted-foreground">Learn through categorized patterns to quickly recognize and solve similar problems.</p>
            </div>
            
            <div className="bg-background p-6 rounded-xl border hover:border-primary/50 transition-all">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple Approaches</h3>
              <p className="text-muted-foreground">Each problem includes multiple solution strategies with time and space complexity analysis.</p>
            </div>
            
            <div className="bg-background p-6 rounded-xl border hover:border-primary/50 transition-all">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Structured Roadmaps</h3>
              <p className="text-muted-foreground">Follow our carefully designed learning paths based on your timeline and goals.</p>
            </div>
            
            <div className="bg-background p-6 rounded-xl border hover:border-primary/50 transition-all">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <UsersIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p className="text-muted-foreground">Join a community of learners to discuss solutions and share your progress.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Learning Paths</h2>
            <Link to="/learn" className="text-primary hover:underline mt-2 md:mt-0">
              View all courses →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DSA Courses */}
            {dsaCourses.slice(0, 2).map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                icon={<Code className="h-5 w-5 text-primary" />}
                duration={course.duration}
                problemCount={course.problemCount}
                difficulty={course.difficulty}
                featured={course.featured}
              />
            ))}
            
            {/* System Design Course */}
            {systemDesignCourses.slice(0, 1).map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                icon={<Layers className="h-5 w-5 text-primary" />}
                duration={course.duration}
                problemCount={course.problemCount}
                difficulty={course.difficulty}
                featured={course.featured}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Problems Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popular Problems</h2>
            <Link to="/practice" className="text-primary hover:underline mt-2 md:mt-0">
              View all problems →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularProblems.slice(0, 6).map((problem) => (
              <ProblemCard
                key={problem.id}
                id={problem.id}
                title={problem.title}
                patternName={problem.patternName}
                difficulty={problem.difficulty}
                status={problem.status}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-brand-blue to-brand-teal rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to become an algorithm master?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Join thousands of developers who have improved their problem-solving skills and aced technical interviews with Alifinity.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary" asChild>
                <Link to="/register">Create Free Account</Link>
              </Button>
              <Button size="lg" className="bg-transparent border-white text-white hover:bg-white/20" asChild>
                <Link to="/learn">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">Get weekly DSA tips, new problems, and interview preparation advice delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md bg-background border focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
