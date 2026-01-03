"use client";

import { useRouter } from "next/navigation";
import { pizzaDataInterface } from "@/data";
import Image from "next/image";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface CardProps {
  data: pizzaDataInterface;
}

const Card = ({ data }: CardProps) => {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string>(data.sizes[0]);
  const [selectedCrust, setSelectedCrust] = useState<string>(data.crusts[0]);

  const price = data.price[selectedSize as keyof typeof data.price];

  return (
    <div
      onClick={() => router.push(`/detail/${data.id}`)}
      className="bg-accent rounded-sm p-4 shadow-md cursor-pointer"
    >
      <figure>
        <Image
          src="/pizza-main.png"
          alt="pizza image"
          height={160}
          width={160}
          className="mx-auto"
        />
      </figure>

      <div className="mt-2 flex flex-col gap-4">
        <div>
          <h2 className="font-poppins text-xl">{data.title}</h2>
          <p className="line-clamp-2 text-sm">{data.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-myOrange font-poppins">
            Rs. {data.price.Small || data.price.Medium || data.price.Large}
          </span>
          {/* Chooose Button   */}
          <Dialog>
            <DialogTrigger
              onClick={(e) => e.stopPropagation()}
              className=" px-4 py-1 text-sm bg-orange-600 rounded-full text-white"
            >
              Choose
            </DialogTrigger>
            <DialogContent onClick={(e) => e.stopPropagation()}>
              <div className="flex gap-2   ">
                <figure>
                  <Image
                    src="/pizza-main.png"
                    alt="pizza image"
                    height={160}
                    width={160}
                    className="mx-auto"
                  />
                </figure>
                <div className="flex flex-col gap-4 ">
                  <h2 className="font-poppins text-xl">{data.title}</h2>
                  <h4>Choose the size</h4>

                  {/* Crust */}
                  <div className="flex gap-4 text-sm ">
                    {data?.crusts.map((c) => (
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
                    {data?.sizes.map((s) => (
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
                  {data?.price[selectedSize]}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Card;
