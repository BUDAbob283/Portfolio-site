import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Play } from 'lucide-react';
import { motion } from 'motion/react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ProjectsPage from './components/ProjectsPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProjectsPage, setShowProjectsPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation 
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <Hero onOpenProjectsPage={() => setShowProjectsPage(true)} />
      <Portfolio onViewAllProjects={() => setShowProjectsPage(true)} />
      <About />
      <Contact />

      {showProjectsPage && <ProjectsPage onClose={() => setShowProjectsPage(false)} />}
    </div>
  );
}