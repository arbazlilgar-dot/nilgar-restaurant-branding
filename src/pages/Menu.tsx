import { useState } from "react";
import { ChefHat } from "lucide-react";

const menuData = {
  starters: [
    { name: "Paneer Tikka", description: "Marinated cottage cheese grilled in tandoor with bell peppers", price: "₹295", veg: true },
    { name: "Chicken Malai Tikka", description: "Creamy, succulent chicken pieces with mild spices", price: "₹345", veg: false },
    { name: "Seekh Kebab", description: "Minced lamb skewers with aromatic Awadhi spices", price: "₹395", veg: false },
    { name: "Dahi Ke Kebab", description: "Soft, melt-in-mouth yogurt and paneer kebabs", price: "₹275", veg: true },
    { name: "Galouti Kebab", description: "Legendary Lucknowi minced lamb kebabs with over 100 spices", price: "₹445", veg: false },
    { name: "Hara Bhara Kebab", description: "Spinach and green pea patties with mint chutney", price: "₹245", veg: true },
    { name: "Tandoori Prawns", description: "Jumbo prawns marinated in tangy spices, grilled to perfection", price: "₹595", veg: false },
    { name: "Mutton Shammi Kebab", description: "Tender minced mutton with lentils and aromatic spices", price: "₹395", veg: false },
  ],
  mains: [
    { name: "Murgh Makhani", description: "Butter chicken in rich tomato-cream sauce with fenugreek", price: "₹495", veg: false },
    { name: "Rogan Josh", description: "Kashmiri-style lamb curry with aromatic spices", price: "₹545", veg: false },
    { name: "Paneer Lababdar", description: "Cottage cheese in rich tomato and cashew gravy", price: "₹395", veg: true },
    { name: "Dal Makhani", description: "Black lentils slow-cooked overnight with butter and cream", price: "₹295", veg: true },
    { name: "Mutton Korma", description: "Tender mutton in aromatic white gravy with nuts", price: "₹595", veg: false },
    { name: "Palak Paneer", description: "Cottage cheese cubes in creamy spinach gravy", price: "₹345", veg: true },
    { name: "Chicken Handi", description: "Chicken cooked in traditional clay pot with rich spices", price: "₹475", veg: false },
    { name: "Shahi Paneer", description: "Royal paneer curry with cream, nuts and saffron", price: "₹375", veg: true },
    { name: "Nihari", description: "Slow-cooked lamb shank stew, the royal breakfast of Nawabs", price: "₹625", veg: false },
    { name: "Dum Aloo Kashmiri", description: "Baby potatoes in rich yogurt-based Kashmiri gravy", price: "₹295", veg: true },
  ],
  biryani: [
    { name: "Lucknowi Lamb Biryani", description: "Slow-cooked lamb with saffron basmati rice and whole spices", price: "₹595", veg: false },
    { name: "Hyderabadi Chicken Biryani", description: "Fragrant rice layered with spiced chicken and crispy onions", price: "₹495", veg: false },
    { name: "Paneer Biryani", description: "Aromatic rice with marinated cottage cheese and mint", price: "₹395", veg: true },
    { name: "Gosht Biryani", description: "Traditional mutton biryani with royal spices", price: "₹625", veg: false },
    { name: "Vegetable Pulao", description: "Fragrant rice with garden vegetables and mild spices", price: "₹295", veg: true },
  ],
  breads: [
    { name: "Butter Naan", description: "Soft leavened bread brushed with butter", price: "₹65", veg: true },
    { name: "Garlic Naan", description: "Naan topped with fresh garlic and coriander", price: "₹75", veg: true },
    { name: "Laccha Paratha", description: "Layered whole wheat bread with ghee", price: "₹70", veg: true },
    { name: "Keema Naan", description: "Naan stuffed with spiced minced lamb", price: "₹145", veg: false },
    { name: "Cheese Naan", description: "Naan filled with melted cheese", price: "₹95", veg: true },
    { name: "Tandoori Roti", description: "Whole wheat bread from clay oven", price: "₹45", veg: true },
    { name: "Sheermal", description: "Saffron-flavored sweet bread", price: "₹85", veg: true },
    { name: "Roomali Roti", description: "Paper-thin handkerchief bread", price: "₹55", veg: true },
  ],
  desserts: [
    { name: "Gulab Jamun", description: "Warm milk dumplings soaked in rose-scented syrup", price: "₹145", veg: true },
    { name: "Shahi Tukda", description: "Royal bread pudding with rabri and nuts", price: "₹195", veg: true },
    { name: "Phirni", description: "Creamy rice pudding with saffron and cardamom", price: "₹165", veg: true },
    { name: "Kulfi Falooda", description: "Traditional Indian ice cream with vermicelli", price: "₹195", veg: true },
    { name: "Gajar Ka Halwa", description: "Warm carrot pudding with nuts and khoya", price: "₹175", veg: true },
    { name: "Rasmalai", description: "Soft cottage cheese dumplings in sweet saffron milk", price: "₹185", veg: true },
  ],
  beverages: [
    { name: "Masala Chai", description: "Traditional spiced Indian tea", price: "₹75", veg: true },
    { name: "Mango Lassi", description: "Creamy yogurt drink with Alphonso mango", price: "₹145", veg: true },
    { name: "Rose Sharbat", description: "Refreshing rose-flavored drink", price: "₹95", veg: true },
    { name: "Thandai", description: "Traditional nut and spice infused milk", price: "₹165", veg: true },
    { name: "Fresh Lime Soda", description: "Sparkling lime with a hint of mint", price: "₹85", veg: true },
    { name: "Kashmiri Kahwa", description: "Saffron green tea with almonds and cinnamon", price: "₹125", veg: true },
  ],
};

type Category = keyof typeof menuData;

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("starters");

  const categories: { key: Category; label: string }[] = [
    { key: "starters", label: "Starters" },
    { key: "mains", label: "Main Course" },
    { key: "biryani", label: "Biryani & Rice" },
    { key: "breads", label: "Breads" },
    { key: "desserts", label: "Desserts" },
    { key: "beverages", label: "Beverages" },
  ];

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Culinary Excellence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4 mb-6">
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated selection of authentic Mughlai dishes, each prepared with 
            time-honored recipes and the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 sticky top-20 bg-background/95 backdrop-blur-md py-4 z-10">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-4 md:px-6 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                  activeCategory === category.key
                    ? "bg-accent text-charcoal shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {menuData[activeCategory].map((item, index) => (
                <div
                  key={item.name}
                  className="group flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                      <span
                        className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center text-xs ${
                          item.veg
                            ? "border-green-500 text-green-500"
                            : "border-red-500 text-red-500"
                        }`}
                      >
                        ●
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-accent">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chef's Note */}
          <div className="max-w-2xl mx-auto mt-16 p-8 bg-card rounded-xl border border-accent/30 text-center">
            <ChefHat className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Chef's Recommendation
            </h3>
            <p className="text-muted-foreground">
              All our dishes can be customized to your spice preference. Please inform our 
              staff about any dietary restrictions or allergies. We use only premium, 
              fresh ingredients sourced daily.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
