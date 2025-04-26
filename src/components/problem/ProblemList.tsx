
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, Check, Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Problem as DataProblem } from '@/data/problemData';

interface Problem {
  id: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'solved' | 'unsolved' | 'starred';
}

interface ProblemListProps {
  problems: DataProblem[];
  totalProblems: number;
  solvedProblems: number;
}

const ProblemList = ({ problems, totalProblems, solvedProblems }: ProblemListProps) => {
  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Progress: {solvedProblems} / {totalProblems}</span>
          <span className="text-muted-foreground">{Math.round((solvedProblems / totalProblems) * 100)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500 rounded-full transition-all duration-300"
            style={{ width: `${(solvedProblems / totalProblems) * 100}%` }}
          />
        </div>
      </div>

      {/* Problems Table */}
      <div className="rounded-lg border bg-card">
        <div className="grid grid-cols-[auto,1fr,auto,auto,auto] gap-4 p-4 text-sm font-medium text-muted-foreground border-b">
          <div>Status</div>
          <div>Problem</div>
          <div>Difficulty</div>
          <div>Solution</div>
          <div>Star</div>
        </div>

        <div className="divide-y">
          {problems.map((problem) => (
            <div key={problem.id} className="grid grid-cols-[auto,1fr,auto,auto,auto] gap-4 p-4 items-center hover:bg-accent/50 transition-colors">
              <div>
                {problem.status === 'solved' ? (
                  <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                ) : (
                  <Checkbox />
                )}
              </div>
              
              <div>
                <Link 
                  to={`/practice/problem/${problem.id}`}
                  className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
                >
                  {problem.title}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
              
              <div>
                <Badge 
                  variant={
                    problem.difficulty === 'easy' ? 'default' :
                    problem.difficulty === 'medium' ? 'secondary' : 'destructive'
                  }
                  className="capitalize"
                >
                  {problem.difficulty}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Assuming all problems have a solution */}
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </button>
                {/* We don't have this property, so just show for some problems */}
                {problem.id.includes('two') && (
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <Youtube className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              <div>
                <button 
                  className={`text-muted-foreground hover:text-yellow-500 transition-colors ${
                    problem.status === 'starred' ? 'text-yellow-500' : ''
                  }`}
                >
                  <Star className={`h-4 w-4 ${problem.status === 'starred' ? 'fill-yellow-500' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemList;
