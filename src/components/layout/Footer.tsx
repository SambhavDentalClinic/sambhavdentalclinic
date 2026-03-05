import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Sambhav Dental Clinic" 
                className="h-12 md:h-14 w-auto object-contain bg-white rounded-lg p-2 shadow-sm"
              />
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Gentle, painless, and reliable dental care that puts your comfort and smile first.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Dental Blog</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Patient Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link to="/services#general" className="hover:text-primary transition-colors">General Dentistry</Link></li>
              <li><Link to="/services#cosmetic" className="hover:text-primary transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link to="/services#root-canal" className="hover:text-primary transition-colors">Root Canal Treatment</Link></li>
              <li><Link to="/services#implants" className="hover:text-primary transition-colors">Dental Implants</Link></li>
              <li><Link to="/services#orthodontics" className="hover:text-primary transition-colors">Orthodontics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="opacity-80">Near Metrostation, Jambhulkar Complex, Shivaji Chowk, Hinjewadi, Pune - 57</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+918237100519" className="opacity-80 hover:text-primary transition-colors">8237100519</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:priyankakaushal25@gmail.com" className="opacity-80 hover:text-primary transition-colors text-xs sm:text-sm break-all">priyankakaushal25@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <div className="opacity-80">
                  <p className="text-primary font-medium">Monday - Sunday</p>
                  <p>11:00 AM - 2:00 PM</p>
                  <p>6:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10 md:mt-12 rounded-2xl overflow-hidden h-48 md:h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.599902111458!2d73.73542707496476!3d18.592068182515465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb38561bcd85%3A0x4a9b45e1a5440698!2sSambhav%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1768040643808!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sambhav Dental Clinic Location"
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-primary-foreground/10 flex flex-col gap-4 text-sm opacity-70 text-center md:text-left">
          <p className="order-2 md:order-1">© 2026 Sambhav Dental Clinic. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 order-1 md:order-2 md:ml-auto">
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
            <p className="text-xs">Designed & Developed by <span className="text-primary font-medium">Taher Ali</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
