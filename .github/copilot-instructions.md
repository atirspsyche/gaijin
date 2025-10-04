# Gaijin - Japanese Restaurant Website

## Project Context & Vision

**Gaijin** is a Japanese restaurant website that deeply values and celebrates Japanese culture through every aspect of their food and experience. This project emphasizes:

- **Cultural Authenticity**: Japanese culture should be reflected in every design decision, color choice, and user interaction
- **Mobile-First Design**: Primary focus on mobile users, with responsive design for desktop
- **Modern Tech Stack**: Gatsby + Tailwind for performance and developer experience
- **Component Library**: Planning to integrate components from [reactbits.dev](https://reactbits.dev) for enhanced UI elements
- **Deployment**: Vercel for hosting and continuous deployment

### Design Philosophy

- Embrace Japanese aesthetic principles (minimalism, natural materials, harmony)
- Consider traditional Japanese design elements: clean lines, natural colors, subtle animations
- Mobile-centric UX with touch-friendly interactions
- Cultural respect and authenticity in all visual and content decisions

### Current Color Palette

- **Primary Background**: `#E4DCCA` (warm beige)
- **Wave Effects**: `#C9C0A9` (muted sage green)
- **Accent Elements**: Soft, natural tones inspired by Japanese aesthetics

## Architecture Overview

This is a modern Gatsby site built with Tailwind CSS and configured for static site generation. The project follows Gatsby's file-based routing pattern where pages in `src/pages/` become routes automatically.

### Key Stack Components

- **Gatsby 5.x**: Static site generator with React
- **Tailwind CSS 4.x**: Utility-first CSS framework
- **MDX**: Markdown with embedded JSX components
- **PostCSS + Autoprefixer**: CSS processing pipeline

## Project Structure & Patterns

### Page Components (`src/pages/`)

- Use default exports for page components
- Include `Head` export for SEO metadata: `export const Head = () => <title>Page Title</title>`
- Pages automatically become routes (e.g., `index.js` → `/`, `404.js` → `/404`)

### Styling Approach

The project uses a **hybrid styling pattern**:

- **Tailwind CSS**: Available via `src/styles/global.css` for utility classes
- **Inline styles**: Used extensively in existing components (see `src/pages/index.js` for patterns)
- Global styles imported in `gatsby-browser.js`

### Configuration Files

- `gatsby-config.js`: Plugin configuration including image processing, MDX, and filesystem sources
- `tailwind.config.js`: Scans `src/pages/**` and `src/components/**` for classes
- `postcss.config.js`: Processes Tailwind and adds vendor prefixes

## Development Workflow

### Essential Commands

```bash
npm run develop    # Start dev server (localhost:8000)
npm run build      # Production build
npm run serve      # Serve production build
npm run clean      # Clear Gatsby cache
```

### Plugin Integration Points

- **Images**: Use `gatsby-plugin-image` for optimized images from `src/images/`
- **MDX**: Files are processed via `gatsby-plugin-mdx`
- **Manifest**: PWA setup with `src/images/icon.png` as app icon

## Home Page Layered Design Pattern

The main home page (`src/pages/index.js`) uses a sophisticated layered approach:

### Layer Structure

```javascript
// Layer 0: Solid background color (#E4DCCA)
<div style={{ backgroundColor: '#E4DCCA' }} />

// Waves Component: Interactive wave effects
<Waves
  lineColor="#C9C0A9"
  backgroundColor="rgba(255, 255, 255, 0.2)"
  // ... other wave parameters
/>

// Layer 1: Full-screen SVG (object-cover)
<img src="/home/layer1.svg" className="w-full h-full object-cover" />

// Layer 2: Centered SVG (object-contain, 50% size)
<img src="/home/layer2.svg" className="w-1/2 h-1/2 object-contain" />
```

### Waves Component Configuration

- **Location**: `src/components/Waves/waves` (from reactbits.dev)
- **Purpose**: Creates smooth, interactive wave animations
- **Key Props**: `lineColor`, `waveSpeedX/Y`, `waveAmpX/Y`, `friction`, `tension`
- **Color Scheme**: Uses Japanese-inspired muted tones (#C9C0A9)
- **Interactivity**: Responds to mouse movement with `maxCursorMove` parameter

### Asset Management

- **Static assets**: Place in `static/home/` directory
- **SVG layers**: Use appropriate `object-cover` vs `object-contain` based on layer purpose
- **Full viewport**: All layers use `width: '100vw', height: '100vh'` for complete coverage

## Coding Conventions

### Component Patterns

```javascript
// Standard page component structure
const PageName = () => {
  return <main style={pageStyles}>{/* Content */}</main>;
};

export default PageName;
export const Head = () => <title>Page Title</title>;
```

### Style Objects

Follow the existing inline style pattern for consistency:

```javascript
const componentStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
```

### Gatsby-Specific Patterns

- Use `gatsby-plugin-image` components for images, not `<img>` tags
- Leverage automatic code splitting per page
- Static queries should use `useStaticQuery` hook in components
- Page queries use `export const query = graphql\`...\`` in page components

## Key Integration Points

### Asset Management

- Images: Place in `src/images/` and reference via GraphQL or import
- Static files: Use `static/` folder (create if needed) for direct public access

### Build Considerations

- Site metadata configured in `gatsby-config.js` siteMetadata
- Sitemap automatically generated for SEO
- Sharp plugin handles image transformations during build
