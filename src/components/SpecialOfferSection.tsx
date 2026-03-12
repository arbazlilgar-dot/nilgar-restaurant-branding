import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import specialOfferBg from "@/assets/special-offer-buffet.jpg";

const SpecialOfferSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={specialOfferBg} alt="Weekend Royal Feast" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Weekend <span className="text-gradient-gold">Royal Feast</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-6">
            Unlimited Mughlai Buffet — Experience the grandeur of royal dining
          </p>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="w-5 h-5 text-accent" />
              <span>Friday – Sunday</span>
            </div>
            <div className="text-foreground/80">
              <span className="text-3xl font-display font-bold text-accent">₹999</span>
              <span className="text-muted-foreground ml-2">per person</span>
            </div>
          </div>

          <ul className="space-y-2 mb-8 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Live tandoor counter</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> 20+ Mughlai signature dishes</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Royal dessert station</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Complimentary welcome drink</li>
          </ul>

          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent("Hi! I'd like to book for the Weekend Royal Feast buffet.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="gold" size="xl">
              Book Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
