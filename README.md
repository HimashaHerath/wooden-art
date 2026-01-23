# 🌳 Wooden Art - Handcrafted Wood E-commerce Site

A beautiful, modern e-commerce website for showcasing and managing handcrafted wooden art pieces. Built with Next.js and powered by Sanity CMS for easy content management.

## ✨ Features

### 🏪 **Customer Experience**
- **Beautiful Product Showcase**: Grid and individual product views
- **Category Filtering**: Easy browsing by product type
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Fast Loading**: Optimized images and static generation
- **SEO Optimized**: Search engine friendly structure

### 🎛️ **Owner/Admin Experience**
- **Visual Content Management**: Easy-to-use Sanity Studio at `/studio`
- **No Technical Skills Required**: Drag-and-drop interface
- **Rich Product Management**: Images, descriptions, pricing, categories
- **Real-time Updates**: Changes go live immediately
- **Secure Access**: Invitation-only admin access

## 🛠️ Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | Next.js 15 + App Router | React framework with SSG |
| **Styling** | Tailwind CSS + shadcn/ui | Beautiful, responsive design |
| **CMS** | Sanity Studio | Visual content management |
| **Authentication** | Sanity Auth | Secure admin access |
| **Images** | Sanity CDN | Optimized image delivery |
| **Hosting** | Vercel | Fast, global deployment |
| **Types** | TypeScript | Type-safe development |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm
- Sanity account (free)

### 1. Clone & Install
```bash
git clone <repository-url>
cd wooden-art
pnpm install
```

### 2. Environment Setup
Create `.env.local`:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
```

### 3. Run Development
```bash
pnpm dev
```

Visit:
- **Website**: [http://localhost:3000](http://localhost:3000)
- **Studio**: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📊 Content Management

### 🎨 **For Business Owners**

#### Accessing the Admin Panel
1. Go to `yoursite.com/studio`
2. Login with your invited email/password
3. Start managing products!

#### Managing Products
- **Add Product**: Click "Product" → "Create" → Fill form → Publish
- **Edit Product**: Click existing product → Make changes → Publish  
- **Upload Images**: Drag & drop into image fields
- **Set Categories**: Choose from predefined options
- **Feature Products**: Toggle "Featured" to show on homepage

#### Product Fields Available:
- Name & SEO-friendly slug
- Short & detailed descriptions  
- Price & category
- Featured image & gallery
- Dimensions & materials
- Availability status
- Rich text content with formatting

### 👩‍💻 **For Developers**

#### Content Schema
Products are defined in `/src/sanity/schemaTypes/product.ts` with:
- Full TypeScript types
- Validation rules
- Preview configurations
- Rich text support

#### Querying Data
```typescript
import { getProducts, getProductBySlug } from '@/lib/sanity.queries'

// Get all products
const products = await getProducts()

// Get single product
const product = await getProductBySlug('oak-bowl')
```

#### Image Handling
```typescript
import { urlFor } from '@/sanity/lib/image'

// Generate optimized image URLs
const imageUrl = urlFor(product.featured_image)
  .width(800)
  .height(600)
  .url()
```

## 🏗️ Project Structure

```
wooden-art/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx             # Homepage
│   │   ├── products/            # Product pages
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   └── studio/              # Sanity Studio
│   ├── components/              # React components
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── ProductCard.tsx      # Product display
│   │   ├── ProductGrid.tsx      # Product listing
│   │   └── PortableText.tsx     # Rich text renderer
│   ├── lib/
│   │   ├── sanity.queries.ts    # GROQ queries
│   │   ├── sanity.types.ts      # TypeScript types
│   │   └── utils.ts             # Utilities
│   └── sanity/                  # Sanity configuration
│       ├── lib/                 # Client & utilities
│       ├── schemaTypes/         # Content schemas
│       │   └── product.ts       # Product schema
│       └── structure.ts         # Studio structure
├── public/                      # Static assets
├── sanity.config.ts            # Sanity Studio config
└── next.config.js              # Next.js config
```

## 📝 Available Scripts

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Sanity
pnpm exec sanity deploy    # Deploy Studio to Sanity hosting
pnpm exec sanity cors add  # Add CORS origins
```

## 🌐 Deployment

### 1. **Vercel (Recommended)**
```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard:
# NEXT_PUBLIC_SANITY_PROJECT_ID
# NEXT_PUBLIC_SANITY_DATASET
```

### 2. **Automatic Deployments**
Set up webhooks in Sanity dashboard:
1. Go to Sanity Manage → API → Webhooks
2. Add your Vercel deploy hook URL
3. Trigger on document changes
4. Content updates will auto-deploy site

### 3. **Custom Domain**
1. Add domain in Vercel dashboard
2. Update DNS settings
3. SSL certificate auto-generated

## 🔐 Security & Access

### Admin Access
- **Invitation-only**: Users must be invited via Sanity dashboard
- **Secure Authentication**: Handled by Sanity's infrastructure  
- **Project Isolation**: Each project has separate access controls
- **Session Management**: Automatic timeout and refresh

### Content Security
- **Version Control**: All changes tracked in Sanity
- **Rollback Capability**: Previous versions accessible
- **API Security**: Read-only public API, write access requires auth
- **CORS Protection**: Domain-restricted access

## 💰 Costs

| Service | Cost | Purpose |
|---------|------|---------|
| **Domain** | $10-15/year | Custom domain name |
| **Vercel** | FREE | Website hosting & CDN |
| **Sanity** | FREE | CMS (10k docs, 1M API calls, 100GB) |
| **SSL** | FREE | Automatic HTTPS |
| **Total** | **~$1/month** | Just domain cost! |

## 🔧 Customization

### Adding New Fields
1. Update `/src/sanity/schemaTypes/product.ts`
2. Add field to TypeScript types
3. Update queries and components
4. Deploy Studio: `pnpm exec sanity deploy`

### Styling Changes
- Edit Tailwind classes in components
- Update design tokens in `tailwind.config.js`
- Modify color scheme in CSS variables

### Adding New Content Types
1. Create new schema in `/src/sanity/schemaTypes/`
2. Add to `/src/sanity/schemaTypes/index.ts`
3. Create queries in `/src/lib/sanity.queries.ts`
4. Build UI components

## 📚 Documentation

- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Complete project overview
- **[OWNER_GUIDE.md](./OWNER_GUIDE.md)** - Non-technical user guide
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Deployment instructions

## 🆘 Support

### Resources
- **[Sanity Documentation](https://www.sanity.io/docs)**
- **[Next.js Documentation](https://nextjs.org/docs)**
- **[Tailwind CSS](https://tailwindcss.com/docs)**
- **[shadcn/ui Components](https://ui.shadcn.com/)**

### Getting Help
- **Sanity Support**: [sanity.io/support](https://www.sanity.io/support)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for artisans who create beautiful things**
