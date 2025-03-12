"use client";

import demoProducts from "@/data/demoproducts";
import ProductCard from "./productcard";

export default function ProductDisplay({ products = demoProducts }) {
  return (
    <div className="min-h-screen bg-black py-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
