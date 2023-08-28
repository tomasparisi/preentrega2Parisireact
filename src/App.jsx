import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages

import Contact from "./pages/Contact/contact";
import AboutPage from "./pages/About/about";
import HomePage from "./pages/home/home";
import DetailPage from "./pages/Detail/detailPage";
import UserPage from "./pages/User/user";



const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/user/:user" element={<UserPage />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;