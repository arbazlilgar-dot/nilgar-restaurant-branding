import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Users, Phone, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface TableReservationProps {
  variant?: "section" | "compact";
}

const TableReservation = ({ variant = "section" }: TableReservationProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const guestOptions = ["2", "3", "4", "5", "6", "7", "8+"];

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setFormData({ name: "", phone: "", date: "", time: "", guests: "2" });
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-card border-border"
            required
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-card border-border"
            required
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="bg-card border-border"
            required
          />
          <Input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="bg-card border-border"
            required
          />
          <select
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="flex h-10 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {guestOptions.map((num) => (
              <option key={num} value={num}>{num} Guests</option>
            ))}
          </select>
        </div>
        <Button type="submit" variant="gold" className="w-full">
          Reserve Now
        </Button>
      </form>
    );
  }

  return (
    <section id="reservation" className="py-16 md:py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-50" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Reserve Your Table
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-4">
              Book a <span className="text-gradient-gold">Table</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Secure your spot for an unforgettable dining experience
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-elegant">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Contact Number
                </label>
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card border-border"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Date
                </label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-card border-border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Time
                </label>
                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="bg-card border-border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Guests
                </label>
                <div className="flex flex-wrap gap-2">
                  {guestOptions.map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData({ ...formData, guests: num })}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        formData.guests === num
                          ? "bg-accent text-charcoal"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" variant="gold" size="xl" className="min-w-[200px]">
                <Check className="w-5 h-5 mr-2" />
                Reserve Table
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Instant confirmation • No booking fee
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TableReservation;
