import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./components/header";
import Banner from "./components/banner";
import About from "./components/about";
import Services from "./components/services";
import Expertise from "./components/expertise";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Expertise></Expertise>
      <Footer></Footer>
    </>
  );
}

export default App;
