import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ContactPage() {
  const contactContent = {
    title: "Contact Wooden Art Gallery",
    email: "info@woodenartgallery.lk", // Replace with actual email
    phone: "+94 11 234 5678", // Replace with actual phone number
    address: "Your Business Address\nColombo, Sri Lanka", // Replace with actual address
    content: "We'd love to hear from you! Whether you're interested in our handcrafted furniture, looking to commission a custom piece, or have questions about our Sri Lankan wooden art collection, we're here to help."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">


      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <nav className="text-sm text-amber-600">
          <Link href="/" className="hover:text-amber-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-amber-800 font-medium">Contact</span>
        </nav>
      </div>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-8 sm:mb-12 text-center">{contactContent.title}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-amber-900 mb-6">Get in Touch</h2>
                
                <div className="prose prose-amber max-w-none mb-8 text-amber-800 leading-relaxed">
                  <p className="mb-4 text-amber-800">
                    {contactContent.content}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📧</div>
                    <div>
                      <div className="font-medium text-amber-900">Email</div>
                      <a href={`mailto:${contactContent.email}`} className="text-amber-700 hover:text-amber-900">
                        {contactContent.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📞</div>
                    <div>
                      <div className="font-medium text-amber-900">Phone</div>
                      <a href={`tel:${contactContent.phone}`} className="text-amber-700 hover:text-amber-900">
                        {contactContent.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">📍</div>
                    <div>
                      <div className="font-medium text-amber-900">Address</div>
                      <div className="text-amber-700 whitespace-pre-line">
                        {contactContent.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <span className="text-2xl mr-3">🕒</span>
                    Workshop Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-amber-700">
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
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <span className="text-2xl mr-3">🎨</span>
                    Custom Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 mb-4">
                    Looking for custom furniture or decorative pieces? We specialize in creating bespoke wooden art tailored to your specific needs and space.
                  </p>
                  <p className="text-amber-600 text-sm">
                    Contact us via phone or email to discuss your custom project ideas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <span className="text-2xl mr-3">🛠️</span>
                    Care Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 mb-4">
                    All Wooden Art Gallery pieces come with detailed care instructions. For questions about maintaining your furniture or wooden art, contact us.
                  </p>
                  <p className="text-amber-600 text-sm">
                    Reach out via phone or email for care and maintenance guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-amber-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-amber-100 mb-6">
                Whether you&apos;re interested in our existing pieces or want to commission something custom,
                we&apos;re here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/products">View Our Products</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-600">
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>


    </div>
  );
}