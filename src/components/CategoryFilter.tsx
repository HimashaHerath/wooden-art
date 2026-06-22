"use client"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string | null
  onCategoryChange: (category: string | null) => void
}

// Convert "ceiling-light" → "Ceiling Light"
function humanize(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  const allCategories = ["All", ...categories]

  return (
    <div className="border-b border-border bg-background sticky top-16 z-40">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 py-3 md:py-4">
          {allCategories.map((category) => {
            const isActive =
              (category === "All" && !activeCategory) || (category !== "All" && activeCategory === category)
            const label = category === "All" ? "All" : humanize(category)

            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category === "All" ? null : category)}
                className={cn(
                  "relative font-sans text-xs md:text-sm uppercase tracking-wider transition-all duration-200 ease-in-out",
                  "min-h-[44px] px-3 md:px-4 py-2 flex items-center justify-center",
                  "rounded-md hover:bg-muted/50 active:scale-95",
                  "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                  "text-center leading-tight",
                  isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-0.5 bg-accent rounded-full" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

