import React from "react";
import Link from "next/link";

export default async function Productspage() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div className="w-[700px] bg-indigo-300">
      {products.map((prev) => (
        <div className="p-12 flex items-center gap-7" key={prev.id}>
          <img className="w-24 h-24 bg-indigo-300" src={prev.image} />
          <Link href={`/${prev.id}`}>
            <p className="font-bold text-white">{prev.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
