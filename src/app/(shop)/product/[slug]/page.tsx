import {
  ProductMobileSlideshow,
  QuantitySelector,
  SizeSelector,
  ProductSlideshow,
} from "@/components";
import { titleFont } from "@/config/font";

import { initialData } from "@/seed/seed";
import clsx from "clsx";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-5">
      {/*slide show */}
      <div className="col-span-1 md:col-span-2">
        <ProductMobileSlideshow
          className="block md:hidden"
          images={product.images}
          title={product.title}
        />

        <ProductSlideshow
          className="hidden md:block"
          images={product.images}
          title={product.title}
        />
      </div>
      {/* Details */}
      <div className="col-span-1">
        <h1
          className={clsx("antialiased font-bold text-xl", titleFont.className)}
        >
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        {/*Select size*/}
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[0]}
        />
        {/*Select quantity*/}
        <QuantitySelector quantity={2} />
        {/*Button*/}
        <button className="btn-primary my-5">Agregar al carrito</button>
        {/*Description*/}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
