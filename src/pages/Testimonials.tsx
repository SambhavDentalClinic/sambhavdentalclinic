import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { StickyBookingButton } from "@/components/StickyBookingButton";
import { Link } from "react-router-dom";
import { Star, Quote, Calendar } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const testimonials = [
  {
    name: "Vishwanath Khot",
    role: "Cosmetic Dentistry Patient",
    rating: 5,
    content: "Excellent Dental Care Experience I had a very good experience at Sambhav Dental Clinic, Hinjawadi. Dr. Priyanka Madam did my teeth filling, and I am extremely satisfied with the treatment. The quality of the material used was excellent, and the entire procedure was done very carefully and professionally. She explained everything clearly, made me feel comfortable throughout, and ensured there was no discomfort. I highly recommend Sambhav Dental Clinic .",
    avatar: "vk",
    treatment: "Teeth Filling",
    date: "2 Months Ago",
  },
  {
    name: "Salim Shaikh",
    role: "Root Canal Patient",
    rating: 5,
    content: "Clean clinic, painless root canal, friendly staff. I was dreading the procedure but Dr. Priyanka made it completely stress-free. The modern equipment really makes a difference. Best dental experience ever.",
    avatar: "ss",
    treatment: "Root Canal Treatment",
    date: "2 Months Ago",
  },
  {
    name: "Prajakta Bite",
    role: "Family Patient",
    rating: 5,
    content: "Thank you so much, Doctor, for your excellent treatment and care. I truly appreciate your patience, guidance, and the way you explained everything so clearly. You made the entire dental procedure comfortable and stress-free. I am very grateful for your support and professionalism. ",
    avatar: "PB",
    treatment: "General Dentistry",
    date: "1 Month Ago",
  },
  {
    name: "Kiran Mahajan",
    role: "Implant Patient",
    rating: 5,
    content: "Best dental experience so far. I was scared about teeth cleaning but the doctor made me very comfortable. No pain at all. Explained before and after care clearly. Very clean clinic and good service. Thank you dr. Priyanka😊",
    avatar: "KM",
    treatment: "Dental Cleaning",
    date: "2 Months Ago",
  },
  {
    name: "Chaitali Mane",
    role: "Orthodontics Patient",
    rating: 5,
    content: "Today I visited sambhav Dental clinic and per month visited sambhav Dental clinic form Priyanka mam tooth extraction .highly recommend ed for anyone need of quality dental care. Priyanka mam helped me to get out pain I was facing with my teeth. Nice experience with the sambhav clinic ☺️",
    avatar: "CM",
    treatment: "Tooth Extraction",
    date: "4 Months Ago",
  },
  {
    name: "DNYANESHWAR WAGH",
    role: "Emergency Patient",
    rating: 4,
    content: "Had a great experience with the dental treatment. Dr. priyanka Maam was skilled, caring, and explained everything clearly.",
    avatar: "DW",
    treatment: "Routine Checkup",
    date: "A Month Ago",
  },
  {
    name: "sucheta shah",
    role: "Teeth Whitening Patient",
    rating: 5,
    content: "Dr. Priyanka provides top-notch care with a warm and friendly attitude. She is professional, efficient, and trustworthy. Highly recommend to anyone looking for the best dental care.",
    avatar: "SS",
    treatment: "Teeth Whitening",
    date: "5 Months Ago",
  },
  {
    name: "bharati Metre",
    role: "Regular Patient",
    rating: 5,
    content: "Priyanka mam helped me to get out of pain I was facing with my teeth. She recommended exact treatments and after doing that I got well in couple of weeks. Nice experience with the Sambhav Clinic.",
    avatar: "BM",
    treatment: "Routine Checkups",
    date: "6 Months Ago",
  },
];

const TestimonialsPage = () => {
  // Review Schema for SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sambhav Dental Clinic",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
    },
    review: testimonials.slice(0, 5).map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
      },
      reviewBody: t.content,
    })),
  };

  return (
    <>
      <SEO
        title="Patient Reviews & Testimonials | Sambhav Dental Clinic"
        description="Read 500+ patient reviews of Sambhav Dental Clinic, Hinjewadi. 4.9★ Google rating. Real experiences from patients about root canal, implants, teeth whitening, and more."
        keywords="sambhav dental reviews, dentist reviews pune, dental clinic testimonials, patient feedback hinjewadi, best rated dentist pune"
        canonical="/testimonials"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dental-cream via-background to-dental-teal-light">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Patient Reviews
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What Our Patients Say About Us
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Real experiences from real patients. See why thousands of families 
                trust Sambhav Dental Clinic with their smiles.
              </p>

              {/* Google Rating Badge */}
              <div className="inline-flex items-center gap-4 bg-card rounded-full px-8 py-4 shadow-card">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-left">
                  <p className="font-bold text-foreground text-xl">4.9</p>
                  <p className="text-sm text-muted-foreground">Based on 500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`bg-card rounded-2xl p-8 shadow-card relative ${
                    index === 0 || index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-dental-teal-light" />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Treatment Badge */}
                  <span className="inline-block text-xs font-medium text-primary bg-dental-teal-light rounded-full px-3 py-1 mb-4">
                    {testimonial.treatment}
                  </span>

                  {/* Content */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Join Our Happy Patients?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Experience the same gentle, professional care that our patients rave about. 
              Book your appointment today!
            </p>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Calendar className="w-5 h-5" />
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </section>
        </main>
        <Footer />
        <StickyBookingButton />
      </div>
    </>
  );
};

export default TestimonialsPage;
