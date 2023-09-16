import React, { useState } from "react";
import "./Shop.css";
import FilledAlerts from "../Alert/alert";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../components/firebase/firebaseConfig";
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
        <Button variant="contained" className="btnASendAction" type="submit">
          Send
        </Button>
      </form>

      {purchaseID && <FilledAlerts purchaseID={purchaseID} />}
    </div>
  );
};

export default ShopPage;