import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Calendar, Tag, Camera, Share2, Palette, ChevronDown } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';
import { allProjects, type Project } from '../data/projects';

interface ProjectsPageProps {
  onClose: () => void;
}

export default function ProjectsPage({ onClose }: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'title'>('newest');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'video', label: 'Video' },
    { id: 'photo', label: 'Photography' },
    { id: 'design', label: 'Design' },
    { id: 'social', label: 'Social Media' }
  ];

  const sortOptions = [
    { id: 'newest', label: 'Newest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'title', label: 'Title (A-Z)' }
  ];

  // Helper function to parse dd/mm/yyyy date strings
  const parseDate = (dateStr: string): Date => {
    // If date is in dd/mm/yyyy format
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    // Fallback for year-only format like "2025"
    return new Date(parseInt(dateStr, 10), 0, 1);
  };

  // Filter by category
  const categoryFiltered = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.type === selectedCategory);

  // Sort filtered projects
  const filteredProjects = [...categoryFiltered].sort((a, b) => {
    if (sortOrder === 'title') {
      return a.title.localeCompare(b.title);
    }
    
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    
    if (sortOrder === 'newest') {
      return dateB.getTime() - dateA.getTime(); // Newest first
    } else {
      return dateA.getTime() - dateB.getTime(); // Oldest first
    }
  });

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black overflow-y-auto"
    >
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-light tracking-wider">ALL PROJECTS</h1>
              <p className="text-gray-400 mt-4 text-lg">
                Ontdek mijn volledige collectie werk
              </p>
            </motion.div>
            
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="p-3 hover:bg-white/10 transition-colors rounded-full"
            >
              <X size={32} />
            </motion.button>
          </div>

          {/* Filters and Sort Container */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-12"
          >
            {/* Category Filter */}
            <div className="flex gap-4 flex-wrap">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 tracking-wider transition-all ${
                    category.id === 'design' ? 'hidden' : ''
                  } ${
                    selectedCategory === category.id
                      ? 'bg-white text-black'
                      : 'bg-transparent text-white border border-white/30 hover:border-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative lg:ml-auto">
              <button
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="flex items-center gap-2 px-6 py-2 tracking-wider transition-all bg-transparent text-white border border-white/30 hover:border-white"
              >
                {sortOptions.find(opt => opt.id === sortOrder)?.label || 'Sort'}
                <ChevronDown size={16} className={`transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {sortDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white shadow-lg z-10"
                  >
                    {sortOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSortOrder(option.id as 'newest' | 'oldest' | 'title');
                          setSortDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-3 text-sm text-black hover:bg-gray-100 transition-colors tracking-wider ${
                          sortOrder === option.id ? 'bg-gray-100' : ''
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {project.type === 'video' && (
                        <Play size={64} className="text-white" />
                      )}
                      {project.type === 'photo' && (
                        <Camera size={64} className="text-white" />
                      )}
                      {project.type === 'social' && (
                        <Share2 size={64} className="text-white" />
                      )}
                      {project.type === 'design' && (
                        <Palette size={64} className="text-white" />
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl tracking-wider mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-3">{project.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag size={14} />
                        <span>{project.tags[0]}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
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
    </motion.div>
  );
}