import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { SEO } from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Sambhav Dental Clinic"
        description="Read the privacy policy of Sambhav Dental Clinic. Learn how we collect, use, and protect your personal and medical information."
        canonical="/privacy"
      />
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg">
              At Sambhav Dental Clinic, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy outlines how we collect, 
              use, and safeguard your data.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal details (name, phone number, email address)</li>
              <li>Medical and dental history</li>
              <li>Appointment booking information</li>
              <li>Treatment records and preferences</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8">How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schedule and manage appointments</li>
              <li>Provide dental care and treatment</li>
              <li>Send appointment reminders</li>
              <li>Improve our services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:<br />
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

export default PrivacyPolicy;
