# Media Blocks Guide

## Overview

Your portfolio now supports multiple types of media content per project! You can add images, videos, YouTube embeds, Vimeo embeds, Instagram posts, and TikTok videos to any project.

## How It Works

Each project can have a `mediaBlocks` array that contains different types of media. These will be displayed in order within the project detail modal.

## Media Block Types

### 1. Local Images

Display multiple images from your project folders:

```typescript
{
  type: 'image',
  url: '/images/projects/my-photo.jpg',
  caption: 'Optional caption for this image',
  width: 'full' // Optional: 'full', 'half', or 'third' (default: 'full')
}
```

### 2. Local Videos

Upload your own video files:

```typescript
{
  type: 'video',
  url: '/videos/projects/my-video.mp4',
  caption: 'Optional caption for this video'
}
```

### 3. YouTube Videos

Embed YouTube videos using the video ID:

```typescript
{
  type: 'youtube',
  embedId: 'dQw4w9WgXcQ', // The part after "watch?v=" in the YouTube URL
  caption: 'Behind the scenes footage'
}
```

**How to find YouTube video ID:**
- YouTube URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

### 4. Vimeo Videos

Embed Vimeo videos using the video ID:

```typescript
{
  type: 'vimeo',
  embedId: '123456789', // The number in the Vimeo URL
  caption: 'Director\'s cut'
}
```

**How to find Vimeo video ID:**
- Vimeo URL: `https://vimeo.com/123456789`
- Video ID: `123456789`

### 5. Google Drive Images & Videos

You can host your images and videos on Google Drive and use them in your portfolio! This is perfect if you want to store large media files in the cloud.

```typescript
{
  type: 'image',
  url: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID',
  caption: 'Image hosted on Google Drive',
  width: 'full' // Optional: 'full', 'half', or 'third'
}
```

**How to get a direct link from Google Drive:**

1. Upload your image or video to Google Drive
2. Right-click the file and select "Get link"
3. Set permissions to "Anyone with the link" (important!)
4. Copy the sharing link - it will look like:
   ```
   https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing
   ```
5. Extract the FILE_ID (the part between `/d/` and `/view`): `1a2b3c4d5e6f7g8h9i0j`
6. Use this format in your mediaBlocks:
   - **For images:** `https://drive.google.com/uc?export=view&id=1a2b3c4d5e6f7g8h9i0j`
   - **For videos:** `https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9i0j`

**Example with Google Drive media:**

```typescript
mediaBlocks: [
  // Google Drive Image
  {
    type: 'image',
    url: 'https://drive.google.com/uc?export=view&id=1a2b3c4d5e6f7g8h9i0j',
    caption: 'Photo from Google Drive'
  },
  // Google Drive Video
  {
    type: 'video',
    url: 'https://drive.google.com/uc?export=download&id=9j8i7h6g5f4e3d2c1b0a',
    caption: 'Video from Google Drive'
  },
  // Three Google Drive images side by side
  {
    type: 'image',
    url: 'https://drive.google.com/uc?export=view&id=ABC123',
    width: 'third'
  },
  {
    type: 'image',
    url: 'https://drive.google.com/uc?export=view&id=DEF456',
    width: 'third'
  },
  {
    type: 'image',
    url: 'https://drive.google.com/uc?export=view&id=GHI789',
    width: 'third'
  }
]
```

**Using Google Drive images as project thumbnails:**

You can also use Google Drive images as the main thumbnail in your project grid:

```typescript
{
  id: 1,
  type: 'photo',
  title: 'My Project',
  description: 'Project description',
  image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID', // Thumbnail
  // ... rest of project config
}
```

**⚠️ Important Notes:**
- Always set sharing permissions to "Anyone with the link" or the images won't load
- Google Drive has bandwidth limits - if too many people view your images simultaneously, they may temporarily stop loading
- For better performance with high-traffic sites, consider using Unsplash, Cloudinary, or other image hosting services
- Videos from Google Drive may take longer to load than YouTube/Vimeo embeds

### 6. Instagram Posts

Embed Instagram posts or reels:

```typescript
{
  type: 'instagram',
  url: 'https://www.instagram.com/p/ABC123xyz/', // Full Instagram post URL
  embedId: 'ABC123xyz', // The post ID from the URL
  caption: 'Check out this Instagram post'
}
```

**Note:** Instagram embeds require the Instagram embed script. Add this to your HTML if using Instagram:
```html
<script async src="//www.instagram.com/embed.js"></script>
```

### 7. TikTok Videos

Embed TikTok videos:

```typescript
{
  type: 'tiktok',
  url: 'https://www.tiktok.com/@username/video/1234567890123456789',
  embedId: '1234567890123456789', // The video ID from the URL
  caption: 'TikTok behind the scenes'
}
```

**Note:** TikTok embeds require the TikTok embed script. Add this to your HTML if using TikTok:
```html
<script async src="https://www.tiktok.com/embed.js"></script>
```

### 8. Text Blocks

Add formatted text content between media items:

```typescript
{
  type: 'text',
  heading: 'Project Overview', // Optional heading
  content: 'Your text content here.\n\nUse \\n\\n for new paragraphs.',
  width: 'full' // Optional: 'full', 'half', or 'third' (default: 'full')
}
```

**Features:**
- Optional heading in large, bold Montserrat font
- Text content in Open Sans with proper line spacing
- Supports multi-line text with `\n\n` for paragraph breaks
- Can be placed anywhere in the media flow
- Supports width controls for side-by-side layouts

**Example with text blocks:**

```typescript
mediaBlocks: [
  // Main video
  {
    type: 'youtube',
    embedId: 'dQw4w9WgXcQ',
    caption: 'Final project video'
  },
  // Text block about the project
  {
    type: 'text',
    heading: 'Behind the Process',
    content: 'This project took over 3 months to complete. We worked with a talented team of creatives to bring this vision to life.\n\nThe biggest challenge was capturing authentic moments while maintaining the cinematic quality we wanted.'
  },
  // Images with text description
  {
    type: 'image',
    url: '/images/projects/photo-1.jpg',
    width: 'half'
  },
  {
    type: 'text',
    heading: 'The Setup',
    content: 'We used natural lighting and minimal equipment to capture genuine emotions.',
    width: 'half'
  }
]
```

## Complete Example

Here's a complete example of a project with multiple media types:

```typescript
{
  id: 1,
  type: 'video',
  title: 'My Amazing Project',
  description: 'A showcase of my best work',
  fullDescription: 'This project demonstrates my skills in...',
  date: '2024',
  tags: ['Cinematography', 'Commercial'],
  image: '/images/projects/thumbnail.jpg', // Thumbnail for grid
  mediaBlocks: [
    // Main video
    {
      type: 'video',
      url: '/videos/projects/main-video.mp4',
      caption: 'Final cut of the project'
    },
    // Behind the scenes on YouTube
    {
      type: 'youtube',
      embedId: 'dQw4w9WgXcQ',
      caption: 'Behind the scenes footage'
    },
    // Additional photos
    {
      type: 'image',
      url: '/images/projects/photo-1.jpg',
      caption: 'Key moment from the shoot'
    },
    {
      type: 'image',
      url: '/images/projects/photo-2.jpg',
      caption: 'Another great shot'
    },
    // Instagram promo
    {
      type: 'instagram',
      url: 'https://www.instagram.com/p/ABC123xyz/',
      embedId: 'ABC123xyz',
      caption: 'Instagram behind the scenes'
    },
    // Vimeo director's cut
    {
      type: 'vimeo',
      embedId: '123456789',
      caption: 'Extended director\'s cut on Vimeo'
    }
  ]
}
```

## Gallery Images Helper

For projects with multiple similar images, use the `galleryImages` helper in `/data/projectImages.ts`:

```typescript
// In projectImages.ts
export const galleryImages = {
  myProject: [
    '/images/projects/my-project-1.jpg',
    '/images/projects/my-project-2.jpg',
    '/images/projects/my-project-3.jpg',
  ]
};

// In projects.ts
import { galleryImages } from './projectImages';

{
  id: 2,
  title: 'Photo Gallery',
  // ... other fields
  mediaBlocks: galleryImages.myProject.map(imgUrl => ({
    type: 'image',
    url: imgUrl,
  }))
}
```

## Backwards Compatibility

Projects without `mediaBlocks` will still work using the legacy `image` and `videoUrl` fields. This means:

- If `mediaBlocks` exists and has content → displays media blocks gallery
- If `mediaBlocks` is empty or undefined → displays single image/video (legacy mode)

## Tips

1. **Order matters** - Media blocks display in the order you define them
2. **Mix and match** - Combine different media types in one project
3. **Captions are optional** - Add them for context or leave them out
4. **File organization** - Keep images in `/public/images/projects/` and videos in `/public/videos/projects/`
5. **Performance** - Consider file sizes, especially for videos. Optimize large files before uploading.

---

## 🆕 Side-by-Side Layouts

You can display multiple media blocks next to each other using the `width` property!

### Width Options

- `'full'` - Takes up the full width (default)
- `'half'` - Takes up half the width (2 items per row on desktop)
- `'third'` - Takes up one-third the width (3 items per row on desktop)

**Note:** On mobile devices, all blocks stack vertically regardless of width setting.

### Examples

#### Two Instagram Posts Side by Side

```typescript
mediaBlocks: [
  {
    type: 'instagram',
    url: 'https://www.instagram.com/p/ABC123xyz/',
    embedId: 'ABC123xyz',
    caption: 'First Instagram post',
    width: 'half'
  },
  {
    type: 'instagram',
    url: 'https://www.instagram.com/p/XYZ789abc/',
    embedId: 'XYZ789abc',
    caption: 'Second Instagram post',
    width: 'half'
  }
]
```

#### Three Images in a Row

```typescript
mediaBlocks: [
  {
    type: 'image',
    url: '/images/projects/photo-1.jpg',
    width: 'third'
  },
  {
    type: 'image',
    url: '/images/projects/photo-2.jpg',
    width: 'third'
  },
  {
    type: 'image',
    url: '/images/projects/photo-3.jpg',
    width: 'third'
  }
]
```

#### Two TikTok Videos Side by Side

```typescript
mediaBlocks: [
  {
    type: 'tiktok',
    url: 'https://www.tiktok.com/@user/video/1234567890',
    embedId: '1234567890',
    caption: 'TikTok 1',
    width: 'half'
  },
  {
    type: 'tiktok',
    url: 'https://www.tiktok.com/@user/video/9876543210',
    embedId: '9876543210',
    caption: 'TikTok 2',
    width: 'half'
  }
]
```

#### Mixed Layout Example

Combine full-width with half-width for dynamic layouts:

```typescript
mediaBlocks: [
  // Full-width main video
  {
    type: 'youtube',
    embedId: 'dQw4w9WgXcQ',
    caption: 'Main project video',
    width: 'full'
  },
  // Two images side by side
  {
    type: 'image',
    url: '/images/projects/photo-1.jpg',
    caption: 'Behind the scenes',
    width: 'half'
  },
  {
    type: 'image',
    url: '/images/projects/photo-2.jpg',
    caption: 'Final shot',
    width: 'half'
  },
  // Three social posts in a row
  {
    type: 'instagram',
    url: 'https://www.instagram.com/p/ABC/',
    embedId: 'ABC',
    width: 'third'
  },
  {
    type: 'instagram',
    url: 'https://www.instagram.com/p/DEF/',
    embedId: 'DEF',
    width: 'third'
  },
  {
    type: 'instagram',
    url: 'https://www.instagram.com/p/GHI/',
    embedId: 'GHI',
    width: 'third'
  }
]
```

### Layout Tips

1. **Grouping** - Items wrap automatically, so consecutive 'half' items will appear side-by-side
2. **Mixing widths** - You can mix full, half, and third widths in the same project
3. **Social media** - Great for displaying multiple Instagram posts or TikTok videos together
4. **Responsive** - All layouts automatically stack on mobile for better viewing

---

## Quick Start Checklist

- [ ] Create `/public/images/projects/` folder
- [ ] Create `/public/videos/projects/` folder (if using local videos)
- [ ] Add your image files
- [ ] Add your video files (optional)
- [ ] Update `/data/projectImages.ts` with your filenames
- [ ] Update `/data/projects.ts` with your project details
- [ ] Add `mediaBlocks` array to projects that need multiple media items
- [ ] Add Instagram/TikTok embed scripts to HTML if needed