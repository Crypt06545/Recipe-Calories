import { useState, useEffect } from "react";

const Card = ({ addrecipeQueue, recipeQueue }) => {
  console.log("recipeQueue:", recipeQueue);
  const [cards, setCards] = useState([]);
  // fetch card data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto lg:flex gap-4 mt-14 mb-40">
      {/* Cards Section */}
      <div className="lg:w-[60%] grid lg:grid-cols-2 gap-4">
        {cards.map((recipe) => {
          return (
            <div
              key={recipe.recipe_id}
              className="border-2 border-gray-400 p-4 rounded-2xl"
            >
              <figure>
                <img
                  className="rounded-2xl h-52 w-full object-cover"
                  src={recipe.recipe_image}
                  alt=""
                />
              </figure>
              <div className="">
                <h2 className="card-title">{recipe.recipe_name}</h2>
                <p>{recipe.short_description}</p>
                <div className="border-b-2 border-gray-400 my-4"></div>
                <p className="font-bold">Ingredients:</p>
                <ul className="list-disc pl-5">
                  {recipe.ingredients.map((ingredient, index) => {
                    return <li key={index}> {ingredient}</li>;
                  })}
                </ul>
                <div className="flex justify-between mt-4">
                  <p className="mt-2">
                    <i className="fa-regular fa-clock m-2"></i>
                    {recipe.preparing_time} minutes
                  </p>
                  <p className="mt-2">
                    <i className="fa-solid fa-fire-flame-curved m-2"></i>
                    {}
                    {recipe.calories} calories
                  </p>
                </div>
                <div className="card-actions mt-5">
                  <button
                    onClick={() => addrecipeQueue(recipe)}
                    className="btn bg-[#0BE58A]  hover:text-white text-black rounded-full "
                  >
                    Want to Cook
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cooking and Want to Cook Section */}
      <div className="lg:w-[40%] lg:mt-0 mt-10 border-2">
        {/* Want to Cook Section */}
        <div className="">
          <h2 className="text-xl font-bold mb-4 text-center">
            Want to cook: {recipeQueue.length}
          </h2>

          <table className="table">
            {/* Table Head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th>
                  <button className="btn bg-[#0BE58A] hover:text-white text-black rounded-full">
                    Preparing
                  </button>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {recipeQueue.map((recipe, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                  <td>
                    <button className="btn bg-[#0BE58A] hover:text-white text-black rounded-full">
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Currently Cooking Section */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-center">
            Currently cooking: 02
          </h2>
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left font-semibold">
                <th className="w-1/12">#</th>
                <th className="w-5/12">Name</th>
                <th className="w-3/12">Time</th>
                <th className="w-3/12">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">1</td>
                <td className="py-2">Spaghetti Bolognese</td>
                <td className="py-2">30 minutes</td>
                <td className="py-2">600 calories</td>
              </tr>
              <tr>
                <td className="py-2">2</td>
                <td className="py-2">Spaghetti Bolognese</td>
                <td className="py-2">30 minutes</td>
                <td className="py-2">600 calories</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-right font-bold">
            <p>Total Time = 45 minutes</p>
            <p>Total Calories = 1050 calories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
