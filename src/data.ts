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
    img: "/image/food28.png",
    price: 18.5,
    options: [
      { "title": "Small", "additionalPrice": 0 },
      { "title": "Medium", "additionalPrice": 3 },
      { "title": "Large", "additionalPrice": 5 },
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
    img: "/image/food13.png",
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
    img: "/image/food9.png",
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
    img: "/image/food2.png",
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
    img: "/image/food17.png",
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
    img: "/image/food11.png",
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

    img: "/image/food14.png",
    price: 15.25,
    options: [{ title: "Regular", additionalPrice: 0 }],
  },
];

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 4,
    slug: "salads",
    title: "Salads",
    desc: "Crisp Green Salads, vibrant veggies, and delicious dressings for a refreshing meal.",
    img: "/image/food11.png",
    color: "green",
  },
  {
    id: 5,
    slug: "sandwiches",
    title: "Sandwiches",
    desc: "Satisfy your hunger with our sandwiches filled with premium ingredients.",
    img: "/image/food15.png",
    color: "brown",
  },
  {
    id: 6,
    slug: "seafood",
    title: "Seafood",
    desc: "From grilled salmon to shrimp scampi, indulge in our delicious seafood dishes.",
    img: "/image/food21.png",
    color: "blue",
  },
];

export const sandwiches: Products = [
  {
    id: 1,
    title: "Classic Club Sandwich",
    desc: "Layers of roasted turkey, crispy bacon, fresh lettuce, ripe tomatoes, and creamy mayonnaise between toasted slices of bread.",
    img: "/image/food15.png",
    price: 10.99,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Combo ", additionalPrice: 3 },
      { title: "Large Combo", additionalPrice: 5 },
    ],
  },
  {
    id: 2,
    title: "Grilled Chicken Panini",
    desc: "Grilled chicken breast, melted cheese, caramelized onions, and tangy pesto sauce pressed between crispy, toasted ciabatta bread.",
    img: "/image/food13.png",
    price: 12.75,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Combo ", additionalPrice: 4 },
    ],
  },
  {
    id: 3,
    title: "Vegetarian Wrap",
    desc: "A colorful medley of fresh veggies, hummus, avocado, and feta cheese wrapped in a soft flour tortilla.",
    img: "/image/food14.png",
    price: 9.5,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Combo ", additionalPrice: 4 },
    ],
  },
  {
    id: 4,
    title: "Philly Cheesesteak",
    desc: "Tender slices of beef, grilled onions, bell peppers, and melted provolone cheese on a toasted hoagie roll.",
    img: "/image/food16.png",
    price: 14.99,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Combo ", additionalPrice: 3 },
      { title: "Large Combo", additionalPrice: 5 },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Rainbow Roll",
  desc: "Indulge in our colorful Rainbow Roll, featuring a variety of fresh fish such as tuna, salmon, and avocado, rolled with sushi rice and seaweed, topped with vibrant slices of fish and avocado for a delightful sushi experience.",
  img: "/image/food24.png",
  price: 18.99,
  options: [
    { title: "Regular", additionalPrice: 0 },
    { title: "Combo ", additionalPrice: 4 },
    { title: "Large Combo", additionalPrice: 6 },
  ],
};
