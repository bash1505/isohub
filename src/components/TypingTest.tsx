
import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Clock, Check, XCircle } from "lucide-react";
import TypingStats from "./TypingStats";
import { useToast } from "@/components/ui/use-toast";

// Sample paragraphs for typing test
const testTexts = [
  "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the English alphabet at least once.",
  "Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using many programming languages.",
  "A well-designed user interface should be intuitive, responsive, and accessible. It should prioritize the user's needs and provide clear feedback for all interactions.",
  "Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing.",
  "Artificial intelligence is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans. Leading AI textbooks define the field as the study of intelligent agents.",
];

interface CharacterProps {
  char: string;
  status: "correct" | "incorrect" | "current" | "pending";
}

const Character: React.FC<CharacterProps> = ({ char, status }) => {
  return (
    <span
      className={cn(
        "character",
        status === "correct" && "character-correct",
        status === "incorrect" && "character-incorrect",
        status === "current" && "character-current"
      )}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
};

const TypingTest: React.FC = () => {
  const { toast } = useToast();
  const [text, setText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);

  // Initialize test with random text
  useEffect(() => {
    resetTest();
  }, []);

  // Timer logic
  useEffect(() => {
    if (isActive && startTime && !endTime) {
      timerRef.current = window.setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, startTime, endTime]);

  // Handle typing
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (!isActive) {
      setIsActive(true);
      setStartTime(Date.now());
    }

    // Check if the typed character is correct
    const lastChar = value[value.length - 1];
    const expectedChar = text[currentIndex];
    
    if (lastChar === expectedChar) {
      setCorrectChars(prev => prev + 1);
    } else {
      setIncorrectChars(prev => prev + 1);
    }

    setInputValue(value);
    setCurrentIndex(currentIndex + 1);

    // Check if test is complete
    if (currentIndex + 1 >= text.length) {
      completeTest();
    }
  }, [isActive, currentIndex, text]);

  const completeTest = useCallback(() => {
    const endTimeValue = Date.now();
    setEndTime(endTimeValue);
    setIsActive(false);
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Calculate final elapsed time
    const finalElapsedTime = (endTimeValue - (startTime || endTimeValue)) / 1000;
    setElapsedTime(Math.floor(finalElapsedTime));

    toast({
      title: "Test Completed!",
      description: "Great job! You've completed the typing test.",
    });
  }, [startTime, toast]);

  const resetTest = useCallback(() => {
    // Select a random text
    const randomText = testTexts[Math.floor(Math.random() * testTexts.length)];
    setText(randomText);
    
    // Reset all states
    setInputValue("");
    setIsActive(false);
    setStartTime(null);
    setEndTime(null);
    setElapsedTime(0);
    setCorrectChars(0);
    setIncorrectChars(0);
    setCurrentIndex(0);
    
    // Focus the input
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  // Calculate typing statistics
  const wpm = useCallback(() => {
    if (!startTime || correctChars === 0) return 0;
    
    const minutes = elapsedTime / 60;
    if (minutes === 0) return 0;
    
    // Standard word length is considered 5 characters
    return Math.round((correctChars / 5) / minutes);
  }, [elapsedTime, correctChars, startTime]);

  const accuracy = useCallback(() => {
    const totalAttempts = correctChars + incorrectChars;
    if (totalAttempts === 0) return 100;
    return Math.round((correctChars / totalAttempts) * 100);
  }, [correctChars, incorrectChars]);

  // Render characters with their status
  const renderText = useCallback(() => {
    return text.split("").map((char, index) => {
      let status: "correct" | "incorrect" | "current" | "pending" = "pending";
      
      if (index < currentIndex) {
        status = text[index] === inputValue[index] ? "correct" : "incorrect";
      } else if (index === currentIndex) {
        status = "current";
      }
      
      return <Character key={index} char={char} status={status} />;
    });
  }, [text, currentIndex, inputValue]);

  return (
    <Card className="w-full max-w-3xl shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">Speed Typing Test</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {elapsedTime}s
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div 
          className="text-lg font-mono p-4 bg-secondary/50 rounded-md leading-relaxed min-h-32"
          onClick={() => inputRef.current?.focus()}
        >
          {renderText()}
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInput}
          className="sr-only"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
          aria-label="Typing input"
        />

        <TypingStats 
          wpm={wpm()}
          accuracy={accuracy()}
          elapsedTime={elapsedTime}
          isCompleted={!!endTime}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={resetTest}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          New Test
        </Button>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Check className="h-3 w-3 text-green-500" />
            {correctChars}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <XCircle className="h-3 w-3 text-red-500" />
            {incorrectChars}
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TypingTest;
