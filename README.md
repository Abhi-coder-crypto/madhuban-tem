# Madhuvan Greens - Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, Vite, and Tailwind CSS. Features smooth animations, responsive design, and a delightful user experience.

## 🚀 Quick Netlify Deployment

This project is fully configured for Netlify with **zero additional setup**. Deploy in seconds!

### Deploy Now:

1. **Push to GitHub** (or GitLab/Bitbucket)
2. **Go to [Netlify](https://netlify.com)**
3. Click **"New site from Git"** → Select your repo → **Deploy**

That's it! Netlify automatically:
- ✅ Detects it's a Vite project
- ✅ Runs `npm run build`
- ✅ Deploys the `dist/` folder
- ✅ Configures SPA routing
- ✅ Provides free HTTPS

**Or drag & drop:** Build locally (`npm run build`), then drop the `dist/` folder on [Netlify Drop](https://app.netlify.com/drop)

---

## Project Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with animations
- **Animations**: Framer Motion
- **UI Components**: Radix UI (Shadcn/ui patterns)
- **Routing**: React Router v6
- **Form Handling**: React Hook Form + Zod validation

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Hero section with rotating images
- ✅ Experience showcase
- ✅ Auto-scrolling gallery
- ✅ Dynamic menu with interactive cards
- ✅ Contact form integration
- ✅ Dark theme with custom colors
- ✅ Optimized bundle (~500KB, 155KB gzipped)

## Development

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Opens at `http://localhost:5000`

### Building

```bash
npm run build
```

Creates optimized production build in `dist/`

## Netlify Configuration

**Everything is pre-configured** via `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Adding Environment Variables (if needed)

In Netlify dashboard:
1. **Site settings** → **Build & deploy** → **Environment**
2. Add your variables
3. Auto-available during builds

## Deployment Features

- **Auto-deploy**: Push to git → auto-deploy
- **Instant rollback**: Previous deployments stay accessible
- **Free HTTPS**: Automatic SSL certificates
- **CDN**: Global content distribution
- **Custom domains**: Full support included

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Header
│   ├── HeroSection.tsx  # Rotating images
│   ├── ExperienceSection.tsx
│   ├── GallerySection.tsx
│   ├── MenuSection.tsx
│   ├── Footer.tsx
│   └── ui/             # Shadcn/ui components
├── assets/             # Images
├── index.css          # Global styles
└── App.tsx            # Main app
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Build time: ~9 seconds
- Bundle: ~500KB (155KB gzipped)
- Lazy image loading
- Optimized CSS/JS

## Technologies Used

This project uses:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Lovable Integration

This project was created with Lovable. You can:

- **Edit locally**: Clone, push changes, auto-synced to Lovable
- **Edit in Lovable**: Changes auto-commit to repo
- **Custom domain**: Use Project > Settings > Domains

## License

© 2025 Madhuvan Greens Restaurant. All rights reserved.
