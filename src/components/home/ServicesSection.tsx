import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Heart, 
  Zap, 
  Crown, 
  Smile, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "General Dentistry",
    description: "Comprehensive checkups, cleanings, and fillings to maintain your oral health.",
    href: "/services#general",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Smile design, veneers, and teeth whitening for a dazzling smile.",
    href: "/services#cosmetic",
  },
  {
    icon: Zap,
    title: "Root Canal Treatment",
    description: "Painless root canal procedures to save and restore your natural teeth.",
    href: "/services#root-canal",
  },
  {
    icon: Crown,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look and feel natural.",
    href: "/services#implants",
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description: "Modern braces and clear aligners for perfectly aligned teeth.",
    href: "/services#orthodontics",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Dental Care for Your Entire Family
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine checkups to advanced procedures, we offer complete dental solutions with a gentle touch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-dental-teal-light flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {/* CTA Card */}
          <div className="bg-primary rounded-2xl p-8 flex flex-col justify-center text-primary-foreground">
            <h3 className="text-2xl font-bold mb-3">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Book an appointment today and experience gentle, professional dental care.
            </p>
            <Link to="/contact">
              <Button variant="heroOutline" className="w-full">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
