import React, { useState, useEffect } from "react";
import DetalleItem from "./item/item"; // Asegúrate de importar DetalleItem correctamente
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
      setIsLoading(false); 
    };
    getProducts();
  }, []);

 rio
  const agregarElemento = (producto) => {

  };

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="Cards-List">
          {productsData.map((data) => (
            <DetalleItem product={data} key={data.id} agregarElemento={agregarElemento} />
          ))}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
