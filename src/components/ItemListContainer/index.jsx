import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "../../components/ItemListContainer/item/item";
import "./styles.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  let { productType } = useParams();

  useEffect(() => {
    axios("https://mocked-url.com/products").then((response) => {
      if (productType){
        const data = response.data.filter((product) => {
          return product.type === productType;
        });
        setProducts(data)
      }
      else {
        setProducts(response.data);
      }

      
    });
  }, [productType]);

  return (
    <div className="Cards-List">
      {products.map((product) => (
        <div style={{ margin: 10 }} key={product.id}>
          <Link to={`/details/${product.id}`}> 
            <Item data={product} />
          </Link>
        </div>
      ))}
    </div>
  );
};


export default ItemListContainer;