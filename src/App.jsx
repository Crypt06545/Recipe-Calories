import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Recipe from "./components/Recipe/Recipe";
import Card from "./components/Card/Card";


function App() {
  const [count, setCount] = useState(0); 

  return (
    <>
      <Navbar/>
      <Hero/>
      <Recipe/>
      <Card/>
    </>
  );
}

export default App;
