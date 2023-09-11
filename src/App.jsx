import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages

import ItemDetailContainer from "./pages/Detail/detailPage";
import ItemListContainer from "./components/ItemListContainer/index";



const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/details/:id" element={<ItemDetailContainer />} />
          <Route path="/product/:productType" element={<ItemListContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;