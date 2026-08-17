// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MyCourses from './components/MyCourses';
import BiharDaroga from './components/BiharDaroga';
import Bstet from './components/Bstet';
import GroupD from './components/GroupD';
import SSCGD from './components/SSCGD';
import SSCGDhindi from './components/SSCGDhindi';
import Currentaffairs2026 from './components/Currentaffairs2026';
import Dailycurrentaffairs from './components/Dailycurrentaffairs';

// Import all Class 10 mock test components
import MathMockTest from './components/10math';
import HindiMockTest from './components/10hindi';
import SanskritMockTest from './components/10sanskrit';
import ScienceMockTest from './components/10science';
import EnglishMockTest from './components/10english';
import SocialScienceMockTest from './components/10socialscience';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-courses" element={<MyCourses />} />
            
            {/* Competitive Exam Routes */}
            <Route path="/bihar-daroga" element={<BiharDaroga />} />
            <Route path="/bstet" element={<Bstet />} />
            <Route path="/group-d" element={<GroupD />} />
            <Route path="/ssc-gd" element={<SSCGD />} />
            <Route path="/ssc-gd-hindi" element={<SSCGDhindi />} />
            
            {/* Current Affairs Routes */}
            <Route path="/current-affairs-2026" element={<Currentaffairs2026 />} />
            <Route path="/daily-current-affairs" element={<Dailycurrentaffairs />} />
            
            {/* Class 10 Mock Test Routes - Bihar Board */}
            <Route path="/class-10-math" element={<MathMockTest />} />
            <Route path="/class-10-hindi" element={<HindiMockTest />} />
            <Route path="/class-10-sanskrit" element={<SanskritMockTest />} />
            <Route path="/class-10-science" element={<ScienceMockTest />} />
            <Route path="/class-10-english" element={<EnglishMockTest />} />
            <Route path="/class-10-social-science" element={<SocialScienceMockTest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;