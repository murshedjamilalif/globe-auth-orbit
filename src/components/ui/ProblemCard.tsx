import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type ProblemStatus = 'solved' | 'unsolved' | 'starred';
export type ProblemDifficulty = 'easy' | 'medium' | 'hard';

interface ProblemCardProps {
  id: string;
  title: string;
  patternName: string;
  difficulty: ProblemDifficulty;
  status: ProblemStatus;
  className?: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  id,
  title,
  patternName,
  difficulty,
  status,
  className,
}) => {
  return (
    <Link to={`/practice/problem/${id}`}>
      <Card className={cn(
        'hover:border-primary/50 transition-all duration-200 cursor-pointer hover:shadow-md',
        status === 'solved' ? 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900/50' : '',
        status === 'starred' ? 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900/50' : '',
        className
      )}>
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              {status === 'solved' && (
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-1">
                  <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
              )}
              {status === 'starred' && (
                <div className="rounded-full bg-yellow-100 dark:bg-yellow-900 p-1">
                  <Star className="h-4 w-4 text-yellow-600 dark:text-yellow-400 fill-yellow-500" />
                </div>
              )}
              {status === 'unsolved' && (
                <div className="rounded-full border h-6 w-6"></div>
              )}
            </div>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">{patternName}</p>
            </div>
          </div>
          <Badge
            variant={
              difficulty === 'easy' ? 'default' :
              difficulty === 'medium' ? 'secondary' : 'destructive'
            }
            className="capitalize"
          >
            {difficulty}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProblemCard;
