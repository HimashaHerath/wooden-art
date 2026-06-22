import { PortableTextBlock } from '@portabletext/types'
import { type Reference } from 'sanity'

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

export type SupportedCurrency = 'LKR' | 'USD' | 'EUR' | 'GBP' | 'AUD'

export interface Price {
  amount: number
  currency: SupportedCurrency
}

/**
 * Normalizes price from either old format (plain number) or new format ({ amount, currency }).
 * Existing Sanity documents saved before the schema change will have price as a number.
 */
export function normalizePrice(price: Price | number | null | undefined): Price {
  if (!price) return { amount: 0, currency: 'LKR' }
  if (typeof price === 'number') return { amount: price, currency: 'LKR' }
  return price
}

export interface Product {
  _id: string
  _type: 'product'
  name: string
  slug: {
    current: string
  }
  description: string
  // price can be the old flat number (legacy) or new { amount, currency } object
  price: Price | number
  category: string
  featured_image: SanityImage
  gallery?: GalleryItem[]
  dimensions?: string
  material?: string
  available: boolean
  featured: boolean
  status: "in-stock" | "out-of-stock" | "made-to-order" | "coming-soon"
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
