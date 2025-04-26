
import { Card, CardContent } from "@/components/ui/card";

interface ProblemDescriptionProps {
  description: string[];
}

const ProblemDescription = ({ description }: ProblemDescriptionProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="prose dark:prose-invert max-w-none">
          {description?.map((paragraph, index) => (
            <p key={index} className="mb-4 whitespace-pre-wrap">{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProblemDescription;
