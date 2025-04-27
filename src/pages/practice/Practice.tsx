
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, Star, RotateCcw, ExternalLink, Flame, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProblemList from '@/components/problem/ProblemList';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { dsaPatterns } from '@/data/patternData';
import { popularProblems } from '@/data/problemData';
import { useIsMobile } from '@/hooks/use-mobile';

const Practice = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [patternFilter, setPatternFilter] = useState<string>('all');
  const [preferredLanguage, setPreferredLanguage] = useState<string>('javascript');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();
  
  const filteredProblems = popularProblems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || problem.status === statusFilter;
    const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty === difficultyFilter;
    const matchesPattern = patternFilter === 'all' || problem.patternId === patternFilter;
    
    return matchesSearch && matchesStatus && matchesDifficulty && matchesPattern;
  });

  const totalProblems = 300;
  const solvedProblems = popularProblems.filter(p => p.status === 'solved').length;
  
  const stats = {
    easy: {
      total: 48,
      solved: popularProblems.filter(p => p.difficulty === 'easy' && p.status === 'solved').length
    },
    medium: {
      total: 196,
      solved: popularProblems.filter(p => p.difficulty === 'medium' && p.status === 'solved').length
    },
    hard: {
      total: 56,
      solved: popularProblems.filter(p => p.difficulty === 'hard' && p.status === 'solved').length
    }
  };

  const handleReset = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setDifficultyFilter('all');
    setPatternFilter('all');
  };

  const pageSize = 10;
  const totalPages = Math.ceil(filteredProblems.length / pageSize);
  const paginatedProblems = filteredProblems.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1A1F2C]">
      <Navbar />
      
      <motion.main 
        className="flex-grow container mx-auto px-4 pt-24 pb-16 max-w-[1200px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center" variants={itemVariants}>
            <motion.h1 
              className="text-4xl font-bold mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Master DSA Patterns
            </motion.h1>
            <motion.p 
              className="text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Practice curated LeetCode problems organized by patterns. Our systematic approach helps you build intuition for solving algorithm challenges.
            </motion.p>
            
            {/* Subscription Tiers */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              variants={itemVariants}
            >
              <motion.div 
                className="p-6 rounded-xl bg-card border border-green-500/20 transition-all hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center gap-2 text-white">
                  <span className="text-xl flex items-center justify-center bg-green-500/20 p-2 rounded-full">
                    <Trophy />
                  </span>
                  <div>
                    <span className="text-lg font-medium block">AlgoMaster 300</span>
                    <span className="text-xs text-muted-foreground">3+ Months Preparation</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="p-6 rounded-xl bg-card border border-yellow-500/20 transition-all hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center gap-2 text-white">
                  <span className="text-xl flex items-center justify-center bg-yellow-500/20 p-2 rounded-full">
                    <Award />
                  </span>
                  <div>
                    <span className="text-lg font-medium block">AlgoMaster 150</span>
                    <span className="text-xs text-muted-foreground">1-3 Months Preparation</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="p-6 rounded-xl bg-card border border-blue-500/20 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center gap-2 text-white">
                  <span className="text-xl flex items-center justify-center bg-blue-500/20 p-2 rounded-full">
                    <Zap />
                  </span>
                  <div>
                    <span className="text-lg font-medium block">AlgoMaster 75</span>
                    <span className="text-xs text-muted-foreground">&lt;1 Month Preparation</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Problem Stats */}
            <motion.div 
              className="bg-card rounded-xl p-6 mb-8 shadow-lg border border-border/30"
              variants={itemVariants}
              whileHover={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">
                  <span className="text-primary">{solvedProblems}</span> / {totalProblems} Problems Solved
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground hidden md:inline-block">
                    Overall completion:
                  </span>
                  <div className="text-sm font-medium text-primary">
                    {Math.round((solvedProblems / totalProblems) * 100)}%
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm font-medium text-white flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span> Easy
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stats.easy.solved} / {stats.easy.total}
                    </div>
                  </div>
                  <Progress 
                    value={(stats.easy.solved / stats.easy.total) * 100} 
                    className="h-2 bg-muted" 
                    indicatorClassName="bg-green-500" 
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm font-medium text-white flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-yellow-500"></span> Medium
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stats.medium.solved} / {stats.medium.total}
                    </div>
                  </div>
                  <Progress 
                    value={(stats.medium.solved / stats.medium.total) * 100} 
                    className="h-2 bg-muted" 
                    indicatorClassName="bg-yellow-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm font-medium text-white flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span> Hard
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stats.hard.solved} / {stats.hard.total}
                    </div>
                  </div>
                  <Progress 
                    value={(stats.hard.solved / stats.hard.total) * 100} 
                    className="h-2 bg-muted"
                    indicatorClassName="bg-red-500" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Mobile Filter Toggle */}
            {isMobile && (
              <motion.div 
                className="mb-4"
                variants={itemVariants}
              >
                <Button 
                  onClick={() => setShowFilters(!showFilters)} 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Filter className="w-4 h-4" /> 
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </motion.div>
            )}

            {/* Filters Section */}
            <AnimatePresence>
              {(!isMobile || showFilters) && (
                <motion.div 
                  className="rounded-xl bg-card p-6 mb-8 shadow-lg border border-border/30"
                  variants={itemVariants}
                  initial={isMobile ? { height: 0, opacity: 0 } : { opacity: 0 }}
                  animate={isMobile ? { height: 'auto', opacity: 1 } : { opacity: 1 }}
                  exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold text-white mb-4">Filters</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="space-y-2">
                      <label htmlFor="search" className="text-sm text-white">Search</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="search"
                          placeholder="Search problems..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-9 bg-background/40 border-border/50 focus-visible:ring-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="status" className="text-sm text-white">Status</label>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger id="status" className="bg-background/40 border-border/50">
                          <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="solved">Solved</SelectItem>
                          <SelectItem value="unsolved">Unsolved</SelectItem>
                          <SelectItem value="starred">Starred</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="difficulty" className="text-sm text-white">Difficulty</label>
                      <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                        <SelectTrigger id="difficulty" className="bg-background/40 border-border/50">
                          <SelectValue placeholder="All Difficulties" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Difficulties</SelectItem>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="pattern" className="text-sm text-white">Pattern</label>
                      <Select value={patternFilter} onValueChange={setPatternFilter}>
                        <SelectTrigger id="pattern" className="bg-background/40 border-border/50">
                          <SelectValue placeholder="All Patterns" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Patterns</SelectItem>
                          <SelectItem value="arrays">Arrays</SelectItem>
                          <SelectItem value="two-pointers">Two Pointers</SelectItem>
                          <SelectItem value="sliding-window">Sliding Window</SelectItem>
                          <SelectItem value="dfs-bfs">DFS & BFS</SelectItem>
                          <SelectItem value="dynamic-programming">Dynamic Programming</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full md:w-auto">
                      <label htmlFor="language" className="text-sm text-white block mb-2">Preferred Language</label>
                      <ToggleGroup type="single" value={preferredLanguage} onValueChange={(value) => value && setPreferredLanguage(value)}>
                        <ToggleGroupItem value="javascript" className="text-xs">JavaScript</ToggleGroupItem>
                        <ToggleGroupItem value="python" className="text-xs">Python</ToggleGroupItem>
                        <ToggleGroupItem value="java" className="text-xs">Java</ToggleGroupItem>
                        <ToggleGroupItem value="cpp" className="text-xs">C++</ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                    
                    <div className="flex items-center ml-0 md:ml-auto gap-3 mt-4 md:mt-0 w-full md:w-auto">
                      <div className="flex items-center space-x-2">
                        <Switch id="daily-practice" />
                        <Label htmlFor="daily-practice" className="text-white text-sm">
                          Daily Practice
                        </Label>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => setStatusFilter('starred')}>
                        <Star className="w-4 h-4 mr-1" fill={statusFilter === 'starred' ? 'currentColor' : 'none'} />
                        Starred
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleReset}>
                        <RotateCcw className="w-4 h-4 mr-1" />
                        Reset
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Problem List */}
            <motion.div variants={itemVariants}>
              <ProblemList 
                problems={paginatedProblems}
                totalProblems={totalProblems}
                solvedProblems={solvedProblems}
              />
            </motion.div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div variants={itemVariants} className="mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) setCurrentPage(currentPage - 1);
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      // Show pages around current page
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <PaginationItem key={i}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(pageNum);
                            }}
                            isActive={currentPage === pageNum}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

// Define missing icon components
const Trophy = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
  );
};

export default Practice;
