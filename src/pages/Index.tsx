import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { CTASection } from "@/components/home/CTASection";
import { StickyBookingButton } from "@/components/StickyBookingButton";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { SEO } from "@/components/SEO";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";

const Index = () => {
  return (
    <>
      <SEO
        title="Best Dentist in Hinjewadi, Pune | Sambhav Dental Clinic"
        description="Sambhav Dental Clinic offers gentle, painless dental care in Hinjewadi, Pune. Expert root canal, dental implants, teeth whitening, braces & cosmetic dentistry by Dr. Priyanka Kaushal. 20+ years experience. Book now!"
        keywords="dentist hinjewadi, dental clinic pune, best dentist pune, root canal treatment pune, dental implants hinjewadi, teeth whitening pune, orthodontist pune, painless dentistry, cosmetic dentistry pune, braces hinjewadi"
        canonical="/"
      />
      <LocalBusinessSchema />
      <div className="min-h-screen">
        <Header />
        <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
        </main>
        <Footer />
        <StickyBookingButton />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default Index;
