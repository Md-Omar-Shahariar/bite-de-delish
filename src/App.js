import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/shared/NavBar";
import Banner from "./components/Home/Banner";

import About from "./components/Home/About";
import AllItem from "./components/Home/AllItem";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className=" ">
      <NavBar></NavBar>
      <Banner></Banner>
      <AllItem></AllItem>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
