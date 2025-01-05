import PropTypes from "prop-types";
import { MdAccessTime } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe }) => {
    const {id, recipe_img, recipe_name, description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className="">
            <div className="card bg-gray-100 h-full shadow-xl">
                <figure className="h-64 object-cover p-6 ">
                    <img className="rounded-2xl"
                        src={recipe_img}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
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
                        <button className="btn rounded-full font-bold px-4 mr-4 bg-[rgb(11,229,138)]">Want To Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object
}
export default Recipe;