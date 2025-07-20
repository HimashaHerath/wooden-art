import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-16 z-40">
        <div className="gutter-mobile md:gutter-desktop py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-polene touch-target"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-sans text-sm">Back to Products</span>
          </Link>
        </div>
      </div>

      {/* About Content */}
      <div className="gutter-mobile md:gutter-desktop py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              About Wooden Art Gallery
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Where traditional Sri Lankan craftsmanship meets contemporary design
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-12">
            <h2 className="font-serif text-xl text-foreground mb-6">Our Story</h2>
            <div className="font-sans text-base text-muted-foreground leading-relaxed space-y-4">
              <p>
                Wooden Art Gallery was founded with a vision to preserve and celebrate the rich tradition of Sri Lankan woodworking while adapting to modern design sensibilities. Our journey began as a small family workshop and has grown into a respected name in custom furniture and decorative wooden art.
              </p>
              <p>
                We take pride in supporting local artisans and maintaining the highest standards of craftsmanship, creating pieces that blend functionality with artistic beauty.
              </p>
            </div>
          </div>

          {/* Craft Section */}
          <div className="mb-12 border-t border-border pt-8">
            <h2 className="font-serif text-xl text-foreground mb-6">Our Craft</h2>
            <div className="font-sans text-base text-muted-foreground leading-relaxed space-y-4">
              <p>
                Each piece in our collection is meticulously handcrafted by skilled Sri Lankan artisans who have inherited generations of woodworking knowledge. We work with premium local and imported hardwoods, carefully selecting each piece for its unique grain patterns, durability, and natural beauty.
              </p>
              <p>
                Our techniques combine time-honored traditional methods with modern precision tools to create furniture and art pieces that are both functional and aesthetically stunning.
              </p>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="mb-12 border-t border-border pt-8">
            <h2 className="font-serif text-xl text-foreground mb-6">Our Commitment</h2>
            <div className="font-sans text-base text-muted-foreground leading-relaxed space-y-4">
              <p>
                At Wooden Art Gallery, we believe in creating pieces that tell a story. Whether it's a custom dining table for your family gatherings or a decorative sculpture for your living space, each item is crafted with attention to detail and finished to last for generations.
              </p>
              <p>
                We are committed to sustainable practices, quality craftsmanship, and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-border pt-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="font-serif text-lg text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4 font-sans text-sm">
                <div>
                  <a 
                    href="tel:+94112345678" 
                    className="text-muted-foreground hover:text-accent transition-polene"
                  >
                    +94 11 234 5678
                  </a>
                </div>
                <div>
                  <a 
                    href="mailto:info@woodenartgallery.lk" 
                    className="text-muted-foreground hover:text-accent transition-polene"
                  >
                    info@woodenartgallery.lk
                  </a>
                </div>
                <div className="text-muted-foreground pt-2 border-t border-border">
                  Custom orders and consultations available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}