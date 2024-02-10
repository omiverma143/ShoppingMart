import React from "react";
import { Helmet } from "react-helmet-async";
import { ProductCard } from "../components/Index";
export const Home = ({products,handleAddToCart}) => {
 
  
  return (
    <main>
      <Helmet>
        <title>
          Home
        </title>
      </Helmet>
      <section className="flex flex-wrap gap-4 justify-evenly">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}  />
          ))}
      </section>
    </main>
  );
};
