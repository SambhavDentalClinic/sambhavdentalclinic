import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Star, Award } from "lucide-react";
import heroDental from "@/assets/hero-dental.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDental}
          alt="Modern dental clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50 md:from-foreground/90 md:via-foreground/70 md:to-foreground/40" />
      </div>

      <div className="container relative z-10 py-8 md:py-0">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 animate-fade-up">
            <Award className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary-foreground">
              Trusted by 10,000+ Happy Patients
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6 animate-fade-up animation-delay-100">
            Trusted Dental Care for a{" "}
            <span className="text-primary">Healthy, Confident Smile</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-6 md:mb-8 leading-relaxed animate-fade-up animation-delay-200">
            Experience gentle, painless treatments with our certified dental experts. 
            Modern equipment, strict hygiene protocols, and personalized care for your entire family.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 animate-fade-up animation-delay-300">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+918237100519">
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call Now: 8237100519
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-primary-foreground">20+</p>
                <p className="text-xs md:text-sm text-primary-foreground/70">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/20 flex items-center justify-center">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-primary-foreground">4.9★</p>
                <p className="text-xs md:text-sm text-primary-foreground/70">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
