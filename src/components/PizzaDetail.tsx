"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { pizzaDataInterface } from "@/data";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "@deemlol/next-icons";

interface PizzaDetailProps {
  data: pizzaDataInterface;
}

export default function PizzaDetail({ data }: PizzaDetailProps) {
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<string>(data.sizes[0]);
  const [selectedCrust, setSelectedCrust] = useState<string>(data.crusts[0]);

  const price = data.price[selectedSize as keyof typeof data.price];

  return (
    <>
      <button onClick={()=> router.back() } className="mb-2 font-bold p-2 rounded  bg-orange-500 cursor-pointer  "><ArrowLeft /> </button>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-115px)] gap-4 border  p-4 rounded border-orange-600 border-dashed">
        {/* Image */}
        <figure className="">
          <Image
            src={data.image || "/pizza-main.png"}
            alt={data.title}
            height={350}
            width={350}
          />
        </figure>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="font-poppins capitalize text-xl">{data.title}</h2>
          <p className="line-clamp-2 text-sm">{data.description}</p>

          {/* Crust */}
          <div className="flex gap-4 text-sm ">
            {data.crusts.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCrust(c)}
                className={`px-3 py-1 rounded-md ${
                  selectedCrust === c
                    ? "bg-orange-600 text-white"
                    : "bg-zinc-900 text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Sizes */}
          <div className="flex gap-4 text-sm ">
            {data.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`px-3 py-1 rounded-md ${
                  selectedSize === s
                    ? "bg-orange-600 text-white"
                    : "bg-zinc-900 text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Price */}
          <div className="mt-2 text-lg font-bold text-orange-600">
            Price: Rs. {price}
          </div>
        </div>
      </div>
    </>
  );
}
