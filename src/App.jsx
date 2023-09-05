import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages

import PcPage from "./pages/PC escritorio/Pc escritorio";
import NotebookPage from "./pages/Notebook/notebook";
import DetailPage from "./pages/Detail/detailPage";
import ProductPage from "./pages/Product/product";



const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/notebook" element={<NotebookPage />} />
          <Route path="/pc" element={<PcPage />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/product/:productType" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;