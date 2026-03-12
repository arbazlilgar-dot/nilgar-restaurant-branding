import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishButterChicken from "@/assets/dish-butter-chicken.jpg";
import dishKebab from "@/assets/dish-kebab.jpg";
import dishPaneer from "@/assets/dish-paneer.jpg";

const instagramImages = [
  { src: dishBiryani, alt: "Biryani" },
  { src: dishButterChicken, alt: "Butter Chicken" },
  { src: dishKebab, alt: "Kebab" },
  { src: dishPaneer, alt: "Paneer" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Instagram Preview */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="text-center mb-8">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Follow Us</span>
          <h3 className="font-display text-2xl font-bold text-foreground mt-2">
            <span className="text-gradient-gold">@nilgar.restaurant</span>
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {instagramImages.map((img, i) => (
            <a key={i} href="#" className="group relative aspect-square overflow-hidden rounded-lg">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-accent" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <span className="text-3xl font-display font-bold text-gradient-gold">Nilgar</span>
                <span className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">Restaurant</span>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experience the rich flavors of Mughlai cuisine in an elegant setting. Where tradition meets modern dining excellence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-charcoal transition-all duration-300" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-charcoal transition-all duration-300" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "Our Menu", path: "/menu" },
                  { name: "Events", path: "/events" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "About Us", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-muted-foreground hover:text-accent transition-colors duration-300">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">123 Heritage Lane, Navrangpura,<br />Ahmedabad, Gujarat 380009</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-accent transition-colors">+91 98765 43210</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="mailto:hello@nilgar.com" className="text-muted-foreground hover:text-accent transition-colors">hello@nilgar.com</a>
                </li>
              </ul>
              <div className="mt-6">
                {/* Map embed */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8494!2d72.5603!3d23.0356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzA4LjIiTiA3MsKwMzMnMzcuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nilgar Restaurant Location"
                  />
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-6">Opening Hours</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p className="font-medium text-foreground">Lunch</p>
                    <p>12:00 PM - 3:30 PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p className="font-medium text-foreground">Dinner</p>
                    <p>7:00 PM - 11:00 PM</p>
                  </div>
                </li>
                <li className="text-sm text-muted-foreground mt-4 pl-8">Open all days of the week</li>
              </ul>
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="w-full glow-hover">
                    Reserve Table
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Nilgar Restaurant. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">Crafted with passion for authentic Mughlai cuisine</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
