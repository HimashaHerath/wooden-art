import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ContactPage() {
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

      {/* Contact Content */}
      <div className="gutter-mobile md:gutter-desktop py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We'd love to hear from you about custom orders, inquiries, or visits to our workshop
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="font-serif text-xl text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-sm font-medium text-foreground mb-2">Email</h3>
                <a 
                  href="mailto:info@woodenartgallery.lk" 
                  className="font-sans text-base text-muted-foreground hover:text-accent transition-polene"
                >
                  info@woodenartgallery.lk
                </a>
              </div>

              <div>
                <h3 className="font-sans text-sm font-medium text-foreground mb-2">Phone</h3>
                <a 
                  href="tel:+94112345678" 
                  className="font-sans text-base text-muted-foreground hover:text-accent transition-polene"
                >
                  +94 11 234 5678
                </a>
              </div>

              <div>
                <h3 className="font-sans text-sm font-medium text-foreground mb-2">Address</h3>
                <div className="font-sans text-base text-muted-foreground leading-relaxed">
                  Your Business Address<br />
                  Colombo, Sri Lanka
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Hours */}
          <div className="mb-12 border-t border-border pt-8">
            <h2 className="font-serif text-xl text-foreground mb-6">Workshop Hours</h2>
            <div className="space-y-3 font-sans text-base text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Custom Orders */}
          <div className="mb-12 border-t border-border pt-8">
            <h2 className="font-serif text-xl text-foreground mb-6">Custom Orders</h2>
            <div className="font-sans text-base text-muted-foreground leading-relaxed space-y-4">
              <p>
                Looking for custom furniture or decorative pieces? We specialize in creating bespoke wooden art tailored to your specific needs and space.
              </p>
              <p>
                Contact us via phone or email to discuss your custom project ideas and timeline.
              </p>
            </div>
          </div>

          {/* Care Instructions */}
          <div className="border-t border-border pt-8">
            <h2 className="font-serif text-xl text-foreground mb-6">Care & Maintenance</h2>
            <div className="font-sans text-base text-muted-foreground leading-relaxed space-y-4">
              <p>
                All Wooden Art Gallery pieces come with detailed care instructions. For questions about maintaining your furniture or wooden art, we're here to help.
              </p>
              <p>
                Reach out via phone or email for care and maintenance guidance specific to your piece.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}