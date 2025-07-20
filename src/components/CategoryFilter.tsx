"use client";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  const allCategories = ['All', ...categories];

  return (
    <div className="border-b border-border bg-background">
      <div className="gutter-desktop">
        <div className="flex overflow-x-auto scrollbar-hide py-4 space-x-8">
          {allCategories.map((category) => {
            const isActive = (category === 'All' && !activeCategory) || 
                           (category !== 'All' && activeCategory === category);
            
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category === 'All' ? null : category)}
                className={cn(
                  "relative font-sans text-sm uppercase tracking-wider whitespace-nowrap transition-polene touch-target flex items-center justify-center min-w-max",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}