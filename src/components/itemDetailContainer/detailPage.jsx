import React, { useState, useEffect } from "react";
import DetalleItem from "./detalleItem";
import Spinner from "../spinner/spinner";
import { collection, query, getDocs, documentId, where,addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useParams } from "react-router-dom";


const ItemShop = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const agregarElemento = async (e) => {
    console.log("l")
    e.preventDefault();
    const elemento = {
      id: id,
      cantidad:"1"
    }
    const docRef = await addDoc(collection(db, "carrito"), {
      elemento,
    });
  };


  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "products"),
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
          return <DetalleItem product={data} key={data.id} agregarElemento={agregarElemento} />;
        })
      )}       
    </div>
  );
};



export default ItemShop;