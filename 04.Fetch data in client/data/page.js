"use client";
import { useEffect, useState } from "react";

const Data = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch(
        "https://jsonplaceholder.typicode.com/posts?limit=10"
      );
      data = await data.json();
      setProduct(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      {product.map((p) => (
        <ul key={p.id} className="flex flex-col gap-2 border m-2 p-2">
          <li>{p.userId}</li>
          <li>{p.title}</li>
          <li>{p.body}</li>
        </ul>
      ))}
    </div>
  );
};

export default Data;
