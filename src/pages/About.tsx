import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, ChefHat, ArrowRight } from "lucide-react";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import chefImage from "@/assets/chef.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue perfection in every dish, maintaining the highest standards of quality and taste.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for Mughlai cuisine drives us to create memorable dining experiences.",
    },
    {
      icon: Users,
      title: "Hospitality",
      description: "Every guest is family. We treat you with warmth, respect, and personalized attention.",
    },
    {
      icon: ChefHat,
      title: "Tradition",
      description: "We honor centuries-old recipes while embracing modern culinary techniques.",
    },
  ];

  const milestones = [
    { year: "2009", title: "The Beginning", description: "Nilgar opens its doors in Ahmedabad with a vision to bring authentic Mughlai cuisine to Gujarat." },
    { year: "2012", title: "First Recognition", description: "Awarded 'Best Mughlai Restaurant' by Gujarat Tourism for culinary excellence." },
    { year: "2016", title: "Expansion", description: "Renovated to double capacity while maintaining our intimate, elegant ambiance." },
    { year: "2020", title: "15 Years Strong", description: "Celebrated 15 years of serving the community, with over 10,000 happy guests." },
    { year: "2024", title: "The Legacy Continues", description: "Continuing to innovate while staying true to our roots and traditions." },
  ];

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4 mb-6">
            About <span className="text-gradient-gold">Nilgar</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of passion, tradition, and culinary excellence spanning over 15 years
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                The Nilgar Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                Born from a Love for{" "}
                <span className="text-gradient-gold">Authentic Flavors</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nilgar Restaurant was founded in 2009 by Chef Imran Qureshi, whose family has 
                  been custodians of Lucknowi culinary traditions for five generations. The name 
                  "Nilgar" draws from the Persian word for "treasure house" – a fitting description 
                  for a place where precious recipes are preserved and shared.
                </p>
                <p>
                  What started as a small family restaurant has grown into one of Ahmedabad's 
                  most beloved dining destinations. Yet, our core values remain unchanged: 
                  authentic recipes, premium ingredients, and hospitality that makes every 
                  guest feel like royalty.
                </p>
                <p>
                  Every dish at Nilgar tells a story – of the royal kitchens of Lucknow, 
                  of the spice trails of Hyderabad, of recipes passed down through generations. 
                  We invite you to be part of this story.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={restaurantInterior}
                  alt="Nilgar Restaurant interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={chefImage}
                  alt="Chef Imran Qureshi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Meet Our Chef
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                Chef <span className="text-gradient-gold">Imran Qureshi</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 25 years of culinary experience, Chef Imran is a master of 
                  Mughlai cuisine. Trained in the legendary kitchens of Lucknow and having 
                  worked at prestigious establishments across India, he brings unparalleled 
                  expertise to every dish.
                </p>
                <p>
                  "Cooking is not just about flavors," says Chef Imran. "It's about preserving 
                  history, honoring traditions, and creating moments that families remember 
                  forever. At Nilgar, we don't just serve food – we serve memories."
                </p>
                <p>
                  His signature dishes – the Galouti Kebab and the Lucknowi Biryani – have 
                  earned acclaim from food critics and loyal patrons alike. Under his guidance, 
                  our kitchen team maintains the highest standards of authenticity and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              Our <span className="text-gradient-gold">Core Values</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <value.icon className="w-8 h-8 text-accent group-hover:text-charcoal transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              <span className="text-gradient-gold">Milestones</span> Along the Way
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <span className="text-accent font-bold text-2xl font-display">
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full md:-translate-x-1/2 ring-4 ring-background" />

                  {/* Empty space for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-burgundy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20" />
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Experience the <span className="text-accent">Nilgar Difference</span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-xl mx-auto mb-10">
            Join us for an unforgettable culinary journey through the flavors of Mughlai cuisine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="gold" size="xl">
                Explore Our Menu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="elegant" size="xl">
                Make a Reservation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
