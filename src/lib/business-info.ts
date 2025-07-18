// Business Information Constants
// Update these values with your actual business information

export const BUSINESS_INFO = {
  name: "Wooden Art Gallery",
  tagline: "Sri Lankan Craftsmanship Meets Modern Design",
  description: "Premier furniture and wooden art studio located in Sri Lanka, dedicated to creating exceptional handcrafted pieces that blend functionality with artistic beauty.",
  
  // Contact Information - UPDATE WITH YOUR ACTUAL DETAILS
  contact: {
    email: "info@woodenartgallery.lk", // Replace with your actual email
    phone: "+94 11 234 5678", // Replace with your actual phone number
    address: {
      street: "Your Business Address", // Replace with your actual address
      city: "Colombo",
      country: "Sri Lanka",
      fullAddress: "Your Business Address\nColombo, Sri Lanka"
    }
  },
  
  // Business Hours - UPDATE WITH YOUR ACTUAL HOURS
  hours: {
    monday: { open: "9:00 AM", close: "5:00 PM" },
    tuesday: { open: "9:00 AM", close: "5:00 PM" },
    wednesday: { open: "9:00 AM", close: "5:00 PM" },
    thursday: { open: "9:00 AM", close: "5:00 PM" },
    friday: { open: "9:00 AM", close: "5:00 PM" },
    saturday: { open: "9:00 AM", close: "3:00 PM" },
    sunday: { open: "Closed", close: "Closed" }
  },
  
  // Social Media - UPDATE WITH YOUR ACTUAL PROFILES
  social: {
    facebook: "https://www.facebook.com/furniturebywoodenartgallery/",
    instagram: "", // Add your Instagram URL
    whatsapp: "", // Add your WhatsApp number
    youtube: "" // Add your YouTube channel
  },
  
  // About Content
  about: {
    story: "Wooden Art Gallery was founded with a vision to preserve and celebrate the rich tradition of Sri Lankan woodworking while adapting to modern design sensibilities. Our journey began as a small family workshop and has grown into a respected name in custom furniture and decorative wooden art. We take pride in supporting local artisans and maintaining the highest standards of craftsmanship.",
    
    craft: "Each piece in our collection is meticulously handcrafted by skilled Sri Lankan artisans who have inherited generations of woodworking knowledge. We work with premium local and imported hardwoods, carefully selecting each piece for its unique grain patterns, durability, and natural beauty. Our techniques combine time-honored traditional methods with modern precision tools to create furniture and art pieces that are both functional and aesthetically stunning.",
    
    commitment: "At Wooden Art Gallery, we believe in creating pieces that tell a story. Whether it's a custom dining table for your family gatherings or a decorative sculpture for your living space, each item is crafted with attention to detail and finished to last for generations. We are committed to sustainable practices, quality craftsmanship, and customer satisfaction."
  },
  
  // Services
  services: [
    {
      title: "Custom Furniture",
      description: "Bespoke pieces tailored to your space",
      icon: "🏠"
    },
    {
      title: "Decorative Art",
      description: "Unique wooden sculptures and art pieces",
      icon: "🎨"
    },
    {
      title: "Restoration",
      description: "Professional furniture restoration services",
      icon: "🔨"
    },
    {
      title: "Consultation",
      description: "Design consultation for your projects",
      icon: "💡"
    }
  ],
  
  // Features/Values
  features: [
    {
      title: "Sri Lankan Heritage",
      description: "Traditional craftsmanship with modern design",
      icon: "🇱🇰"
    },
    {
      title: "Custom Furniture",
      description: "Bespoke pieces tailored to your space",
      icon: "🏠"
    },
    {
      title: "Local Artisans",
      description: "Supporting skilled craftspeople",
      icon: "👥"
    },
    {
      title: "Art & Function",
      description: "Beautiful pieces that serve a purpose",
      icon: "🎨"
    }
  ]
};

// Helper functions for common operations
export const getBusinessHours = () => {
  return [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];
};

export const getContactInfo = () => {
  return {
    email: BUSINESS_INFO.contact.email,
    phone: BUSINESS_INFO.contact.phone,
    address: BUSINESS_INFO.contact.address.fullAddress
  };
};