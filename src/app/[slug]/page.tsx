import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProductBySlug, getProductSlugs } from "@/lib/sanity.queries";
import ImageCarousel from "@/components/ImageCarousel";
import PortableText from "@/components/PortableText";

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Wooden Art Gallery',
      description: 'The requested product could not be found.',
    };
  }

  const title = `${product.name} | Wooden Art Gallery`;
  const description = product.description || `Handcrafted ${product.category} made from ${product.material || 'premium Sri Lankan wood'}. ${product.dimensions ? `Dimensions: ${product.dimensions}.` : ''} Available for purchase with island-wide delivery.`;
  const images = [product.featured_image];

  return {
    title,
    description,
    keywords: [
      'wooden art',
      'Sri Lankan craftsmanship',
      'handcrafted furniture',
      product.category,
      product.material,
      'wooden furniture',
      'art gallery',
      'custom furniture'
    ].filter(Boolean) as string[],
    openGraph: {
      title,
      description,
      type: 'website',
      images: images.map(image => ({
        url: image,
        width: 1200,
        height: 630,
        alt: product.name,
      })),
      siteName: 'Wooden Art Gallery',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images,
    },
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Prepare images for carousel
  const carouselImages = [
    product.featured_image,
    ...(product.gallery?.map(item => item.image) || [])
  ].filter(Boolean);

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || `Handcrafted ${product.category} made from ${product.material || 'premium Sri Lankan wood'}.`,
    image: carouselImages,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Wooden Art Gallery'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Wooden Art Gallery',
      url: 'https://wooden-art-gallery.vercel.app'
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'LKR',
      availability: product.available ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Wooden Art Gallery'
      }
    },
    material: product.material || 'Wood',
    additionalProperty: [
      ...(product.dimensions ? [{
        '@type': 'PropertyValue',
        name: 'Dimensions',
        value: product.dimensions
      }] : []),
      {
        '@type': 'PropertyValue',
        name: 'Handcrafted',
        value: 'true'
      },
      {
        '@type': 'PropertyValue',
        name: 'Origin',
        value: 'Sri Lanka'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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

      {/* Hero Image Carousel */}
      <ImageCarousel 
        images={carouselImages} 
        alt={product.name}
      />

      {/* Product Information */}
      <div className="gutter-mobile md:gutter-desktop py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Title Stack - Polène Typography */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-2xl md:text-[28px] lg:text-[32px] text-foreground mb-3 leading-tight">
              {product.name}
            </h1>
            <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground mb-6">
              {product.category}
              {product.material && ` • ${product.material}`}
            </p>
            <p className="font-sans text-xl font-bold text-foreground">
              LKR {product.price.toLocaleString()}
            </p>
          </div>

          {/* Description Section */}
          <div className="mb-12">
            <div className="prose prose-base max-w-none text-muted-foreground leading-relaxed">
              {product.content && product.content.length > 0 ? (
                <div className="font-sans text-base leading-relaxed">
                  <PortableText content={product.content} />
                </div>
              ) : (
                <p className="font-sans text-base leading-relaxed text-center max-w-2xl mx-auto">
                  This handcrafted wooden piece represents the finest in Sri Lankan craftsmanship. 
                  Each piece is unique and made with attention to detail, showcasing traditional 
                  techniques passed down through generations.
                </p>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="mb-12 border-t border-border pt-8">
            <h3 className="font-serif text-lg text-foreground mb-6 text-center">Product Details</h3>
            
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {product.brand && (
                <div className="text-center">
                  <dt className="font-sans text-sm text-muted-foreground mb-1">Brand</dt>
                  <dd className="font-sans text-sm text-foreground">{product.brand}</dd>
                </div>
              )}
              {product.itemNumber && (
                <div className="text-center">
                  <dt className="font-sans text-sm text-muted-foreground mb-1">Item Number</dt>
                  <dd className="font-sans text-sm text-foreground">{product.itemNumber}</dd>
                </div>
              )}
              {product.ean && (
                <div className="text-center">
                  <dt className="font-sans text-sm text-muted-foreground mb-1">EAN</dt>
                  <dd className="font-sans text-sm text-foreground">{product.ean}</dd>
                </div>
              )}
              {product.color && (
                <div className="text-center">
                  <dt className="font-sans text-sm text-muted-foreground mb-1">Color</dt>
                  <dd className="font-sans text-sm text-foreground">{product.color}</dd>
                </div>
              )}
              {product.material && (
                <div className="text-center">
                  <dt className="font-sans text-sm text-muted-foreground mb-1">Material</dt>
                  <dd className="font-sans text-sm text-foreground">{product.material}</dd>
                </div>
              )}
              {product.netWeight && (
                <div className="text-center">
                  <dt className="font-sans text-sm text-muted-foreground mb-1">Net Weight</dt>
                  <dd className="font-sans text-sm text-foreground">{product.netWeight} kg</dd>
                </div>
              )}
            </div>

            {/* Dimensions */}
            {(product.dimensions || product.structuredDimensions) && (
              <div className="mb-8">
                <h4 className="font-serif text-base text-foreground mb-4 text-center">Dimensions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {product.dimensions && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Description</dt>
                      <dd className="font-sans text-sm text-foreground">{product.dimensions}</dd>
                    </div>
                  )}
                  {product.structuredDimensions?.length && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Length</dt>
                      <dd className="font-sans text-sm text-foreground">{product.structuredDimensions.length} cm</dd>
                    </div>
                  )}
                  {product.structuredDimensions?.width && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Width</dt>
                      <dd className="font-sans text-sm text-foreground">{product.structuredDimensions.width} cm</dd>
                    </div>
                  )}
                  {product.structuredDimensions?.height && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Height</dt>
                      <dd className="font-sans text-sm text-foreground">{product.structuredDimensions.height} cm</dd>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Technical Specifications */}
            {product.technicalSpecs && Object.values(product.technicalSpecs).some(val => val !== undefined && val !== null && val !== '') && (
              <div className="mb-8">
                <h4 className="font-serif text-base text-foreground mb-4 text-center">Technical Specifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {product.technicalSpecs.lightBulbIncluded !== undefined && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Light Bulb Included</dt>
                      <dd className="font-sans text-sm text-foreground">{product.technicalSpecs.lightBulbIncluded ? 'Yes' : 'No'}</dd>
                    </div>
                  )}
                  {product.technicalSpecs.numberOfBulbs && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Number of Bulbs</dt>
                      <dd className="font-sans text-sm text-foreground">{product.technicalSpecs.numberOfBulbs}</dd>
                    </div>
                  )}
                  {product.technicalSpecs.baseType && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Base Type</dt>
                      <dd className="font-sans text-sm text-foreground">{product.technicalSpecs.baseType}</dd>
                    </div>
                  )}
                  {product.technicalSpecs.wattage && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Wattage</dt>
                      <dd className="font-sans text-sm text-foreground">{product.technicalSpecs.wattage}W</dd>
                    </div>
                  )}
                  {product.technicalSpecs.integratedLEDs !== undefined && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Integrated LEDs</dt>
                      <dd className="font-sans text-sm text-foreground">{product.technicalSpecs.integratedLEDs ? 'Yes' : 'No'}</dd>
                    </div>
                  )}
                  {product.technicalSpecs.dimmable !== undefined && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Dimmable</dt>
                      <dd className="font-sans text-sm text-foreground">{product.technicalSpecs.dimmable ? 'Yes' : 'No'}</dd>
                    </div>
                  )}
                  {product.technicalSpecs.ipCode && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">IP Code</dt>
                      <dd className="font-sans text-sm text-foreground">{product.technicalSpecs.ipCode}</dd>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Manufacturer Information */}
            {product.manufacturerInfo && Object.values(product.manufacturerInfo).some(val => val !== undefined && val !== null && val !== '') && (
              <div className="mb-8">
                <h4 className="font-serif text-base text-foreground mb-4 text-center">Manufacturer Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                  {product.manufacturerInfo.name && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Manufacturer</dt>
                      <dd className="font-sans text-sm text-foreground">{product.manufacturerInfo.name}</dd>
                    </div>
                  )}
                  {product.manufacturerInfo.country && (
                    <div className="text-center">
                      <dt className="font-sans text-sm text-muted-foreground mb-1">Country of Origin</dt>
                      <dd className="font-sans text-sm text-foreground">{product.manufacturerInfo.country}</dd>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Contact Section - Polène Consistent */}
          <div className="border-t border-border pt-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="font-serif text-lg text-foreground mb-6">Interested in this piece?</h3>
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
                  Island-wide delivery available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}