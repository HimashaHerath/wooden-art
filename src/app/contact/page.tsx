import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getContactContent() {
  try {
    const filePath = path.join(process.cwd(), "content/pages/contact.md");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, content };
  } catch (error) {
    console.error("Error reading contact page:", error);
    return {
      title: "Contact Us",
      email: "info@woodenart.com",
      phone: "(555) 123-4567",
      address: "123 Craftsman Lane\nWoodville, WA 98001\nUnited States",
      content: "Get in touch with us!"
    };
  }
}

export default async function ContactPage() {
  const contactContent = await getContactContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-amber-600">
          <Link href="/" className="hover:text-amber-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-amber-800 font-medium">Contact</span>
        </nav>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-amber-900 mb-12 text-center">{contactContent.title}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-amber-900 mb-6">Get in Touch</h2>
                
                <div className="prose prose-amber max-w-none mb-8">
                  <div 
                    className="text-amber-800 leading-relaxed"
                    dangerouslySetInnerHTML={{ 
                      __html: contactContent.content.replace(/\n/g, '<br/>').replace(/##\s*(.*)/g, '<h3 class="text-xl font-semibold text-amber-900 mt-6 mb-3">$1</h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }} 
                  />
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
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>By appointment only</span>
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
                    Interested in a custom piece? We love working with customers to create unique, personalized wooden art.
                  </p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Discuss Custom Project
                  </Button>
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
                    All our pieces come with detailed care instructions. For general questions about maintaining your wooden art, feel free to reach out.
                  </p>
                  <Button variant="outline" className="w-full border-amber-300 text-amber-700">
                    Care Questions
                  </Button>
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
              <div className="flex gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  View Our Products
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-600">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}