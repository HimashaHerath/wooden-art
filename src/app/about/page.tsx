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


    </div>
  );
}