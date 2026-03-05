import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { StickyBookingButton } from "@/components/StickyBookingButton";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Calendar } from "lucide-react";
import { FaTooth, FaTeethOpen, FaChild, FaTeeth } from "react-icons/fa";
import { 
  GiTooth, 
  GiToothbrush, 
  GiCrown,
  GiTargetShot,
  GiSparkles,
  GiHealthNormal
} from "react-icons/gi";
import { MdOutlineCleanHands, MdFace } from "react-icons/md";
import { TbDental } from "react-icons/tb";

const services = [
  {
    id: "general",
    icon: GiHealthNormal,
    title: "General Dentistry",
    description: "Comprehensive dental care to maintain your oral health and prevent future problems.",
    features: [
      "Routine dental checkups",
      "Professional teeth cleaning",
      "Dental fillings & restorations",
      "Gum disease treatment",
      "Oral cancer screening",
    ],
    painInfo: "Most general dentistry procedures are painless. We use gentle techniques and local anesthesia when needed to ensure your comfort.",
  },
  {
    id: "extractions",
    icon: FaTooth,
    title: "Tooth Extractions",
    description: "Safe and painless tooth removal procedures for various dental conditions.",
    features: [
      "Simple tooth extraction",
      "Root piece extraction",
      "Impacted tooth extraction",
      "Wisdom tooth removal",
      "Post-extraction care",
    ],
    painInfo: "All extractions are performed under local anesthesia ensuring a completely painless experience. Post-operative discomfort is manageable with medication.",
  },
  {
    id: "pediatric",
    icon: FaChild,
    title: "Pediatric Dentistry",
    description: "Specialized gentle dental care designed for children of all ages.",
    features: [
      "Child-friendly dental checkups",
      "Fluoride treatment for cavity prevention",
      "Pit and fissure sealants",
      "Pulpectomy for kids",
      "Stainless steel (SS) crowns",
    ],
    painInfo: "We specialize in making dental visits fun and stress-free for children. Gentle techniques ensure minimal discomfort.",
  },
  {
    id: "orthodontics",
    icon: FaTeeth,
    title: "Orthodontic Treatment",
    description: "Straighten your teeth with modern braces and aligners for a perfect smile.",
    features: [
      "Metal braces",
      "Ceramic braces",
      "Clear aligners (Invisalign)",
      "Bonded retainers",
      "Teen & adult orthodontics",
    ],
    painInfo: "Initial adjustment may cause mild discomfort that resolves within days. Clear aligners offer a more comfortable experience.",
  },
  {
    id: "dentures",
    icon: FaTeethOpen,
    title: "Dentures & Prosthetics",
    description: "Replace missing teeth with comfortable, natural-looking dentures and prosthetics.",
    features: [
      "Complete dentures",
      "Removable partial dentures",
      "Fixed dental bridges",
      "Implant-supported dentures",
      "Denture repairs & adjustments",
    ],
    painInfo: "Denture fitting is a non-invasive process. Any initial discomfort from new dentures subsides as you adjust.",
  },
  {
    id: "crowns",
    icon: GiCrown,
    title: "Dental Crowns & Bridges",
    description: "Restore damaged teeth with high-quality crowns made from premium materials.",
    features: [
      "Ceramic crowns",
      "Metal crowns",
      "Zirconia crowns",
      "Fixed bridges",
      "Crown repairs",
    ],
    painInfo: "Crown placement involves minimal preparation under anesthesia. The final fitting is completely painless.",
  },
  {
    id: "implants",
    icon: GiTargetShot,
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacement solutions that last a lifetime.",
    features: [
      "Single tooth implants",
      "Multiple teeth replacement",
      "All-on-4 implants",
      "Implant-supported dentures",
      "Bone grafting if needed",
    ],
    painInfo: "Implant surgery is performed under anesthesia. Post-operative discomfort is minimal and well-managed with medication.",
  },
  {
    id: "root-canal",
    icon: TbDental,
    title: "Root Canal Treatment",
    description: "Save your natural teeth with our advanced, painless root canal procedures.",
    features: [
      "Painless root canal therapy",
      "Infected tooth treatment",
      "Conservative treatment",
      "Post-treatment restoration",
      "Advanced pain management",
    ],
    painInfo: "Modern root canal treatment is virtually painless! We use advanced anesthesia and techniques to ensure a comfortable experience.",
  },
  {
    id: "cosmetic",
    icon: GiSparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic dental treatments.",
    features: [
      "Teeth whitening & bleaching",
      "Scaling & polishing",
      "Direct veneers",
      "Dental laminates",
      "Smile makeovers",
    ],
    painInfo: "Cosmetic procedures like whitening are completely painless. Veneers may involve minimal sensitivity that subsides quickly.",
  },
];

const ServicesPage = () => {
  // Services Schema for SEO
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Sambhav Dental Clinic",
    medicalSpecialty: "Dentistry",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <>
      <SEO
        title="Dental Services | Root Canal, Implants, Braces | Sambhav Dental Clinic"
        description="Comprehensive dental services in Hinjewadi, Pune: painless root canal, dental implants, teeth whitening, braces & Invisalign, cosmetic dentistry. Affordable pricing by Dr. Priyanka Kaushal."
        keywords="dental services pune, root canal treatment hinjewadi, dental implants cost pune, teeth whitening, braces invisalign pune, cosmetic dentistry, painless dentistry"
        canonical="/services"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dental-teal-light via-background to-dental-mint">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Comprehensive Dental Services for Every Need
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From routine checkups to advanced procedures, our experienced team provides 
                gentle, personalized care using the latest dental technology.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container">
            <div className="space-y-16">
              {services.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24 bg-card rounded-3xl p-8 md:p-10 shadow-card"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-dental-teal-light flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pain Info Box */}
                  <div className="bg-dental-sage-light rounded-xl p-5 mb-6">
                    <p className="text-sm font-medium text-accent mb-1">
                      💡 Is this painful?
                    </p>
                    <p className="text-sm text-foreground/80">
                      {service.painInfo}
                    </p>
                  </div>

                  <Link to="/contact">
                    <Button variant="hero">
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Not Sure Which Treatment You Need?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Book a consultation and our dental experts will assess your needs 
              and recommend the best treatment plan for you.
            </p>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Book Consultation
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

export default ServicesPage;
