import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PartyPopper, Heart, Briefcase, Home, ArrowRight, Users, Utensils, Star } from "lucide-react";
import partyEventsBg from "@/assets/party-events.jpg";

const eventTypes = [
  { icon: PartyPopper, label: "Birthday Parties" },
  { icon: Heart, label: "Anniversaries" },
  { icon: Briefcase, label: "Corporate Events" },
  { icon: Home, label: "Family Gatherings" },
];

const EventsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={partyEventsBg}
          alt="Party and events venue at Nilgar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/75" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              Celebrations & Events
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Host Your <span className="text-gradient-gold">Special Moments</span> With Us
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              From intimate family dinners to grand celebrations, our dedicated events team creates unforgettable experiences with customized menus and impeccable service.
            </p>

            {/* Event Types */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {eventTypes.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50"
                >
                  <event.icon className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">{event.label}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-accent" />
                <span>Up to 200 Guests</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Utensils className="w-5 h-5 text-accent" />
                <span>Multi-Cuisine</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="w-5 h-5 text-accent" />
                <span>Premium Service</span>
              </div>
            </div>

            <Link to="/events">
              <Button variant="gold" size="xl">
                Plan Your Event
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {[
              { value: "500+", label: "Events Hosted" },
              { value: "200", label: "Max Guests" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Happy Clients" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border text-center"
              >
                <p className="text-4xl font-display font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
