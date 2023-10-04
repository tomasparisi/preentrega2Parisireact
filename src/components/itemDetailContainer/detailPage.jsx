import React, { useState, useEffect } from "react";
import DetalleItem from "./detalleItem";
import Spinner from "../spinner/spinner";
import { collection, query, getDocs, documentId, where,addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useParams } from "react-router-dom";



const ItemShop = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);


  const agregarElemento = async (product) => {
    const elemento = {
      nombre: product.login,
      tipo: product.type,
      img: product.avatar_url,
      cantidad: count,
      precio: count*product.precio
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
          return <DetalleItem product={data} key={data.id} agregarElemento={agregarElemento} count={count} setCount={setCount}/>;
        })
      )}       
    </div>
  );
};



export default ItemShop;