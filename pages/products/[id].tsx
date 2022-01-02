import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../configs";
import { setProducts } from "../../redux/slices/productsSlices";
const Products = () => {
  const { availableProducts } = useAppSelector(setProducts);
  const [product, setProduct] = useState({});
  const dependency = [availableProducts.length];
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const getDetailProduct = () => {
      const product = availableProducts.find((_elt: any) => _elt.id === id);
      setProduct(product);
    };
    getDetailProduct();
  }, [...dependency]);
  return (
    <div>
      <span className="bg-red-400">trang chi tiet san pham</span>
    </div>
  );
};

export default Products;
