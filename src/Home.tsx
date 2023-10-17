import { useEffect, useRef, useState } from "react";
import useProducts from "./hooks/useProducts";
import ProductCard from "./components/ProductCard";



export default function Home() {
  const {products, getProducts}  = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if(searchQuery) {
        if(timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() =>  {
            getProducts(searchQuery);
        }, 250);
    } else {
        getProducts();
    }
    return () =>  {
        if(timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-5 md:px-0">
      <div className="my-8 flex gap-2 w-full">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Type here"
          className="flex-1 input input-bordered w-full"
        />
        {/* <button onClick={search} className="btn btn-primary">
          Search
        </button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8  my-16">
        {products?.map((product) => {
          return (
            <ProductCard key={product.id} product={product}/>
          );
        })}
      </div>
    </div>
  );
}
