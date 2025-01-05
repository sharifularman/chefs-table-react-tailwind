import PropTypes from "prop-types";
import { MdAccessTime } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe, addRecipeQueue}) => {
    const {id, recipe_img, recipe_name, description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className="">
            <div className="card  h-full border-2">
                <figure className="h-64 object-cover px-4 ">
                    <img className="rounded-2xl"
                        src={recipe_img}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold  text-gray-700">{recipe_name}</h2>
                    <p className="text-gray-500">{description}</p>
                    <h3 className="text-lg font-semibold text-gray-600">Ingredients: {ingredients.length}</h3>
                    <ul className="list-disc ml-9">
                        {ingredients.map(item => <li className="text-md text-gray-600 font-semibold" key={id}>{ item}</li>)}
                    </ul>
                    <div className="flex gap-8 items-center">
                    <div className="flex items-center gap-2 font-semibold text-gray-700">
                        <MdAccessTime /> {preparing_time} minutes
                        </div>
                        <div className="flex items-center gap-2 font-semibold text-gray-700">
                            <FaFire /> {calories} calories
                        </div>
                   </div>
                    <div className="card-actions mt-4">
                        <button onClick={()=> addRecipeQueue(recipe)} className="btn rounded-full font-bold text-md px-8 bg-green-400">Want To Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    addRecipeQueue: PropTypes.func
}
export default Recipe;