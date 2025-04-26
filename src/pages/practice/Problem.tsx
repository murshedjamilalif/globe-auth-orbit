import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { detailedProblems } from '@/data/problemData';
import ProblemDescription from '@/components/problem/ProblemDescription';
import ProblemSolution from '@/components/problem/ProblemSolution';
import ProblemStatus from '@/components/problem/ProblemStatus';
import RelatedProblems from '@/components/problem/RelatedProblems';
import DiscussionCard from '@/components/problem/DiscussionCard';

const Problem = () => {
  const { problemId } = useParams<{ problemId: string }>();
  const [isStarred, setIsStarred] = useState<boolean>(false);
  
  const problem = detailedProblems[problemId || ''];
  
  if (!problem) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 pt-24 pb-16">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Problem not found</h1>
            <p className="text-muted-foreground mb-6">The problem you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/practice">Back to Practice</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/practice" className="text-muted-foreground hover:text-primary flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              Back to Practice
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-3xl font-bold">{problem.title}</h1>
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
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Link to={`/practice/pattern/${problem.patternId}`} className="hover:text-primary transition-colors">
                        {problem.patternName}
                      </Link>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className={isStarred ? "text-yellow-500 border-yellow-500" : ""}
                    onClick={() => setIsStarred(!isStarred)}
                  >
                    <Star className={isStarred ? "h-5 w-5 fill-yellow-500" : "h-5 w-5"} />
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="description" className="mt-6">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                  <TabsTrigger value="submissions">Submissions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="mt-6">
                  <ProblemDescription description={problem.description} />
                </TabsContent>
                
                <TabsContent value="solution" className="mt-6">
                  <ProblemSolution approaches={problem.approaches || []} />
                </TabsContent>
                
                <TabsContent value="submissions" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-center text-muted-foreground py-8">
                        You haven't submitted any solutions yet.
                      </p>
                      <div className="text-center">
                        <Button>Submit Solution</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6">
              <ProblemStatus 
                status="Unsolved"
                onMarkSolved={() => console.log('Mark as solved')}
              />
              <RelatedProblems />
              <DiscussionCard />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Problem;
