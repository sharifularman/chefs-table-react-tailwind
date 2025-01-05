import { useState } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"


function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  
  const addRecipeQueue = recipe => {
    const isExist = recipeQueue.find(addedItem => addedItem.recipe_id === recipe.recipe_id);

    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    }
    else {
      alert("The Recipe is already added")
    }
  }

  const handleRemoveRecipe = id => {
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);
    setPreparedRecipe([...preparedRecipe,deletedRecipe]);
    const updateRecipeQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id);
    setRecipeQueue(updateRecipeQueue);
  } 


  // total time and total calories 
  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
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
          <Sidebar recipeQueue={recipeQueue}
            handleRemoveRecipe={handleRemoveRecipe}
            preparedRecipe={preparedRecipe}
            calculateTimeAndCalories={calculateTimeAndCalories}
            totalTime={totalTime}
            totalCalories={totalCalories}
          />
        </section>
      </main>

    </>
  )
}

export default App
