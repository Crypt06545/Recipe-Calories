import React from "react";

const Card = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* Heading Section */}
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold">Our Recipes</h1>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minima.
        </p>
      </div>

      {/* Recipe Cards and Cooking Section */}
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Recipe Card 1 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Spaghetti Bolognese"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Spaghetti Bolognese</h2>
            <p>Classic Italian pasta dish with savory meat sauce.</p>
            <p className="font-bold">Ingredients:</p>
            <ul className="list-disc pl-5">
              <li>500g ground beef</li>
              <li>1 onion, chopped</li>
              <li>2 cloves garlic, minced</li>
            </ul>
            <p className="mt-2">600 calories</p>
            <div className="card-actions justify-end">
              <button className="btn btn-success">Want to Cook</button>
            </div>
          </div>
        </div>

        {/* Recipe Card 2 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Chicken Caesar Salad"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chicken Caesar Salad</h2>
            <p>Fresh, crisp salad with savory meat sauce.</p>
            <p className="font-bold">Ingredients:</p>
            <ul className="list-disc pl-5">
              <li>500g grilled chicken</li>
              <li>1 romaine lettuce</li>
              <li>Parmesan cheese</li>
            </ul>
            <p className="mt-2">400 calories</p>
            <div className="card-actions justify-end">
              <button className="btn btn-success">Want to Cook</button>
            </div>
          </div>
        </div>

        {/* Cooking Status Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Want to Cook Section */}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Want to cook: 01</h2>
            <table className="table-auto w-full">
              <thead>
                <tr className="text-left font-semibold">
                  <th className="w-1/12">#</th>
                  <th className="w-5/12">Name</th>
                  <th className="w-3/12">Time</th>
                  <th className="w-3/12">Calories</th>
                  <th className="w-2/12">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">1</td>
                  <td className="py-2">Chicken Caesar Salad</td>
                  <td className="py-2">20 minutes</td>
                  <td className="py-2">400 calories</td>
                  <td className="py-2">
                    <span className="bg-emerald-500 text-white py-1 px-3 rounded-full text-sm">
                      Preparing
                    </span>
                  </td>
                </tr>
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
                  <td className="py-2">1</td>
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
    </div>
  );
};

export default Card;