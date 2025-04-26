import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, BookOpen, ArrowRight, Clock, Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Badge from '@/components/ui/Badge';
import { detailedProblems } from '@/data/problemData';

const Problem = () => {
  const { problemId } = useParams<{ problemId: string }>();
  const [selectedApproach, setSelectedApproach] = useState<number>(0);
  const [language, setLanguage] = useState<string>('python');
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

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };
  
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
                          problem.difficulty === 'easy' ? 'success' :
                          problem.difficulty === 'medium' ? 'warning' : 'danger'
                        }
                        size="sm"
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
                    onClick={toggleStar}
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
                  <Card>
                    <CardContent className="pt-6">
                      <div className="prose dark:prose-invert max-w-none">
                        {problem.description?.split('\n').map((paragraph, index) => (
                          <p key={index} className="mb-4 whitespace-pre-wrap">{paragraph}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="solution" className="mt-6">
                  <Card>
                    <CardContent className="pt-6 space-y-6">
                      {problem.approaches && problem.approaches.length > 0 && (
                        <>
                          <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div className="space-y-2">
                              <h2 className="font-medium">Approach</h2>
                              <div className="flex gap-2">
                                {problem.approaches.map((approach, index) => (
                                  <Button
                                    key={index}
                                    variant={selectedApproach === index ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedApproach(index)}
                                  >
                                    {index + 1}. {approach.name.split(' ')[0]}
                                  </Button>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h2 className="font-medium">Language</h2>
                              <Select value={language} onValueChange={setLanguage}>
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Python" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="python">Python</SelectItem>
                                  <SelectItem value="javascript">JavaScript</SelectItem>
                                  <SelectItem value="java">Java</SelectItem>
                                  <SelectItem value="cpp">C++</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <Separator />
                          
                          <div>
                            <h3 className="text-xl font-bold mb-2">
                              {problem.approaches[selectedApproach].name}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {problem.approaches[selectedApproach].description}
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-muted-foreground" />
                                <div>
                                  <div className="font-medium">Time Complexity</div>
                                  <div className="text-muted-foreground text-sm">
                                    {problem.approaches[selectedApproach].timeComplexity}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Code className="h-5 w-5 text-muted-foreground" />
                                <div>
                                  <div className="font-medium">Space Complexity</div>
                                  <div className="text-muted-foreground text-sm">
                                    {problem.approaches[selectedApproach].spaceComplexity}
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-6">
                              <h4 className="font-bold mb-2">Code</h4>
                              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                                <code>
                                  {problem.approaches[selectedApproach].code[language as keyof typeof problem.approaches[0].code] || 
                                   "Code for this language is not available yet."}
                                </code>
                              </pre>
                            </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
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
              <Card className="overflow-hidden">
                <div className="bg-primary px-6 py-4 text-primary-foreground">
                  <h2 className="font-bold text-lg">Problem Status</h2>
                </div>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="font-medium">Unsolved</span>
                    </div>
                    <Button className="w-full">Mark as Solved</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <div className="bg-muted px-6 py-4">
                  <h2 className="font-bold text-lg">Related Problems</h2>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li>
                      <Link to="/practice/problem/valid-parentheses" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <ArrowRight className="h-4 w-4" />
                        <span>Valid Parentheses</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/practice/problem/merge-intervals" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <ArrowRight className="h-4 w-4" />
                        <span>Merge Intervals</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/practice/problem/container-with-most-water" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <ArrowRight className="h-4 w-4" />
                        <span>Container With Most Water</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <BookOpen className="h-8 w-8 mx-auto text-muted-foreground" />
                    <h3 className="font-bold">Need help?</h3>
                    <p className="text-sm text-muted-foreground">
                      Get hints or discuss solutions with the community.
                    </p>
                    <div className="pt-2">
                      <Button variant="outline" className="w-full">View Discussion</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Problem;
