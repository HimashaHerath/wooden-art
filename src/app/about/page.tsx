import Link from "next/link";

export default function AboutPage() {
  const aboutContent = {
    title: "About Wooden Art Gallery",
    content: `
      Welcome to Wooden Art Gallery, where traditional Sri Lankan craftsmanship meets contemporary design. We are a premier furniture and wooden art studio located in Sri Lanka, dedicated to creating exceptional handcrafted pieces that blend functionality with artistic beauty.

      ## Our Story

      Wooden Art Gallery was founded with a vision to preserve and celebrate the rich tradition of Sri Lankan woodworking while adapting to modern design sensibilities. Our journey began as a small family workshop and has grown into a respected name in custom furniture and decorative wooden art. We take pride in supporting local artisans and maintaining the highest standards of craftsmanship.

      ## Our Craft

      Each piece in our collection is meticulously handcrafted by skilled Sri Lankan artisans who have inherited generations of woodworking knowledge. We work with premium local and imported hardwoods, carefully selecting each piece for its unique grain patterns, durability, and natural beauty. Our techniques combine time-honored traditional methods with modern precision tools to create furniture and art pieces that are both functional and aesthetically stunning.

      ## Our Commitment

      At Wooden Art Gallery, we believe in creating pieces that tell a story. Whether it's a custom dining table for your family gatherings or a decorative sculpture for your living space, each item is crafted with attention to detail and finished to last for generations. We are committed to sustainable practices, quality craftsmanship, and customer satisfaction.
    `
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">


      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <nav className="text-sm text-amber-600">
          <Link href="/" className="hover:text-amber-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-amber-800 font-medium">About</span>
        </nav>
      </div>

      {/* About Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8 mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-6">{aboutContent.title}</h1>
            
            <div className="prose prose-amber prose-lg max-w-none text-amber-800 leading-relaxed">
              <p className="mb-6 text-lg">
                Welcome to Wooden Art Gallery, where traditional Sri Lankan craftsmanship meets contemporary design. We are a premier furniture and wooden art studio located in Sri Lanka, dedicated to creating exceptional handcrafted pieces that blend functionality with artistic beauty.
              </p>
              
              <h2 className="text-2xl font-semibold text-amber-900 mt-8 mb-4">Our Story</h2>
              <p className="mb-4 text-amber-800">
                Wooden Art Gallery was founded with a vision to preserve and celebrate the rich tradition of Sri Lankan woodworking while adapting to modern design sensibilities. Our journey began as a small family workshop and has grown into a respected name in custom furniture and decorative wooden art. We take pride in supporting local artisans and maintaining the highest standards of craftsmanship.
              </p>
              
              <h2 className="text-2xl font-semibold text-amber-900 mt-8 mb-4">Our Craft</h2>
              <p className="mb-4 text-amber-800">
                Each piece in our collection is meticulously handcrafted by skilled Sri Lankan artisans who have inherited generations of woodworking knowledge. We work with premium local and imported hardwoods, carefully selecting each piece for its unique grain patterns, durability, and natural beauty. Our techniques combine time-honored traditional methods with modern precision tools to create furniture and art pieces that are both functional and aesthetically stunning.
              </p>
              
              <h2 className="text-2xl font-semibold text-amber-900 mt-8 mb-4">Our Commitment</h2>
              <p className="mb-4 text-amber-800">
                At Wooden Art Gallery, we believe in creating pieces that tell a story. Whether it&apos;s a custom dining table for your family gatherings or a decorative sculpture for your living space, each item is crafted with attention to detail and finished to last for generations. We are committed to sustainable practices, quality craftsmanship, and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/60 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🇱🇰</div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Sri Lankan Heritage</h3>
              <p className="text-amber-700 text-sm">Traditional craftsmanship with modern design</p>
            </div>
            <div className="bg-white/60 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Custom Furniture</h3>
              <p className="text-amber-700 text-sm">Bespoke pieces tailored to your space</p>
            </div>
            <div className="bg-white/60 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Local Artisans</h3>
              <p className="text-amber-700 text-sm">Supporting skilled craftspeople</p>
            </div>
            <div className="bg-white/60 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Art & Function</h3>
              <p className="text-amber-700 text-sm">Beautiful pieces that serve a purpose</p>
            </div>
          </div>
          </div>
        </div>
      </section>


    </div>
  );
}