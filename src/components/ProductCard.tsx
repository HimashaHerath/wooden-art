"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BLUR_PLACEHOLDER } from "@/lib/image-utils";

import { ProductWithImageUrls } from '@/lib/sanity.types'

interface ProductCardProps {
  product: ProductWithImageUrls;
  className?: string;
  priority?: boolean;
}

export default function ProductCard({ product, className, priority = false }: ProductCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isImageError, setIsImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={`/${product.slug.current}`}
      className={cn("group block transition-polene", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      prefetch={true} // Enable prefetching on hover
    >
      {/* Square Image */}
      <div className="relative overflow-hidden bg-secondary">
        <AspectRatio ratio={1}>
          <div className="relative w-full h-full">
            {!isImageError ? (
              <Image
                src={product.featured_image || "/placeholder-image.jpg"}
                alt={`${product.name}`}
                fill
                className={cn(
                  "object-cover transition-polene",
                  isHovered ? "scale-105" : "scale-100",
                  isImageLoading ? "opacity-0" : "opacity-100"
                )}
                onLoad={() => setIsImageLoading(false)}
                onError={() => {
                  setIsImageError(true);
                  setIsImageLoading(false);
                }}
                priority={priority}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                quality={85}
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary">
                <div className="text-center text-muted-foreground">
                  <div className="text-2xl mb-1">🌳</div>
                  <p className="text-xs">Image unavailable</p>
                </div>
              </div>
            )}
            
            {/* Loading skeleton */}
            {isImageLoading && (
              <div className="absolute inset-0 image-loading" />
            )}

            {/* Simple hover overlay with "View" label */}
            <div 
              className={cn(
                "absolute inset-0 bg-foreground/5 flex items-center justify-center transition-polene",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="bg-background/95 backdrop-blur-sm px-3 py-2 text-xs font-sans text-foreground">
                View
              </span>
            </div>
          </div>
        </AspectRatio>
      </div>
      
      {/* Product Info */}
      <div className="pt-3 space-y-1">
        {/* Product Name - Serif 16px */}
        <h3 className="font-serif text-base text-foreground line-clamp-1">
          {product.name}
        </h3>
        
        {/* Price - Bold 14px */}
        <p className="font-sans text-sm font-bold text-foreground">
          LKR {product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}