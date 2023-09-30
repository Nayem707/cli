'use client';
import { useEffect, useState } from 'react';

const Products = () => {
  const [getdata, setGetData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => setGetData(json.products));
  }, []);

  return (
    <div>
      {getdata.map((item) => {
        return (
          <div key={item.id}>
            <li>{item.title}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
