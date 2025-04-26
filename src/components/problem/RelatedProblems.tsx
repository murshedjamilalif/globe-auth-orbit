
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const RelatedProblems = () => {
  return (
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
  );
};

export default RelatedProblems;
