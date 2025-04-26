
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, BookOpen, Filter, Search, Clock, Code, Grid, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PatternCard from '@/components/ui/PatternCard';
import ProblemCard from '@/components/ui/ProblemCard';
import { ProblemDifficulty, ProblemStatus } from '@/components/ui/ProblemCard';
import { dsaPatterns } from '@/data/patternData';
import { popularProblems } from '@/data/problemData';

const Practice = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [patternFilter, setPatternFilter] = useState<string>('all');
  
  // Filter problems based on filters
  const filteredProblems = popularProblems.filter(problem => {
    // Search query filter
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    const matchesStatus = statusFilter === 'all' || problem.status === statusFilter;
    
    // Difficulty filter
    const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty === difficultyFilter;
    
    // Pattern filter
    const matchesPattern = patternFilter === 'all' || problem.patternId === patternFilter;
    
    return matchesSearch && matchesStatus && matchesDifficulty && matchesPattern;
  });
  
  // Simple stats
  const totalProblems = popularProblems.length;
  const solvedProblems = popularProblems.filter(p => p.status === 'solved').length;
  const easyProblems = popularProblems.filter(p => p.difficulty === 'easy').length;
  const mediumProblems = popularProblems.filter(p => p.difficulty === 'medium').length;
  const hardProblems = popularProblems.filter(p => p.difficulty === 'hard').length;
  const solvedEasy = popularProblems.filter(p => p.difficulty === 'easy' && p.status === 'solved').length;
  const solvedMedium = popularProblems.filter(p => p.difficulty === 'medium' && p.status === 'solved').length;
  const solvedHard = popularProblems.filter(p => p.difficulty === 'hard' && p.status === 'solved').length;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">Master DSA Patterns</h1>
            <p className="text-xl text-muted-foreground">
              Practice curated problems organized by patterns
            </p>
          </header>
          
          {/* Study Plan Tabs */}
          <div className="mb-12">
            <Tabs defaultValue="master-300" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="master-300" className="flex items-center gap-2">
                  <span className="text-yellow-500">🏆</span>
                  <span>AlgoMaster 300</span>
                  <span className="text-sm text-muted-foreground">(3+ Months)</span>
                </TabsTrigger>
                <TabsTrigger value="master-150" className="flex items-center gap-2">
                  <span className="text-yellow-500">💪</span>
                  <span>AlgoMaster 150</span>
                  <span className="text-sm text-muted-foreground">(1-3 Months)</span>
                </TabsTrigger>
                <TabsTrigger value="master-75" className="flex items-center gap-2">
                  <span className="text-yellow-500">⚡</span>
                  <span>AlgoMaster 75</span>
                  <span className="text-sm text-muted-foreground">(&lt;1 Month)</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Filter Bar */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Filters</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-medium">Search</label>
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search problems..." 
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-medium">Status</label>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="solved">Solved</SelectItem>
                        <SelectItem value="unsolved">Unsolved</SelectItem>
                        <SelectItem value="starred">Starred</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-medium">Difficulty</label>
                    <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-medium">Pattern</label>
                    <Select value={patternFilter} onValueChange={setPatternFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Patterns" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Patterns</SelectItem>
                        {dsaPatterns.map(pattern => (
                          <SelectItem key={pattern.id} value={pattern.id}>{pattern.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button variant="outline" onClick={() => {
                    setSearchQuery('');
                    setStatusFilter('all');
                    setDifficultyFilter('all');
                    setPatternFilter('all');
                  }}>
                    Reset Filters
                  </Button>
                </div>
              </Card>
              
              {/* Problem List */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Problems</h2>
                  <span className="text-sm text-muted-foreground">{filteredProblems.length} problems found</span>
                </div>
                
                {filteredProblems.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3">
                    {filteredProblems.map(problem => (
                      <ProblemCard
                        key={problem.id}
                        id={problem.id}
                        title={problem.title}
                        patternName={problem.patternName}
                        difficulty={problem.difficulty as ProblemDifficulty}
                        status={problem.status as ProblemStatus}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No problems match your filters.</p>
                    <Button
                      variant="link"
                      onClick={() => {
                        setSearchQuery('');
                        setStatusFilter('all');
                        setDifficultyFilter('all');
                        setPatternFilter('all');
                      }}
                    >
                      Reset filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Progress */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Your Progress</h2>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Overall</span>
                    <span>{solvedProblems} / {totalProblems} Solved</span>
                  </div>
                  <Progress value={(solvedProblems / totalProblems) * 100} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-green-600 dark:text-green-400 font-medium">Easy</span>
                      <span className="text-sm">{solvedEasy} / {easyProblems}</span>
                    </div>
                    <Progress value={(solvedEasy / easyProblems) * 100} className="h-1.5 bg-green-100 dark:bg-green-950">
                      <div className="h-full bg-green-500" />
                    </Progress>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-yellow-600 dark:text-yellow-400 font-medium">Medium</span>
                      <span className="text-sm">{solvedMedium} / {mediumProblems}</span>
                    </div>
                    <Progress value={(solvedMedium / mediumProblems) * 100} className="h-1.5 bg-yellow-100 dark:bg-yellow-950">
                      <div className="h-full bg-yellow-500" />
                    </Progress>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-red-600 dark:text-red-400 font-medium">Hard</span>
                      <span className="text-sm">{solvedHard} / {hardProblems}</span>
                    </div>
                    <Progress value={(solvedHard / hardProblems) * 100} className="h-1.5 bg-red-100 dark:bg-red-950">
                      <div className="h-full bg-red-500" />
                    </Progress>
                  </div>
                </div>
              </Card>
              
              {/* Study Plan */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-2">Daily Goals</h2>
                <p className="text-muted-foreground mb-4">Solve at least 3 problems every day to maintain your streak.</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Today's Progress</span>
                  <span>1 / 3 problems</span>
                </div>
                <Progress value={33} className="h-2 mb-4" />
                <Button className="w-full">Start Today's Challenge</Button>
              </Card>
              
              {/* Suggested Problem */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-2">Suggested Next</h2>
                <p className="text-muted-foreground mb-4">Based on your progress, try this problem:</p>
                <ProblemCard
                  id="merge-intervals"
                  title="Merge Intervals"
                  patternName="Arrays & Hashing"
                  difficulty="medium"
                  status="unsolved"
                />
              </Card>
            </div>
          </div>
          
          {/* DSA Patterns Section */}
          <section className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Browse by Patterns</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dsaPatterns.map(pattern => (
                <PatternCard
                  key={pattern.id}
                  id={pattern.id}
                  name={pattern.name}
                  description={pattern.description}
                  icon={pattern.icon}
                  totalProblems={pattern.totalProblems}
                  solvedProblems={Math.floor(Math.random() * pattern.totalProblems)} // Simulated data
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Practice;
