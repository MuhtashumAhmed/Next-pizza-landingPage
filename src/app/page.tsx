import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import Menu from "@/components/Menu";


export default function Home() {
  return (
    <div className="relative overflow-hidden   font-sans  ">
      <div className="absolute -left-16 -z-10 blur-2xl rounded-full animate-pulse h-28 sm:h-60 w-lg bg-orange-500  " ></div>
      <div className="absolute -left-16 -z-10 blur-2xl rounded-full animate-pulse h-36 sm:h-72 w-md bg-orange-600  " ></div>
      <Header />
      <Herosection />
      <Menu />
      <Footer /> 
    </div>
  );
}
