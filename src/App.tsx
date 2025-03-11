import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThreeScene from './components/ThreeScene';
import VideoChat from './components/VideoChat';
import About from './components/About';
import Partners from './components/Partners';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <ThreeScene />
              <About />
              <Partners />
              <Reviews />
              <Contact />
            </>
          } />
          <Route path="/video-chat" element={<VideoChat />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;