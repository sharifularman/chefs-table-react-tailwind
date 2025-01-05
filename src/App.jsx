import { useState } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"


function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const addRecipeQueue = recipe => {
    const isExist = recipeQueue.find(addedItem => addedItem.recipe_id === recipe.recipe_id);

    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    }
    else {
      alert("The Recipe is already added")
    }
  }

  return (
    <>
      {/* Header and Navbar */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* our recipes */}
      <main>
        <OurRecipes />
        {/* Recipes */}
        <section className="container mx-auto flex">
          <Recipes addRecipeQueue={addRecipeQueue} />
          <Sidebar recipeQueue={recipeQueue} />
        </section>
      </main>

    </>
  )
}

export default App
