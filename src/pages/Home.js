import React from 'react';
import { ProductCard } from '../components';
import { useTitle } from '../hooks/useTitle';
import { useCart } from '../context/CartContext';

export const Home = () => {
  useTitle("Home");

  // Get products and filterProduct from context
  const { filterProduct = [], products = [] } = useCart(); // Ensure products has a default empty array

  console.log('Filter Product:', filterProduct);
  console.log('Products:', products);
  // Use products if filterProduct is empty
  const displayedProducts = filterProduct.length > 0 ? filterProduct : products;

  return (
    <section className="grid grid-cols-4 px-24 pt-28 xsm:grid-cols-1 xsm:px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-3 p-4">
      {displayedProducts.length > 0 ? (
        displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found.</p> // Message if no products are available
      )}
    </section>
  );
};
