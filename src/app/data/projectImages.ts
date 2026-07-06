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
  HowestCSD: '/images/thumbnails/HowestCSD.jpg',
  FrankfurtDesignJourney: '/images/thumbnails/FrankfurtDesignJourney.jpg',
  
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
  HowestCSD: '/images/thumbnails/HowestCSD-banner.jpg',
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
  ],
  FrankfurtDesignJourney: [
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_1.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_10.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_11.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_12.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_13.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_14.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_15.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_16.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_17.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_18.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_19.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_2.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_20.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_21.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_22.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_23.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_24.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_25.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_26.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_27.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_28.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_29.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_3.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_30.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_31.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_32.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_33.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_34.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_35.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_36.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_37.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_38.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_39.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_4.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_40.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_41.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_42.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_43.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_44.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_45.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_46.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_47.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_48.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_49.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_5.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_50.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_51.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_52.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_53.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_54.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_55.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_56.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_57.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_58.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_59.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_6.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_60.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_61.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_62.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_7.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_8.jpg',
    '/images/gallery/FrankfurtDesignJourney/DRK_Frankfurt_9.jpg',
  ]
  // Add more multi-image projects here
};