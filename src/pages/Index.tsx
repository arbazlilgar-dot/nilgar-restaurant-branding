import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, Users, Award, Quote, MapPin, Phone, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import dishButterChicken from "@/assets/dish-butter-chicken.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishKebab from "@/assets/dish-kebab.jpg";
import dishPaneer from "@/assets/dish-paneer.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const Index = () => {
  const popularDishes = [
    {
      name: "Murgh Makhani",
      description: "Tender chicken in velvety tomato-cream sauce with aromatic spices",
      price: "₹495",
      image: dishButterChicken,
    },
    {
      name: "Lucknowi Biryani",
      description: "Slow-cooked lamb with saffron-infused basmati rice and royal spices",
      price: "₹595",
      image: dishBiryani,
    },
    {
      name: "Seekh Kebab",
      description: "Char-grilled minced lamb skewers with traditional Awadhi spices",
      price: "₹395",
      image: dishKebab,
    },
    {
      name: "Paneer Tikka Masala",
      description: "Cottage cheese in rich, creamy tomato gravy with bell peppers",
      price: "₹375",
      image: dishPaneer,
    },
  ];

  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Only the finest ingredients sourced from trusted suppliers across India",
    },
    {
      icon: Clock,
      title: "Authentic Recipes",
      description: "Time-honored Mughlai recipes passed down through generations",
    },
    {
      icon: Users,
      title: "Family Dining",
      description: "Warm, welcoming ambiance perfect for family gatherings and celebrations",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for culinary excellence by top food critics in Gujarat",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Food Blogger",
      content: "The biryani at Nilgar is absolutely divine. Each grain of rice tells a story of tradition and love. A must-visit for anyone who appreciates authentic Mughlai cuisine.",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      role: "Regular Guest",
      content: "We celebrate every family occasion at Nilgar. The staff knows our preferences, the ambiance is perfect, and the food never disappoints. It's our home away from home.",
      rating: 5,
    },
    {
      name: "Ananya Mehta",
      role: "Food Critic",
      content: "Nilgar strikes the perfect balance between authenticity and innovation. Their butter chicken is the benchmark against which I measure all others.",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Nilgar Restaurant signature dishes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4 lg:px-8 pt-24">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
                Welcome to Nilgar Restaurant
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-fade-up delay-100">
              <span className="text-foreground">Where Royal</span>
              <br />
              <span className="text-gradient-gold">Mughlai Flavors</span>
              <br />
              <span className="text-foreground">Come Alive</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up delay-200">
              Experience the grandeur of authentic Mughlai cuisine in an elegant setting. 
              Every dish tells a story of tradition, crafted with love and served with pride.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Link to="/menu">
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  Explore Our Menu
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="elegant" size="xl" className="w-full sm:w-auto">
                  Reserve a Table
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/30 animate-fade-up delay-400">
              <div>
                <p className="text-3xl font-display font-bold text-accent">15+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground">Signature Dishes</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-accent">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Guests</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-[bounce_2s_infinite]" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={restaurantInterior}
                  alt="Nilgar Restaurant elegant interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-charcoal p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-4xl font-display font-bold">15+</p>
                <p className="text-sm font-medium">Years of Legacy</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
                A Legacy of{" "}
                <span className="text-gradient-gold">Culinary Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nilgar Restaurant was born from a passion to bring the authentic flavors of 
                Mughlai cuisine to Ahmedabad. Our recipes have been refined over generations, 
                each dish a testament to the royal culinary traditions of Lucknow and Hyderabad.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From the aromatic biryanis to the melt-in-your-mouth kebabs, every creation 
                at Nilgar is crafted with premium ingredients and unwavering attention to detail. 
                We invite you to experience the warmth of Indian hospitality and the grandeur 
                of Mughlai flavors.
              </p>
              <Link to="/about">
                <Button variant="elegant" size="lg">
                  Discover Our Journey
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Signature Creations
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              Our Most <span className="text-gradient-gold">Loved Dishes</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover the flavors that have made us a beloved destination for food connoisseurs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {popularDishes.map((dish, index) => (
              <div
                key={dish.name}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-elegant"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-accent font-bold">{dish.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="gold" size="lg">
                View Full Menu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              The <span className="text-gradient-gold">Nilgar Difference</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              What makes dining at Nilgar an unforgettable experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-8 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-charcoal transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-accent group-hover:text-charcoal transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Guest Experiences
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              What Our <span className="text-gradient-gold">Guests Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card p-8 rounded-xl border border-border hover:border-accent/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-burgundy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20" />
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Experience{" "}
            <span className="text-accent">Culinary Excellence?</span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Join us for an unforgettable dining experience. Whether it's a family celebration, 
            a romantic dinner, or a casual meal, we're here to make it special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Book Your Table Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="elegant" size="xl">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Directly
              </Button>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-foreground/20">
            <div className="flex items-center gap-2 text-foreground/80">
              <MapPin className="w-5 h-5 text-accent" />
              <span>123 Heritage Lane, Navrangpura, Ahmedabad</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="w-5 h-5 text-accent" />
              <span>Open Daily: 12PM - 11PM</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
