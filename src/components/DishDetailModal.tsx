import { X, Star, ShoppingCart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface DishDetailModalProps {
  dish: {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    price: number;
    image: string;
    rating: number;
    veg: boolean;
    category: string;
  } | null;
  onClose: () => void;
}

const DishDetailModal = ({ dish, onClose }: DishDetailModalProps) => {
  const { addItem } = useCart();

  if (!dish) return null;

  const handleAddToCart = () => {
    addItem({ id: dish.id, name: dish.name, price: dish.price, image: dish.image });
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full z-50 bg-card rounded-2xl border border-border overflow-hidden shadow-elegant animate-scale-in max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors">
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="aspect-video overflow-hidden">
          <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-wider text-accent font-medium">{dish.category}</span>
                {dish.veg && (
                  <span className="flex items-center gap-1 text-xs text-green-500">
                    <Leaf className="w-3 h-3" /> Veg
                  </span>
                )}
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{dish.name}</h2>
            </div>
            <span className="text-2xl font-bold text-accent whitespace-nowrap">₹{dish.price}</span>
          </div>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < dish.rating ? "fill-accent text-accent" : "text-muted-foreground/30"}`} />
            ))}
            <span className="text-sm text-muted-foreground ml-2">{dish.rating}.0</span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{dish.longDescription}</p>

          <Button variant="gold" size="lg" className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Order — ₹{dish.price}
          </Button>
        </div>
      </div>
    </>
  );
};

export default DishDetailModal;
