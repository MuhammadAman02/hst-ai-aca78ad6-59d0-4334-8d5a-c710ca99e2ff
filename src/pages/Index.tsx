import React from 'react';
import ThemeToggle from '../components/ThemeToggle';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Welcome to Your Theme-Switchable App</h1>
        <p className="text-xl text-muted-foreground mb-8">Start building your amazing project here!</p>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Index;