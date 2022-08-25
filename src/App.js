import "./App.css";
import NavBar from "./component/navBar";
import AboutMe from "./component/about-me";
import Catalog from "./component/pages/catalog";
import ShoppingList from "./component/shoppingList";
import Principal from "./component/pages/home";
import Cart from "./component/cart";
import Admin from "./component/pages/admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/List" element={<ShoppingList />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
