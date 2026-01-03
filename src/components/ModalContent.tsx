"use client";

import Image from "next/image";
import { DialogTitle } from "./ui/dialog";
import { pizzaDataInterface } from "@/app/types/types";
import { useState } from "react";

interface CardProps {
  data: pizzaDataInterface;
}

const toppings = [
  {
    image: "/chicken.png",
    title: "Chicken",
    price: 100,
  },
  {
    image: "/cheese.png",
    title: "Cheese",
    price: 50,
  },
  {
    image: "/mushroom.png",
    title: "Mushroom",
    price: 50,
  },
];

const ModalContent = ({ data }: CardProps) => {
  const [selectedSize, setSelectedSize] = useState<string>(data.sizes[0]);
  const [selectedCrust, setSelectedCrust] = useState<string>(data.crusts[0]);
  const [selectedTopping, setselectedTopping] = useState<string[]>([]);
  console.log(selectedTopping);

  const toggleTopping = (title: string) => {
    setselectedTopping(
      (prev) =>
        prev.includes(title)
          ? prev.filter((t) => t !== title) // remove
          : [...prev, title] // add
    );
  };
  const toppingsTotal = selectedTopping.reduce((total, title) => {
    const topping = toppings.find((t) => t.title === title);
    return total + Number(topping?.price || 0);
  }, 0);

  console.log(toppingsTotal);

  let price = data.price[selectedSize as keyof typeof data.price];

  let finalTotal = toppingsTotal + Number(price);

  console.log(finalTotal);

  return (
    <div className="flex flex-col md:flex-row  gap-8    ">
      <figure className="flex  items-center">
        <Image
          src="/pizza-main.png"
          alt="pizza image"
          height={160}
          width={160}
          className="mx-auto "
        />
      </figure>
      <div className="flex flex-col gap-4 ">
        <DialogTitle className="font-poppins text-xl">{data.title}</DialogTitle>

        {/* Crust */}
        <div>
          <h4 className="mb-1.5 text-sm">Choose the Crust</h4>
          <div className="flex gap-4 text-sm ">
            {data?.crusts.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCrust(c)}
                className={`px-3 py-1 rounded-md  ${
                  selectedCrust === c
                    ? "bg-orange-600 text-white"
                    : "bg-orange-50 dark:bg-zinc-900 text-zinc-900 dark:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h4 className="mb-1.5 text-sm">Choose the size</h4>
          <div className="flex gap-4 text-sm ">
            {data?.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`px-3 py-1 rounded-md ${
                  selectedSize === s
                    ? "bg-orange-600 text-white"
                    : "bg-orange-50 dark:bg-zinc-900 text-zinc-900 dark:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        {/* extra toping */}
        <div>
          <h4 className="mb-1.5 text-sm">Extra Toppings</h4>

          <div className="flex gap-4 text-sm flex-wrap">
            {toppings?.map((s) => {
              const isSelected = selectedTopping.includes(s.title);

              return (
                <div
                  key={s.title}
                  onClick={() => toggleTopping(s.title)}
                  className={`px-2 py-2 rounded-md cursor-pointer border transition-all duration-200
            ${
              isSelected
                ? "bg-orange-600 text-white border-orange-600 scale-105"
                : "bg-orange-50 dark:bg-zinc-900 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-700"
            }
          `}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    height={120}
                    width={120}
                    className="mx-auto h-12 w-12  "
                  />

                  <h3 className="text-center font-bold">{s.title}</h3>
                  <h3 className="text-center font-semibold text-sm">
                    Rs {s.price}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        <h2 className="text-orange-500 text-xl font-bold ">Rs. {finalTotal}</h2>
      </div>
    </div>
  );
};

export default ModalContent;
