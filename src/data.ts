export type PizzaSize = "Small" | "Medium" | "Large";

export interface PizzaPrice {
  Small?: number;
  Medium?: number;
  Large?: number;
}
export interface pizzaDataInterface {
  id: number;
  title: string;
  description: string;
  image?: string; // optional (commented in data)
  sizes: PizzaSize[];
  crusts: string[];
  price: PizzaPrice;
  isAvailable: boolean;
}

export const pizzas: pizzaDataInterface[] = [
  {
    id: 1,
    title: "Margherita Classic",
    description:
      "Fresh mozzarella cheese, rich tomato sauce, and basil leaves on a crispy base.",
    // image: "/pizzas/margherita.png",
    sizes: ["Small", "Medium", "Large"],
    crusts: ["Classic", "Thin", "Cheese Burst"],
    price: {
      Small: 699,
      Medium: 999,
      Large: 1299,
    },
    isAvailable: true,
  },
  {
    id: 2,
    title: "Pepperoni Feast",
    description:
      "Loaded with premium pepperoni slices and extra mozzarella cheese.",
    // image: "/pizzas/pepperoni.png",
    sizes: ["Small", "Medium", "Large"],
    crusts: ["Classic", "Thin", "Stuffed Crust"],
    price: {
      Small: 799,
      Medium: 1099,
      Large: 1399,
    },
    isAvailable: true,
  },
  {
    id: 3,
    title: "BBQ Chicken",
    description:
      "Grilled chicken, BBQ sauce, onions, and smoky mozzarella cheese.",
    // image: "/pizzas/bbq-chicken.png",
    sizes: ["Medium", "Large"],
    crusts: ["Classic", "Thin"],
    price: {
      Medium: 1199,
      Large: 1499,
    },
    isAvailable: true,
  },
  {
    id: 4,
    title: "Veggie Supreme",
    description:
      "A colorful mix of bell peppers, olives, mushrooms, onions, and sweet corn.",
    // image: "/pizzas/veggie-supreme.png",
    sizes: ["Small", "Medium", "Large"],
    crusts: ["Classic", "Thin", "Whole Wheat"],
    price: {
      Small: 649,
      Medium: 949,
      Large: 1249,
    },
    isAvailable: true,
  },
  {
    id: 5,
    title: "Four Cheese Delight",
    description:
      "Mozzarella, cheddar, parmesan, and blue cheese for cheese lovers.",
    // image: "/pizzas/four-cheese.png",
    sizes: ["Medium", "Large"],
    crusts: ["Classic", "Cheese Burst"],
    price: {
      Medium: 1299,
      Large: 1599,
    },
    isAvailable: true,
  },
  {
    id: 6,
    title: "Spicy Beef Pizza",
    description: "Spicy minced beef, jalapenos, onions, and hot sauce.",
    // image: "/pizzas/spicy-beef.png",
    sizes: ["Small", "Medium", "Large"],
    crusts: ["Classic", "Thin"],
    price: {
      Small: 849,
      Medium: 1149,
      Large: 1449,
    },
    isAvailable: true,
  },
  {
    id: 7,
    title: "Chicken Tikka",
    description:
      "Pakistani style chicken tikka with onions and special tikka sauce.",
    // image: "/pizzas/chicken-tikka.png",
    sizes: ["Medium", "Large"],
    crusts: ["Classic", "Cheese Burst"],
    price: {
      Medium: 1199,
      Large: 1499,
    },
    isAvailable: true,
  },
  {
    id: 8,
    title: "Hawaiian",
    description: "Juicy chicken, pineapple chunks, and mozzarella cheese.",
    // image: "/pizzas/hawaiian.png",
    sizes: ["Small", "Medium", "Large"],
    crusts: ["Classic", "Thin"],
    price: {
      Small: 749,
      Medium: 1049,
      Large: 1349,
    },
    isAvailable: true,
  },
  {
    id: 9,
    title: "Fajita Chicken",
    description:
      "Spicy fajita chicken, onions, capsicum, and special fajita sauce.",
    // image: "/pizzas/fajita.png",
    sizes: ["Medium", "Large"],
    crusts: ["Classic", "Thin", "Stuffed Crust"],
    price: {
      Medium: 1249,
      Large: 1549,
    },
    isAvailable: true,
  },
  {
    id: 10,
    title: "Seafood Special",
    description: "Prawns, calamari, olives, and mozzarella with garlic sauce.",
    // image: "/pizzas/seafood.png",
    sizes: ["Large"],
    crusts: ["Classic"],
    price: {
      Large: 1699,
    },
    isAvailable: false,
  },
];
