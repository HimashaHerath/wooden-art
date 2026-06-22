import Link from "next/link"
import { ChevronLeft, Phone, Mail, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Wooden Art Gallery",
  description: "Get in touch with Wooden Art Gallery for custom orders, enquiries, or workshop visits. Located in Colombo, Sri Lanka. Island-wide delivery available.",
  openGraph: {
    title: "Contact Us | Wooden Art Gallery",
    description: "Get in touch with Wooden Art Gallery for custom orders, enquiries, or workshop visits.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-16 z-40">
        <div className="gutter-mobile md:gutter-desktop py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-polene min-h-[44px] min-w-[44px]"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-sans text-sm">Back to Products</span>
          </Link>
        </div>
      </div>

      {/* Contact Content */}
      <div className="gutter-mobile md:gutter-desktop py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight text-balance">
              Contact Us
            </h1>
            <p className="font-sans text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
              We&apos;d love to hear from you about custom orders, enquiries, or visits to our workshop
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:shopwoodenart@gmail.com"
                      className="font-sans text-base text-muted-foreground hover:text-accent transition-polene"
                    >
                      shopwoodenart@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-foreground mb-2">Phone</h3>
                    <a
                      href="tel:+94112345678"
                      className="font-sans text-base text-muted-foreground hover:text-accent transition-polene"
                    >
                      +94 11 234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-foreground mb-2">Address</h3>
                    <div className="font-sans text-base text-muted-foreground leading-relaxed">
                      Colombo, Sri Lanka
                    </div>
                  </div>
                </div>
              </div>

              {/* Workshop Hours */}
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-accent" />
                  </div>
                  <h2 className="font-serif text-xl text-foreground">Workshop Hours</h2>
                </div>
                <div className="space-y-3 font-sans text-sm text-muted-foreground">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-foreground">9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">9:00 AM – 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">Send a Message</h2>
              <form
                action="mailto:shopwoodenart@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block font-sans text-sm font-medium text-foreground mb-2">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full font-sans text-sm text-foreground bg-background border border-border rounded-md px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-polene hover:border-accent/50 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block font-sans text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+94 XX XXX XXXX"
                      className="w-full font-sans text-sm text-foreground bg-background border border-border rounded-md px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-polene hover:border-accent/50 min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block font-sans text-sm font-medium text-foreground mb-2">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full font-sans text-sm text-foreground bg-background border border-border rounded-md px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-polene hover:border-accent/50 min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block font-sans text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Custom order enquiry"
                    className="w-full font-sans text-sm text-foreground bg-background border border-border rounded-md px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-polene hover:border-accent/50 min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-sans text-sm font-medium text-foreground mb-2">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your enquiry or custom order requirements..."
                    className="w-full font-sans text-sm text-foreground bg-background border border-border rounded-md px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-polene hover:border-accent/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-foreground text-background font-sans text-sm font-medium px-6 py-3 rounded-md hover:bg-accent transition-polene min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  Send Message
                </button>

                <p className="font-sans text-xs text-muted-foreground text-center">
                  We typically respond within 1–2 business days.
                </p>
              </form>
            </div>
          </div>

          {/* Custom Orders */}
          <div className="mb-16 lg:mb-20 border-t border-border pt-16 lg:pt-20">
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8 text-center">Custom Orders</h2>
            <div className="font-sans text-base lg:text-lg text-muted-foreground leading-relaxed space-y-6 max-w-3xl mx-auto">
              <p>
                Looking for custom furniture or decorative pieces? We specialize in creating bespoke wooden art tailored
                to your specific needs and space.
              </p>
              <p>Contact us via phone or email to discuss your custom project ideas and timeline.</p>
            </div>
          </div>

          {/* Care Instructions */}
          <div className="border-t border-border pt-16 lg:pt-20">
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8 text-center">Care &amp; Maintenance</h2>
            <div className="font-sans text-base lg:text-lg text-muted-foreground leading-relaxed space-y-6 max-w-3xl mx-auto">
              <p>
                All Wooden Art Gallery pieces come with detailed care instructions. For questions about maintaining your
                furniture or wooden art, we&apos;re here to help.
              </p>
              <p>Reach out via phone or email for care and maintenance guidance specific to your piece.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

