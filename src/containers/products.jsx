"use client";
import Loader from "../components/loader";
import ProductCard from "../components/product-card";
const Products = ({ data, gridColStyle }) => {
  return !data ? (
    <Loader />
  ) : (
    <div
      className={`grid ${gridColStyle ? gridColStyle : "grid-cols-4"} gap-6`}
    >
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
