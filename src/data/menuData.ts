import menuSeekhKebab from "@/assets/menu-seekh-kebab.jpg";
import menuShamiKebab from "@/assets/menu-shami-kebab.jpg";
import menuPaneerTikka from "@/assets/menu-paneer-tikka.jpg";
import menuAfghaniChicken from "@/assets/menu-afghani-chicken.jpg";
import menuHyderabadiBiryani from "@/assets/menu-hyderabadi-biryani.jpg";
import menuLucknowiBiryani from "@/assets/menu-lucknowi-biryani.jpg";
import menuRoyalBiryani from "@/assets/menu-royal-biryani.jpg";
import menuVegBiryani from "@/assets/menu-veg-biryani.jpg";
import dishButterChicken from "@/assets/dish-butter-chicken.jpg";
import menuRoganJosh from "@/assets/menu-rogan-josh.jpg";
import dishPaneer from "@/assets/dish-paneer.jpg";
import menuChickenKorma from "@/assets/menu-chicken-korma.jpg";
import dishKebab from "@/assets/dish-kebab.jpg";
import menuMalaiTikka from "@/assets/menu-malai-tikka.jpg";
import menuTandooriPrawns from "@/assets/menu-tandoori-prawns.jpg";
import menuShahiTukda from "@/assets/menu-shahi-tukda.jpg";
import menuGulabJamun from "@/assets/menu-gulab-jamun.jpg";
import menuKesarKulfi from "@/assets/menu-kesar-kulfi.jpg";

export interface MenuDish {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  rating: number;
  veg: boolean;
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  dishes: MenuDish[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: "Royal Starters",
    dishes: [
      {
        id: "seekh-kebab",
        name: "Chicken Seekh Kebab",
        description: "Char-grilled minced chicken skewers with Awadhi spices",
        longDescription: "Our signature seekh kebabs are crafted from finely minced chicken, blended with fresh herbs, ginger, and a secret mix of over 20 Awadhi spices. Each skewer is hand-rolled and slow-grilled over charcoal for that perfect smoky char. Served with mint chutney and onion rings.",
        price: 395,
        image: menuSeekhKebab,
        rating: 5,
        veg: false,
        category: "Royal Starters",
      },
      {
        id: "shami-kebab",
        name: "Mutton Shami Kebab",
        description: "Melt-in-mouth minced mutton patties with aromatic spices",
        longDescription: "A Lucknowi delicacy — tender mutton is slow-cooked with chana dal and a bouquet of whole spices, then shaped into silky patties and shallow-fried to golden perfection. Each bite reveals layers of cardamom, cinnamon, and clove. Served with green chutney.",
        price: 445,
        image: menuShamiKebab,
        rating: 5,
        veg: false,
        category: "Royal Starters",
      },
      {
        id: "paneer-tikka",
        name: "Paneer Tikka",
        description: "Cottage cheese cubes marinated in tandoori spices, chargrilled",
        longDescription: "Premium cottage cheese cubes marinated overnight in a vibrant blend of hung curd, Kashmiri chilli, and aromatic spices. Skewered with bell peppers and onions, then chargrilled in our traditional clay tandoor until perfectly smoky and tender.",
        price: 345,
        image: menuPaneerTikka,
        rating: 4,
        veg: true,
        category: "Royal Starters",
      },
      {
        id: "afghani-chicken",
        name: "Afghani Chicken",
        description: "Creamy cashew-marinated chicken grilled to perfection",
        longDescription: "Succulent chicken pieces are bathed in a rich marinade of cream, cashew paste, white pepper, and cheese, then grilled in our tandoor until golden. The result is an incredibly creamy, mildly spiced chicken that melts in your mouth. A royal court classic.",
        price: 425,
        image: menuAfghaniChicken,
        rating: 5,
        veg: false,
        category: "Royal Starters",
      },
    ],
  },
  {
    id: "biryani",
    name: "Signature Biryani",
    dishes: [
      {
        id: "hyderabadi-biryani",
        name: "Hyderabadi Chicken Biryani",
        description: "Aromatic dum-cooked biryani with saffron and crispy onions",
        longDescription: "Our Hyderabadi biryani follows the authentic dum pukht technique — marinated chicken and fragrant basmati rice are layered with saffron milk, fried onions, and fresh mint, then sealed and slow-cooked over a low flame. The result is a symphony of flavors in every spoonful.",
        price: 495,
        image: menuHyderabadiBiryani,
        rating: 5,
        veg: false,
        category: "Signature Biryani",
      },
      {
        id: "lucknowi-biryani",
        name: "Lucknowi Mutton Biryani",
        description: "Tender mutton with saffron-infused rice and whole spices",
        longDescription: "The pride of Awadhi cuisine — succulent mutton pieces are slow-cooked with aged basmati rice, whole garam masala, and potli masala. Infused with saffron, kewra water, and fresh mint. Each grain is separate, each bite is royal.",
        price: 595,
        image: menuLucknowiBiryani,
        rating: 5,
        veg: false,
        category: "Signature Biryani",
      },
      {
        id: "royal-dum-biryani",
        name: "Royal Dum Biryani",
        description: "Chef's special biryani with premium spices and dry fruits",
        longDescription: "Our chef's magnum opus — a regal biryani featuring the finest cuts of meat, premium aged basmati, and a lavish garnish of cashews, raisins, and edible silver leaf. Sealed with dough and dum-cooked for hours, this is biryani fit for royalty.",
        price: 695,
        image: menuRoyalBiryani,
        rating: 5,
        veg: false,
        category: "Signature Biryani",
      },
      {
        id: "veg-nawabi-biryani",
        name: "Veg Nawabi Biryani",
        description: "Garden vegetables with fragrant rice, nuts, and saffron",
        longDescription: "A vegetarian masterpiece — seasonal vegetables, paneer, and aromatic basmati rice are layered with saffron, rose water, and a delicate blend of Mughlai spices. Garnished with fried cashews and golden raisins. Proof that vegetarian biryani can be truly royal.",
        price: 395,
        image: menuVegBiryani,
        rating: 4,
        veg: true,
        category: "Signature Biryani",
      },
    ],
  },
  {
    id: "curries",
    name: "Mughlai Curries",
    dishes: [
      {
        id: "butter-chicken",
        name: "Butter Chicken",
        description: "Iconic creamy tomato gravy with tender tandoori chicken",
        longDescription: "Our most beloved dish — tandoor-smoked chicken pieces simmered in a velvety sauce of fresh tomatoes, cream, butter, and fenugreek. The recipe has been perfected over 15 years, balancing richness with subtle sweetness. Best paired with butter naan.",
        price: 495,
        image: dishButterChicken,
        rating: 5,
        veg: false,
        category: "Mughlai Curries",
      },
      {
        id: "rogan-josh",
        name: "Mutton Rogan Josh",
        description: "Kashmiri-style lamb curry with aromatic whole spices",
        longDescription: "A Kashmiri classic — tender lamb pieces braised in a rich, aromatic gravy of Kashmiri chillies, fennel, and dried ginger. The meat is slow-cooked until it falls off the bone, infusing every fiber with the warmth of whole spices. Bold, robust, and deeply satisfying.",
        price: 595,
        image: menuRoganJosh,
        rating: 5,
        veg: false,
        category: "Mughlai Curries",
      },
      {
        id: "paneer-butter-masala",
        name: "Paneer Butter Masala",
        description: "Cottage cheese in rich, buttery tomato cream sauce",
        longDescription: "Premium cottage cheese cubes in our signature buttery tomato gravy enriched with cashew paste and fresh cream. A vegetarian delight that rivals any non-veg dish in richness and depth of flavor. Finished with a touch of honey and kasuri methi.",
        price: 395,
        image: dishPaneer,
        rating: 5,
        veg: true,
        category: "Mughlai Curries",
      },
      {
        id: "chicken-korma",
        name: "Chicken Korma",
        description: "Royal white gravy with nuts, saffron, and tender chicken",
        longDescription: "An aristocratic preparation where tender chicken is simmered in a luxurious sauce of yogurt, cashews, almonds, and aromatic spices. Finished with saffron strands and rose water, this mild yet complex curry embodies the refinement of Mughlai cooking.",
        price: 475,
        image: menuChickenKorma,
        rating: 4,
        veg: false,
        category: "Mughlai Curries",
      },
    ],
  },
  {
    id: "tandoori",
    name: "Tandoori Specials",
    dishes: [
      {
        id: "tandoori-chicken",
        name: "Tandoori Chicken",
        description: "Classic half chicken marinated and roasted in clay tandoor",
        longDescription: "The quintessential Indian grill — a half chicken marinated for 24 hours in yogurt, Kashmiri chilli, and a robust spice blend, then roasted in our fiery clay tandoor at 400°C. The exterior is beautifully charred while the inside remains juicy and flavorful.",
        price: 445,
        image: dishKebab,
        rating: 5,
        veg: false,
        category: "Tandoori Specials",
      },
      {
        id: "malai-tikka",
        name: "Malai Chicken Tikka",
        description: "Creamy, mild tikka with cheese and cream marinade",
        longDescription: "For those who prefer subtle elegance — boneless chicken is marinated in a silky blend of cream, cheese, white pepper, and cardamom, then gently cooked in the tandoor. The result is incredibly tender, mildly flavored tikka that pairs beautifully with mint chutney.",
        price: 425,
        image: menuMalaiTikka,
        rating: 4,
        veg: false,
        category: "Tandoori Specials",
      },
      {
        id: "tandoori-prawns",
        name: "Tandoori Prawns",
        description: "Jumbo prawns marinated in spiced yogurt, chargrilled",
        longDescription: "Premium jumbo prawns are marinated in a vibrant mixture of hung curd, ajwain, Kashmiri chilli, and lemon. Chargrilled in the tandoor until the shells turn a gorgeous crimson and the flesh is perfectly succulent. Served with lemon wedges and mint chutney.",
        price: 595,
        image: menuTandooriPrawns,
        rating: 5,
        veg: false,
        category: "Tandoori Specials",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    dishes: [
      {
        id: "shahi-tukda",
        name: "Shahi Tukda",
        description: "Royal bread pudding with saffron rabri and pistachios",
        longDescription: "An opulent Hyderabadi dessert — crispy fried bread slices are soaked in saffron-infused sugar syrup, then layered with rich, slow-cooked rabri and garnished with pistachios, almonds, and edible silver leaf. A fitting finale to any royal meal.",
        price: 245,
        image: menuShahiTukda,
        rating: 5,
        veg: true,
        category: "Desserts",
      },
      {
        id: "gulab-jamun",
        name: "Gulab Jamun",
        description: "Soft milk dumplings in cardamom-rose sugar syrup",
        longDescription: "Golden, perfectly round dumplings made from khoya and paneer, deep-fried until dark golden, then soaked in warm sugar syrup infused with cardamom, rose water, and saffron. Served warm — soft, spongy, and irresistibly sweet.",
        price: 195,
        image: menuGulabJamun,
        rating: 5,
        veg: true,
        category: "Desserts",
      },
      {
        id: "kesar-kulfi",
        name: "Kesar Kulfi",
        description: "Traditional saffron-pistachio Indian ice cream",
        longDescription: "Our kulfi is made the traditional way — full-fat milk is reduced for hours until thick and creamy, then flavored with premium Kashmiri saffron and cardamom. Set in individual molds and topped with crushed pistachios. Dense, creamy, and nothing like regular ice cream.",
        price: 175,
        image: menuKesarKulfi,
        rating: 4,
        veg: true,
        category: "Desserts",
      },
    ],
  },
];
