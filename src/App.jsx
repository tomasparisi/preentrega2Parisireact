import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//pages

import ItemDetailContainer from "./components/itemDetailContainer/detailPage";
import ItemListContainer from "./components/ItemListContainer/index";
import TypeProduct from "./pages/products/products";
import HomePage from "./pages/Shop/shop";
import Footer from "./components/footer/footer";




const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/details/:id" element={<ItemDetailContainer />} />
          <Route path="/product/:type" element={<TypeProduct />} />
          <Route path="/shop" element={<HomePage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;