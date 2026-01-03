import Image from "next/image";
import {beverages} from "@/data"

const Beverages = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-poppins font-bold mb-6">Beverages 🥤</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {beverages.map((drink) => (
          <div
            key={drink.id}
            className="bg-accent rounded-sm p-4 shadow-md hover:shadow-lg transition"
          >
            <figure>
              <Image
                src={drink.image}
                alt={drink.title}
                height={160}
                width={160}
                className="mx-auto"
              />
            </figure>

            <div className="mt-4 text-center">
              <h2 className="font-poppins text-lg font-semibold">
                {drink.title}
              </h2>

              <p className="text-myOrange font-semibold mt-1">
                Rs. {drink.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beverages;
