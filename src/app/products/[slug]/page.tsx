import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
interface GalleryItem {
  image: string;
  alt: string;
}

interface Product {
  _sys: { filename: string };
  name: string;
  description: string;
  price: number;
  category: string;
  featured_image: string;
  gallery?: GalleryItem[];
  dimensions?: string;
  material: string;
  available: boolean;
  featured: boolean;
  status: string;
  content: string;
}

import { notFound } from "next/navigation";

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const filePath = path.join(process.cwd(), "content/products", `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    
    return {
      ...(data as Omit<Product, "content" | "_sys">),
      content,
      _sys: {
        filename: slug,
      },
    } as Product;
  } catch (error) {
    console.error("Error reading product:", error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const productsDirectory = path.join(process.cwd(), "content/products");
    const filenames = fs.readdirSync(productsDirectory);
    
    return filenames.map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">


      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-amber-600">
          <Link href="/" className="hover:text-amber-800">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/products" className="hover:text-amber-800">Products</Link>
          <span className="mx-2">›</span>
          <span className="text-amber-800 font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                {product.gallery.map((item: GalleryItem, index: number) => (
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
              <h1 className="text-4xl font-bold text-amber-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-amber-600">{`$${product.price}`}</span>
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
                <div dangerouslySetInnerHTML={{ __html: product.content.replace(/\n/g, '<br/>') }} />
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

            {/* Actions */}
            <div className="space-y-4">
              {product.available ? (
                <div className="space-y-3">
                  <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
                    Contact for Purchase
                  </Button>
                  <Button variant="outline" size="lg" className="w-full border-amber-300 text-amber-700">
                    Ask a Question
                  </Button>
                </div>
              ) : (
                <Button disabled size="lg" className="w-full">
                  Currently Unavailable
                </Button>
              )}
              
              <div className="text-sm text-amber-600">
                <p>🚚 Free shipping within the continental US</p>
                <p>📞 Questions? Call us at (555) 123-4567</p>
                <p>✉️ Email us at info@woodenart.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}