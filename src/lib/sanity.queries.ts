import { groq } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Product, ProductWithImageUrls } from './sanity.types'

// GROQ queries
export const productsQuery = groq`
  *[_type == "product"] | order(featured desc, name asc) {
    _id,
    name,
    slug,
    description,
    price,
    category,
    featured_image,
    gallery,
    dimensions,
    material,
    available,
    featured,
    status,
    seo,
    brand,
    itemNumber,
    ean,
    color,
    structuredDimensions,
    netWeight,
    discount,
    technicalSpecs,
    manufacturerInfo
  }
`

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    price,
    category,
    featured_image,
    gallery,
    dimensions,
    material,
    available,
    featured,
    status,
    content,
    seo,
    brand,
    itemNumber,
    ean,
    color,
    structuredDimensions,
    netWeight,
    discount,
    technicalSpecs,
    manufacturerInfo
  }
`

export const productSlugsQuery = groq`
  *[_type == "product" && defined(slug.current)] {
    "slug": slug.current
  }
`

// Helper function to convert Sanity image to URL
function processProductImages(product: Product): ProductWithImageUrls {
  return {
    ...product,
    featured_image: urlFor(product.featured_image)?.url() ?? '/placeholder-image.jpg',
    gallery: product.gallery?.map(item => ({
      image: urlFor(item.image)?.url() ?? '/placeholder-image.jpg',
      alt: item.alt
    }))
  }
}

// Fallback data for when Sanity is unavailable
const fallbackProducts: ProductWithImageUrls[] = [
  {
    _id: 'fallback-1',
    _type: 'product',
    name: 'Handcrafted Wooden Bowl',
    slug: { current: 'handcrafted-wooden-bowl' },
    description: 'Beautiful handcrafted wooden bowl made from premium Sri Lankan wood.',
    price: 45,
    category: 'functional',
    featured_image: '/placeholder-image.jpg',
    gallery: [],
    dimensions: '8" diameter x 3" height',
    material: 'Teak wood',
    available: true,
    featured: true,
    status: 'in-stock',
    brand: 'Wooden Art Gallery',
    itemNumber: 'WA-001',
    color: 'Natural Teak',
    structuredDimensions: {
      length: 20,
      width: 20,
      height: 8
    },
    netWeight: 0.5
  },
  {
    _id: 'fallback-2',
    _type: 'product',
    name: 'Decorative Wall Art',
    slug: { current: 'decorative-wall-art' },
    description: 'Intricate wooden wall art piece showcasing traditional Sri Lankan craftsmanship.',
    price: 120,
    category: 'decorative',
    featured_image: '/placeholder-image.jpg',
    gallery: [],
    dimensions: '24" x 16" x 2"',
    material: 'Mahogany',
    available: true,
    featured: false,
    status: 'in-stock',
    brand: 'Wooden Art Gallery',
    itemNumber: 'WA-002',
    color: 'Rich Mahogany',
    structuredDimensions: {
      length: 61,
      width: 41,
      height: 5
    },
    netWeight: 2.1
  }
]

// API functions
export async function getProducts(): Promise<ProductWithImageUrls[]> {
  try {
    const products = await sanityFetch<Product[]>(productsQuery, {}, { 
      revalidate: 300, // 5 minutes
      tags: ['products'] 
    })
    return products.map(processProductImages)
  } catch (error) {
    console.error('Error fetching products:', error)
    return fallbackProducts
  }
}

export async function getProductBySlug(slug: string): Promise<ProductWithImageUrls | null> {
  try {
    const product = await sanityFetch<Product>(productBySlugQuery, { slug }, {
      revalidate: 300, // 5 minutes
      tags: ['products', `product-${slug}`]
    })
    return product ? processProductImages(product) : null
  } catch (error) {
    console.error('Error fetching product:', error)
    // Check fallback data for the slug
    const fallbackProduct = fallbackProducts.find(p => p.slug.current === slug)
    return fallbackProduct || null
  }
}

export async function getProductSlugs(): Promise<string[]> {
  try {
    const slugs = await sanityFetch<{ slug: string }[]>(productSlugsQuery, {}, {
      revalidate: 3600, // 1 hour
      tags: ['products']
    })
    return slugs.map(item => item.slug)
  } catch (error) {
    console.error('Error fetching product slugs:', error)
    // Return fallback slugs
    return fallbackProducts.map(p => p.slug.current)
  }
}

export async function getFeaturedProducts(): Promise<ProductWithImageUrls[]> {
  try {
    const featuredQuery = groq`
      *[_type == "product" && featured == true] | order(name asc) {
        _id,
        name,
        slug,
        description,
        price,
        category,
        featured_image,
        gallery,
        dimensions,
        material,
        available,
        featured,
        status,
        seo,
        brand,
        itemNumber,
        ean,
        color,
        structuredDimensions,
        netWeight,
        discount,
        technicalSpecs,
        manufacturerInfo
      }
    `
    const products = await sanityFetch<Product[]>(featuredQuery, {}, {
      revalidate: 300, // 5 minutes
      tags: ['products', 'featured']
    })
    return products.map(processProductImages)
  } catch (error) {
    console.error('Error fetching featured products:', error)
    // Return featured products from fallback data
    return fallbackProducts.filter(p => p.featured)
  }
}