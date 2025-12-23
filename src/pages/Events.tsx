import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users, Utensils, Phone, PartyPopper, Heart, Briefcase, Home, Check, Star } from "lucide-react";
import partyEventsBg from "@/assets/party-events.jpg";
import { toast } from "@/hooks/use-toast";

const eventTypes = [
  { id: "birthday", label: "Birthday Party", icon: PartyPopper, description: "Celebrate your special day with us" },
  { id: "anniversary", label: "Anniversary", icon: Heart, description: "Romantic celebration for couples" },
  { id: "corporate", label: "Corporate Event", icon: Briefcase, description: "Professional meetings & dinners" },
  { id: "family", label: "Family Gathering", icon: Home, description: "Quality time with loved ones" },
];

const cuisineOptions = [
  { id: "gujarati", label: "Gujarati" },
  { id: "punjabi", label: "Punjabi" },
  { id: "mughlai", label: "Mughlai" },
  { id: "thai", label: "Thai" },
  { id: "mixed", label: "Multi-Cuisine" },
];

const guestRanges = ["10-25", "25-50", "50-100", "100-200", "200+"];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleCuisineToggle = (cuisineId: string) => {
    setSelectedCuisines(prev =>
      prev.includes(cuisineId)
        ? prev.filter(c => c !== cuisineId)
        : [...prev, cuisineId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) {
      toast({
        title: "Please select an event type",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Booking Request Submitted!",
      description: "Our events team will contact you within 24 hours.",
    });
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={partyEventsBg}
            alt="Party and events at Nilgar Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              Celebrations at Nilgar
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Host Your <span className="text-gradient-gold">Special Events</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              From intimate family dinners to grand celebrations, we create memorable experiences with exquisite cuisine and impeccable service.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-accent" />
                <span>Up to 200 Guests</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Utensils className="w-5 h-5 text-accent" />
                <span>Multi-Cuisine Menu</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="w-5 h-5 text-accent" />
                <span>Premium Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Book Your Event
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-4">
              Plan Your <span className="text-gradient-gold">Celebration</span>
            </h2>
            <p className="text-muted-foreground">
              Fill in the details below and our events team will curate a perfect experience for you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            {/* Event Type Selection */}
            <div className="mb-12">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <PartyPopper className="w-5 h-5 text-accent" />
                Select Event Type
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {eventTypes.map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => setSelectedEvent(event.id)}
                    className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                      selectedEvent === event.id
                        ? "border-accent bg-accent/10"
                        : "border-border bg-card hover:border-accent/50"
                    }`}
                  >
                    <event.icon className={`w-8 h-8 mb-3 ${selectedEvent === event.id ? "text-accent" : "text-muted-foreground"}`} />
                    <h4 className="font-display font-semibold text-foreground mb-1">{event.label}</h4>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    {selectedEvent === event.id && (
                      <Check className="w-5 h-5 text-accent mt-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Guest Details
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
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

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  Event Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
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
                    Preferred Time
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
                  <label className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
                  <div className="flex flex-wrap gap-2">
                    {guestRanges.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setFormData({ ...formData, guests: range })}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          formData.guests === range
                            ? "bg-accent text-charcoal"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cuisine Selection */}
            <div className="mb-12">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-accent" />
                Preferred Cuisine (Select one or more)
              </h3>
              <div className="flex flex-wrap gap-3">
                {cuisineOptions.map((cuisine) => (
                  <button
                    key={cuisine.id}
                    type="button"
                    onClick={() => handleCuisineToggle(cuisine.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCuisines.includes(cuisine.id)
                        ? "bg-accent text-charcoal"
                        : "bg-card border border-border text-foreground hover:border-accent/50"
                    }`}
                  >
                    {selectedCuisines.includes(cuisine.id) && <Check className="w-4 h-4 inline mr-2" />}
                    {cuisine.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-12">
              <label className="block text-sm font-medium text-foreground mb-2">Special Requests or Notes</label>
              <Textarea
                placeholder="Tell us about any special arrangements, dietary requirements, or decoration preferences..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-border"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" variant="gold" size="xl" className="min-w-[250px]">
                Submit Booking Request
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Our events team will contact you within 24 hours to confirm details
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Customized Menus", description: "Tailored multi-cuisine menus to suit your preferences and dietary needs" },
              { title: "Elegant Setup", description: "Premium décor, table arrangements, and ambient lighting for your event" },
              { title: "Dedicated Coordinator", description: "Personal event coordinator to ensure seamless execution" },
            ].map((item, index) => (
              <div key={index} className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
