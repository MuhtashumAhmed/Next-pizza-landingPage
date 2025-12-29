import { pizzas } from "@/data";
import PizzaDetail from "@/components/PizzaDetail";

interface PageProps {
  params: { id: number };
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const data = pizzas?.filter((p) => p.id == id);
  // console.log(id);
  // console.log(data);
  const filterData = data[0];

  if (!data) return <p>Pizza not found!</p>;

  return (
    <section className="container mx-auto py-10 overflow-hidden  ">
      <PizzaDetail data={filterData} />
    </section>
  );
};

export default page;
