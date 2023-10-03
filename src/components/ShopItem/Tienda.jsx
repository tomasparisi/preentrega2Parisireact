import React, { useState, useEffect } from "react";
import MuestraProducto from "./DetalleTienda";
import Spinner from "../spinner/spinner";
import { collection, query, getDocs, documentId, where,addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useParams } from "react-router-dom";



const VistaTienda = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "carrito"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductData(docs);
      
    };
    getProduct();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        productData.map((data) => {
          return <MuestraProducto product={data} key={data.id} agregarElemento={agregarElemento} count={count} setCount={setCount}/>;
        })
      )}       
    </div>
  );
};



export default VistaTienda;