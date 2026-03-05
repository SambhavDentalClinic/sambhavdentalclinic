import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin, Clock } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-foreground" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-foreground" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-primary-foreground" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Book your appointment today and experience the difference of compassionate, 
              professional dental care. Your journey to a healthier smile starts here.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Calendar className="w-5 h-5" />
                  Schedule Appointment
                </Button>
              </Link>
              <a href="tel:+918237100519">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <MapPin className="w-8 h-8 text-primary-foreground mb-4" />
              <h4 className="font-semibold text-primary-foreground mb-2">Visit Our Clinic</h4>
              <p className="text-sm text-primary-foreground/80">
                Near Metrostation, Jambhulkar Complex, Shivaji Chowk, Hinjewadi, Pune - 57
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <Clock className="w-8 h-8 text-primary-foreground mb-4" />
              <h4 className="font-semibold text-primary-foreground mb-2">Working Hours</h4>
              <p className="text-sm text-primary-foreground/80">
                <span className="text-primary-foreground font-medium">Monday - Sunday</span><br />
                11:00 AM - 2:00 PM<br />
                6:00 PM - 9:00 PM
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 sm:col-span-2">
              <Phone className="w-8 h-8 text-primary-foreground mb-4" />
              <h4 className="font-semibold text-primary-foreground mb-2">Call Us</h4>
              <p className="text-sm text-primary-foreground/80">
                Phone: 8237100519<br />
                Email: priyankakaushal25@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
