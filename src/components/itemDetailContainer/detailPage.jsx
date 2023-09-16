import React, { useState, useEffect } from "react";
import Item from "../ItemListContainer/item/item"; 
import "./styles.css"; 
import Spinner from "../spinner/spinner";
import { collection, query, getDocs, documentId, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(productData);

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
    <div className="DetailContainer">
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        productData.map((data) => {
          return <Item product={data} key={data.id} />;
        })
      )}
    </div>
  );
};

export default ItemListContainer;