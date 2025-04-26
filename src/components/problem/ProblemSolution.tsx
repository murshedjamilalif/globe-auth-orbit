
import { useState } from 'react';
import { Clock, Code } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface Approach {
  name: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  code: Record<string, string>;
}

interface ProblemSolutionProps {
  approaches: Approach[];
}

const ProblemSolution = ({ approaches }: ProblemSolutionProps) => {
  const [selectedApproach, setSelectedApproach] = useState<number>(0);
  const [language, setLanguage] = useState<string>('python');

  if (!approaches || approaches.length === 0) return null;

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="space-y-2">
            <h2 className="font-medium">Approach</h2>
            <div className="flex gap-2">
              {approaches.map((approach, index) => (
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
            {approaches[selectedApproach].name}
          </h3>
          <p className="text-muted-foreground mb-4">
            {approaches[selectedApproach].description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="font-medium">Time Complexity</div>
                <div className="text-muted-foreground text-sm">
                  {approaches[selectedApproach].timeComplexity}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="font-medium">Space Complexity</div>
                <div className="text-muted-foreground text-sm">
                  {approaches[selectedApproach].spaceComplexity}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-bold mb-2">Code</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>
                {approaches[selectedApproach].code[language as keyof typeof approaches[0].code] || 
                 "Code for this language is not available yet."}
              </code>
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProblemSolution;
