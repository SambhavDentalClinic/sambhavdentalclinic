import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
{
  name: "Kiran Mahajan",
  role: "Patient since 2021",
  rating: 5,
  content: "Dr. Priyanka is extremely gentle and professional. My root canal was completely painless! The clinic is spotless and the staff is very caring. Highly recommend for anyone in Hinjewadi.",
  avatar: "PS"
},
{
  name: "Rahul Deshmukh",
  role: "Patient since 2019",
  rating: 5,
  content: "Best dental clinic in Pune! Got my dental implants done here and the results are amazing. The transparent pricing and follow-up care is exceptional.",
  avatar: "RD"
},
{
  name: "Sneha Kulkarni",
  role: "Patient since 2022",
  rating: 5,
  content: "The whole family comes here now. Kids love Dr. Priyanka's gentle approach, and we appreciate the honest consultations. No unnecessary treatments recommended.",
  avatar: "SK"
},
{
  name: "Amit Patil",
  role: "Patient since 2023",
  rating: 5,
  content: "Got my teeth whitening done here and the results exceeded my expectations! Modern equipment, hygienic environment, and very reasonable prices. Five stars!",
  avatar: "AP"
}];


export function TestimonialsSection() {
  return (
    <section className="py-20 bg-dental-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            Patient Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say About Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from real patients. See why thousands trust us with their smiles.
          </p>
        </div>

        {/* Google Rating Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-6 py-3 shadow-card">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              )}
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="text-sm">
              <span className="font-bold text-foreground">4.9</span>
              <span className="text-muted-foreground"> rating on Google</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) =>
          <div
            key={testimonial.name}
            className="bg-card rounded-2xl p-8 shadow-card relative"
            style={{ animationDelay: `${index * 100}ms` }}>

              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-dental-teal-light" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) =>
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              )}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/testimonials">
            <Button variant="outline" size="lg">
              View All Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>);

}