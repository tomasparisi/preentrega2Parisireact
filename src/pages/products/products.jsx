import React, { useState, useEffect } from "react";
import Item from "../../components/ItemListContainer/item/item"; 
import "./product.css"; 
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../components/firebase/firebaseConfig";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const TypeProduct = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const { type } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const q = query(collection(db, "products"), where("type", "==", type));
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
  }, [type]);

  return (
    <div className="DetailContainer">
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
  );
};


export default TypeProduct;