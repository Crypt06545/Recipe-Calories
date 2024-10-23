import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Recipe from "./components/Recipe/Recipe";
import Card from "./components/Card/Cards";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const addRecipeQueue = (recipe) => {
    const isExit = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExit) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("This is already Exists");
    }
  };
  console.log(recipeQueue);

  return (
    <>
      <Navbar />
      <Hero />
      <Recipe />
      <Card addRecipeQueue={addRecipeQueue} />
    </>
  );
}

export default App;
