import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProblemList from '@/components/problem/ProblemList';
import { ProblemDifficulty, ProblemStatus } from '@/components/ui/ProblemCard';
import { dsaPatterns } from '@/data/patternData';
import { popularProblems } from '@/data/problemData';

const Practice = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [patternFilter, setPatternFilter] = useState<string>('all');
  
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
      
      <div className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Arrays</h1>
            <ProblemList 
              problems={popularProblems}
              totalProblems={10}
              solvedProblems={2}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Practice;
