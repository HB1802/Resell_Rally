import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { SellPage } from './pages/SellPage';
import { HelpPage } from './pages/HelpPage';
import { DashboardPage } from './pages/DashboardPage';
import { AuthPage } from './pages/AuthPage';
import { EventDetail } from './components/EventDetail';
import { HowItWorksPage } from './pages/about/HowItWorksPage';
import { PressPage } from './pages/about/PressPage';
import { CareersPage } from './pages/about/CareersPage';
import { SafetyPage } from './pages/help/SafetyPage';
import { ContactPage } from './pages/help/ContactPage';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/help/safety" element={<SafetyPage />} />
            <Route path="/help/contact" element={<ContactPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard/*" element={<DashboardPage />} />
            <Route path="/about/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about/press" element={<PressPage />} />
            <Route path="/about/careers" element={<CareersPage />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}