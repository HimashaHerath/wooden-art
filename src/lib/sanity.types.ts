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

export interface StructuredDimensions {
  length?: number
  width?: number
  height?: number
}

export interface Discount {
  percentage?: number
  description?: string
}

export interface TechnicalSpecs {
  lightBulbIncluded?: boolean
  numberOfBulbs?: number
  baseType?: string
  wattage?: number
  integratedLEDs?: boolean
  dimmable?: boolean
  ipCode?: string
}

export interface ManufacturerInfo {
  name?: string
  country?: string
  notes?: string
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
  // New fields
  brand?: string
  itemNumber?: string
  ean?: string
  color?: string
  structuredDimensions?: StructuredDimensions
  netWeight?: number
  discount?: Discount
  technicalSpecs?: TechnicalSpecs
  manufacturerInfo?: ManufacturerInfo
}

export interface ProductWithImageUrls extends Omit<Product, 'featured_image' | 'gallery'> {
  featured_image: string
  gallery?: Array<{ image: string; alt: string }>
}