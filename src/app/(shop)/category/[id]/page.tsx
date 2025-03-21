// "use client";
import { notFound } from "next/navigation";

import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { Category } from "@/interfaces";

interface CartPageProps {
  params: Promise<{ id: string }>;
}

const products = initialData.products;
const allowedCategories = products.map(({ gender }) => gender);
const labels: Record<Category, string> = {
  men: "Hombres",
  women: "Mujeres",
  kid: "Niños",
  unisex: "Unisex",
};

export default async function Categoryage({ params }: CartPageProps) {
  const id = (await params).id as Category;

  const productsByCategory = products.filter(
    (product) => product.gender === id
  );

  if (!allowedCategories.includes(id)) {
    notFound();
  }

  return (
    <>
      <Title
        title={`Articulo de ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={productsByCategory} />
    </>
  );
}
