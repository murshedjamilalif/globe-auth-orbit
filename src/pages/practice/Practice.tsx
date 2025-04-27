
import React, { useState } from 'react';
import { Filter, Search, Star, RotateCcw, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProblemList from '@/components/problem/ProblemList';
import { Progress } from '@/components/ui/progress';
import { dsaPatterns } from '@/data/patternData';
import { popularProblems } from '@/data/problemData';

const Practice = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [patternFilter, setPatternFilter] = useState<string>('all');
  const [preferredLanguage, setPreferredLanguage] = useState<string>('javascript');
  
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

  return (
    <div className="flex flex-col min-h-screen bg-[#1A1F2C]">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16 max-w-[1200px]">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Master DSA Patterns</h1>
            <p className="text-muted-foreground mb-8">Practice curated LeetCode problems organized by patterns.</p>
            
            {/* Subscription Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-6 rounded-lg bg-card border border-green-500/20 transition-all hover:border-green-500/50">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-xl">🏆</span>
                  <span className="text-lg font-medium">AlgoMaster 300</span>
                  <span className="text-xs text-muted-foreground">(3+ Months)</span>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-yellow-500/20 transition-all hover:border-yellow-500/50">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-xl">💪</span>
                  <span className="text-lg font-medium">AlgoMaster 150</span>
                  <span className="text-xs text-muted-foreground">(1-3 Months)</span>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-blue-500/20 transition-all hover:border-blue-500/50">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-xl">⚡</span>
                  <span className="text-lg font-medium">AlgoMaster 75</span>
                  <span className="text-xs text-muted-foreground">(&lt;1 Month)</span>
                </div>
              </div>
            </div>

            {/* Problem Stats */}
            <div className="bg-card rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">{solvedProblems} / {totalProblems} Solved</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm text-white">Easy</div>
                    <div className="text-sm text-muted-foreground">
                      {stats.easy.solved} / {stats.easy.total}
                    </div>
                  </div>
                  <Progress value={(stats.easy.solved / stats.easy.total) * 100} className="h-2 bg-muted" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm text-white">Medium</div>
                    <div className="text-sm text-muted-foreground">
                      {stats.medium.solved} / {stats.medium.total}
                    </div>
                  </div>
                  <Progress value={(stats.medium.solved / stats.medium.total) * 100} className="h-2 bg-muted" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm text-white">Hard</div>
                    <div className="text-sm text-muted-foreground">
                      {stats.hard.solved} / {stats.hard.total}
                    </div>
                  </div>
                  <Progress value={(stats.hard.solved / stats.hard.total) * 100} className="h-2 bg-muted" />
                </div>
              </div>
            </div>

            {/* Filters Section */}
            <div className="rounded-lg bg-card p-6 mb-8">
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
                      className="pl-9"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="status" className="text-sm text-white">Status</label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger id="status">
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
                    <SelectTrigger id="difficulty">
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
                    <SelectTrigger id="pattern">
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

              <div className="flex flex-col md:flex-row gap-3 md:gap-2">
                <div className="space-y-2">
                  <label htmlFor="language" className="text-sm text-white">Preferred Language</label>
                  <Select value={preferredLanguage} onValueChange={setPreferredLanguage}>
                    <SelectTrigger id="language" className="w-[180px]">
                      <SelectValue placeholder="JavaScript" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="cpp">C++</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => setStatusFilter('starred')}>
                    <Star className="w-4 h-4 mr-1" />
                    Starred
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Reset
                  </Button>
                </div>
              </div>
            </div>

            {/* Problem List */}
            <ProblemList 
              problems={filteredProblems}
              totalProblems={totalProblems}
              solvedProblems={solvedProblems}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Practice;
