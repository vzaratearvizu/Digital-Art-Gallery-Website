import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Animations from './pages/Animations';
import Illustrations from './pages/Illustrations';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top Navigation Bar */}
        <nav className="top-nav">
          <Link to="/" className="logo">
            <img src="/images/AwsomChryNameCompressed.png" alt="AwsomChry" />
          </Link>

          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/animations">Animations</Link>
            <Link to="/illustrations">Illustrations</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/illustrations" element={<Illustrations />} />
        </Routes>
        <footer className="site-footer">
  <div className="social-links">
    <a href="https://www.instagram.com/awsomchry" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      Instagram
    </a>
    <a href="https://tiktok.com/@awsomchry" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
      TikTok
    </a>
    <a href="https://x.com/AwsomChry" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
      X
    </a>
  </div>
  <p>© 2024-{new Date().getFullYear()} AwsomChry. All rights reserved.</p>
</footer>
      </div>
    </Router>
  );
}

export default App;