# Content Blocks Guide

## Overview

The ProjectDetailModal uses a **flexible content blocks system** where all content on the project detail page comes from the `contentBlocks` array. This gives you complete control over the layout and structure of each project's detail page.

## Project Structure

### Required Fields
Every project requires these basic fields:
```typescript
{
  id: number;                    // Unique identifier
  type: 'video' | 'photo' | 'design' | 'social';
  title: string;                 // Project title
  description: string;           // Short description for grid/card view
  date: string;                  // Project date (e.g., "2025")
  tags: string[];                // Category tags
  image: string;                 // Thumbnail image for grid view
  client?: string;               // Optional client name
  videoUrl?: string;             // Optional (for legacy/preview support)
  contentBlocks?: ContentBlock[]; // All detail page content
}
```

### Content Blocks
All content in the project detail modal comes from the `contentBlocks` array. You have complete flexibility to:
- Include or exclude any content
- Choose layout types for each block
- Mix different block types
- Control the order of content

## Content Block Types

### 1. `media-text`
**Layout:** Media on the left, text on the right (stacks on mobile: media top, text bottom)

**Use case:** Show media with accompanying description side-by-side.

```typescript
{
  type: 'media-text',
  media: {
    type: 'image', // or 'video', 'youtube', 'vimeo', 'instagram', 'tiktok'
    url: 'https://example.com/image.jpg',
    embedId: 'abc123' // Required for youtube/vimeo/tiktok
  },
  text: {
    heading: 'Optional Heading',
    content: 'Your paragraph content here. Supports multiple paragraphs with \\n\\n separators.'
  }
}
```

### 2. `text-media`
**Layout:** Text on the left, media on the right (stacks on mobile: media top, text bottom)

**Use case:** Lead with narrative, support with visual media.

```typescript
{
  type: 'text-media',
  media: {
    type: 'youtube',
    embedId: 'dQw4w9WgXcQ'
  },
  text: {
    heading: 'Behind The Scenes',
    content: 'Description of the behind the scenes footage.'
  }
}
```

### 3. `media-full`
**Layout:** Full-width media block (no text)

**Use case:** Showcase media at full width for maximum visual impact.

```typescript
{
  type: 'media-full',
  media: {
    type: 'image',
    url: 'https://example.com/hero-image.jpg',
    caption: 'Optional caption displayed below the media'
  }
}
```

### 4. `text-full`
**Layout:** Full-width text block (no media)

**Use case:** Add text-only sections for descriptions, storytelling, or introductions.

```typescript
{
  type: 'text-full',
  text: {
    heading: 'Project Overview',
    content: 'A detailed explanation of your project, creative process, challenges faced, etc.'
  }
}
```

## Media Types Supported

All content blocks support the following media types:

- **image**: Standard image files (`url` required)
- **video**: Self-hosted video files (`url` required)
- **youtube**: YouTube embeds (`embedId` required - e.g., "dQw4w9WgXcQ")
- **vimeo**: Vimeo embeds (`embedId` required - e.g., "123456789")
- **instagram**: Instagram post embeds (`url` and `embedId` required)
- **tiktok**: TikTok video embeds (`url` and `embedId` required)

## Complete Example

Here's a complete project using the new structure:

```typescript
{
  id: 1,
  type: 'video',
  title: 'Historic Ten',
  description: 'A visual story about two volleyball players',
  date: '2025',
  tags: ['Cinematography', 'Documentary'],
  client: 'Knack Volley Roeselare',
  image: projectImages.HistoricTen,
  
  contentBlocks: [
    // Start with intro text
    {
      type: 'text-full',
      text: {
        content: 'This cinematic short film explores the journey of two athletes chasing their tenth cup victory. Shot over three months, the project captures the essence of dedication and teamwork.'
      }
    },
    
    // Main video
    {
      type: 'media-full',
      media: {
        type: 'youtube',
        embedId: 'VW8cG5fxqno',
        caption: 'Main cinematic short film'
      }
    },
    
    // Behind the scenes with text
    {
      type: 'media-text',
      media: {
        type: 'image',
        url: 'https://example.com/bts.jpg'
      },
      text: {
        heading: 'Behind The Scenes',
        content: 'The production process involved working closely with the athletes to capture authentic moments both on and off the court.'
      }
    },
    
    // Full width showcase image
    {
      type: 'media-full',
      media: {
        type: 'image',
        url: 'https://example.com/hero.jpg',
        caption: 'The winning moment'
      }
    },
    
    // Production notes
    {
      type: 'text-media',
      media: {
        type: 'image',
        url: 'https://example.com/equipment.jpg'
      },
      text: {
        heading: 'Production',
        content: 'We used natural lighting and minimal equipment to maintain authenticity and capture the raw emotion of the sport.'
      }
    },
    
    // Final thoughts
    {
      type: 'text-full',
      text: {
        heading: 'Impact',
        content: 'The film premiered at the team\'s championship celebration and has since been used in their recruitment efforts.'
      }
    }
  ]
}
```

## Tips & Best Practices

### Layout Variety
- **Mix block types** to create visual interest and rhythm
- Use `media-full` blocks to create visual breaks between text-heavy sections
- Alternate `media-text` and `text-media` for variety

### Content Flow
- Start with `text-full` for project introduction/context
- Place primary media (`media-full`) early to grab attention
- Use split layouts (`media-text`, `text-media`) for detailed explanations
- End with `text-full` for conclusions or calls-to-action

### Text Content
- Keep text concise and scannable
- Use headings to guide readers
- Break long text into multiple blocks for better pacing
- Use `\n\n` for paragraph breaks within content

### Media Strategy
- Lead with your strongest visual (usually `media-full`)
- Use YouTube/Vimeo embeds for primary videos
- Group related images with split layouts
- Add captions to provide context

### Instagram & TikTok
When using social embeds, remember:
- Instagram: Provide both `url` and `embedId` (post ID from URL)
- TikTok: Provide both `url` and `embedId` (video ID from URL)
- These embed automatically and are centered

## Modal Features

The ProjectDetailModal automatically displays:
- **Header**: Project title, client name (if provided), date, and tags
- **Content**: All content blocks in order
- **Close button**: Fixed top-right (Escape key also works)
- **Scroll**: Full-page scrolling for long content
- **Responsive**: Mobile-optimized layouts

## Empty State

If a project has no `contentBlocks` or an empty array, the modal will show:
- Header with title, client, date, and tags
- Message: "No content available for this project."

This allows you to create project placeholders without detail content.
