# 🚀 Deployment Guide - Wooden Art Website (Sanity CMS)

## What You Need to Do (Step by Step)

### Phase 1: Sanity Project Setup

1. **Sanity Project Already Created**
   - ✅ Project ID: `hnrsjack`
   - ✅ Dataset: `production`
   - ✅ Studio configured at `/studio`
   - ✅ Schema definitions ready

2. **Environment Variables**
   - ✅ `.env.local` already contains:
     ```bash
     NEXT_PUBLIC_SANITY_PROJECT_ID="hnrsjack"
     NEXT_PUBLIC_SANITY_DATASET="production"
     ```

### Phase 2: GitHub Repository Setup

1. **Create GitHub Repository**
   - Go to github.com and create a new repository
   - Name it: `wooden-art` (or your preferred name)
   - Can be **Public** or **Private** (your choice)
   - Don't initialize with README (we have files already)

2. **Push Code to GitHub**
   ```bash
   # In your project directory
   git init
   git add .
   git commit -m "Initial wooden art website with Sanity CMS"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/wooden-art.git
   git push -u origin main
   ```

### Phase 3: Vercel Deployment

1. **Create Vercel Account**
   - Go to vercel.com
   - Sign up with GitHub account (recommended)

2. **Deploy to Vercel**
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings:
     - **Framework Preset**: Next.js
     - **Root Directory**: `./` (leave default)
     - **Build Command**: `npm run build` (leave default)
     - **Output Directory**: `.next` (leave default)

3. **Add Environment Variables**
   - In Vercel project → Settings → Environment Variables
   - Add these **Production** variables:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=hnrsjack
     NEXT_PUBLIC_SANITY_DATASET=production
     ```
   - Click "Deploy"

### Phase 4: Domain Configuration (Optional)

1. **Purchase Domain** (if needed)
   - Recommended: Namecheap, Google Domains, or Cloudflare

2. **Add Domain to Vercel**
   - Vercel dashboard → Settings → Domains
   - Add your domain: `yourdomain.com`
   - Add both `yourdomain.com` and `www.yourdomain.com`
   - Follow DNS configuration instructions provided by Vercel

3. **Update CORS Settings in Sanity**
   - Go to [Sanity Manage](https://www.sanity.io/manage)
   - Select your project (`hnrsjack`)
   - Go to API → CORS Origins
   - Add your production domain: `https://yourdomain.com`
   - Also add: `https://www.yourdomain.com`

### Phase 5: Content Management Setup

1. **Access Sanity Management Dashboard**
   - Go to [sanity.io/manage](https://www.sanity.io/manage)
   - Select project: `wooden-art-cms` (hnrsjack)

2. **Invite the Business Owner**
   - Go to Project Settings → Members
   - Click "Invite member"
   - Enter owner's email address
   - Set role to "Administrator" or "Editor"
   - Owner will receive email invitation

3. **Configure Webhooks (Auto-Deployment)**
   - In Sanity dashboard → API → Webhooks
   - Click "Create webhook"
   - **Name**: "Vercel Deploy Hook"
   - **URL**: Get from Vercel → Settings → Git → Deploy Hooks → Create Hook
   - **Trigger on**: Document changes
   - **Dataset**: production
   - **Filter**: Leave empty (all documents)
   - Save webhook

### Phase 6: Test Complete Workflow

1. **Test Studio Access**
   - Go to `yourdomain.com/studio` (or your Vercel URL + `/studio`)
   - Login with your Sanity account
   - Verify you can see the product creation interface

2. **Test Product Creation**
   - Create a test product in Studio
   - Add name, description, price, category
   - Upload a test image
   - Click "Publish"
   - Verify it appears instantly on your website

3. **Test Auto-Deployment** (if webhook configured)
   - Make changes in Studio
   - Verify webhook triggers in Sanity dashboard
   - Check Vercel deployments tab for new deployment
   - Confirm optimized site rebuilds in background

## Key URLs After Deployment

### For You (Developer):
- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Sanity Project**: [sanity.io/manage](https://www.sanity.io/manage)
- **GitHub Repository**: `github.com/USERNAME/wooden-art`

### For the Owner:
- **Website**: `https://yourdomain.com`
- **Content Studio**: `https://yourdomain.com/studio`
- **Sanity Dashboard**: [sanity.io/manage](https://www.sanity.io/manage) (project settings only)

## Environment Variables Reference

### Required for Production:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="hnrsjack"
NEXT_PUBLIC_SANITY_DATASET="production"
```

### Optional for Development:
```bash
# For local development only
SANITY_API_READ_TOKEN="your-read-token"  # Only if you need private content
```

## Content Management Workflow

### For the Owner:
1. **Access Studio**: Go to yourdomain.com/studio
2. **Login**: Use Sanity account (from email invitation)
3. **Create Content**: Click "Product" → "Create"
4. **Publish**: Click "Publish" → Changes appear instantly
5. **Manage**: Edit, delete, or feature products as needed

### Automatic Process:
1. Owner publishes content in Studio
2. Website fetches new content immediately (real-time)
3. Webhook triggers background rebuild (optional, for optimization)
4. Site remains fast and SEO-friendly

## Security & Access Control

### Owner Access:
- **Invitation-only**: Owner must be invited via Sanity dashboard
- **Secure Authentication**: Managed by Sanity's enterprise infrastructure
- **Project Isolation**: Cannot access other Sanity projects
- **Role-Based**: Can be set to Administrator, Editor, or Viewer

### Content Security:
- **API Tokens**: Read-only public API for website
- **Write Access**: Requires authentication through Studio
- **Version Control**: All changes tracked in Sanity
- **Backup**: Content automatically backed up by Sanity

## Cost Breakdown After Deployment

| Service | Plan | Cost | Purpose |
|---------|------|------|---------|
| **Domain** | - | $10-15/year | Custom URL |
| **Vercel** | Hobby | FREE | Website hosting & CDN |
| **Sanity** | Free | FREE | CMS (10k docs, 1M API calls, 100GB) |
| **GitHub** | Public/Private | FREE | Code repository |
| **SSL Certificate** | Auto | FREE | HTTPS security |
| **Total** | | **~$1/month** | Just domain cost! |

### Sanity Free Tier Limits:
- **Documents**: 10,000 (way more than needed)
- **API Calls**: 1,000,000/month
- **Bandwidth**: 100GB/month
- **Team Members**: 20 users

## Scaling & Growth

### When You Might Need Paid Plans:

**Sanity Growth Plan ($99/month):**
- 100k+ documents
- 5M+ API calls/month
- Advanced collaboration features
- Only needed for large-scale operations

**Vercel Pro ($20/month):**
- Custom analytics
- Advanced deployment features
- Only needed for enterprise features

## Backup & Recovery Strategy

### Automatic Backups:
- **Content**: Sanity maintains complete version history
- **Images**: Stored redundantly in Sanity CDN
- **Code**: Version controlled in GitHub
- **Deployments**: Vercel keeps deployment history

### Manual Recovery:
- **Content**: Use Sanity's document history feature
- **Code**: Git rollback to previous commits
- **Site**: Redeploy previous version in Vercel

## Maintenance Requirements

### Zero Maintenance Needed For:
- ✅ Server management
- ✅ Database updates
- ✅ Security patches
- ✅ Content backups
- ✅ Image optimization
- ✅ CDN configuration

### Occasional Tasks (1-2x per year):
- 📝 Update dependencies (`npm update`)
- 📝 Review Sanity usage (if approaching limits)
- 📝 Renew domain registration

## Troubleshooting

### Common Issues:

**"Studio won't load"**
- Check CORS settings in Sanity dashboard
- Verify environment variables in Vercel
- Check browser console for errors

**"Images not uploading"**
- Verify project ID is correct
- Check Sanity project permissions
- Test with smaller image files

**"Changes not appearing"**
- Content should appear instantly
- Check if using correct dataset (production)
- Verify Sanity client configuration

**"Webhook not triggering"**
- Check webhook URL in Sanity dashboard
- Verify Vercel deploy hook is active
- Test webhook manually

## Support Resources

### Documentation:
- **Sanity Docs**: [sanity.io/docs](https://www.sanity.io/docs)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

### Emergency Contacts:
- **Sanity Support**: [sanity.io/support](https://www.sanity.io/support)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **GitHub Support**: [support.github.com](https://support.github.com)

---

## 🎉 Deployment Checklist

- [ ] **Phase 1**: Sanity project configured ✅
- [ ] **Phase 2**: Code pushed to GitHub
- [ ] **Phase 3**: Deployed to Vercel with environment variables
- [ ] **Phase 4**: Custom domain configured (optional)
- [ ] **Phase 5**: Owner invited to Sanity project
- [ ] **Phase 6**: End-to-end workflow tested
- [ ] **Final**: Owner trained on Studio usage

**Ready to launch! You now have a professional, scalable, zero-maintenance e-commerce solution.** 🚀

### What the Owner Gets:
- Beautiful, fast website
- Professional content management
- Instant content updates
- Zero technical complexity
- Enterprise-grade security
- Costs less than $15/year

### What You Get:
- Zero maintenance obligations
- Modern, scalable architecture
- Happy, self-sufficient client
- Professional development experience
- Impressive portfolio piece