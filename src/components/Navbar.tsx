import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">Nilgar</span>
            <span className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground">Restaurant</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`relative font-medium transition-colors duration-300 ${isActive(link.path) ? "text-accent" : "text-foreground/80 hover:text-accent"}`}>
                {link.name}
                {isActive(link.path) && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /><span className="text-sm">+91 98765 43210</span>
            </a>
            
            {/* Cart Button */}
            <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-muted-foreground hover:text-accent transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-charcoal text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <Link to="/contact">
              <Button variant="gold" size="lg">Reserve Table</Button>
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Cart */}
            <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-foreground hover:text-accent transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-charcoal text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground hover:text-accent transition-colors" aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`text-lg font-medium py-2 transition-colors ${isActive(link.path) ? "text-accent" : "text-foreground/80 hover:text-accent"}`}>
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4">
                <Button variant="gold" size="lg" className="w-full">Reserve Table</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
