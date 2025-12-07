import { useState, useEffect } from 'react';
import recipeData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipe data when component mounts
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Recipe Sharing Platform
        </h1>
        <p className="text-gray-600 text-lg">
          Discover and share amazing recipes from around the world
        </p>
      </header>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Recipe Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {recipe.summary}
              </p>

              {/* View Details Link */}
              <a
                href={`/recipe/${recipe.id}`}
                className="inline-block text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;