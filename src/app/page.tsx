import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import Menu from "@/components/Menu";


export default function Home() {
  return (
    <div className="relative    font-sans  ">

      <div className="absolute -left-16 -z-10 blur-2xl rounded-full animate-pulse h-28 sm:h-60 w-[20%] bg-orange-500  " ></div>
      <div className="absolute -left-16 -z-10 blur-2xl rounded-full animate-pulse h-36 sm:h-72 w-[25%] bg-orange-600  " ></div>
      <div className="absolute left-[40%] top-[20%] -z-10 blur-3xl rounded-full  h-4 sm:h-24 w-[15%] bg-orange-600  " ></div>
      <div className="absolute left-[40%]  lg:top-[20%] -z-10 blur-3xl rounded-full animate-pulse  h-4 sm:h-24 w-[15%] bg-orange-400  " ></div>
      <Header />
      <Herosection />
      <Menu />
      <Footer /> 
    </div>
  );
}
