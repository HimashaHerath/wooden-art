import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    _sys: {
      filename: string;
    };
    name: string;
    description: string;
    price: number;
    category: string;
    featured_image: string;
    material: string;
    status: string;
    available: boolean;
    featured: boolean;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.featured_image || "/placeholder-image.jpg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.featured && (
          <Badge className="absolute top-2 left-2 bg-amber-500 text-white">
            Featured
          </Badge>
        )}
        <Badge 
          variant={product.available ? "default" : "destructive"} 
          className="absolute top-2 right-2"
        >
          {product.status}
        </Badge>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-gray-900 line-clamp-1">
            {product.name}
          </CardTitle>
          <span className="text-2xl font-bold text-amber-600">
            {`$${product.price}`}
          </span>
        </div>
        <CardDescription className="text-gray-600 line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
          {product.material && (
            <Badge variant="outline" className="text-xs">
              {product.material}
            </Badge>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button asChild className="flex-1">
            <Link href={`/products/${product._sys.filename}`}>
              View Details
            </Link>
          </Button>
          {product.available && (
            <Button variant="outline" size="sm">
              Contact
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}