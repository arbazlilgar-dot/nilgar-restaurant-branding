import { useState } from "react";
import { ChefHat, Leaf } from "lucide-react";
import cuisineGujarati from "@/assets/cuisine-gujarati.jpg";
import cuisinePunjabi from "@/assets/cuisine-punjabi.jpg";
import cuisineThai from "@/assets/cuisine-thai.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  veg: boolean;
}

interface Cuisine {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  items: MenuItem[];
}

const cuisines: Cuisine[] = [
  {
    id: "gujarati",
    name: "Gujarati Cuisine",
    tagline: "Authentic Flavors of Gujarat",
    description: "Experience the vibrant, home-style cooking of Gujarat with its perfect balance of sweet, sour, and spicy flavors. Our Gujarati thali brings together traditional recipes passed down through generations.",
    image: cuisineGujarati,
    items: [
      { name: "Undhiyu", description: "Traditional mixed vegetable preparation with fenugreek dumplings, cooked in earthen pot", price: "₹345", veg: true },
      { name: "Kathiyawadi Sabzi", description: "Rustic spiced vegetables in authentic Kathiyawadi style with garlic and red chillies", price: "₹285", veg: true },
      { name: "Rotla with Ringan", description: "Millet flatbread served with smoky roasted brinjal and fresh garlic chutney", price: "₹225", veg: true },
      { name: "Dal Baati", description: "Crispy wheat balls served with five-lentil dal and churma sweet", price: "₹295", veg: true },
      { name: "Kadhi Khichdi", description: "Comfort food combination of yogurt curry with rice and lentils", price: "₹265", veg: true },
      { name: "Gujarati Thali", description: "Complete meal with rotli, dal, sabzi, rice, kadhi, farsan, and sweets", price: "₹495", veg: true },
    ],
  },
  {
    id: "punjabi",
    name: "Punjabi Cuisine",
    tagline: "Rich & Robust North Indian Flavors",
    description: "Indulge in the hearty, butter-rich flavors of Punjab. Our chefs bring authentic dhaba-style cooking with premium ingredients and traditional tandoor techniques.",
    image: cuisinePunjabi,
    items: [
      { name: "Butter Chicken", description: "Tender chicken in silky tomato-cream sauce with fenugreek and butter", price: "₹495", veg: false },
      { name: "Paneer Butter Masala", description: "Cottage cheese cubes in rich, creamy tomato gravy with cashew paste", price: "₹395", veg: true },
      { name: "Dal Makhani", description: "Black lentils slow-cooked overnight with butter, cream, and aromatic spices", price: "₹295", veg: true },
      { name: "Tandoori Roti & Naan", description: "Assorted clay oven breads: butter naan, garlic naan, and tandoori roti", price: "₹145", veg: true },
      { name: "Tandoori Chicken", description: "Half chicken marinated in yogurt and spices, char-grilled in tandoor", price: "₹445", veg: false },
      { name: "Amritsari Fish", description: "Crispy batter-fried fish fillets with carom seeds and chaat masala", price: "₹395", veg: false },
    ],
  },
  {
    id: "mughlai",
    name: "Mughlai Cuisine",
    tagline: "Royal Recipes from the Nawabs",
    description: "Our signature Mughlai dishes represent centuries of culinary excellence from the royal kitchens. Rich gravies, aromatic biryanis, and melt-in-mouth kebabs define this cuisine.",
    image: dishBiryani,
    items: [
      { name: "Lucknowi Lamb Biryani", description: "Slow-cooked lamb with saffron basmati, whole spices, and crispy onions", price: "₹595", veg: false },
      { name: "Galouti Kebab", description: "Legendary Lucknowi minced lamb kebabs with over 100 spices", price: "₹445", veg: false },
      { name: "Murgh Korma", description: "Tender chicken in aromatic white gravy with nuts and saffron", price: "₹475", veg: false },
      { name: "Nihari", description: "Slow-cooked lamb shank stew, the royal breakfast of Nawabs", price: "₹625", veg: false },
      { name: "Shahi Paneer", description: "Royal cottage cheese curry with cream, nuts, and rose water", price: "₹375", veg: true },
      { name: "Hyderabadi Chicken Dum", description: "Aromatic chicken dum biryani with mint and fried onions", price: "₹495", veg: false },
    ],
  },
  {
    id: "thai",
    name: "Thai Cuisine",
    tagline: "Fresh & Aromatic Asian Flavors",
    description: "Transport your taste buds to Thailand with our chef's special Thai preparations. Fresh herbs, coconut milk, and the perfect balance of sweet, sour, salty, and spicy.",
    image: cuisineThai,
    items: [
      { name: "Thai Green Curry", description: "Creamy coconut curry with Thai basil, bamboo shoots, and vegetables", price: "₹395", veg: true },
      { name: "Thai Red Curry", description: "Aromatic red curry with coconut cream, bell peppers, and your choice of protein", price: "₹425", veg: false },
      { name: "Pad Thai Noodles", description: "Stir-fried rice noodles with tamarind sauce, peanuts, and bean sprouts", price: "₹345", veg: true },
      { name: "Thai Fried Rice", description: "Wok-tossed jasmine rice with vegetables, egg, and Thai seasonings", price: "₹295", veg: true },
      { name: "Tom Yum Soup", description: "Hot and sour soup with lemongrass, galangal, and mushrooms", price: "₹245", veg: true },
      { name: "Thai Basil Chicken", description: "Stir-fried minced chicken with holy basil and Thai chillies", price: "₹375", veg: false },
    ],
  },
];

const Menu = () => {
  const [activeCuisine, setActiveCuisine] = useState(cuisines[0].id);

  const currentCuisine = cuisines.find(c => c.id === activeCuisine) || cuisines[0];

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
            Explore our curated selection of multi-cuisine dishes, each prepared with 
            time-honored recipes and the finest ingredients
          </p>
        </div>
      </section>

      {/* Cuisine Tabs */}
      <section className="sticky top-20 z-10 bg-background/95 backdrop-blur-md py-4 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine.id}
                onClick={() => setActiveCuisine(cuisine.id)}
                className={`px-4 md:px-6 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                  activeCuisine === cuisine.id
                    ? "bg-accent text-charcoal shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cuisine.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Cuisine Header with Image */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={currentCuisine.image}
                  alt={currentCuisine.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  {currentCuisine.tagline}
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
                  {currentCuisine.name}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {currentCuisine.description}
                </p>
                <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                  <Leaf className="w-4 h-4 text-green-500" />
                  <span>Vegetarian options available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
              Signature Dishes
            </h3>
            <div className="grid gap-6">
              {currentCuisine.items.map((item, index) => (
                <div
                  key={item.name}
                  className="group flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {item.name}
                      </h4>
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
