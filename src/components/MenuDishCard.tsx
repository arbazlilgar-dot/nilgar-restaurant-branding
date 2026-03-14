import { Star, ShoppingCart, Eye, Leaf, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { MenuDish } from "@/data/menuData";
import { toast } from "@/hooks/use-toast";

interface MenuDishCardProps {
  dish: MenuDish;
  onViewDetails: (dish: MenuDish) => void;
}

const MenuDishCard = ({ dish, onViewDetails }: MenuDishCardProps) => {
  const { addItem, items } = useCart();

  const cartItem = items.find((item) => item.id === dish.id);
  const isInCart = !!cartItem;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id: dish.id, name: dish.name, price: dish.price, image: dish.image });
    toast({ title: "✅ Item added to your order!", description: `${dish.name} — ₹${dish.price}` });
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-elegant">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Veg badge */}
        {dish.veg && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-green-600/90 backdrop-blur-sm rounded-full text-xs text-white font-medium">
            <Leaf className="w-3 h-3" /> Veg
          </div>
        )}

        {/* "In Cart" badge */}
        {isInCart && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs text-charcoal font-bold">
            <Check className="w-3 h-3" /> {cartItem.quantity} Added
          </div>
        )}

        {/* Quick view button */}
        <button
          onClick={() => onViewDetails(dish)}
          className="absolute bottom-3 right-3 p-2.5 rounded-full bg-accent/90 text-charcoal opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="View details"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < dish.rating ? "fill-accent text-accent" : "text-muted-foreground/20"}`} />
          ))}
        </div>

        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
          {dish.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {dish.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-display font-bold text-accent">₹{dish.price}</span>
          <Button
            variant={isInCart ? "outline" : "gold"}
            size="sm"
            onClick={handleAddToCart}
            className={`text-xs ${isInCart ? "border-accent text-accent hover:bg-accent hover:text-charcoal" : ""}`}
          >
            <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
            {isInCart ? `Added (${cartItem.quantity})` : "Add to Order"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuDishCard;
