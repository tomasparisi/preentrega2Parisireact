import React, { useState, useEffect } from "react";
import Item from "./Item/Item"; 
import "./Styles.css"; 
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../FireBase/FireBaseConfig";

const ItemListContainer = () => {
  const [productsData, setProductsData] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products")); 
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
    };
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="Cards-List"> 
          {productsData.map((data) => { 
            return (
              <Link
                to={`/details/${data.id}`}
                key={data.id}
                style={{ textDecoration: "none" }}
              >
                <Item product={data} /> 
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
