import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Reservation Request Received!",
      description: "We'll contact you shortly to confirm your booking.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Heritage Lane, Navrangpura", "Ahmedabad, Gujarat 380009"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 79 2345 6789"],
      links: ["tel:+919876543210", "tel:+917923456789"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@nilgar.com", "reservations@nilgar.com"],
      links: ["mailto:hello@nilgar.com", "mailto:reservations@nilgar.com"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Lunch: 12:00 PM - 3:30 PM", "Dinner: 7:00 PM - 11:00 PM", "Open all days"],
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4 mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reserve your table, inquire about private events, or simply say hello. 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {info.links ? (
                        <a
                          href={info.links[i]}
                          className="hover:text-accent transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Make a Reservation
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                Book Your <span className="text-gradient-gold">Table</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you to confirm your reservation. 
                For immediate assistance, please call us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                      Number of Guests *
                    </label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="20"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="2"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date & Time *
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="datetime-local"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Special Requests
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any dietary requirements, special occasions, or preferences..."
                    rows={4}
                    className="bg-background border-border focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Submitting...</span>
                    </>
                  ) : (
                    <>
                      Submit Reservation Request
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Find Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                Our <span className="text-gradient-gold">Location</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Located in the heart of Navrangpura, Ahmedabad. Easy parking available 
                for our guests.
              </p>

              {/* Map Placeholder */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8999999999996!2d72.5566!3d23.0333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAwLjAiTiA3MsKwMzMnMjMuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nilgar Restaurant Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Quick Info */}
              <div className="mt-6 p-6 bg-background rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-2">
                      Complimentary Valet Parking
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Enjoy hassle-free parking with our complimentary valet service 
                      available during dinner hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
