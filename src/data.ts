import type { title } from "process";

type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with spicy pepperoni, jalapeños, red pepper flakes, and melted mozzarella cheese.",

    img: "/image/food1.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 2,
    title: "Margherita Pizza",
    desc: "A classic Neapolitan pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil.",
    img: "/image/food2.png",
    price: 18.5,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 3 },
      { title: "Large", additionalPrice: 5 },
    ],
  },
  {
    id: 3,
    title: "Chicken Alfredo Pasta",
    desc: "Creamy alfredo sauce tossed with grilled chicken, fettuccine pasta, and sprinkled with Parmesan cheese.",
    img: "/image/food3.png",
    price: 16.75,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Large", additionalPrice: 4 },
    ],
  },
  {
    id: 4,
    title: "Cheeseburger",
    desc: "Juicy beef patty topped with cheddar cheese, lettuce, tomato, onion, pickles, and special sauce on a toasted sesame seed bun.",
    img: "/image/food4.png",
    price: 12.99,
    options: [
      { title: "Single Patty", additionalPrice: 0 },
      { title: "Double Patty", additionalPrice: 3 },
    ],
  },
  {
    id: 5,
    title: "Vegetable Stir-Fry",
    desc: "A colorful mix of fresh vegetables stir-fried in a savory sauce served over steamed rice.",
    img: "/image/food5.png",
    price: 14.5,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Large", additionalPrice: 3 },
    ],
  },
  {
    id: 6,
    title: "Shrimp Scampi",
    desc: "Tender shrimp cooked in garlic butter sauce with lemon juice, white wine, and parsley, served over angel hair pasta.",
    img: "/image/food6.png",
    price: 22.9,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Large", additionalPrice: 5 },
    ],
  },
  {
    id: 7,
    title: "BBQ Ribs",
    desc: "Slow-cooked baby back ribs slathered in tangy BBQ sauce, served with coleslaw and seasoned fries.",
    img: "/image/food7.png",
    price: 28.75,
    options: [
      { title: "Half Rack", additionalPrice: 0 },
      { title: "Full Rack", additionalPrice: 7 },
    ],
  },
  {
    id: 8,
    title: "Caprese Salad",
    desc: "A refreshing salad made with ripe tomatoes, fresh mozzarella, basil leaves, drizzled with balsamic glaze and olive oil.",
    img: "/image/food8.png",
    price: 10.5,
    options: [{ title: "Regular", additionalPrice: 0 }],
  },
  {
    id: 9,
    title: "Tiramisu",
    desc: "A delightful Italian dessert made with layers of espresso-soaked ladyfingers, mascarpone cheese, and dusted with cocoa powder.",
    img: "/image/food9.png",
    price: 8.99,
    options: [{ title: "Regular", additionalPrice: 0 }],
  },
  {
    id: 10,
    title: "Fish and Chips",
    desc: "Crispy battered fish served with golden fries, tartar sauce, and a side of coleslaw.",

    img: "/image/food10.png",
    price: 15.25,
    options: [{ title: "Regular", additionalPrice: 0 }],
  },
];
