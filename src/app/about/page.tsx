import Link from "next/link";

export default function AboutPage() {
  const aboutContent = {
    title: "About Our Wooden Art",
    content: `
      Welcome to our world of handcrafted wooden art, where each piece tells a story of passion, skill, and dedication to the timeless craft of woodworking.

      ## Our Story

      Founded with a deep love for woodworking and a commitment to creating beautiful, functional pieces, our workshop has been bringing natural beauty into homes for over a decade. What started as a hobby has grown into a full-time passion for creating unique wooden art pieces that stand the test of time.

      ## Our Craft

      Every piece in our collection is carefully handcrafted using traditional techniques combined with modern precision. We believe that the natural beauty of wood should be celebrated and enhanced, not masked. Our skilled artisans work with various hardwoods, each selected for its unique grain patterns, durability, and character.

      ## Our Promise

      When you choose one of our pieces, you're not just buying furniture or decor – you're investing in a piece of art that will bring warmth and natural beauty to your space for generations to come. Each item is made with meticulous attention to detail and finished with care to ensure lasting quality.
    `
  };

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
            
            <div className="prose prose-amber prose-lg max-w-none text-amber-800 leading-relaxed">
              <p className="mb-6 text-lg">
                Welcome to our world of handcrafted wooden art, where each piece tells a story of passion, skill, and dedication to the timeless craft of woodworking.
              </p>
              
              <h2 className="text-2xl font-semibold text-amber-900 mt-8 mb-4">Our Story</h2>
              <p className="mb-4 text-amber-800">
                Founded with a deep love for woodworking and a commitment to creating beautiful, functional pieces, our workshop has been bringing natural beauty into homes for over a decade. What started as a hobby has grown into a full-time passion for creating unique wooden art pieces that stand the test of time.
              </p>
              
              <h2 className="text-2xl font-semibold text-amber-900 mt-8 mb-4">Our Craft</h2>
              <p className="mb-4 text-amber-800">
                Every piece in our collection is carefully handcrafted using traditional techniques combined with modern precision. We believe that the natural beauty of wood should be celebrated and enhanced, not masked. Our skilled artisans work with various hardwoods, each selected for its unique grain patterns, durability, and character.
              </p>
              
              <h2 className="text-2xl font-semibold text-amber-900 mt-8 mb-4">Our Promise</h2>
              <p className="mb-4 text-amber-800">
                When you choose one of our pieces, you&apos;re not just buying furniture or decor – you&apos;re investing in a piece of art that will bring warmth and natural beauty to your space for generations to come. Each item is made with meticulous attention to detail and finished with care to ensure lasting quality.
              </p>
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