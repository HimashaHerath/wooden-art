"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { ProductWithImageUrls } from "@/lib/sanity.types";

interface ProductsPageClientProps {
  products: ProductWithImageUrls[];
  categories: string[];
}

export default function ProductsPageClient({ products, categories }: ProductsPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter products based on active category
  const filteredProducts = activeCategory 
    ? products.filter(product => product.category === activeCategory)
    : products;

  return (
    <div className="min-h-screen bg-background">
      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Products Grid */}
      <div className="gutter-desktop py-8 md:py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product._id} 
                product={product} 
                priority={index < 4} // Prioritize first 4 products (above the fold)
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🌳</div>
            <h3 className="font-serif text-xl text-foreground mb-2">No products found</h3>
            <p className="font-sans text-muted-foreground">
              {activeCategory 
                ? `No products available in the "${activeCategory}" category.`
                : "Our collection is being curated. Please check back soon."
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}