import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

// Layout components
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import ExplorePage from './pages/ExplorePage';
import PracticePage from './pages/PracticePage';
import ProblemPage from './pages/ProblemPage';
import LLDPage from './pages/LLDPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import SparklesDemoPage from './pages/SparklesDemoPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import CertificationsPage from './pages/CertificationsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="learn" element={<LearnPage />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="practice" element={<PracticePage />} />
            <Route path="problem/:id" element={<ProblemPage />} />
            <Route path="lld" element={<LLDPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="certifications" element={<CertificationsPage />} />
            <Route path="sparkles" element={<SparklesDemoPage />} />
            <Route path="admin" element={<AdminDashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;