'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select'

interface Product {
  _sys: { filename: string }
  name: string
  description: string
  price: number
  category: string
  featured_image: string
  material: string
  available: boolean
  featured: boolean
  status: string
}

export default function ProductGrid({
  products,
  categories,
}: {
  products: Product[]
  categories: string[]
}) {
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'all'
      ? products
      : products.filter((p) => p.category === filter)

  return (
    <div>
      <div className="flex justify-end mb-6">
        <Select defaultValue="all" onValueChange={setFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Products ({products.length})</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category} ({products.filter((p) => p.category === category).length})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product._sys.filename} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-amber-600">No products found.</p>
      )}
    </div>
  )
}
