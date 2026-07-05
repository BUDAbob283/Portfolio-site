// Project images configuration
// Place your thumbnails in /public/images/thumbnails/
// Place your banners in /public/images/banners/
// Place your gallery images in /public/images/gallery/<project-name>/
// and update the filenames below to match your actual image files

// Thumbnails - used in project grid view
export const projectThumbnails = {
  // Video project thumbnails
  HistoricTen: '/images/thumbnails/Knack-scaled.jpg',
  SamynWonenPromo: '/images/thumbnails/SamynWonenPromo.jpg',
  DranouterShowcase: '/images/thumbnails/Showcase-festival-scaled.png',
  DranouterFestival: '/images/thumbnails/DranouterPhotographyThumbnail.jpg',
  Promovideo: '/images/thumbnails/Promovideo.png',
  ShirtReveal: '/images/thumbnails/ShirtReveal.jpg',
  BeobankSponsorEvent: '/images/thumbnails/BeobankSponsorEvent.jpg',
  WonderDesignExchange: '/images/thumbnails/WonderDesignExchange-scaled.webp',
  BuildingBasedonBioBased: '/images/thumbnails/BBoBB_Thumbnail_1_1.jpg',
  SterkeStemmen: '/images/thumbnails/Sterke stemmen.jpg',
  
  // Social project images
  KnackVolleySocial: '/images/thumbnails/SocialContent_thumbnail.webp',
};

// Banners - used as cover images in project detail modals (2:1 aspect ratio)
export const projectBanners = {
  ShirtReveal: '/images/banners/maxresdefault.jpg',
  WonderDesignExchange: '/images/banners/DRK_Wonder_18-scaled.jpg',
  BuildingBasedonBioBased: '/images/banners/BBoBB_Thumbnail_2_1.jpg',
  SterkeStemmen: '/images/banners/Sterke-stemmen-scaled.png',
};

// Legacy export for backwards compatibility
export const projectImages = projectThumbnails;

// Video files (optional - for video projects)
// Place your video files in /public/videos/projects/
export const projectVideos = {
  samynWonen1: 'https://thorinclaeys.be/wp-content/uploads/2026/03/Video-1.mp4',
  samynWonen2: 'https://thorinclaeys.be/wp-content/uploads/2026/03/Video-2.mp4',
};

// Example: Additional images for projects with multiple photos
// You can organize them by project or however you prefer
export const galleryImages = {
  DranouterPhotography: [
    '/images/gallery/DranouterPhotography/Afenginn-DK-6-scaled.jpg',
    '/images/gallery/DranouterPhotography/Green-Crow-Collective-4-scaled.jpg',
    '/images/gallery/DranouterPhotography/Gregotechno-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-7-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-8-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-13-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-22-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-29-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-30-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-32-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-38-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-43-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-61-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-90-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-91-scaled.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-99-scaled.jpg',
  ],
  WonderDesignExchange: [
    '/images/gallery/WonderDesignExchange/DRK_Wonder_1-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_2-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_3-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_4-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_5-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_6-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_7-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_8-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_9-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_10-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_11-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_12-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_13-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_14-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_15-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_16-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_17-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_18-scaled.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_19-scaled.jpg',
  ]
  // Add more multi-image projects here
};