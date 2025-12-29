import Image from "next/image";
import { Button } from "./ui/button";

const Herosection = () => {
  return (
    <main className="container mx-auto px-4 sm:px-0 mt-4  min-h-[calc(100vh-80px)] flex flex-col lg:flex-row  items-center justify-center gap-2  ">
      {/* left container */}
      <div className="flex-1 mt-8 sm:mt-0 flex flex-col gap-6 ">
        <h1 className="font-poppins text-4xl  sm:text-6xl capitalize text-shadow-xs text-shadow-orange-600 ">
          Super Delicious pizza in{" "}
          <span className="text-myOrange ">Only 45 minutes!</span>{" "}
        </h1>
        <p className="max-w-xs   ">
          Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
        </p>
        <Button className=" w-max rounded-full bg-myOrange ">Get Your pizza now</Button>
      </div>
      {/* right Container */}
      <figure className=" flex-1 justify-items-end  overflow-hidden ">
        <Image
          src="/pizza-main.png"
          alt="hero section pizza image"
          height={400}
          width={400}
          className=" h-80 w-80 md:h-1/2 md:w-xl  pizza-rotate-animate "
        />

      </figure>
    </main>
  );
};

export default Herosection;
