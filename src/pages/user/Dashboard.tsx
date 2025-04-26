
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Calendar, ChevronRight, Code, Star, Check } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProblemCard from '@/components/ui/ProblemCard';
import { popularProblems } from '@/data/problemData';
import { dsaPatterns } from '@/data/patternData';

const Dashboard = () => {
  // Get recently solved and bookmarked problems
  const recentlySolved = popularProblems.filter(p => p.status === 'solved').slice(0, 3);
  const bookmarkedProblems = popularProblems.filter(p => p.status === 'starred').slice(0, 3);
  
  // Calculate stats
  const totalProblems = popularProblems.length;
  const solvedProblems = popularProblems.filter(p => p.status === 'solved').length;
  const starredProblems = popularProblems.filter(p => p.status === 'starred').length;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Track your progress and continue learning</p>
          </header>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-muted-foreground mb-1">Problems Solved</p>
                    <h3 className="text-3xl font-bold">{solvedProblems}</h3>
                  </div>
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <Progress value={(solvedProblems / totalProblems) * 100} className="h-1 mt-3" />
                <p className="text-xs text-muted-foreground mt-2">{Math.round((solvedProblems / totalProblems) * 100)}% of total problems</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-muted-foreground mb-1">Current Streak</p>
                    <h3 className="text-3xl font-bold">3</h3>
                  </div>
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                    <Calendar className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                    <div 
                      key={day} 
                      className={`h-2 w-full ml-1 first:ml-0 rounded-sm ${
                        day < 4 ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">3 days in a row</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-muted-foreground mb-1">Bookmarked</p>
                    <h3 className="text-3xl font-bold">{starredProblems}</h3>
                  </div>
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                    <Star className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                </div>
                <div className="grid grid-cols-8 gap-0.5 mt-4">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 rounded-sm ${
                        i < (starredProblems / totalProblems) * 8 ? 'bg-yellow-500' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">{starredProblems} problems saved for review</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-muted-foreground mb-1">Course Progress</p>
                    <h3 className="text-3xl font-bold">15%</h3>
                  </div>
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <Progress value={15} className="h-1 mt-3" />
                <p className="text-xs text-muted-foreground mt-2">AlgoMaster 300 course</p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="progress">Detailed Progress</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Activity Feed */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Continue Learning Section */}
                  <Card>
                    <CardHeader className="pb-3">
                      <h2 className="text-xl font-bold">Continue Learning</h2>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-muted/30 p-4 rounded-lg border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div>
                            <h3 className="font-bold">AlgoMaster 300</h3>
                            <p className="text-sm text-muted-foreground">Last studied: Arrays & Hashing</p>
                          </div>
                          <div className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto" asChild>
                              <Link to="/learn/dsa-300">Resume Course</Link>
                            </Button>
                          </div>
                        </div>
                        
                        <div className="bg-muted/30 p-4 rounded-lg border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div>
                            <h3 className="font-bold">Low Level Design</h3>
                            <p className="text-sm text-muted-foreground">Last studied: Observer Pattern</p>
                          </div>
                          <div className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto" asChild>
                              <Link to="/learn/lld">Resume Course</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Recently Solved Problems */}
                  <Card>
                    <CardHeader className="pb-3 flex flex-row justify-between items-center">
                      <h2 className="text-xl font-bold">Recently Solved</h2>
                      <Link to="/practice" className="text-sm text-primary hover:underline">
                        View all
                      </Link>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {recentlySolved.length > 0 ? (
                          recentlySolved.map(problem => (
                            <ProblemCard
                              key={problem.id}
                              id={problem.id}
                              title={problem.title}
                              patternName={problem.patternName}
                              difficulty={problem.difficulty}
                              status={problem.status}
                            />
                          ))
                        ) : (
                          <div className="text-center py-6 text-muted-foreground">
                            <p>You haven't solved any problems yet.</p>
                            <Button variant="link" className="mt-2" asChild>
                              <Link to="/practice">Start practicing now</Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Bookmarked Problems */}
                  <Card>
                    <CardHeader className="pb-3 flex flex-row justify-between items-center">
                      <h2 className="text-xl font-bold">Bookmarked Problems</h2>
                      <Link to="/practice" className="text-sm text-primary hover:underline">
                        View all
                      </Link>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {bookmarkedProblems.length > 0 ? (
                          bookmarkedProblems.map(problem => (
                            <ProblemCard
                              key={problem.id}
                              id={problem.id}
                              title={problem.title}
                              patternName={problem.patternName}
                              difficulty={problem.difficulty}
                              status={problem.status}
                            />
                          ))
                        ) : (
                          <div className="text-center py-6 text-muted-foreground">
                            <p>You haven't bookmarked any problems yet.</p>
                            <Button variant="link" className="mt-2" asChild>
                              <Link to="/practice">Browse problems</Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Daily Goal */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-lg font-bold">Daily Goal</h2>
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Today's Progress</span>
                          <span>1 / 3 problems</span>
                        </div>
                        <Progress value={33} className="h-2" />
                      </div>
                      
                      <Button className="w-full">Solve Today's Challenge</Button>
                    </CardContent>
                  </Card>
                  
                  {/* Pattern Progress */}
                  <Card>
                    <CardHeader className="pb-3">
                      <h2 className="text-xl font-bold">Pattern Progress</h2>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {dsaPatterns.slice(0, 4).map(pattern => (
                        <Link to={`/practice/pattern/${pattern.id}`} key={pattern.id} className="block">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{pattern.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {Math.floor(Math.random() * pattern.totalProblems)} / {pattern.totalProblems}
                            </span>
                          </div>
                          <Progress value={Math.floor(Math.random() * 100)} className="h-1.5" />
                        </Link>
                      ))}
                      
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/practice">View All Patterns</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  
                  {/* Upcoming Contest */}
                  <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-bold mb-2">Weekly Contest</h2>
                      <p className="text-sm text-muted-foreground mb-4">
                        Join our weekly coding contest this Saturday at 10:00 AM
                      </p>
                      <Button variant="outline" className="w-full">Register Now</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="progress">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold">Pattern Mastery</h2>
                    <div className="space-y-4">
                      {dsaPatterns.map(pattern => (
                        <div key={pattern.id}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{pattern.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {Math.floor(Math.random() * pattern.totalProblems)} / {pattern.totalProblems}
                            </span>
                          </div>
                          <Progress value={Math.floor(Math.random() * 100)} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="achievements">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Your Achievements</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Achievement Cards */}
                    <div className="border rounded-lg p-4 text-center">
                      <div className="bg-primary/10 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-3">
                        <Code className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold mb-1">First Solve</h3>
                      <p className="text-xs text-muted-foreground">Solved your first problem</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 text-center">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-3">
                        <Star className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-bold mb-1">Streak Master</h3>
                      <p className="text-xs text-muted-foreground">7-day solving streak (locked)</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 text-center">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-3">
                        <BookOpen className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-bold mb-1">Pattern Expert</h3>
                      <p className="text-xs text-muted-foreground">Master a pattern (locked)</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 text-center">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-3">
                        <Code className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-bold mb-1">Hard Hitter</h3>
                      <p className="text-xs text-muted-foreground">Solve 5 hard problems (locked)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
