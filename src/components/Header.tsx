"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "@deemlol/next-icons";
import { useTheme } from "next-themes";
import { Moon } from "@deemlol/next-icons";
import { Sun } from "@deemlol/next-icons";
import { useEffect, useState } from "react";

const links = ["Menu", "Orders"];
const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  //   console.log("Resove theme", resolvedTheme);
  const [mounted, setMounted] = useState(false);
  const [headerStyle, setHeaderStyle] = useState(false);

  const addHeaderStyle = () => {
    // console.log(window.scrollY >100 );
    window.scrollY > 100 ? setHeaderStyle(true) : setHeaderStyle(false);
  };

  useEffect(() => {
    setMounted(true);

    window.addEventListener("scroll", addHeaderStyle);

    return () => {
      window.removeEventListener("scroll", addHeaderStyle);
    };
  }, []);

  // ⛔ prevent hydration mismatch
  if (!mounted) return null;

  return (
    <header
      className={`px-3 h-16 pt-2 sticky top-0 z-10 bg-transparent backdrop-blur-xl ${
        headerStyle && "border-b border-orange-600 shadow-2xl "
      }  transition-all ease-in-out duration-300  `}
    >
      {/* contact number */}
      {/* <p className="flex items-center gap-0.5    ">
        <PhoneCall height={16} /> 0517 - 1238742
      </p> */}
      <nav className="container mx-auto px-4 sm:px-0 flex items-center justify-between  ">
        {/* logo */}
        <Image src={"/logo.svg"} alt="logo" width={80} height={80} />

        <ul>
          <li className="flex items-center   gap-3">
            {links?.map((link, i) => {
              return (
                <Link key={i} href="#" className="hover:text-orange-600">
                  {link}
                </Link>
              );
            })}
          </li>
        </ul>
        <div className="flex gap-4 items-center ">
          {/* toggle theme */}
          <div>
            {resolvedTheme === "dark" ? (
              <Moon onClick={() => setTheme("light")} />
            ) : (
              <Sun onClick={() => setTheme("dark")} />
            )}
          </div>

          {/* logout Button */}
          <Button className="bg-orange-600 hover:bg-orange-500 ">Logout</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
