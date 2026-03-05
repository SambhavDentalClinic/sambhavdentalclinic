import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
} from "lucide-react";

const treatmentOptions = [
  "General Checkup",
  "Teeth Cleaning",
  "Cosmetic Dentistry",
  "Root Canal Treatment",
  "Dental Implants",
  "Orthodontics",
  "Other",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    treatment: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Name must be less than 100 characters.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit mobile number.";
    }

    if (!formData.treatment) {
      newErrors.treatment = "Please select a treatment type.";
    }

    if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const date = formData.date || "Not specified";
    const treatment = formData.treatment;
    const message = formData.message.trim() || "No additional message";

    const text = `🦷 *Appointment Request*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Preferred Date:* ${encodeURIComponent(date)}%0A*Treatment:* ${encodeURIComponent(treatment)}%0A*Message:* ${encodeURIComponent(message)}`;

    const whatsappUrl = `https://wa.me/918237100519?text=${text}`;
    window.open(whatsappUrl, "_blank");

    setFormData({ name: "", phone: "", date: "", treatment: "", message: "" });
    setErrors({});
  };
  return (
    <>
      <SEO
        title="Book Appointment | Sambhav Dental Clinic Hinjewadi"
        description="Book your dental appointment at Sambhav Dental Clinic, Hinjewadi, Pune. Call 8237100519 or fill our online form. Located near Metro Station, Shivaji Chowk. Open Monday-Sunday."
        keywords="book dentist appointment pune, dental clinic contact, dentist near me hinjewadi, dental appointment online, sambhav dental contact"
        canonical="/contact"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-dental-teal-light via-background to-dental-mint">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center px-4">
              <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Book Appointment
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Schedule Your Dental Visit Today
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Fill out the form below and our team will contact you within 24 hours 
                to confirm your appointment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <div className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-card">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    Request an Appointment
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                    Fill in your details and preferred time. We'll confirm your booking shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`h-11 md:h-12 ${errors.name ? "border-destructive" : ""}`}
                          maxLength={100}
                        />
                        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                            setFormData({ ...formData, phone: val });
                          }}
                          className={`h-11 md:h-12 ${errors.phone ? "border-destructive" : ""}`}
                          maxLength={10}
                        />
                        {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Date
                      </label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="h-11 md:h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Treatment Type *
                      </label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className={`w-full h-11 md:h-12 px-4 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm md:text-base ${errors.treatment ? "border-destructive" : "border-input"}`}
                      >
                        <option value="">Select a treatment</option>
                        {treatmentOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.treatment && <p className="text-destructive text-xs mt-1">{errors.treatment}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Additional Message
                      </label>
                      <Textarea
                        placeholder="Tell us more about your dental concerns..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full text-sm md:text-base">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                      Request Appointment
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-4 md:space-y-6 order-1 lg:order-2">
                {/* Contact Cards */}
                <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-card">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-dental-teal-light flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">Call Us</h3>
                      <a href="tel:+918237100519" className="text-primary font-medium text-sm md:text-base">
                        8237100519
                      </a>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        Monday - Sunday
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-card">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-dental-teal-light flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">Visit Us</h3>
                      <p className="text-foreground text-sm md:text-base">
                        Near Metrostation,<br />
                        Jambhulkar Complex,<br />
                        Shivaji Chowk, Hinjewadi,<br />
                        Pune - 57
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-card">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-dental-teal-light flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Working Hours</h3>
                      <div className="text-xs md:text-sm space-y-1">
                        <p className="flex justify-between gap-4">
                          <span className="text-muted-foreground">Morning</span>
                          <span className="text-foreground">11:00 AM - 2:00 PM</span>
                        </p>
                        <p className="flex justify-between gap-4">
                          <span className="text-muted-foreground">Evening</span>
                          <span className="text-foreground">6:00 PM - 9:00 PM</span>
                        </p>
                        <p className="text-primary font-medium">Monday - Sunday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
