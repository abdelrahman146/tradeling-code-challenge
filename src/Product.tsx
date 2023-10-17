import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Product() {
    const  [product, setProduct] =  useState({});
    const {id} = useParams();

    useEffect(()=> {
        (async() => {
            const res = await fetch('https://dummyjson.com/products/'+id);
            if(res.ok){
                const product = await  res.json(); 
                setProduct(product);
            }
        })();
    }, []);

  return (
    <div className="container mx-auto">
        <div className="flex flex-col gap-4 justify-center">
            {JSON.stringify(product)}
        </div>
    </div>
  )
}
