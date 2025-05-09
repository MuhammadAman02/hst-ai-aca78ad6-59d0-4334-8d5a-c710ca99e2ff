import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Index from './pages/Index';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;