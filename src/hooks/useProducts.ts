import { useEffect, useState } from "react";
import config from "../config";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  category: string;
  thumbnail: string;
  images: string[];
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts = async (searchQuery = "") => {
    const fetch_url = searchQuery
      ? config.base_url + "/products/search?q=" + searchQuery
      : config.base_url + "/products";
    const res = await fetch(fetch_url);
    if (res.ok) {
      const result = await res.json();
      setProducts(result.products);
    }
  };

  return {products, getProducts};
};

export default useProducts;
