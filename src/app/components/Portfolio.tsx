import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, Camera, Share2, Palette } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';
import { allProjects, type Project } from '../data/projects';

export default function Portfolio({ onViewAllProjects }: { onViewAllProjects: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'video', label: 'Video' },
    { id: 'photo', label: 'Photography' },
    { id: 'design', label: 'Design' },
    { id: 'social', label: 'Social Media' }
  ];

  // Show only projects marked with showInPortfolio: true
  const portfolioItems = allProjects.filter(project => project.showInPortfolio === true);

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === selectedCategory);

  // Navigation handlers for project modal
  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = allProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % allProjects.length; // Wrap around to start
    setSelectedProject(allProjects[nextIndex]);
  };

  const handlePreviousProject = () => {
    if (!selectedProject) return;
    const currentIndex = allProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length; // Wrap around to end
    setSelectedProject(allProjects[prevIndex]);
  };

  return (
    <section id="portfolio" className="py-[120px] px-6 bg-black">
      <div className="w-[70vw] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-6">PORTFOLIO</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Een verzameling van mijn recenstste werk in fotografie, videografie en social media.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    {item.type === 'video' && (
                      <Play size={48} className="mx-auto mb-4" />
                    )}
                    {item.type === 'photo' && (
                      <Camera size={48} className="mx-auto mb-4" />
                    )}
                    {item.type === 'social' && (
                      <Share2 size={48} className="mx-auto mb-4" />
                    )}
                    {item.type === 'design' && (
                      <Palette size={48} className="mx-auto mb-4" />
                    )}
                    <h3 className="text-xl tracking-wider">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={onViewAllProjects}
            className="group px-8 py-4 bg-white text-black tracking-wider hover:bg-gray-200 transition-colors flex items-center gap-3"
          >
            View All Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onNext={handleNextProject}
            onPrevious={handlePreviousProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
}