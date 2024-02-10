import React from "react";
import { ProductCard } from "../components/Index";

export const Home = ({products,handleAddToCart}) => {
  

  return (
    <main>
      <section className="flex flex-wrap gap-4 justify-evenly">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}  />
          ))}
      </section>
    </main>
  );
};
