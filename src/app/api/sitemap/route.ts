import { NextResponse } from 'next/server';
import { getProductSlugs } from '@/lib/sanity.queries';

export async function GET() {
  try {
    const productSlugs = await getProductSlugs();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wooden-art-gallery.vercel.app';
    
    const staticPages = [
      {
        url: baseUrl,
        lastModified: new Date().toISOString().split('T')[0],
        changeFreq: 'weekly',
        priority: '1.0'
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFreq: 'monthly',
        priority: '0.8'
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFreq: 'monthly',
        priority: '0.8'
      }
    ];

    const productPages = productSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFreq: 'weekly',
      priority: '0.9'
    }));

    const allPages = [...staticPages, ...productPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200' // 24 hours cache, 12 hours stale
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}