
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DynamicPage from './pages/DynamicPage';
import AwardsPage from './pages/AwardsPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import ResultsPage from './pages/ResultsPage';
import BlogPage from './pages/BlogPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            
            {/* Catch-all dynamic routing for the Page Builder */}
            {/* This handles paths like /our-firm, /practice/auto-accidents, etc. */}
            <Route path="/:slug" element={<DynamicPage />} />
            <Route path="/:folder/:slug" element={<DynamicPage />} />
            <Route path="/:folder/:subfolder/:slug" element={<DynamicPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
