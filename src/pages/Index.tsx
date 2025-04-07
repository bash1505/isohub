
import React from 'react';
import TypingTest from '@/components/TypingTest';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 flex flex-col items-center justify-center p-4 sm:p-6">
      <ThemeToggle />
      
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-3">TypeMaster</h1>
          <p className="text-muted-foreground">Improve your typing speed and accuracy</p>
        </header>
        
        <TypingTest />
        
        <footer className="text-center text-sm text-muted-foreground mt-12">
          <p>Click on the text area to focus and start typing</p>
          <p className="mt-1">Press the "New Test" button to reset and try with a different text</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
