import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { SEO } from "@/components/SEO";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Service | Sambhav Dental Clinic"
        description="Terms of service for Sambhav Dental Clinic, Hinjewadi, Pune. Appointment policy, treatment consent, payment terms, and clinic hours."
        canonical="/terms"
      />
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg">
              Welcome to Sambhav Dental Clinic. By using our services, you agree to the 
              following terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">Appointment Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointments are subject to availability</li>
              <li>Please arrive 10 minutes before your scheduled time</li>
              <li>Cancellations should be made at least 24 hours in advance</li>
              <li>Late arrivals may result in rescheduling</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8">Treatment Consent</h2>
            <p>
              Before any treatment, we will explain the procedure, risks, and alternatives. 
              Your consent will be obtained before proceeding with any dental work.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment is due at the time of service</li>
              <li>We accept cash, cards, and UPI payments</li>
              <li>Treatment estimates are provided before procedures</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8">Clinic Hours</h2>
            <p>
              Monday - Sunday<br />
              Morning: 11:00 AM - 2:00 PM<br />
              Evening: 6:00 PM - 9:00 PM
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">Contact Information</h2>
            <p>
              Sambhav Dental Clinic<br />
              Near Metrostation, Jambhulkar Complex, Shivaji Chowk, Hinjewadi, Pune - 57<br />
              Phone: 8237100519<br />
              Email: priyankakaushal25@gmail.com
            </p>

            <p className="text-sm mt-8">Last updated: January 2026</p>
          </div>
        </div>
        </main>
        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default Terms;
