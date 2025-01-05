import PropTypes from "prop-types";

const Sidebar = ({ recipeQueue, handleRemoveRecipe, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories}) => {

    return (
        <div className="w-1/3 mx-auto bg-base-100 border-2 rounded-2xl ml-6 p-2">
            <h1 className="text-gray-800 font-semibold text-xl text-center border-b-2 pb-2">Want To Cook: {recipeQueue.length}</h1>
            {/* want to cook */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipeQueue.map((recipe, idx) =>
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} minutes</td>
                                    <td>{recipe.calories}</td>
                                    <td><button onClick={() => {
                                        handleRemoveRecipe(recipe.recipe_id)
                                        calculateTimeAndCalories(recipe.preparing_time, recipe.calories)
                                    }} className="btn-xs px-3 rounded-full font-bold bg-green-400">Preparing</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* currently cooking */}
            <div>
                <h3 className="text-gray-800 font-semibold text-xl text-center border-b-2 pb-2">Currently Cooking: {preparedRecipe.length} </h3>
                <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {preparedRecipe.map((recipe, idx) =>
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} minutes</td>
                                    <td>{recipe.calories}</td>
                                </tr>
                                )}
                                <tr className="font-semibold">
                                
                                    <td colSpan={2}>Total Time: { totalTime} min</td>
                                <td colSpan={2}>Total Calories: {totalCalories} Calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
};

Sidebar.propTypes - {
    recipeQueue: PropTypes.array,
    handleRemoveRecipe: PropTypes.func,
    preparedRecipe: PropTypes.array,
    calculateTimeAndCalories: PropTypes.func, 
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number
}
export default Sidebar;