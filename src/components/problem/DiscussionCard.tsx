
import { BookOpen } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DiscussionCard = () => {
  return (
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
  );
};

export default DiscussionCard;
