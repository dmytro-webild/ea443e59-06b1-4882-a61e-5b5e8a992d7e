import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesBorderGlow from '@/components/sections/features/FeaturesBorderGlow';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import { Sparkles, Sun, Waves } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="home" data-section="home">
    <SectionErrorBoundary name="home">
          <HeroBillboardBrand
      brand="SHAY Parfume"
      description="Where Scandinavian Simplicity Meets Sensory Luxury. Discover our collection of meticulously crafted, clean, and sustainable fragrances."
      primaryButton={{
        text: "Explore Our Fragrances",
        href: "#products",
      }}
      secondaryButton={{
        text: "Learn About Us",
        href: "#about",
      }}
      imageSrc="https://storage.googleapis.com/webild/users/user_3FJXOXUaeiCCmwuE8b3sX6RMmgW/uploaded-1782599710043-yrmbp66e.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Born in Stockholm, Rooted in Purpose"
      primaryButton={{
        text: "Our Philosophy",
        href: "#values",
      }}
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesBorderGlow
      tag="Collection"
      title="Curated Scents"
      description="Each fragrance tells a story of artistic vision and scientific precision."
      features={[
        {
          icon: Sparkles,
          title: "Summer Elixir",
          description: "A warm Mediterranean escape captured in a bottle.",
        },
        {
          icon: Waves,
          title: "Blue Wood & Ocean",
          description: "Fresh, deep, and woody—a soul-stirring depth.",
        },
        {
          icon: Sun,
          title: "Crystal Breeze",
          description: "Cool clarity meets pure, effervescent energy.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="values" data-section="values">
    <SectionErrorBoundary name="values">
          <MetricsMediaCards
      tag="Values"
      title="Commitment to Purity"
      description="Sustainability and scientific integrity are at our core."
      metrics={[
        {
          value: "100%",
          title: "Clean Formulas",
          description: "Water-based and skin-safe ingredients only.",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FJXOXUaeiCCmwuE8b3sX6RMmgW/uploaded-1782599710044-y2h755ve.jpg",
        },
        {
          value: "Global",
          title: "Inclusive",
          description: "Designed to be worn by everyone.",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FJXOXUaeiCCmwuE8b3sX6RMmgW/uploaded-1782599710043-yrmbp66e.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Reviews"
      title="Voices of SHAY"
      description="Luxury that resonates with our community."
      testimonials={[
        {
          name: "Sarah L.",
          role: "Collector",
          quote: "The most refined scents I have ever owned.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-girl-thoughtfully-looking-away-waiting-washing-modern-self-service-laundry-night_574295-2571.jpg",
        },
        {
          name: "Marcus B.",
          role: "Architect",
          quote: "Simple, clean, and incredibly long-lasting.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/looking-white-closeup-space-lifestyle-pretty_1303-3414.jpg",
        },
        {
          name: "Elena P.",
          role: "Designer",
          quote: "A true piece of art on my vanity.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-posing-seaside_23-2149412668.jpg",
        },
        {
          name: "David W.",
          role: "Executive",
          quote: "Understated luxury at its very best.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-luxury-gold-yellow-gradient-studio-wall-well-use-as-background-layout-banner-product-presentation_1258-68354.jpg",
        },
        {
          name: "Maya S.",
          role: "Blogger",
          quote: "I love the sustainability focus of this house.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-getting-engaged_23-2148060497.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Help"
      title="Common Questions"
      items={[
        {
          question: "Where are you based?",
          answer: "Stockholm, Sweden.",
        },
        {
          question: "Are fragrances unisex?",
          answer: "Yes, our scents are designed for all.",
        },
        {
          question: "How to contact us?",
          answer: "Via email at contact@shayfragrances.com.",
        },
      ]}
      imageSrc="https://storage.googleapis.com/webild/users/user_3FJXOXUaeiCCmwuE8b3sX6RMmgW/uploaded-1782599710043-yrmbp66e.jpg"
      description="Answers to your inquiries about our scents and house."
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Collaboration"
      text="Let's create something extraordinary together."
      primaryButton={{
        text: "Email Us",
        href: "mailto:contact@shayfragrances.com",
      }}
      secondaryButton={{
        text: "Visit Studio",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
