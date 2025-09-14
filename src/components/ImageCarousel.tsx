"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BLUR_PLACEHOLDER } from "@/lib/image-utils"

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isImageLoading, setIsImageLoading] = useState(true)

  // Filter out any empty/null images
  const validImages = images.filter(Boolean)
  const totalSlides = validImages.length

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
    setIsImageLoading(true)
  }, [totalSlides])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
    setIsImageLoading(true)
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsImageLoading(true)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToPrevious, goToNext])

  if (totalSlides === 0) {
    return (
      <div className="relative w-full bg-secondary aspect-[4/3] max-h-[700px] flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="text-4xl mb-2">🌳</div>
          <p className="font-sans text-sm">No images available</p>
        </div>
      </div>
    )
  }

  const currentImage = validImages[currentIndex]

  return (
    <div className="relative w-full bg-secondary">
      {/* Main Image Container */}
      <div className="relative w-full aspect-[4/3] max-h-[700px]">
        <Image
          src={currentImage || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className={cn("object-cover transition-polene", isImageLoading ? "opacity-0" : "opacity-100")}
          onLoad={() => setIsImageLoading(false)}
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          quality={90}
        />

        {/* Loading skeleton */}
        {isImageLoading && <div className="absolute inset-0 image-loading" />}

        {/* Navigation arrows - only show if multiple images */}
        {totalSlides > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 min-h-[44px] min-w-[44px] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 min-h-[44px] min-w-[44px] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
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
        <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 px-2">
          {validImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "relative min-h-[44px] min-w-[44px] p-2 md:p-3 flex items-center justify-center transition-all duration-200",
                "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background/80",
              )}
              aria-label={`Go to image ${index + 1}`}
            >
              <span
                className={cn(
                  "w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-200",
                  index === currentIndex ? "bg-accent scale-125" : "bg-background/60 hover:bg-background/80",
                )}
              />
            </button>
          ))}
        </div>
      )}

      {/* Image counter - only show if multiple images */}
      {totalSlides > 1 && (
        <div className="absolute top-3 md:top-6 right-3 md:right-6 bg-background/90 backdrop-blur-sm px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg shadow-sm">
          <span className="font-sans text-xs md:text-sm font-medium text-foreground">
            {currentIndex + 1} / {totalSlides}
          </span>
        </div>
      )}
    </div>
  )
}
