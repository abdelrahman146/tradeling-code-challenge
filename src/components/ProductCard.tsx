import React from "react";
import { Product } from "../hooks/useProducts";
import { Link } from "react-router-dom";

export default function ProductCard(props: {product: Product}) {
    const {product}  = props;
  return (
    <div className="col-span-1">
      <div className="card card-compact bg-base-100 shadow-xl aspect-square">
        <figure>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-[300px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.price}$</p>
          <div className="card-actions justify-end">
            <Link to={"/product/" + product.id} className="btn btn-primary">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
