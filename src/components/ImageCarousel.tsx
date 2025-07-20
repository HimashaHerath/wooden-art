"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BLUR_PLACEHOLDER } from "@/lib/image-utils";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Filter out any empty/null images
  const validImages = images.filter(Boolean);
  const totalSlides = validImages.length;

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    setIsImageLoading(true);
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
    setIsImageLoading(true);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsImageLoading(true);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  if (totalSlides === 0) {
    return (
      <div className="relative w-full bg-secondary aspect-[4/3] max-h-[700px] flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="text-4xl mb-2">🌳</div>
          <p className="font-sans text-sm">No images available</p>
        </div>
      </div>
    );
  }

  const currentImage = validImages[currentIndex];

  return (
    <div className="relative w-full bg-secondary">
      {/* Main Image Container */}
      <div className="relative w-full aspect-[4/3] max-h-[700px]">
        <Image
          src={currentImage}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className={cn(
            "object-cover transition-polene",
            isImageLoading ? "opacity-0" : "opacity-100"
          )}
          onLoad={() => setIsImageLoading(false)}
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          quality={90}
        />
        
        {/* Loading skeleton */}
        {isImageLoading && (
          <div className="absolute inset-0 image-loading" />
        )}

        {/* Navigation arrows - only show if multiple images */}
        {totalSlides > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 touch-target"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 touch-target"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </>
        )}
      </div>

      {/* Dot Indicators - only show if multiple images */}
      {totalSlides > 1 && (
        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {validImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-polene touch-target min-w-[44px] min-h-[44px] flex items-center justify-center",
                index === currentIndex
                  ? "bg-accent"
                  : "bg-background/50 hover:bg-background/70"
              )}
              aria-label={`Go to image ${index + 1}`}
            >
              <span 
                className={cn(
                  "w-2 h-2 rounded-full",
                  index === currentIndex ? "bg-accent" : "bg-background/50"
                )}
              />
            </button>
          ))}
        </div>
      )}

      {/* Image counter - only show if multiple images */}
      {totalSlides > 1 && (
        <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-background/80 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full">
          <span className="font-sans text-xs md:text-sm text-foreground">
            {currentIndex + 1} / {totalSlides}
          </span>
        </div>
      )}
    </div>
  );
}