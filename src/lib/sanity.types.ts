import { PortableTextBlock } from '@portabletext/types'
import { Reference } from '@sanity/types'

export interface SanityImage {
  _type: 'image'
  asset: Reference
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface GalleryItem {
  image: SanityImage
  alt: string
}

export interface Product {
  _id: string
  _type: 'product'
  name: string
  slug: {
    current: string
  }
  description: string
  price: number
  category: string
  featured_image: SanityImage
  gallery?: GalleryItem[]
  dimensions?: string
  material?: string
  available: boolean
  featured: boolean
  status: string
  content?: PortableTextBlock[]
  seo?: {
    title?: string
    description?: string
  }
}

export interface ProductWithImageUrls extends Omit<Product, 'featured_image' | 'gallery'> {
  featured_image: string
  gallery?: Array<{ image: string; alt: string }>
}