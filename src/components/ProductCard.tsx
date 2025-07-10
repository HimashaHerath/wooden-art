"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { ProductWithImageUrls } from '@/lib/sanity.types'

interface ProductCardProps {
  product: ProductWithImageUrls;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isImageError, setIsImageError] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const getStatusColor = (status: string, available: boolean) => {
    if (!available) return "destructive";
    switch (status.toLowerCase()) {
      case "in stock": return "default";
      case "made to order": return "secondary";
      case "sold out": return "destructive";
      case "coming soon": return "outline";
      default: return "default";
    }
  };

  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1",
      "border-amber-100 bg-white/80 backdrop-blur-sm",
      className
    )}>
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <AspectRatio ratio={4/3}>
          <div className="relative w-full h-full bg-gradient-to-br from-amber-50 to-orange-50">
            {!isImageError ? (
              <Image
                src={product.featured_image || "/placeholder-image.jpg"}
                alt={`${product.name} - handcrafted wooden art piece`}
                fill
                className={cn(
                  "object-cover transition-all duration-500",
                  "group-hover:scale-110",
                  isImageLoading ? "opacity-0" : "opacity-100"
                )}
                onLoad={() => setIsImageLoading(false)}
                onError={() => {
                  setIsImageError(true);
                  setIsImageLoading(false);
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="text-center text-amber-400">
                  <div className="text-4xl mb-2">🌳</div>
                  <p className="text-sm">Image coming soon</p>
                </div>
              </div>
            )}
            
            {/* Loading skeleton */}
            {isImageLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 animate-pulse" />
            )}
          </div>
        </AspectRatio>

        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && (
            <Badge className="bg-amber-500 text-white shadow-lg backdrop-blur-sm">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Badge 
            variant={getStatusColor(product.status, product.available)}
            className="shadow-lg backdrop-blur-sm"
          >
            {product.status}
          </Badge>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 backdrop-blur-sm hover:bg-white"
              onClick={(e) => {
                e.preventDefault();
                setIsFavorited(!isFavorited);
              }}
            >
              <Heart className={cn("w-4 h-4", isFavorited && "fill-red-500 text-red-500")} />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 backdrop-blur-sm hover:bg-white"
              asChild
            >
              <Link href={`/products/${product.slug.current}`}>
                <Eye className="w-4 h-4 mr-1" />
                Quick View
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <CardHeader className="pb-3 space-y-3">
        <div className="flex justify-between items-start gap-3">
          <CardTitle className="text-lg font-semibold text-amber-900 leading-tight line-clamp-2 group-hover:text-amber-800 transition-colors">
            {product.name}
          </CardTitle>
          <div className="text-right flex-shrink-0">
            <div className="text-xl font-bold text-amber-600">
              ${product.price.toLocaleString()}
            </div>
          </div>
        </div>
        
        <CardDescription className="text-amber-700/80 line-clamp-2 text-sm leading-relaxed">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="outline" className="text-xs border-amber-200 text-amber-700 bg-amber-50/50">
            {product.category}
          </Badge>
          {product.material && (
            <Badge variant="outline" className="text-xs border-amber-200 text-amber-700 bg-amber-50/50">
              {product.material}
            </Badge>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            asChild 
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
            size="sm"
          >
            <Link href={`/products/${product.slug.current}`}>
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Link>
          </Button>
          {product.available && (
            <Button 
              variant="outline" 
              size="sm"
              className="border-amber-200 text-amber-700 hover:bg-amber-50"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="sr-only">Contact about this product</span>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}