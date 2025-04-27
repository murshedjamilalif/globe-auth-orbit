
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
    <div className="flex flex-col min-h-screen bg-[#121212]">
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
              className="text-4xl font-bold mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#0BFFD5]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Master DSA Patterns
            </motion.h1>
            <motion.p 
              className="text-gray-400 mb-8 max-w-2xl mx-auto"
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
                className="subscription-card border-green-500/20 p-6"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center gap-2 text-white">
                  <span className="text-xl flex items-center justify-center bg-green-500/20 p-2 rounded-full">
                    <Trophy />
                  </span>
                  <div className="text-left">
                    <span className="text-lg font-medium block">AlgoMaster 300</span>
                    <span className="text-xs text-gray-400">3+ Months Preparation</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="subscription-card border-yellow-500/20 p-6"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center gap-2 text-white">
                  <span className="text-xl flex items-center justify-center bg-yellow-500/20 p-2 rounded-full">
                    <Award />
                  </span>
                  <div className="text-left">
                    <span className="text-lg font-medium block">AlgoMaster 150</span>
                    <span className="text-xs text-gray-400">1-3 Months Preparation</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="subscription-card border-blue-500/20 p-6"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center gap-2 text-white">
                  <span className="text-xl flex items-center justify-center bg-blue-500/20 p-2 rounded-full">
                    <Zap />
                  </span>
                  <div className="text-left">
                    <span className="text-lg font-medium block">AlgoMaster 75</span>
                    <span className="text-xs text-gray-400">&lt;1 Month Preparation</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Problem Stats */}
            <motion.div 
              className="bg-[#1C1C1C] rounded-xl p-6 mb-8 shadow-lg border border-[#333]"
              variants={itemVariants}
              whileHover={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">
                  <span className="text-[#00A3FF]">{solvedProblems}</span> / {totalProblems} Problems Solved
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400 hidden md:inline-block">
                    Overall completion:
                  </span>
                  <div className="text-sm font-medium text-[#00A3FF]">
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
                    <div className="text-sm text-gray-400">
                      {stats.easy.solved} / {stats.easy.total}
                    </div>
                  </div>
                  <Progress 
                    value={(stats.easy.solved / stats.easy.total) * 100} 
                    className="progress-bar-easy" 
                    indicatorClassName="progress-indicator-easy" 
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm font-medium text-white flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-yellow-500"></span> Medium
                    </div>
                    <div className="text-sm text-gray-400">
                      {stats.medium.solved} / {stats.medium.total}
                    </div>
                  </div>
                  <Progress 
                    value={(stats.medium.solved / stats.medium.total) * 100} 
                    className="progress-bar-medium"
                    indicatorClassName="progress-indicator-medium"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm font-medium text-white flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span> Hard
                    </div>
                    <div className="text-sm text-gray-400">
                      {stats.hard.solved} / {stats.hard.total}
                    </div>
                  </div>
                  <Progress 
                    value={(stats.hard.solved / stats.hard.total) * 100} 
                    className="progress-bar-hard"
                    indicatorClassName="progress-indicator-hard"
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
                  className="w-full flex items-center justify-center gap-2 bg-[#1C1C1C] border-[#333] text-white"
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
                  className="filter-container mb-8"
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
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="search"
                          placeholder="Search problems..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-9 bg-[#252525] border-[#333] focus-visible:ring-[#00A3FF] text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="status" className="text-sm text-white">Status</label>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger id="status" className="bg-[#252525] border-[#333] text-white">
                          <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#252525] border-[#333] text-white">
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
                        <SelectTrigger id="difficulty" className="bg-[#252525] border-[#333] text-white">
                          <SelectValue placeholder="All Difficulties" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#252525] border-[#333] text-white">
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
                        <SelectTrigger id="pattern" className="bg-[#252525] border-[#333] text-white">
                          <SelectValue placeholder="All Patterns" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#252525] border-[#333] text-white">
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
                      <ToggleGroup type="single" value={preferredLanguage} onValueChange={(value) => value && setPreferredLanguage(value)} className="bg-[#252525] rounded-md p-1">
                        <ToggleGroupItem value="javascript" className="text-xs data-[state=on]:bg-[#1a1a1a] data-[state=on]:text-white">JavaScript</ToggleGroupItem>
                        <ToggleGroupItem value="python" className="text-xs data-[state=on]:bg-[#1a1a1a] data-[state=on]:text-white">Python</ToggleGroupItem>
                        <ToggleGroupItem value="java" className="text-xs data-[state=on]:bg-[#1a1a1a] data-[state=on]:text-white">Java</ToggleGroupItem>
                        <ToggleGroupItem value="cpp" className="text-xs data-[state=on]:bg-[#1a1a1a] data-[state=on]:text-white">C++</ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                    
                    <div className="flex items-center ml-0 md:ml-auto gap-3 mt-4 md:mt-0 w-full md:w-auto">
                      <div className="flex items-center space-x-2">
                        <Switch id="daily-practice" />
                        <Label htmlFor="daily-practice" className="text-white text-sm">
                          Daily Practice
                        </Label>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => setStatusFilter('starred')} className="border-[#333] bg-[#252525] text-white hover:bg-[#333]">
                        <Star className="w-4 h-4 mr-1" fill={statusFilter === 'starred' ? 'currentColor' : 'none'} />
                        Starred
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleReset} className="border-[#333] bg-[#252525] text-white hover:bg-[#333]">
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
                        className={`bg-[#1C1C1C] border border-[#333] text-white hover:bg-[#252525] ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
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
                            className={currentPage === pageNum ? "bg-[#00A3FF] text-white border-[#00A3FF]" : "bg-[#1C1C1C] border border-[#333] text-white hover:bg-[#252525]"}
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
                        className={`bg-[#1C1C1C] border border-[#333] text-white hover:bg-[#252525] ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
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
