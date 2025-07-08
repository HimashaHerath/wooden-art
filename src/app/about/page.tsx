import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getAboutContent() {
  try {
    const filePath = path.join(process.cwd(), "content/pages/about.md");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, content };
  } catch (error) {
    console.error("Error reading about page:", error);
    return {
      title: "About Our Wooden Art",
      content: "Content coming soon..."
    };
  }
}

export default async function AboutPage() {
  const aboutContent = await getAboutContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-amber-800">🌳 Wooden Art</h1>
              <Badge variant="outline" className="text-amber-700 border-amber-300">
                Handcrafted
              </Badge>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-amber-700 hover:text-amber-900 font-medium">
                Home
              </Link>
              <Link href="/products" className="text-amber-700 hover:text-amber-900 font-medium">
                Products
              </Link>
              <Link href="/about" className="text-amber-700 hover:text-amber-900 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-amber-700 hover:text-amber-900 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-amber-600">
          <Link href="/" className="hover:text-amber-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-amber-800 font-medium">About</span>
        </nav>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-amber-900 mb-6">{aboutContent.title}</h1>
            
            <div className="prose prose-amber prose-lg max-w-none">
              <div 
                className="text-amber-800 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: aboutContent.content.replace(/\n/g, '<br/>').replace(/##\s*(.*)/g, '<h2 class="text-2xl font-semibold text-amber-900 mt-8 mb-4">$1</h2>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- (.*)/g, '<li class="ml-4">$1</li>')
                }} 
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/60 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🌲</div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Premium Materials</h3>
              <p className="text-amber-700 text-sm">Sustainably sourced hardwoods</p>
            </div>
            <div className="bg-white/60 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Expert Craftsmanship</h3>
              <p className="text-amber-700 text-sm">Traditional techniques, modern precision</p>
            </div>
            <div className="bg-white/60 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Sustainable</h3>
              <p className="text-amber-700 text-sm">Environmentally responsible practices</p>
            </div>
            <div className="bg-white/60 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Unique Pieces</h3>
              <p className="text-amber-700 text-sm">Every item is one-of-a-kind</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">🌳 Wooden Art</h4>
              <p className="text-amber-100">
                Handcrafted wooden pieces made with passion and precision. 
                Each item tells a story of natural beauty and skilled craftsmanship.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-amber-100">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/products" className="hover:text-white">Products</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="text-amber-100 space-y-2">
                <p>📧 info@woodenart.com</p>
                <p>📞 (555) 123-4567</p>
                <p>📍 123 Craftsman Lane, Woodville</p>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-100">
            <p>&copy; 2024 Wooden Art. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}