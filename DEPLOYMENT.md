# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Fully responsive portfolio"
   git branch -M main
   git remote add origin https://github.com/satvik-sharma-05/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Deploy to Other Platforms

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### GitHub Pages (Static Export)

1. Update `next.config.mjs`:
   ```js
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Deploy the 'out' folder to GitHub Pages
   ```

## Environment Setup

### Required Node Version
- Node.js 18.x or higher
- npm 9.x or higher

### Build Command
```bash
npm run build
```

### Start Command
```bash
npm start
```

## Post-Deployment Checklist

- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all images load correctly
- [ ] Check certificate downloads work
- [ ] Test contact links (email, GitHub, LinkedIn)
- [ ] Verify animations work smoothly
- [ ] Test keyboard navigation
- [ ] Check accessibility with screen readers

## Performance Optimization

### Already Implemented
- ✅ Image optimization with Next.js Image
- ✅ Lazy loading components
- ✅ Code splitting
- ✅ Minified CSS and JS
- ✅ Responsive images
- ✅ Reduced motion support

### Monitoring
- Use Vercel Analytics for performance monitoring
- Check Lighthouse scores regularly
- Monitor Core Web Vitals

## Custom Domain Setup

### On Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for DNS propagation (up to 48 hours)

### DNS Configuration
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Troubleshooting

### Build Fails
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node version: `node -v`

### Images Not Loading
- Verify images are in `public/` folder
- Check image paths start with `/`
- Ensure Next.js Image component is used

### Animations Not Working
- Check browser compatibility
- Verify Framer Motion is installed
- Test with reduced motion disabled

## Support

For issues or questions:
- Email: satviksharma0510@gmail.com
- GitHub Issues: [Create an issue](https://github.com/satvik-sharma-05/portfolio/issues)

---

Last updated: 2026
