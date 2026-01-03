"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Beverages from "./Beverages";
import Pizza from "./Pizza";
import { useRouter, useSearchParams } from "next/navigation";

const Menu = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeTab = searchParams.get("tab") || "pizza";

  const onTabChange = (value: string) => {
    router.push(`?tab=${value}`, { scroll: false });
  };

  return (
    <section className="px-3 py-6 bg-gray-50 dark:bg-zinc-950 ">
      <div className="container mx-auto px-4 sm:px-0  ">
        <Tabs defaultValue={activeTab} className="w-full  " onValueChange={onTabChange}>
          <TabsList className="bg-orange-600"  >
            <TabsTrigger value="pizza">Pizza</TabsTrigger>
            <TabsTrigger value="beverages">Beverages</TabsTrigger>
          </TabsList>
          <TabsContent value="pizza">
            <Pizza />
          </TabsContent>
          <TabsContent value="beverages">
            <Beverages />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
