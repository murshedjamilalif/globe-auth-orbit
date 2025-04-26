
import React, { useState } from 'react';
import { Filter, Search, Star, RotateCcw, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProblemList from '@/components/problem/ProblemList';
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
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Master DSA Patterns</h1>
            <p className="text-muted-foreground mb-8">Practice curated LeetCode problems organized by patterns.</p>
            
            {/* Subscription Tiers */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-[#1A1F2C] border border-green-500/20">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏆</span>
                  <span>AlgoMaster 300</span>
                  <span className="text-xs text-muted-foreground">(3+ Months)</span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#1A1F2C] border border-yellow-500/20">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💪</span>
                  <span>AlgoMaster 150</span>
                  <span className="text-xs text-muted-foreground">(1-3 Months)</span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#1A1F2C] border border-blue-500/20">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <span>AlgoMaster 75</span>
                  <span className="text-xs text-muted-foreground">(&lt;1 Month)</span>
                </div>
              </div>
            </div>

            {/* Filters Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Input
                placeholder="Search problems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="col-span-2 md:col-span-1"
              />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="solved">Solved</SelectItem>
                  <SelectItem value="unsolved">Unsolved</SelectItem>
                  <SelectItem value="starred">Starred</SelectItem>
                </SelectContent>
              </Select>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
              <Select value={preferredLanguage} onValueChange={setPreferredLanguage}>
                <SelectTrigger>
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Statistics Cards */}
            <div className="bg-card rounded-lg p-4 mb-8">
              <div className="text-sm text-muted-foreground mb-2">
                {solvedProblems} / {totalProblems} Solved
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm mb-1">Easy</div>
                  <div className="h-2 bg-muted rounded-full">
                    <div 
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${(solvedEasy / easyProblems) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {solvedEasy} / {easyProblems}
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-1">Medium</div>
                  <div className="h-2 bg-muted rounded-full">
                    <div 
                      className="h-full bg-yellow-500 rounded-full"
                      style={{ width: `${(solvedMedium / mediumProblems) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {solvedMedium} / {mediumProblems}
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-1">Hard</div>
                  <div className="h-2 bg-muted rounded-full">
                    <div 
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: `${(solvedHard / hardProblems) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {solvedHard} / {hardProblems}
                  </div>
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
