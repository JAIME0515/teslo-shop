import Image from "next/image";

import { Title } from "@/components";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";
import { initialData } from "@/seed/seed";

interface OrderPageProps {
  params: Promise<{ id: string }>;
}

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default async function OrderPage({ params }: OrderPageProps) {
  const { id } = await params;

  return (
    <div className="flex justify-center items-center mb-72">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* carrito*/}

          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                { "bg-red-500": true, "bg-green-500": true }
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2"> Pendiente de Pago</span>
            </div>
            {/* items del carrito*/}
            {productsInCart.map((product) => (
              <div className="flex mb-5" key={product.slug}>
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="mr-5 rounded w-20 h-20"
                />
                <div>
                  <p>{product.title}</p>
                  <p className="text-sm">${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* checkout*/}
          <div className="bg-white rounded-xl shadow-xl p-7 h-min">
            <h2 className="text-2xl mb-2 "> Dirección de entrega</h2>
            <div className="mb-10">
              <p>Gerardo Escobar</p>
              <p>Av. Siempre viva 123</p>
              <p>Col. El jobo</p>
              <p>Tuxtla Gutiérrez</p>
              <p>Chiapas</p>
              <p>México</p>
              <p>CP 29110</p>
            </div>
            {/* divider*/}
            <div className="h-px w-full bg-gray-200 my-10" />

            {/* purchase receipt*/}
            <h2 className="text-2xl mb-2">Resumen de compra</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right"> $ 100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl font-bold text-right"> $ 200</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  { "bg-red-500": true, "bg-green-500": true }
                )}
              >
                <IoCardOutline size={30} />
                <span className="mx-2"> Pendiente de Pago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
