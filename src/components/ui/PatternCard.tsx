
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface PatternCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  totalProblems: number;
  solvedProblems: number;
  className?: string;
}

const PatternCard: React.FC<PatternCardProps> = ({
  id,
  name,
  description,
  icon,
  totalProblems,
  solvedProblems,
  className,
}) => {
  const progressPercentage = totalProblems > 0 
    ? Math.round((solvedProblems / totalProblems) * 100) 
    : 0;

  return (
    <Link to={`/practice/pattern/${id}`} className="block">
      <Card className={cn(
        'hover-scale transition-all duration-300 border hover:border-primary/50 h-full flex flex-col',
        className
      )}>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-md text-primary">
              {icon}
            </div>
            <h3 className="font-bold text-lg">{name}</h3>
          </div>
        </CardHeader>
        <CardContent className="pb-4 flex-grow">
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="w-full">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Progress</span>
              <span className="text-muted-foreground">
                {solvedProblems} / {totalProblems} Problems
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PatternCard;
