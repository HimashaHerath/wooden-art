import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
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
    seo
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
    seo
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

// API functions
export async function getProducts(): Promise<ProductWithImageUrls[]> {
  try {
    const products = await client.fetch<Product[]>(productsQuery)
    return products.map(processProductImages)
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getProductBySlug(slug: string): Promise<ProductWithImageUrls | null> {
  try {
    const product = await client.fetch<Product>(productBySlugQuery, { slug })
    return product ? processProductImages(product) : null
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function getProductSlugs(): Promise<string[]> {
  try {
    const slugs = await client.fetch<{ slug: string }[]>(productSlugsQuery)
    return slugs.map(item => item.slug)
  } catch (error) {
    console.error('Error fetching product slugs:', error)
    return []
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
        seo
      }
    `
    const products = await client.fetch<Product[]>(featuredQuery)
    return products.map(processProductImages)
  } catch (error) {
    console.error('Error fetching featured products:', error)
    return []
  }
}