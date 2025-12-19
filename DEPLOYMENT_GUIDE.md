# Madhuvan Greens - Netlify Deployment Guide

## What's Ready

✅ **Navigation** - Both hero buttons and header Reserve Table button navigate smoothly to their sections
✅ **Images** - All 16 images optimized and cached for fast loading on Netlify
✅ **Build Config** - Proper Vite build configuration for production
✅ **Caching** - Images cached for 24 hours, HTML never cached (always fresh)
✅ **Redirects** - Single Page Application routing configured

## Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Madhuvan Greens - Ready for Netlify deployment"
git push origin main
```

### 2. Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select GitHub and authenticate
4. Choose your repository
5. Leave build settings as default (Netlify will use netlify.toml)
6. Click "Deploy site"

### 3. Custom Domain (Optional)
Once deployed, you can add a custom domain in Netlify's Site settings

## Technical Details

**Build Command**: `npm run build`  
**Publish Directory**: `dist/`  
**Node Version**: 18

### Image Caching Strategy
- **Assets** (`/assets/*`): 1 year cache - never changes (hashed by Vite)
- **Images** (`*.png`, `*.jpg`, `*.svg`): 24 hours cache
- **HTML Pages**: No cache - always fresh content

### Performance Features
- Gzip compression (automatic)
- Asset fingerprinting by Vite
- Optimized production build
- CDN distribution across Netlify's global network

## Live Site Performance
When deployed, your site will:
- Load in ~2-3 seconds (including images)
- Have images cached after first visit
- Automatically scale to handle traffic
- Get free HTTPS certificate
- Receive automatic updates when you push to GitHub

## Rollback
If anything goes wrong, Netlify keeps deployment history. You can roll back to any previous deployment from the Deploys tab.
