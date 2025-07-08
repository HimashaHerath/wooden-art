# 🚀 Deployment Guide - Wooden Art Website

## What You Need to Do (Step by Step)

### Phase 1: GitHub Repository Setup

1. **Create GitHub Repository**
   - Go to github.com and create a new repository
   - Name it: `wooden-art` (or your preferred name)
   - Make it **Public** (required for free Netlify Identity)
   - Don't initialize with README (we have files already)

2. **Push Code to GitHub**
   ```bash
   # In your project directory
   git init
   git add .
   git commit -m "Initial wooden art website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/wooden-art.git
   git push -u origin main
   ```

### Phase 2: Netlify Setup (For Authentication)

1. **Create Netlify Account**
   - Go to netlify.com
   - Sign up with GitHub account (easiest)

2. **Deploy to Netlify (Temporarily)**
   - Click "New site from Git"
   - Choose GitHub
   - Select your `wooden-art` repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

3. **Enable Identity & Git Gateway**
   - In Netlify dashboard → Settings → Identity
   - Click "Enable Identity"
   - Under Registration preferences → Select "Invite only" 
   - Under External providers → Enable GitHub
   - Scroll to Services → Git Gateway → Enable Git Gateway

4. **Invite Yourself**
   - Identity tab → "Invite users"
   - Enter the owner's email address
   - They'll receive an email to set up their account

### Phase 3: Vercel Deployment (Main Site)

1. **Create Vercel Account**
   - Go to vercel.com
   - Sign up with GitHub account

2. **Deploy to Vercel**
   - Click "New Project"
   - Import your GitHub repository
   - Keep all default settings
   - Click "Deploy"

3. **Configure Environment Variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Add these variables:
     ```
     NETLIFY_SITE_URL=https://your-netlify-site.netlify.app
     ```

### Phase 4: Domain Configuration

1. **Purchase Domain** (if needed)
   - Recommended: Namecheap, Google Domains, or Cloudflare

2. **Add Domain to Vercel**
   - Vercel dashboard → Settings → Domains
   - Add your domain: `yourdomain.com`
   - Follow DNS configuration instructions
   - Add both `yourdomain.com` and `www.yourdomain.com`

3. **Update Netlify Identity Settings**
   - Netlify dashboard → Settings → Identity
   - Site details → Change site URL to your custom domain
   - Update Git Gateway settings

### Phase 5: Test Complete Workflow

1. **Test Admin Access**
   - Go to `yourdomain.com/admin`
   - Login with the invited account
   - Try adding a test product

2. **Test Image Upload**
   - Upload a test image in admin
   - Verify it appears in GitHub repo under `/public/images/products/`

3. **Test Auto-Deploy**
   - Save changes in admin
   - Check GitHub for new commit
   - Verify Vercel rebuilds site automatically
   - Confirm changes appear on live site (1-2 minutes)

## Files You Need to Update Before Deployment

### 1. Update Decap CMS Config
Edit `/public/admin/config.yml`:
```yaml
backend:
  name: git-gateway
  branch: main

# Remove this line for production:
# local_backend: true

# Update these with your actual repo details:
# backend:
#   name: github
#   repo: YOUR_USERNAME/wooden-art
```

### 2. Update Package.json for Static Export
Add to `/package.json`:
```json
{
  "scripts": {
    "build": "next build && next export"
  }
}
```

### 3. Configure Next.js for Static Export
Create/update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

## What Happens After Deployment

### For the Owner:
1. **Receives email invitation** from Netlify Identity
2. **Sets up account** with email/password
3. **Accesses admin** at yourdomain.com/admin
4. **Manages products** without any technical knowledge

### Automatic Workflow:
1. Owner edits content in admin
2. Decap CMS commits changes to GitHub
3. Vercel detects GitHub changes
4. Site rebuilds automatically
5. Changes go live in 30-60 seconds

## Important URLs to Share with Owner

- **Website**: https://yourdomain.com
- **Admin Dashboard**: https://yourdomain.com/admin  
- **Owner's Guide**: Share the OWNER_GUIDE.md file

## Emergency Contacts

- **Vercel Support**: vercel.com/support
- **Netlify Support**: netlify.com/support
- **GitHub Support**: support.github.com

## Monthly Costs After Deployment

- **Domain**: ~$10-15/year
- **Vercel**: Free (hobby plan)
- **Netlify**: Free (starter plan)
- **GitHub**: Free (public repo)
- **Total**: Just the domain cost!

## Backup Strategy

- **Content**: Automatically backed up in GitHub
- **Images**: Stored in GitHub repository
- **Code**: Version controlled in GitHub
- **Database**: No database needed!

---

**Ready to deploy! Follow these steps and you'll have a fully functional, zero-maintenance e-commerce site.** 🚀