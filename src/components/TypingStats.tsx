
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Timer, 
  Gauge, 
  BarChart2, 
  Award
} from "lucide-react";

interface TypingStatsProps {
  wpm: number;
  accuracy: number;
  elapsedTime: number;
  isCompleted: boolean;
}

const TypingStats: React.FC<TypingStatsProps> = ({
  wpm,
  accuracy,
  elapsedTime,
  isCompleted
}) => {
  // Helper function to rate typing speed
  const getRating = (wpm: number) => {
    if (wpm < 30) return "Beginner";
    if (wpm < 50) return "Average";
    if (wpm < 70) return "Good";
    if (wpm < 90) return "Fast";
    return "Pro";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      <Card className="bg-secondary/50">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2">
            <Gauge className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Speed</p>
            <p className="text-2xl font-bold">{wpm} WPM</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-secondary/50">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2">
            <BarChart2 className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Accuracy</p>
            <p className="text-2xl font-bold">{accuracy}%</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-secondary/50">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2">
            <Timer className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Time</p>
            <p className="text-2xl font-bold">{elapsedTime}s</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-secondary/50">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2">
            <Award className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Rating</p>
            <p className={`text-2xl font-bold ${isCompleted ? '' : 'opacity-50'}`}>
              {isCompleted ? getRating(wpm) : "—"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TypingStats;
