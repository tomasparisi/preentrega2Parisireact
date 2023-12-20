import React, { useState, useEffect } from "react";
import MuestraProducto from "./DetalleTienda";
import Spinner from "../Spinner/Spinner";
import { collection, query, getDocs, deleteDoc, doc} from "firebase/firestore";
import { db } from "../../FireBase/FireBaseConfig";

const VistaTienda = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);

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
  }, [refresh]); 

  const eliminarElemento = async (id) => {
    try {
      await deleteDoc(doc(db, 'carrito', id));
      console.log("Documento eliminado correctamente");
      setRefresh(!refresh)
    } catch (error) {
      console.error("Error al eliminar el documento: ", error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        productsData.map((data) => {
          return <MuestraProducto carrito={data} key={data.id} eliminarElemento={eliminarElemento}/>;
        })
      )}       
    </div>
  );
};



export default VistaTienda;