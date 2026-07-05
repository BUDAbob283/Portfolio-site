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
  DranouterShowcase: '/images/thumbnails/Showcase-festival.jpg',
  DranouterFestival: '/images/thumbnails/DranouterPhotographyThumbnail.jpg',
  Promovideo: '/images/thumbnails/Promovideo.png',
  ShirtReveal: '/images/thumbnails/ShirtReveal.jpg',
  BeobankSponsorEvent: '/images/thumbnails/BeobankSponsorEvent.png',
  WonderDesignExchange: '/images/thumbnails/DRK_Wonder_18-scaled.webp',
  BuildingBasedonBioBased: '/images/thumbnails/BBoBB_Thumbnail_1_1.jpg',
  SterkeStemmen: '/images/thumbnails/Sterke-stemmen.jpg',
  
  // Social project images
  KnackVolleySocial: '/images/thumbnails/SocialContent_thumbnail.webp',
};

// Banners - used as cover images in project detail modals (2:1 aspect ratio)
// Falls back to thumbnails if banner not available
export const projectBanners = {
  ShirtReveal: '/images/thumbnails/ShirtReveal.jpg',
  WonderDesignExchange: '/images/thumbnails/DRK_Wonder_18-scaled.webp',
  BuildingBasedonBioBased: '/images/thumbnails/BBoBB_Thumbnail_2_1.jpg',
  SterkeStemmen: '/images/thumbnails/Sterke-stemmen.jpg',
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
    '/images/gallery/DranouterPhotography/Afenginn-DK-6.jpg',
    '/images/gallery/DranouterPhotography/Green-Crow-Collective-4.jpg',
    '/images/gallery/DranouterPhotography/Gregotechno.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-7.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-8.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-13.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-22.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-29.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-30.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-32.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-38.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-43.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-61.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-90.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-91.jpg',
    '/images/gallery/DranouterPhotography/The-Scratch-99.jpg',
  ],
  WonderDesignExchange: [
    '/images/gallery/WonderDesignExchange/DRK_Wonder_1.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_2.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_3.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_4.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_5.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_6.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_7.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_8.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_9.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_10.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_11.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_12.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_13.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_14.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_15.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_16.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_17.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_18.jpg',
    '/images/gallery/WonderDesignExchange/DRK_Wonder_19.jpg',
  ]
  // Add more multi-image projects here
};