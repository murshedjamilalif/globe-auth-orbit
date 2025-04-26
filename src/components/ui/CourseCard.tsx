import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  problemCount: number;
  progress?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  featured?: boolean;
  className?: string;
}

const CourseCard = ({
  id,
  title,
  description,
  icon,
  duration,
  problemCount,
  progress = 0,
  difficulty = 'medium',
  featured = false,
  className,
}: CourseCardProps) => {
  const difficultyColor = {
    easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  };

  return (
    <Card className={cn(
      'hover-scale glow-effect overflow-hidden transition-all duration-300 border',
      featured ? 'border-primary/50' : '',
      className
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-md">
              {icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">{title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <span>{problemCount} problems</span>
                <span>•</span>
                <span>{duration}</span>
              </div>
            </div>
          </div>
          <Badge 
            variant={difficulty === 'easy' ? 'default' : difficulty === 'medium' ? 'secondary' : 'destructive'}
            className="capitalize"
          >
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-muted-foreground text-sm">{description}</p>
        {progress > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full" asChild>
          <Link to={`/learn/${id}`}>
            {progress > 0 ? 'Continue Learning' : 'Start Learning'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
