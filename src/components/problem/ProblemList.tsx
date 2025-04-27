
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, Check, Youtube, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Problem as DataProblem } from '@/data/problemData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProblemListProps {
  problems: DataProblem[];
  totalProblems: number;
  solvedProblems: number;
}

const ProblemList = ({ problems, totalProblems, solvedProblems }: ProblemListProps) => {
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const isMobile = useIsMobile();

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: string) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />;
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // Render card view for mobile
  const renderMobileView = () => (
    <motion.div 
      className="space-y-4" 
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="problem-container">
        <div className="p-4 border-b border-[#333]">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              Arrays
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </h2>
            <span className="text-sm text-muted-foreground">Progress: {solvedProblems} / 10</span>
          </div>
          <Progress 
            value={(solvedProblems / 10) * 100} 
            className="progress-bar-easy" 
            indicatorClassName="progress-indicator-easy" 
          />
        </div>

        {problems.map((problem) => (
          <motion.div 
            key={problem.id}
            variants={itemVariants}
            className="border-b border-[#333] last:border-b-0"
          >
            <Card className="bg-transparent border-0 shadow-none">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {problem.status === 'solved' ? (
                      <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                    ) : (
                      <Checkbox />
                    )}
                    <Link 
                      to={`/practice/problem/${problem.id}`}
                      className="text-[#00A3FF] hover:text-[#33c3f0] flex items-center gap-2"
                    >
                      {problem.title}
                    </Link>
                  </div>
                  <Badge 
                    variant={
                      problem.difficulty === 'easy' ? 'default' :
                      problem.difficulty === 'medium' ? 'secondary' : 'destructive'
                    }
                    className={`
                      capitalize 
                      ${problem.difficulty === 'easy' ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30' :
                        problem.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30' :
                        'bg-red-500/20 text-red-500 hover:bg-red-500/30'}
                    `}
                  >
                    {problem.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <button className="text-muted-foreground hover:text-white transition-colors p-1 rounded-full hover:bg-[#2a2a2a]">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    {problem.id.includes('two') && (
                      <button className="text-muted-foreground hover:text-white transition-colors p-1 rounded-full hover:bg-[#2a2a2a]">
                        <Youtube className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <button 
                    className={`text-muted-foreground hover:text-yellow-500 transition-colors p-1 rounded-full hover:bg-[#2a2a2a] ${
                      problem.status === 'starred' ? 'text-yellow-500' : ''
                    }`}
                  >
                    <Star className={`h-4 w-4 ${problem.status === 'starred' ? 'fill-yellow-500' : ''}`} />
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  // Render table view for desktop
  const renderDesktopView = () => (
    <div className="problem-container">
      <div className="p-4 border-b border-[#333]">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            Arrays
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </h2>
          <span className="text-sm text-muted-foreground">Progress: {solvedProblems} / 10</span>
        </div>
        <Progress 
          value={(solvedProblems / 10) * 100} 
          className="progress-bar-easy" 
          indicatorClassName="progress-indicator-easy" 
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-[#333]">
            <TableHead className="w-[80px] text-gray-400">Status</TableHead>
            <TableHead className="cursor-pointer group text-gray-400" onClick={() => handleSort('title')}>
              <div className="flex items-center gap-1">
                Problem {getSortIcon('title')}
                <ChevronDown className="h-3 w-3 opacity-0 group-hover:opacity-50" />
              </div>
            </TableHead>
            <TableHead className="w-[120px] cursor-pointer group text-gray-400" onClick={() => handleSort('difficulty')}>
              <div className="flex items-center gap-1">
                Difficulty {getSortIcon('difficulty')}
                <ChevronDown className="h-3 w-3 opacity-0 group-hover:opacity-50" />
              </div>
            </TableHead>
            <TableHead className="w-[100px] text-gray-400">Solution</TableHead>
            <TableHead className="w-[80px] text-gray-400">Star</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={listVariants}
          >
            {problems.map((problem) => (
              <motion.tr
                key={problem.id}
                variants={itemVariants}
                className="hover:bg-[#2a2a2a] transition-all border-[#333] even:bg-[#1a1a1a]"
                layout
              >
                <TableCell className="py-3">
                  {problem.status === 'solved' ? (
                    <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                  ) : (
                    <Checkbox />
                  )}
                </TableCell>
                <TableCell>
                  <Link 
                    to={`/practice/problem/${problem.id}`}
                    className="text-[#00A3FF] hover:text-[#33c3f0] flex items-center gap-2 transition-all hover:translate-x-1"
                  >
                    {problem.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      problem.difficulty === 'easy' ? 'default' :
                      problem.difficulty === 'medium' ? 'secondary' : 'destructive'
                    }
                    className={`
                      capitalize 
                      ${problem.difficulty === 'easy' ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30' :
                        problem.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30' :
                        'bg-red-500/20 text-red-500 hover:bg-red-500/30'}
                    `}
                  >
                    {problem.difficulty}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-[#2a2a2a]">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    {problem.id.includes('two') && (
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-[#2a2a2a]">
                        <Youtube className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`h-8 w-8 rounded-full ${problem.status === 'starred' ? 'text-yellow-500' : ''} hover:bg-[#2a2a2a]`}
                  >
                    <Star className={`h-4 w-4 ${problem.status === 'starred' ? 'fill-yellow-500' : ''}`} />
                  </Button>
                </TableCell>
              </motion.tr>
            ))}
          </motion.div>
        </TableBody>
      </Table>
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default ProblemList;
