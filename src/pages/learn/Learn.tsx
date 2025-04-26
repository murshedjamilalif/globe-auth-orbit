
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Layers } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseCard from '@/components/ui/CourseCard';
import { dsaCourses, systemDesignCourses } from '@/data/courseData';

const Learn = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Learning Paths</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Structured learning paths to help you master data structures, algorithms, and system design
            </p>
          </header>
          
          <Tabs defaultValue="dsa" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="dsa">Data Structures & Algorithms</TabsTrigger>
              <TabsTrigger value="system-design">System Design</TabsTrigger>
            </TabsList>
            
            {/* DSA Courses */}
            <TabsContent value="dsa" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dsaCourses.map((course) => (
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
                    progress={course.id === 'dsa-300' ? 15 : 0} // Example progress for one course
                  />
                ))}
              </div>
              
              <div className="mt-12 bg-muted/30 border rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:flex-1">
                    <h3 className="text-2xl font-bold mb-2">Not sure which course to choose?</h3>
                    <p className="text-muted-foreground mb-4">
                      Take our quick assessment and we'll recommend the perfect learning path based on your experience level and goals.
                    </p>
                    <Link to="/assessment" className="text-primary hover:underline">
                      Take skill assessment →
                    </Link>
                  </div>
                  <div className="md:flex-1">
                    <div className="bg-background rounded-lg border p-4">
                      <h4 className="font-bold mb-2">Compare Learning Paths</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between text-sm">
                          <span>AlgoMaster 300</span>
                          <span className="text-muted-foreground">Comprehensive, 3+ months</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span>AlgoMaster 150</span>
                          <span className="text-muted-foreground">Balanced, 1-3 months</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span>AlgoMaster 75</span>
                          <span className="text-muted-foreground">Focused, &lt;1 month</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* System Design Courses */}
            <TabsContent value="system-design" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {systemDesignCourses.map((course) => (
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
                
                {/* Coming Soon Card */}
                <div className="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center h-full">
                  <BookOpen className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                  <p className="text-muted-foreground mb-4">
                    More system design courses are being developed. Stay tuned!
                  </p>
                  <Link to="/newsletter" className="text-primary hover:underline">
                    Get notified when released →
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Features Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Learn With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background p-6 rounded-lg border">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Pattern Recognition</h3>
                <p className="text-muted-foreground text-sm">
                  Learn to identify common patterns that will help you solve similar problems in the future.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Multiple Approaches</h3>
                <p className="text-muted-foreground text-sm">
                  Learn different ways to solve each problem with full time and space complexity analysis.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Real Code Examples</h3>
                <p className="text-muted-foreground text-sm">
                  Practical implementations in multiple programming languages with detailed explanations.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Structured Progress</h3>
                <p className="text-muted-foreground text-sm">
                  Follow a clear progression path from fundamentals to advanced concepts at your own pace.
                </p>
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Student Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold">JD</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Jane Doe</h3>
                    <p className="text-sm text-muted-foreground">Software Engineer at Google</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The pattern-based approach completely changed how I tackle algorithm problems. I went from struggling with LeetCode mediums to confidently solving hards."
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold">MS</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Mike Smith</h3>
                    <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I completed the AlgoMaster 150 in 2 months and landed multiple job offers. The multiple approaches for each problem really expanded my thinking."
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold">AL</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Amy Lee</h3>
                    <p className="text-sm text-muted-foreground">Computer Science Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As a student, the structured approach helped me understand DSA concepts better than my university courses. The LLD course was especially eye-opening."
                </p>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-2">How much time should I commit to the courses?</h3>
                <p className="text-muted-foreground">
                  We recommend dedicating 1-2 hours daily for optimal results. However, our courses are self-paced, so you can adjust based on your schedule.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Do I need to know programming already?</h3>
                <p className="text-muted-foreground">
                  Basic programming knowledge in at least one language is recommended. We provide code examples in Python, JavaScript, Java, and C++.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">How do the different courses differ?</h3>
                <p className="text-muted-foreground">
                  The courses differ in problem count, difficulty level, and time commitment. AlgoMaster 300 is comprehensive, 150 is balanced, and 75 is focused on interview essentials.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Will this help me pass technical interviews?</h3>
                <p className="text-muted-foreground">
                  Absolutely! Our courses are specifically designed to prepare you for technical interviews at top companies, with problems commonly asked in interviews.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Learn;
