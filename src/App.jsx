// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MyCourses from './components/MyCourses';

// Competitive Exams
import BiharDaroga from './components/BiharDaroga';
import Bstet from './components/Bstet';
import GroupD from './components/GroupD';
import SSCGD from './components/SSCGD';
import SSCGDhindi from './components/SSCGDhindi';

// Newly Added Components
// import BiharCgI from './components/BiharCgI';
import BiharCtet from './components/biharctet';
import BiharEXAM from './components/biharEXAM';
import BiharPolice from './components/biharpolice';
import BSEB1012th from './components/BSEB10+12th';
import BSSC from './components/bssc';
import CBSE1012th from './components/cbse10+12th';

// Current Affairs
import Currentaffairs2026 from './components/Currentaffairs2026';
import Dailycurrentaffairs from './components/Dailycurrentaffairs';

// Class 10 Mock Tests
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

            {/* Competitive Exams */}
            <Route path="/bihar-daroga" element={<BiharDaroga />} />
            <Route path="/bstet" element={<Bstet />} />
            <Route path="/group-d" element={<GroupD />} />
            <Route path="/ssc-gd" element={<SSCGD />} />
            <Route path="/ssc-gd-hindi" element={<SSCGDhindi />} />

            {/* Newly Added Routes */}
            {/* <Route path="/bihar-cgl" element={<BiharCgl />} /> */}
            <Route path="/bihar-ctet" element={<BiharCtet />} />
            <Route path="/bihar-exam" element={<BiharEXAM />} />
            <Route path="/bihar-police" element={<BiharPolice />} />
            <Route path="/bseb-10-12" element={<BSEB1012th />} />
            <Route path="/bssc" element={<BSSC />} />
            <Route path="/cbse-10-12" element={<CBSE1012th />} />

            {/* Current Affairs */}
            <Route
              path="/current-affairs-2026"
              element={<Currentaffairs2026 />}
            />
            <Route
              path="/daily-current-affairs"
              element={<Dailycurrentaffairs />}
            />

            {/* Bihar Board Class 10 Mock Tests */}
            <Route path="/class-10-math" element={<MathMockTest />} />
            <Route path="/class-10-hindi" element={<HindiMockTest />} />
            <Route path="/class-10-sanskrit" element={<SanskritMockTest />} />
            <Route path="/class-10-science" element={<ScienceMockTest />} />
            <Route path="/class-10-english" element={<EnglishMockTest />} />
            <Route
              path="/class-10-social-science"
              element={<SocialScienceMockTest />}
            />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
