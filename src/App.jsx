import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Recipe from "./components/Recipe/Recipe";
import Card from "./components/Card/Cards";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const addrecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("already have");
    }
  };
  // console.log(recipeQueue);

  return (
    <>
      <Navbar />
      <Hero />
      <Recipe />
      <Card addrecipeQueue={addrecipeQueue} recipeQueue={recipeQueue}/>
    </>
  );
}

export default App;
