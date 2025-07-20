import { urlFor } from '@/sanity/lib/image'

// Generate a low-quality blur placeholder from Sanity image
export function generateBlurDataURL(imageRef: any): string {
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

// Convert image URL to base64 blur data URL
export async function getBlurDataURL(imageUrl: string): Promise<string> {
  try {
    // For production, you might want to pre-generate these at build time
    // This is a simplified version that creates a basic blur placeholder
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 8;
    canvas.height = 8;
    
    if (ctx) {
      // Create a simple gradient placeholder
      const gradient = ctx.createLinearGradient(0, 0, 8, 8);
      gradient.addColorStop(0, '#f5f5f4');
      gradient.addColorStop(1, '#e7e5e4');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 8, 8);
    }
    
    return canvas.toDataURL();
  } catch {
    // Fallback blur placeholder
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';
  }
}

// Static blur placeholder - consistent on server and client
export const BLUR_PLACEHOLDER = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

// Deprecated: Use BLUR_PLACEHOLDER constant instead
export function createBlurPlaceholder(width = 8, height = 8): string {
  return BLUR_PLACEHOLDER;
}