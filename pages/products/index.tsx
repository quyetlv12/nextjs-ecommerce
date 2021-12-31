import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import React from "react";
import { ProductsProps } from "../../interfaces/products";
import { IndexProps } from "../../interfaces/utility";

export async function getStaticProps() {
  const res = await fetch(
    "https://614604dd38339400175fc7c4.mockapi.io/products"
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}

const Products = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  //check client or server 
  if(typeof window !== undefined){
    console.log("client");
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap">
          {products.map((_elt: ProductsProps, index: IndexProps) => (
            <div className="flex flex-wrap m-4 gap-10 p-2" key={index}>
              <div >
                <a className="block relative h-48 rounded-lg overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center h-full block w-[200px]"
                    src={_elt.image}
                    height={300}
                    width={300}
                    layout="responsive"
                    priority
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {_elt.name}
                  </h2>
                  <p className="mt-1">{_elt.price}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
export default Products;
