# Project Images Setup Guide

## How to Add Your Own Images

This portfolio is now configured to use local images stored in your project. Follow these steps to add your own photos and videos:

## 🆕 NEW: Multiple Media Support!

Your portfolio now supports **multiple images, videos, and social media embeds** per project! 

👉 **See [MEDIA_BLOCKS_GUIDE.md](./MEDIA_BLOCKS_GUIDE.md) for complete instructions on adding multiple media items, YouTube/Vimeo embeds, Instagram posts, and TikTok videos to your projects.**

---

## Basic Setup (Single Image per Project)

### 1. Create the Images Folder Structure

Create the following folder in your project's public directory:
```
public/
  images/
    projects/
      (place your images here)
  videos/
    projects/
      (place your videos here - optional)
```

### 2. Add Your Image Files

Place your project images in the `/public/images/projects/` folder with these filenames:

**Video Project Thumbnails:**
- `cinematic-short.jpg`
- `documentary-project.jpg`
- `commercial-production.jpg`

**Photography Projects:**
- `portrait-series.jpg`
- `nature-landscape.jpg`
- `urban-stories.jpg`
- `wedding-collection.jpg`
- `concert-photography.jpg`
- `fashion-editorial.jpg`
- `product-photography.jpg`
- `architectural-photography.jpg`
- `sports-action.jpg`

### 3. Add Video Files (Optional)

If you have video files for your video projects, place them in `/public/videos/projects/`:
- `cinematic-short.mp4`
- `documentary-project.mp4`
- `commercial-production.mp4`

### 4. Customize Image Paths (Optional)

If you want to use different filenames, edit `/data/projectImages.ts`:

```typescript
export const projectImages = {
  cinematicShort: '/images/projects/your-custom-filename.jpg',
  // ... update other paths as needed
};
```

### 5. Update Project Details

To change project titles, descriptions, dates, or tags, edit `/data/projects.ts`

## Image Recommendations

- **Format:** JPG or PNG
- **Dimensions:** At least 1920x1080px for best quality
- **Aspect Ratios:** 
  - Portfolio grid images: Square (1:1) or landscape (4:3)
  - Video thumbnails: 16:9 landscape
- **File Size:** Optimize images to under 500KB for faster loading

## Current Fallback

Until you add your own images, the site will attempt to load from the paths specified. If images aren't found, the browser will show broken image icons. You can add placeholder images or update the `projectImages.ts` file to use temporary online URLs.