import { InferGetStaticPropsType } from "next";
import App, { AppContext } from "next/app";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../configs";
import { ProductsProps } from "../../interfaces/products";
import { IndexProps } from "../../interfaces/utility";
import { getAllProducts, setProducts } from "../../redux/slices/productsSlices";

export async function getStaticProps(appContext: AppContext) {
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
  const dispatch = useAppDispatch();
  const { availableProducts } = useAppSelector(setProducts);
  useEffect(() => {
    dispatch(getAllProducts(products));
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap">
        {availableProducts.map((_elt: ProductsProps, index: IndexProps) => (
          <div className="flex flex-wrap m-4 gap-10 p-2" key={index}>
            <div>
              <Link href={`/products/${_elt.id}`}>
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
              </Link>
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
