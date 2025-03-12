import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute.jsx';
import LandingPage from './pages/LandingPage.tsx';
import RoadmapPage from './pages/RoadmapPage.tsx';
import Authpages from './pages/Authpages.jsx';
import Dashboard from './pages/Dashboard.jsx';
import InterviewPrep from './pages/InterviewPrep.jsx';
import ResumeBuilder from './pages/ResumeBuilder.tsx';
import MockInterviewPrep from './pages/MockInterviewpPrep.jsx';


export default function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authpages />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/exam-prep" element={<InterviewPrep />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/interview-prep" element={<MockInterviewPrep />} />
        <Route path="/Auths" element={<LandingPage />} />
      </Routes>
    </Router> 
    </>
  )
}
