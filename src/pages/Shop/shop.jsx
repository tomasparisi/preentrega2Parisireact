import React, { useState } from "react";
import VistaTienda from "../../components/ShopItem/Tienda";
import ShopPage from "../../components/ShopItem/formulario";



const HomePage = () => {
  return (
    <div>
      <VistaTienda /> 
      <ShopPage />
    </div>
  );
};

export default HomePage;