import { projectThumbnails, projectBanners, projectVideos, galleryImages } from './projectImages';

export interface MediaItem {
  type: 'youtube' | 'video' | 'image' | 'linkedin';
  url: string; // YouTube embedId, video URL, image URL, or LinkedIn post URN
  caption?: string;
  aspectRatio?: '16:9' | '9:16' | '1:1' | '4:3'; // Optional aspect ratio, defaults to 16:9 for videos
}

export interface Project {
  id: number;
  type: 'video' | 'photo' | 'design' | 'social';
  title: string;
  description: string;
  date: string; // Format: dd/mm/yyyy (e.g., "15/03/2025")
  tags: string[];
  client?: string;
  image: string; // Thumbnail for grid view
  coverImage?: string; // Optional cover image with 2:1 aspect ratio displayed at top of project detail
  showInPortfolio?: boolean; // Set to true to display this project on the homepage portfolio section
  // Single media (for simple projects)
  mediaType?: 'youtube' | 'video' | 'linkedin';
  mediaUrl?: string; // YouTube embedId, video URL, or LinkedIn post URN (e.g., "urn:li:ugcPost:7445406131503448064")
  caption?: string; // Optional caption for single media
  // Multiple media items
  mediaItems?: MediaItem[];
  // Gallery of photos
  gallery?: {
    images: {
      url: string;
      caption?: string;
    }[];
  };
}

export const allProjects: Project[] = [
  {
    id: 1,
    type: 'video',
    title: 'Historic Ten',
    description: 'A visual story about two volleyball players chasing their tenth cup victory',
    date: '16/03/2025',
    tags: ['Cinematography', 'Documentary'],
    client: 'Knack Volley Roeselare',
    image: projectThumbnails.HistoricTen,
    showInPortfolio: true,
    mediaType: 'youtube',
    mediaUrl: 'VW8cG5fxqno'
  },
  {
    id: 2,
    type: 'video',
    title: 'Samyn Wonen Promotional',
    description: 'Capturing the warmth of interior',
    date: '01/10/2025',
    tags: ['Cinematography', 'Promotional'],
    client: 'Samyn Wonen',
    image: projectThumbnails.SamynWonenPromo,
    mediaItems: [
      {type: 'video',
       url: 'https://thorinclaeys.be/wp-content/uploads/2026/03/Video-1.mp4',
      },
      {type: 'video',
       url: 'https://thorinclaeys.be/wp-content/uploads/2026/03/Video-2.mp4',
      },
    ]
  },
  {
    id: 3,
    type: 'video',
    title: 'Season announcement',
    coverImage: projectBanners.ShirtReveal,
    description: 'The opening for the start of the new season',
    date: '02/10/2025',
    tags: ['Hype', 'Sports'],
    client: 'Knack Volley Roeselare',
    image: projectThumbnails.ShirtReveal,
    showInPortfolio: true,
    mediaType: 'youtube',
    mediaUrl: 'fSX2OujBee0'
  },
  {
    id: 4,
    type: 'video',
    title: 'Dranouter Showcase Festival 2025',
    description: 'Highlight video about the showcase festival at Dranouter 2025',
    date: '01/08/2025',
    tags: ['concert', 'Festival', 'Music'],
    client: 'Dranouter Festival',
    image: projectThumbnails.DranouterShowcase,
    mediaType: 'video',
    mediaUrl: 'https://thorinclaeys.be/wp-content/uploads/2026/03/Dranouter-Showcase-festival_HOR_Final.mp4',
    caption: 'This video was part of my volunteer work during the 2025 edition of Dranouter Festival'
  },
  {
    id: 5,
    type: 'photo',
    title: 'Dranouter 2025 Concert photography',
    description: 'Highlight video about the showcase festival at Dranouter 2025',
    date: '01/08/2025',
    tags: ['concert', 'Festival', 'Music'],
    client: 'Dranouter Festival',
    image: projectThumbnails.DranouterFestival,
    showInPortfolio: true,
    gallery: {
      images: galleryImages.DranouterPhotography.map(url => ({ url }))
    }
  },
  {
    id: 6,
    type: 'video',
    title: 'Promovideo School Assignement',
    description: 'This video is part of a school assignement.',
    date: '13/01/2026',
    tags: ['Promo', 'Music'],
    image: projectThumbnails.Promovideo,
    mediaType: 'video',
    mediaUrl: 'https://thorinclaeys.be/wp-content/uploads/2026/03/Opdracht_Promovideo.mp4',
    caption: 'I was not hired by Noise. Music was used under the schools license. The video was made for educational purpose.'
  },
  {
    id: 7,
    type: 'social',
    title: 'Knack Volley Social Content',
    description: 'Short form social media content for Knack Volley Roeselare',
    date: '20/02/2025',
    tags: ['Social Media', 'Sports'],
    client: 'Knack Volley Roeselare',
    image: projectThumbnails.KnackVolleySocial,
    mediaItems: [
      {type: 'video',
       url: 'https://thorinclaeys.be/wp-content/uploads/2026/03/Sponsorvideo-Deleye-compressed.mp4',
       aspectRatio: '9:16',
       caption: 'Promotional video for a contract renewal. 170k views on TikTok'
      },
      {type: 'video',
       url: 'https://thorinclaeys.be/wp-content/uploads/2026/03/Vraag-aan-de-spelers_Captions-compressed.mp4',
       aspectRatio: '9:16',
       caption: 'Fun social content. 40k views on TikTok'
      },
      {type: 'video',
       url: 'https://thorinclaeys.be/wp-content/uploads/2026/03/POV-old-volleyballers.mp4',
       aspectRatio: '9:16',
       caption: 'Fun social content. 45k views on Instagram'
      }
    ]
  },
  {
    id: 8,
    type: 'video',
    title: 'Beobank sponsorevents',
    description: 'The video announces a new eventconcept for Knack Volley Roeselare.',
    date: '17/03/2025',
    tags: ['Promo', 'Event'],
    client: 'Knack Volley Roeselare',
    image: projectThumbnails.BeobankSponsorEvent,
    mediaType: 'video',
    mediaUrl: 'https://thorinclaeys.be/wp-content/uploads/2026/03/Sponsormatch_BEOBANK_CAPTION_compressed.mp4'
  },
  {
    id: 9,
    type: 'photo',
    title: 'Wonder Festival Design Exchange',
    coverImage: projectBanners.WonderDesignExchange,
    description: 'Photography assignement for Design Regio Kortrijk to capture moments of a design exchange program.',
    date: '21/10/2025',
    tags: ['Event', 'Design', 'Photography'],
    client: 'Design Regio Kortrijk',
    image: projectThumbnails.WonderDesignExchange,
    gallery: {
      images: galleryImages.WonderDesignExchange.map(url => ({ url }))
    }
  },
  {
    id: 10,
    type: 'video',
    title: 'BuildingBased on BioBased',
    coverImage: projectBanners.BuildingBasedonBioBased,
    description: 'Videography assignement for Design Regio Kortrijk to capture moments of a design exchange program.',
    date: '19/03/2026',
    tags: ['Workshop', 'Video'],
    client: 'Design Regio Kortrijk',
    image: projectThumbnails.BuildingBasedonBioBased,
    mediaType: 'linkedin',
    mediaUrl: 'urn:li:ugcPost:7445406131503448064'
  },
  {
    id: 11,
    type: 'video',
    title: 'Sterke Stemmen',
    coverImage: projectBanners.SterkeStemmen,
    description: 'Een aftermovie die klaar is vóór het einde van het event? Tijdens "Sterke Stemmen" van Quindo en publiq vzw was dit de uitdaging. Samen met Omer Vandriessche heb ik het hele event gecapteerd om de sfeer direct om te zetten in een krachtige montage. Een montage die op het einde van het evenement getoond werd aan de deelnemers.',
    date: '27/04/2026',
    tags: ['Event', 'Aftermovie', 'Videography'],
    client: 'Sociaal Productiehuis',
    image: projectThumbnails.SterkeStemmen,
    mediaType: 'linkedin',
    mediaUrl: 'urn:li:ugcPost:7455252725853917184'
  },
];