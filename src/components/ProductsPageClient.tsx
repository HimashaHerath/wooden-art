"use client";
import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { ProductWithImageUrls, normalizePrice } from "@/lib/sanity.types";

interface ProductsPageClientProps {
  products: ProductWithImageUrls[];
  categories: string[];
}

type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc";

const SORT_LABELS: Record<SortOption, string> = {
  featured: "Featured",
  "price-asc": "Price: Low → High",
  "price-desc": "Price: High → Low",
  "name-asc": "Name: A → Z",
};

export default function ProductsPageClient({ products, categories }: ProductsPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const filteredAndSorted = useMemo(() => {
    let result = activeCategory
      ? products.filter((p) => p.category === activeCategory)
      : [...products];

    switch (sortBy) {
      case "featured":
        result = result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "price-asc":
        result = result.sort((a, b) => normalizePrice(a.price).amount - normalizePrice(b.price).amount);
        break;
      case "price-desc":
        result = result.sort((a, b) => normalizePrice(b.price).amount - normalizePrice(a.price).amount);
        break;
      case "name-asc":
        result = result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    return result;
  }, [products, activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Products Grid */}
      <div className="gutter-mobile md:gutter-desktop py-8 md:py-12 max-w-screen-2xl mx-auto">
        {/* Sort Bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-sans text-sm text-muted-foreground">
            {filteredAndSorted.length} {filteredAndSorted.length === 1 ? "product" : "products"}
            {activeCategory ? ` in ${activeCategory.replace(/-/g, " ")}` : ""}
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="font-sans text-xs text-muted-foreground uppercase tracking-wider hidden sm:block">
              Sort by
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="font-sans text-sm text-foreground bg-background border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer transition-polene hover:border-accent"
            >
              {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
                <option key={key} value={key}>
                  {SORT_LABELS[key]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredAndSorted.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {filteredAndSorted.map((product, index) => (
              <ProductCard
                key={product._id}
                product={product}
                priority={index < 4}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🌳</div>
            <h3 className="font-serif text-xl text-foreground mb-2">No products found</h3>
            <p className="font-sans text-muted-foreground">
              {activeCategory
                ? `No products available in this category.`
                : "Our collection is being curated. Please check back soon."
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}