export const revalidate = 60; // 60 segundos

import { redirect } from "next/navigation";

import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";
import { Pagination } from "@/components/ui/pagination/Pagination";

interface Props {
  searchParams: Promise<{
    pageParam?: string;
  }>;
}

export default async function Home({ searchParams }: Props) {
  const { pageParam } = await searchParams;
  const page = pageParam ? parseInt(pageParam) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
  });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
