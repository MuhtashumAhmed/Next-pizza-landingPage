import React from "react";
import Card from "./Card";
import { pizzas } from "@/data";
import Link from "next/link";

const Pizza = () => {
  return (
    <div className="mt-5  ">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-4  ">
        {pizzas?.map((pizza) => {
          return <Card key={pizza?.id} data={pizza} />;
        })}
      </div>
    </div>
  );
};

export default Pizza;
