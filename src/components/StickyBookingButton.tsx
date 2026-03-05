import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function StickyBookingButton() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Link to="/contact">
        <Button variant="cta" size="lg" className="shadow-xl w-full rounded-full">
          <Calendar className="w-5 h-5" />
          Book Appointment
        </Button>
      </Link>
    </div>
  );
}
