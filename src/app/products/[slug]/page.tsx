import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Breadcrumb from "@/components/Breadcrumb";
import PortableText from "@/components/PortableText";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, getProductSlugs } from "@/lib/sanity.queries";

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">


      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Products", href: "/products" },
          { label: product.name }
        ]} 
      />

      {/* Product Details */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={product.featured_image || "/placeholder-image.jpg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.featured && (
                <Badge className="absolute top-4 left-4 bg-amber-500 text-white">
                  Featured
                </Badge>
              )}
              <Badge 
                variant={product.available ? "default" : "destructive"} 
                className="absolute top-4 right-4"
              >
                {product.status}
              </Badge>
            </div>
            
            {/* Gallery */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((item, index: number) => (
                  <div key={index} className="relative h-24 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-amber-600">{`LKR ${product.price.toLocaleString()}`}</span>
                <Badge variant="outline" className="text-amber-700 border-amber-300">
                  {product.category}
                </Badge>
                {product.material && (
                  <Badge variant="outline" className="text-amber-700 border-amber-300">
                    {product.material}
                  </Badge>
                )}
              </div>
            </div>
            <Tabs defaultValue="details" className="space-y-4">
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="prose prose-amber max-w-none">
                {product.content && product.content.length > 0 ? (
                  <PortableText content={product.content} />
                ) : (
                  <p className="text-amber-700">No detailed description available.</p>
                )}
              </TabsContent>
              <TabsContent value="specs">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-900 mb-4">Specifications</h3>
                    <dl className="space-y-2">
                      {product.dimensions && (
                        <>
                          <dt className="text-sm font-medium text-amber-700">Dimensions</dt>
                          <dd className="text-amber-600">{product.dimensions}</dd>
                        </>
                      )}
                      {product.material && (
                        <>
                          <dt className="text-sm font-medium text-amber-700">Material</dt>
                          <dd className="text-amber-600">{product.material}</dd>
                        </>
                      )}
                      <dt className="text-sm font-medium text-amber-700">Availability</dt>
                      <dd className="text-amber-600">{product.status}</dd>
                      <dt className="text-sm font-medium text-amber-700">Category</dt>
                      <dd className="text-amber-600">{product.category}</dd>
                    </dl>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h3 className="font-semibold text-amber-900 mb-3">Interested in this piece?</h3>
                <div className="space-y-2 text-sm text-amber-700">
                  <p>📞 <a href="tel:+94112345678" className="hover:text-amber-900">+94 11 234 5678</a></p>
                  <p>✉️ <a href="mailto:info@woodenartgallery.lk" className="hover:text-amber-900">info@woodenartgallery.lk</a></p>
                  <p>🚚 Delivery available across Sri Lanka</p>
                  {!product.available && (
                    <p className="text-amber-600 font-medium">⚠️ Currently Unavailable</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>


    </div>
  );
}