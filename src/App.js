import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/shared/NavBar";
import Banner from "./components/Home/Banner";
import Products from "./components/Products/Products";
import About from "./components/Home/About";

function App() {
  return (
    <div className=" ">
      <NavBar></NavBar>
      <Banner></Banner>
      <Products></Products>
      <About></About>
    </div>
  );
}

export default App;
