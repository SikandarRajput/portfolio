import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingParticles from './components/FloatingParticles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';
import ProjectsPage from './pages/ProjectsPage';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500/30">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <FloatingParticles
            count={360}
            speedScale={0.8}
            minSize={1}
            maxSize={3}
            baseColor="rgba(255, 255, 255, 0.4)"
            glowColor="rgba(255, 255, 255, 0.8)"
          />
        </div>

        <Navbar />

        <main className="relative z-10 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
