import React, { useState, useEffect } from "react";
import Item from "./item/item"; // Cambiado a "CardProduct" para reflejar el nombre de componente adecuado
import "./styles.css"; // Cambiado a "ListProduct.css" para reflejar el nombre de estilo adecuado
import Spinner from "../spinner/spinner";
import { Link } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [productsData, setProductsData] = useState([]); // Cambiado a "productsData" para reflejar la lista de productos
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products")); // Cambiado a "products" para reflejar la colección de productos
      const docs = [];
      const querySnapshot = await getDocs(q);
      console.log('DATA:', querySnapshot);

      querySnapshot.forEach((doc) => {
      console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
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
