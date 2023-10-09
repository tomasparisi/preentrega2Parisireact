import React, { useState } from "react";
import "./formulario.css";
import FilledAlerts from "../../pages/Alert/alert";
import { collection, addDoc, getDocs, deleteDoc, query } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";






const styles = {
  containerShop: {
    textAlign: "center",
    padding: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  city: "",
};


const ShopPage = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
  const navigate = useNavigate();

  const vaciarCarrito = async () => {
    try {
      const q = query(collection(db, "carrito"));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
  
      console.log("Todos los documentos en la colección han sido eliminados correctamente.");
    } catch (error) {
      console.error("Error al eliminar documentos: ", error);
    }
  };


  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,
    });
    setPurchaseID(docRef.id);
    setValues(initialState);
    vaciarCarrito()
    navigate("/")
  };

  return (
    
    <div style={{ marginTop: "40px" }}>
      <form
        className="FormContainer"
        style={styles.containerShop}
        onSubmit={onSubmit}
      >
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="City"
          style={{ margin: 10, width: 400 }}
          name="city"
          value={values.city}
          onChange={handleOnChange}
        />
        <Button  id="eliminarColeccionButton" variant="contained" className="btnASendAction" type="submit">
          Comprar
        </Button>
      </form>

      {purchaseID && <FilledAlerts purchaseID={purchaseID} />}
    </div>

  );
};

export default ShopPage;