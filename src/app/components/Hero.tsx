import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenProjectsPage: () => void;
}

export default function Hero({ onOpenProjectsPage }: HeroProps) {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background with fallback image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://thorinclaeys.be/wp-content/uploads/2026/03/DSC_0179-scaled.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://thorinclaeys.be/wp-content/uploads/2026/03/DSC_0179-scaled.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Using a sample video URL - replace with your own video */}
          <source
            src="https://thorinclaeys.be/wp-content/uploads/2026/03/Showreel-No-audio-10-bit.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-wider mb-4">
            <span className="font-light">CAPTURE THE</span>
            <br />
            <span className="font-normal">MOMENT</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-2xl md:text-3xl text-gray-200 tracking-wide max-w-2xl mx-auto mb-8"
          >
            Freelance video- en fotograaf gespecialiceerd in visual storytelling.
          </motion.p>
          
          {/* View Projects Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            onClick={onOpenProjectsPage}
            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-lg"
          >
            VIEW PROJECTS
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={scrollToPortfolio}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={40} className="text-white/80" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}