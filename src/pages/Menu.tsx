import { useState, useEffect, useRef } from "react";
import { ChefHat, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { menuCategories, MenuDish } from "@/data/menuData";
import MenuDishCard from "@/components/MenuDishCard";
import DishDetailModal from "@/components/DishDetailModal";

const ScrollRevealCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {children}
    </div>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [selectedDish, setSelectedDish] = useState<MenuDish | null>(null);

  const currentCategory = menuCategories.find(c => c.id === activeCategory) || menuCategories[0];

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Culinary Excellence</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4 mb-6">
            Our <span className="text-gradient-gold">Royal Menu</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our curated collection of Mughlai masterpieces, each dish crafted with time-honored recipes and the finest ingredients
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-10 bg-background/95 backdrop-blur-md py-4 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 md:px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-accent text-charcoal shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            {currentCategory.name}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {currentCategory.dishes.map((dish, index) => (
              <ScrollRevealCard key={dish.id} index={index}>
                <MenuDishCard dish={dish} onViewDetails={setSelectedDish} />
              </ScrollRevealCard>
            ))}
          </div>

          {/* Chef's Note */}
          <div className="max-w-2xl mx-auto mt-16 p-8 bg-card rounded-xl border border-accent/30 text-center">
            <ChefHat className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Chef's Recommendation</h3>
            <p className="text-muted-foreground">
              All dishes can be customized to your spice preference. Please inform our staff about dietary restrictions or allergies. We use only premium, fresh ingredients sourced daily.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Reserve Your Table
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dish Detail Modal */}
      <DishDetailModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </main>
  );
};

export default Menu;
