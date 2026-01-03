"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { pizzaDataInterface } from "@/app/types/types";
import ModalContent from "./ModalContent";

interface CardProps {
  data: pizzaDataInterface;
}

const Card = ({ data }: CardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/detail/${data.id}`)}
      className="bg-accent rounded-sm p-4 shadow cursor-pointer hover:shadow-orange-500 transition-all ease-out duration-500 hover:-translate-y-1 "
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
              <ModalContent data={data}  />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Card;
