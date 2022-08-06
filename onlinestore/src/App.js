import "./App.css";
import NavBar from "./component/navBar";
import Footer from "./component/footer";
import Catalog from "./component/catalog";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
