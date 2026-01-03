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



export type Beverage = {
  id: number;
  title: string;
  price: number;
  image: string;
};