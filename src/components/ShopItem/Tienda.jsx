import React, { useState, useEffect } from "react";
import MuestraProducto from "./DetalleTienda";
import Spinner from "../spinner/spinner";
import { collection, query, getDocs} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const VistaTienda = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(collection(db, "carrito"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
      
    };
    getProduct();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        productsData.map((data) => {
          return <MuestraProducto carrito={data} key={data.id} />;
        })
      )}       
    </div>
  );
};



export default VistaTienda;