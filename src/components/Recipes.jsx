import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("recipes.json")
            const data = await res.json();
            setRecipes(data)
        }
        fetchData();
    }, [])
    return (
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                recipes.map(recipe => <Recipe
                    key={recipe.id}
                    recipe={recipe}
                />)
            }
        </div>
    );
};

export default Recipes;