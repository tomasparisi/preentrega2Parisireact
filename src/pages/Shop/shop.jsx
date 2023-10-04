import React, { useState } from "react";
import VistaTienda from "../../components/ShopItem/Tienda";
import ShopPage from "../../components/ShopItem/formulario";



const HomePage = () => {
  return (
    <div className="Tienda">
      <div className="carrito">
      <VistaTienda /> 
      </div>
      <ShopPage />
    </div>
  );
};

export default HomePage;