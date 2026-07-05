import { motion, AnimatePresence } from 'motion/react';
import type { Project, MediaItem } from '../data/projects';
import { useEffect, useState } from 'react';
import svgPaths from '../imports/svg-110ezcloj1';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

// Icon components from Figma
function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d="M6 1.5V4.5" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 1.5V4.5" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p13693a10} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 7.5H15.75" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TagIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_79_316)">
          <path d={svgPaths.p2b6c5300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1bf5c271} fill="#99A1AF" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_79_316">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function ProjectDetailModal({ project, onClose, onNext, onPrevious }: ProjectDetailModalProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      // Unlock body scroll when modal closes
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose, lightboxOpen]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Render single media item
  const renderMediaItem = (item: MediaItem, index: number) => {
    // Determine aspect ratio class based on item's aspectRatio prop
    const getAspectRatioClass = (aspectRatio?: string) => {
      switch (aspectRatio) {
        case '9:16': return 'aspect-[9/16]';
        case '1:1': return 'aspect-square';
        case '4:3': return 'aspect-[4/3]';
        case '16:9':
        default: return 'aspect-video';
      }
    };

    // For vertical videos (9:16), constrain width to maintain height without excessive scrolling
    const getContainerClass = (aspectRatio?: string) => {
      if (aspectRatio === '9:16') {
        return 'w-full max-w-[50vh] mx-auto'; // Max width is 50% of viewport height to keep it reasonable
      }
      return 'w-full';
    };

    if (item.type === 'youtube') {
      const aspectClass = getAspectRatioClass(item.aspectRatio);
      const containerClass = getContainerClass(item.aspectRatio);
      
      return (
        <div key={index} className={containerClass}>
          <div className={`w-full ${aspectClass}`}>
            <iframe
              src={`https://www.youtube.com/embed/${item.url}`}
              title={item.caption || `Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          {item.caption && (
            <p className="text-[#99a1af] text-sm mt-2 text-center italic">{item.caption}</p>
          )}
        </div>
      );
    } else if (item.type === 'linkedin') {
      return (
        <div key={index} className="w-full">
          <div className="w-full aspect-[504/399]">
            <iframe
              src={`https://www.linkedin.com/embed/feed/update/${item.url}?compact=1`}
              title={item.caption || `LinkedIn post ${index + 1}`}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          {item.caption && (
            <p className="text-[#99a1af] text-sm mt-2 text-center italic">{item.caption}</p>
          )}
        </div>
      );
    } else if (item.type === 'video') {
      const aspectClass = getAspectRatioClass(item.aspectRatio);
      const containerClass = getContainerClass(item.aspectRatio);
      
      return (
        <div key={index} className={containerClass}>
          <div className={`w-full ${aspectClass} bg-black`}>
            <video
              src={item.url}
              controls
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {item.caption && (
            <p className="text-[#99a1af] text-sm mt-2 text-center italic">{item.caption}</p>
          )}
        </div>
      );
    } else if (item.type === 'image') {
      return (
        <div key={index} className="w-full">
          <img
            src={item.url}
            alt={item.caption || `Image ${index + 1}`}
            className="w-full h-auto object-cover"
          />
          {item.caption && (
            <p className="text-[#99a1af] text-sm mt-2 text-center italic">{item.caption}</p>
          )}
        </div>
      );
    }
    return null;
  };

  // Determine if project has gallery
  const hasGallery = project.gallery && project.gallery.images.length > 0;
  const hasMediaItems = project.mediaItems && project.mediaItems.length > 0;
  const hasSingleMedia = project.mediaType && project.mediaUrl;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full min-h-screen"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-[21px] right-[20px] z-50 size-[40px] bg-black/50 hover:bg-black/70 transition-colors rounded-full flex items-center justify-center"
          aria-label="Close modal"
        >
          <div className="relative size-6">
            <div className="absolute inset-1/4">
              <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d="M13 1L1 13" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-1/4">
              <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d="M1 1L13 13" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Previous Project Button */}
        {onPrevious && (
          <button
            onClick={onPrevious}
            className="hidden md:flex fixed top-1/2 left-[20px] -translate-y-1/2 z-50 size-[50px] bg-black/50 hover:bg-black/70 transition-colors rounded-full items-center justify-center"
            aria-label="Previous project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        {/* Next Project Button */}
        {onNext && (
          <button
            onClick={onNext}
            className="hidden md:flex fixed top-1/2 right-[20px] -translate-y-1/2 z-50 size-[50px] bg-black/50 hover:bg-black/70 transition-colors rounded-full items-center justify-center"
            aria-label="Next project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}

        {/* Content */}
        <div className="w-full md:w-[70vw] mx-auto flex flex-col gap-6 md:gap-8 p-4 md:p-10 lg:p-[40px]">
          {/* Cover Image */}
          {project.coverImage && (
            <div className="w-full aspect-[2/1] overflow-hidden">
              <img
                src={project.coverImage}
                alt={`${project.title} cover`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Header */}
          <div className="flex flex-col gap-4">
            {/* Title */}
            <div className="flex flex-col gap-0">
              <h1 className="font-['Montserrat',sans-serif] text-[32px] md:text-[48px] leading-[48px] tracking-[2.4px] uppercase font-light">
                {project.title}
              </h1>
              {project.client && (
                <p className="font-['Montserrat',sans-serif] text-[20px] md:text-[24px] leading-[48px] tracking-[2.4px] text-white">
                  {project.client}
                </p>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-6 text-[#99a1af]">
              <div className="flex items-center gap-2">
                <CalendarIcon />
                <span className="text-[16px] leading-[24px]">{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <TagIcon />
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white/10 text-[14px] leading-[20px] tracking-[0.35px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="font-['Open_Sans',sans-serif] text-[#d1d5dc] text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Media Content */}
          <div className="flex flex-col gap-8">
            {/* Multiple Media Items */}
            {hasMediaItems && project.mediaItems!.map((item, index) => renderMediaItem(item, index))}

            {/* Single Media */}
            {!hasMediaItems && hasSingleMedia && (
              <div className="w-full">
                {project.mediaType === 'youtube' ? (
                  <div className="w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.mediaUrl}`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : project.mediaType === 'linkedin' ? (
                  <div className="w-full">
                    <div className="w-full aspect-[504/399]">
                      <iframe
                        src={`https://www.linkedin.com/embed/feed/update/${project.mediaUrl}?compact=1`}
                        title={project.title}
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-black">
                    <video
                      src={project.mediaUrl}
                      controls
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                {project.caption && (
                  <p className="text-[#99a1af] text-sm mt-2 text-center italic">{project.caption}</p>
                )}
              </div>
            )}

            {/* Photo Gallery */}
            {hasGallery && (
              <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery!.images.map((image, index) => (
                    <div
                      key={index}
                      className="cursor-pointer overflow-hidden transition-transform hover:scale-[1.02]"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={image.url}
                        alt={image.caption || `Gallery image ${index + 1}`}
                        className="w-full h-auto object-cover aspect-square"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {lightboxOpen && hasGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 z-50 size-[40px] bg-black/50 hover:bg-black/70 transition-colors rounded-full flex items-center justify-center"
              aria-label="Close lightbox"
            >
              <div className="relative size-6">
                <div className="absolute inset-1/4">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d="M13 1L1 13" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-1/4">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d="M1 1L13 13" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            {/* Previous button */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(lightboxIndex - 1);
                }}
                className="absolute left-6 z-50 size-[50px] bg-black/50 hover:bg-black/70 transition-colors rounded-full flex items-center justify-center"
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}

            {/* Next button */}
            {lightboxIndex < project.gallery!.images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(lightboxIndex + 1);
                }}
                className="absolute right-6 z-50 size-[50px] bg-black/50 hover:bg-black/70 transition-colors rounded-full flex items-center justify-center"
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}

            {/* Image */}
            <div 
              className="max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.gallery!.images[lightboxIndex].url}
                alt={project.gallery!.images[lightboxIndex].caption || `Gallery image ${lightboxIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain"
              />
              {project.gallery!.images[lightboxIndex].caption && (
                <p className="text-white text-center text-lg">
                  {project.gallery!.images[lightboxIndex].caption}
                </p>
              )}
              <p className="text-[#99a1af] text-sm">
                {lightboxIndex + 1} / {project.gallery!.images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}