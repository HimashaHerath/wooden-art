import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Public client for data fetching
export const publicClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  stega: {
    enabled: false,
  },
})

// Client for client-side operations (public, no token)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for client-side operations
  perspective: 'published',
  stega: {
    enabled: false,
  },
})

// Sanity fetch with caching and error handling
export const sanityFetch = async <T>(query: string, params: Record<string, unknown> = {}, options: { 
  revalidate?: number | false
  tags?: string[]
} = {}): Promise<T> => {
  try {
    const result = await publicClient.fetch<T>(query, params, {
      cache: options.revalidate === false ? 'no-store' : undefined,
      next: { 
        revalidate: options.revalidate || 3600, // 1 hour default
        tags: options.tags 
      },
    })
    return result
  } catch (error) {
    console.error('Sanity fetch failed:', error)
    throw error
  }
}
