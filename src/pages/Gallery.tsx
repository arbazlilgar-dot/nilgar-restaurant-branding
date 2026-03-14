import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Camera, Utensils, PartyPopper, Home } from "lucide-react";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryFoodSpread from "@/assets/gallery-food-spread.jpg";
import galleryCelebration from "@/assets/gallery-celebration.jpg";
import dishButterChicken from "@/assets/dish-butter-chicken.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishKebab from "@/assets/dish-kebab.jpg";
import dishPaneer from "@/assets/dish-paneer.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import partyEvents from "@/assets/party-events.jpg";
import cuisineGujarati from "@/assets/cuisine-gujarati.jpg";
import cuisinePunjabi from "@/assets/cuisine-punjabi.jpg";
import cuisineThai from "@/assets/cuisine-thai.jpg";

type Category = "all" | "food" | "ambience" | "events";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category[];
}

const galleryImages: GalleryImage[] = [
  { src: dishButterChicken, alt: "Butter Chicken - Signature Dish", category: ["food"] },
  { src: galleryDining, alt: "Premium Dining Experience", category: ["ambience"] },
  { src: galleryFoodSpread, alt: "Grand Food Spread", category: ["food", "events"] },
  { src: cuisinePunjabi, alt: "Punjabi Cuisine Collection", category: ["food"] },
  { src: partyEvents, alt: "Birthday Party Setup", category: ["events"] },
  { src: restaurantInterior, alt: "Elegant Restaurant Interior", category: ["ambience"] },
  { src: dishBiryani, alt: "Lucknowi Biryani", category: ["food"] },
  { src: galleryCelebration, alt: "Family Celebration", category: ["events"] },
  { src: cuisineGujarati, alt: "Gujarati Thali", category: ["food"] },
  { src: galleryKitchen, alt: "Live Kitchen View", category: ["ambience"] },
  { src: dishKebab, alt: "Seekh Kebab Platter", category: ["food"] },
  { src: cuisineThai, alt: "Thai Curry Selection", category: ["food"] },
  { src: dishPaneer, alt: "Paneer Tikka Masala", category: ["food"] },
];

const categories = [
  { id: "all" as Category, label: "All Photos", icon: Camera },
  { id: "food" as Category, label: "Food", icon: Utensils },
  { id: "ambience" as Category, label: "Ambience", icon: Home },
  { id: "events" as Category, label: "Events", icon: PartyPopper },
];

const GalleryRevealItem = ({ children, index }: { children: React.ReactNode; index: number }) => {
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
      className={`transition-all duration-600 ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {children}
    </div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category.includes(activeCategory));

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Visual Journey
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4 mb-6">
            Our <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the ambiance, artistry, and celebrations that define Nilgar Restaurant
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-10 bg-background/95 backdrop-blur-md py-4 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-accent text-charcoal shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <GalleryRevealItem key={`${activeCategory}-${index}`} index={index}>
                <div
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-foreground text-sm font-medium">{image.alt}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-charcoal" />
                    </div>
                  </div>
                </div>
              </GalleryRevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[80vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-elegant"
            />
            <p className="text-center text-foreground mt-4 font-display text-lg">
              {filteredImages[currentIndex].alt}
            </p>
            <p className="text-center text-muted-foreground text-sm mt-1">
              {currentIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
