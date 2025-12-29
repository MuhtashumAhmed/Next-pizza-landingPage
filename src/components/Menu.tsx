import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Beverages from "./Beverages";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <section className="px-3 py-6 bg-gray-50 dark:bg-zinc-950 ">
      <div className="container mx-auto px-4 sm:px-0  ">
        <Tabs defaultValue="pizza" className="w-full  ">
          <TabsList className="bg-orange-600">
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
