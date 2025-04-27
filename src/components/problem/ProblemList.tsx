
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, Check, Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Problem as DataProblem } from '@/data/problemData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ProblemListProps {
  problems: DataProblem[];
  totalProblems: number;
  solvedProblems: number;
}

const ProblemList = ({ problems, totalProblems, solvedProblems }: ProblemListProps) => {
  return (
    <div className="space-y-4">
      {/* Arrays Section */}
      <div className="bg-card rounded-lg">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              Arrays
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </h2>
            <span className="text-sm text-muted-foreground">Progress: {solvedProblems} / 10</span>
          </div>
          <Progress value={(solvedProblems / 10) * 100} className="h-2" />
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[80px]">Status</TableHead>
              <TableHead>Problem</TableHead>
              <TableHead className="w-[120px]">Difficulty</TableHead>
              <TableHead className="w-[100px]">Solution</TableHead>
              <TableHead className="w-[80px]">Star</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {problems.map((problem) => (
              <TableRow key={problem.id} className="hover:bg-accent/50 transition-colors">
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
                    className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
                  >
                    {problem.title}
                    <ExternalLink className="h-4 w-4" />
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
                    <button className="text-muted-foreground hover:text-white transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    {problem.id.includes('two') && (
                      <button className="text-muted-foreground hover:text-white transition-colors">
                        <Youtube className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <button 
                    className={`text-muted-foreground hover:text-yellow-500 transition-colors ${
                      problem.status === 'starred' ? 'text-yellow-500' : ''
                    }`}
                  >
                    <Star className={`h-4 w-4 ${problem.status === 'starred' ? 'fill-yellow-500' : ''}`} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProblemList;
