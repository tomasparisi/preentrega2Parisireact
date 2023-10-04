import React, { useState } from "react";
import "./formulario.css";
import FilledAlerts from "../../pages/Alert/alert";
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { TextField, Button } from "@mui/material";






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

  const eliminarColeccion = () => {
    const coleccionRef = db.collection('carrito');

    coleccionRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          coleccionRef.doc(doc.id).delete();
        });
      })
      .then(() => {
        console.log('Colección eliminada exitosamente.');
      })
      .catch((error) => {
        console.error('Error al eliminar la colección: ', error);
      });
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
        <Button  id="eliminarColeccionButton" onClick={eliminarColeccion} variant="contained" className="btnASendAction" type="submit">
          Comprar
        </Button>
      </form>

      {purchaseID && <FilledAlerts purchaseID={purchaseID} onClick={eliminarColeccion}/>}
    </div>

  );
};

export default ShopPage;