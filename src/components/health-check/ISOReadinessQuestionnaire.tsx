
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    value: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Does your organisation have defined quality objectives?',
    options: [
      { text: 'Yes, clearly defined and documented', value: 3 },
      { text: 'Partially, but not well documented', value: 2 },
      { text: 'Informally understood but not defined', value: 1 },
      { text: 'No, not defined at all', value: 0 }
    ]
  },
  {
    id: 2,
    text: 'Do you have documented procedures for your core business processes?',
    options: [
      { text: 'Yes, comprehensive documentation exists', value: 3 },
      { text: 'Some processes are documented', value: 2 },
      { text: 'Very limited documentation', value: 1 },
      { text: 'No documented procedures', value: 0 }
    ]
  },
  {
    id: 3,
    text: 'How do you currently manage and track customer complaints or feedback?',
    options: [
      { text: 'Formal system with analysis and improvement actions', value: 3 },
      { text: 'Basic tracking system', value: 2 },
      { text: 'Ad-hoc approach', value: 1 },
      { text: 'No system in place', value: 0 }
    ]
  },
  {
    id: 4,
    text: 'Do you conduct regular internal reviews or audits of your business processes?',
    options: [
      { text: 'Yes, scheduled and documented', value: 3 },
      { text: 'Occasionally, but not systematic', value: 2 },
      { text: 'Rarely', value: 1 },
      { text: 'Never', value: 0 }
    ]
  },
  {
    id: 5,
    text: 'How does your organisation handle non-conforming products or services?',
    options: [
      { text: 'Formal process with root cause analysis', value: 3 },
      { text: 'Basic process for addressing issues', value: 2 },
      { text: 'Reactive approach without formal process', value: 1 },
      { text: 'No defined approach', value: 0 }
    ]
  },
  {
    id: 6,
    text: 'Do you have a process for identifying and assessing business risks and opportunities?',
    options: [
      { text: 'Yes, comprehensive and regularly updated', value: 3 },
      { text: 'Basic risk assessment in place', value: 2 },
      { text: 'Limited, informal considerations', value: 1 },
      { text: 'No risk assessment process', value: 0 }
    ]
  },
  {
    id: 7,
    text: 'How does top management demonstrate commitment to quality in your organisation?',
    options: [
      { text: 'Active involvement with dedicated resources', value: 3 },
      { text: 'General support but limited involvement', value: 2 },
      { text: 'Limited support', value: 1 },
      { text: 'No visible commitment', value: 0 }
    ]
  },
  {
    id: 8,
    text: 'Do you have defined roles and responsibilities for quality management?',
    options: [
      { text: 'Clearly defined and documented', value: 3 },
      { text: 'Somewhat defined but not comprehensive', value: 2 },
      { text: 'Informally understood', value: 1 },
      { text: 'Not defined', value: 0 }
    ]
  },
  {
    id: 9,
    text: 'How do you ensure your staff are competent for their roles?',
    options: [
      { text: 'Comprehensive training and competency assessment', value: 3 },
      { text: 'Basic training with some assessment', value: 2 },
      { text: 'Limited training, no formal assessment', value: 1 },
      { text: 'No systematic approach', value: 0 }
    ]
  },
  {
    id: 10,
    text: 'Do you have a process for monitoring and measuring customer satisfaction?',
    options: [
      { text: 'Regular, systematic assessment with analysis', value: 3 },
      { text: 'Occasional feedback collection', value: 2 },
      { text: 'Ad-hoc collection of feedback', value: 1 },
      { text: 'No process in place', value: 0 }
    ]
  }
];

export const ISOReadinessQuestionnaire: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  
  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxPossibleScore = questions.length * 3;
    const percentage = (totalScore / maxPossibleScore) * 100;
    return {
      totalScore,
      maxPossibleScore,
      percentage: Math.round(percentage)
    };
  };
  
  const getReadinessLevel = (percentage: number) => {
    if (percentage >= 80) {
      return { level: 'High Readiness', icon: CheckCircle, color: 'text-green-500' };
    } else if (percentage >= 50) {
      return { level: 'Medium Readiness', icon: FileText, color: 'text-amber-500' };
    } else {
      return { level: 'Low Readiness', icon: AlertCircle, color: 'text-red-500' };
    }
  };
  
  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResults(false);
  };
  
  const handleBookConsultation = () => {
    window.location.href = '/consultation';
  };
  
  const handleContactExpert = () => {
    toast({
      title: "Request Sent",
      description: "Our ISO expert will contact you shortly to discuss your results.",
    });
  };

  const currentQuestion = questions[currentStep];
  const { totalScore, maxPossibleScore, percentage } = calculateScore();
  const readiness = getReadinessLevel(percentage);
  
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-center">ISO Readiness Assessment</CardTitle>
        <CardDescription className="text-center">
          {!showResults 
            ? `Question ${currentStep + 1} of ${questions.length}` 
            : 'Your ISO Readiness Results'}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {!showResults ? (
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">{currentQuestion.text}</h3>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-3 px-4"
                    onClick={() => handleAnswer(currentQuestion.id, option.value)}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" 
                style={{ width: `${((currentStep) / questions.length) * 100}%` }}>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className={`h-24 w-24 rounded-full flex items-center justify-center ${readiness.color} bg-primary/10`}>
                <readiness.icon className="h-12 w-12" />
              </div>
              <h3 className={`text-xl font-bold ${readiness.color}`}>{readiness.level}</h3>
              <p className="text-2xl font-bold">{percentage}%</p>
              <p className="text-muted-foreground text-center">
                {totalScore} out of {maxPossibleScore} points
              </p>
            </div>
            
            <div className="border-t border-b py-4 my-4">
              <h4 className="font-medium mb-2">What this means:</h4>
              {percentage >= 80 ? (
                <p className="text-sm">Your organization shows strong readiness for ISO certification. You already have many of the required systems in place and may be close to certification-ready.</p>
              ) : percentage >= 50 ? (
                <p className="text-sm">Your organization has implemented some quality management practices but has significant gaps to address before certification. A structured implementation program would be beneficial.</p>
              ) : (
                <p className="text-sm">Your organization is in the early stages of quality management. Significant work is needed to establish the foundation for an ISO-compliant system.</p>
              )}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-3">
        {showResults ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <Button onClick={handleReset} variant="outline">Retake Assessment</Button>
              <Button onClick={handleBookConsultation}>Book Consultation</Button>
            </div>
            <Button onClick={handleContactExpert} variant="link" className="w-full">
              Request Expert Call
            </Button>
          </>
        ) : (
          <div className="w-full flex justify-between">
            <Button 
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))} 
              variant="ghost"
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button 
              onClick={() => handleReset()} 
              variant="outline"
            >
              Start Over
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
