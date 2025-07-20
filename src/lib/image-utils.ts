import { urlFor } from '@/sanity/lib/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Generate a low-quality blur placeholder from Sanity image
export function generateBlurDataURL(imageRef: SanityImageSource): string {
  if (!imageRef) return '';
  
  try {
    // Generate a very small, low-quality version for blur placeholder
    const blurUrl = urlFor(imageRef)
      .width(20)
      .height(20)
      .blur(50)
      .quality(20)
      .format('jpg')
      .url();
    
    return blurUrl;
  } catch (error) {
    console.error('Error generating blur placeholder:', error);
    return '';
  }
}

// Static blur placeholder - consistent on server and client
export const BLUR_PLACEHOLDER = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

// Deprecated: Use BLUR_PLACEHOLDER constant instead
export function createBlurPlaceholder(): string {
  return BLUR_PLACEHOLDER;
}