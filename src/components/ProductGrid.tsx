'use client'

import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select'
import { Grid, List, SlidersHorizontal, ArrowUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'

import { ProductWithImageUrls } from '@/lib/sanity.types'

interface ProductGridProps {
  products: ProductWithImageUrls[]
  categories: string[]
}

type SortOption = 'featured' | 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc' | 'newest'
type ViewMode = 'grid' | 'list'

export default function ProductGrid({ products, categories }: ProductGridProps) {
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    // Filter products
    let filtered = filter === 'all' 
      ? products 
      : products.filter((p) => p.category === filter)

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          // Featured first, then by name
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return a.name.localeCompare(b.name)
        
        case 'name-asc':
          return a.name.localeCompare(b.name)
        
        case 'name-desc':
          return b.name.localeCompare(a.name)
        
        case 'price-asc':
          return a.price - b.price
        
        case 'price-desc':
          return b.price - a.price
        
        case 'newest':
          // Since we don't have dates, use _id as proxy
          return b._id.localeCompare(a._id)
        
        default:
          return 0
      }
    })

    return filtered
  }, [products, filter, sortBy])

  const activeFiltersCount = filter !== 'all' ? 1 : 0

  return (
    <div className="space-y-6">
      {/* Filter & Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="border-amber-200 text-amber-700"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2 text-xs">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>

          <div className="text-sm text-amber-600">
            {filteredAndSortedProducts.length} of {products.length} products
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Sort Options */}
          <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
            <SelectTrigger className="w-40 border-amber-200">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured First</SelectItem>
              <SelectItem value="name-asc">Name A-Z</SelectItem>
              <SelectItem value="name-desc">Name Z-A</SelectItem>
              <SelectItem value="price-asc">Price Low to High</SelectItem>
              <SelectItem value="price-desc">Price High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>

          <Separator orientation="vertical" className="h-6" />

          {/* View Mode Toggle */}
          <div className="flex bg-amber-50 rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={cn(
                "px-3",
                viewMode === 'grid' && "bg-amber-600 hover:bg-amber-700 text-white"
              )}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={cn(
                "px-3",
                viewMode === 'list' && "bg-amber-600 hover:bg-amber-700 text-white"
              )}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Expanded Filters */}
      {showFilters && (
        <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-200">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-amber-900 mb-2 block">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('all')}
                  className={cn(
                    filter === 'all' && "bg-amber-600 hover:bg-amber-700 text-white"
                  )}
                >
                  All ({products.length})
                </Button>
                {categories.map((category) => {
                  const count = products.filter((p) => p.category === category).length
                  return (
                    <Button
                      key={category}
                      variant={filter === category ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilter(category)}
                      className={cn(
                        "border-amber-200 text-amber-700",
                        filter === category && "bg-amber-600 hover:bg-amber-700 text-white"
                      )}
                    >
                      {category} ({count})
                    </Button>
                  )
                })}
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="flex items-center justify-between pt-2 border-t border-amber-200">
                <div className="text-sm text-amber-600">
                  {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} applied
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFilter('all')}
                  className="text-amber-700 hover:text-amber-900"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Results */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className={cn(
          viewMode === 'grid'
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "grid grid-cols-1 lg:grid-cols-2 gap-4"
        )}>
          {filteredAndSortedProducts.map((product) => (
            <ProductCard 
              key={product._id} 
              product={product}
              className={viewMode === 'list' ? "md:flex md:flex-row md:max-w-none" : ""}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-amber-900 mb-2">No products found</h3>
          <p className="text-amber-600 mb-4">
            Try adjusting your filters or browse all products.
          </p>
          <Button
            variant="outline"
            onClick={() => setFilter('all')}
            className="border-amber-300 text-amber-700"
          >
            Show All Products
          </Button>
        </div>
      )}
    </div>
  )
}
