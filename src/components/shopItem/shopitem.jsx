import React, { useState, useEffect } from "react";
import ItemShop from "./item/item"; 
import "./styles.css"; 
import Spinner from "../spinner/spinner";
import { Link } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [productsData, setProductsData] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "carrito")); 
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
                <ItemShop product={data} /> 
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
