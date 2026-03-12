import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50" onClick={() => setIsCartOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-accent" />
            <h2 className="font-display text-xl font-semibold text-foreground">Your Order</h2>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-full hover:bg-muted transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-lg">Your cart is empty</p>
              <p className="text-muted-foreground/60 text-sm mt-2">Add some delicious dishes to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-background rounded-xl border border-border">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-foreground text-sm truncate">{item.name}</h4>
                    <p className="text-accent font-bold mt-1">₹{item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-charcoal transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-foreground font-medium text-sm w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-charcoal transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="self-start p-1.5 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-xl font-display font-bold text-accent">₹{totalPrice}</span>
            </div>
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi! I'd like to order:\n${items.map(i => `${i.quantity}x ${i.name} - ₹${i.price * i.quantity}`).join('\n')}\n\nTotal: ₹${totalPrice}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold" size="lg" className="w-full">
                Order via WhatsApp
              </Button>
            </a>
            <button onClick={clearCart} className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors text-center">
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
