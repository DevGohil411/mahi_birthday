# Deployment Guide

This guide covers deploying your birthday website to various platforms.

## Prerequisites

- Project tested locally with `npm run dev`
- All photos added to `public/images/`
- `lib/data.ts` configured with your content
- Code committed to Git (for cloud deployment)

## Option 1: Vercel (Recommended) ⭐

### Benefits
- Zero-config deployment
- Automatic deployments on push
- Free tier available
- Excellent Next.js support

### Steps

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Deploy on Vercel**
   - Go to Vercel dashboard
   - Click "New Project"
   - Import your Git repository
   - Click "Deploy"

4. **Auto-deployment**
   - Every push to `main` automatically deploys
   - Preview deployments for pull requests

### Custom Domain (Optional)
1. In Vercel project settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## Option 2: Netlify

### Benefits
- Simple deployment
- Free tier
- Good build optimization

### Steps

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Connect Repository**
   - New site → Import existing project
   - Select your Git repository
   - Click "Connect"

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

---

## Option 3: GitHub Pages

### Benefits
- Free
- GitHub-integrated
- Simple setup

### Steps

1. **Update next.config.js**
   ```javascript
   const nextConfig = {
     images: { unoptimized: true },
     basePath: '/birthday-website',
     assetPrefix: '/birthday-website/',
   }
   module.exports = nextConfig
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy**
   - Push `out/` folder to `gh-pages` branch
   - Or use GitHub Actions workflow

---

## Option 4: Docker + Any Host

### Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build & Run Locally

```bash
docker build -t birthday-website .
docker run -p 3000:3000 birthday-website
```

### Deploy to Cloud

Push to any Docker-supporting platform:
- AWS ECS
- Google Cloud Run
- Azure Container Instances
- DigitalOcean App Platform

---

## Option 5: Traditional Hosting (Shared/VPS)

### Build Static Version

```bash
npm run build
# Copy .next folder to your server
```

### Install Node.js on Server

```bash
# On Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Deploy Files

```bash
scp -r .next/ package.json package-lock.json user@server:/home/user/birthday-website/
```

### Start Application

```bash
cd /home/user/birthday-website
npm install --production
npm start
```

### Use PM2 for Auto-restart

```bash
sudo npm install -g pm2
pm2 start npm --name "birthday" -- start
pm2 startup
pm2 save
```

---

## Environment Variables (Optional)

Create `.env.local` for sensitive data:

```bash
# Not needed for this project, but if you add backend later:
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   ```bash
   # Use ImageMagick or similar
   convert input.jpg -quality 85 -resize 1200x1200 output.jpg
   ```

2. **Test Build Locally**
   ```bash
   npm run build
   npm start
   # Test at http://localhost:3000
   ```

3. **Check Bundle Size**
   ```bash
   npm run build
   # Review output for warnings
   ```

---

## Monitoring After Deployment

### Vercel
- Automatic performance monitoring
- View in Vercel Analytics dashboard

### Netlify
- Build logs and deployment history
- Monitor in Netlify dashboard

### Self-hosted
- Use Google Analytics (add to layout.tsx)
- Monitor server logs

---

## Troubleshooting

### "Build failed"
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### "Images not loading"
- Verify `public/images/` files uploaded
- Check file paths in `lib/data.ts`
- Ensure image formats are supported

### "Site is slow"
- Compress images further
- Enable CDN caching (most platforms do this)
- Monitor with Lighthouse

### "Domain not working"
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Verify SSL certificate (auto-generated on most platforms)

---

## Maintenance

### Update Content

1. Edit `lib/data.ts`
2. Commit and push changes
3. Deployment automatically triggers (Vercel/Netlify)

### Update Code

1. Install latest packages: `npm update`
2. Test locally: `npm run dev`
3. Commit and push
4. Auto-deployment handles the rest

---

## Rollback

### Vercel
- Dashboard → Deployments → Select previous → Redeploy

### Netlify
- Dashboard → Deploys → Select previous → Publish

### Git
```bash
git revert <commit-hash>
git push
```

---

**Your site is live! 🎉 Share the link with the birthday person!**
