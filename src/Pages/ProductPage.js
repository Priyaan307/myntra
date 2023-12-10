import React, { useEffect, useState } from 'react'
import ProductCart from '../Components/Product/ProductCart';


const ProductPage = () => {

    const [productsList, setProductList] = useState([]);
  
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Network response was not ok: ${res.statusText}`);
            }
            return res.json();
          })
          .then((products) => {
            setProductList(products);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
      
    console.log("Products List Outside", productsList);

  return (
    
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '100'}}>
        {productsList.map((Product) => (<ProductCart/>))}
    </div>
  )
}

export default ProductPage