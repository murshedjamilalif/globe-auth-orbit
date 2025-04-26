
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProblemStatusProps {
  status: string;
  onMarkSolved: () => void;
}

const ProblemStatus = ({ status, onMarkSolved }: ProblemStatusProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="bg-primary px-6 py-4 text-primary-foreground">
        <h2 className="font-bold text-lg">Problem Status</h2>
      </div>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Status</span>
            <span className="font-medium">{status}</span>
          </div>
          <Button className="w-full" onClick={onMarkSolved}>
            Mark as Solved
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProblemStatus;
