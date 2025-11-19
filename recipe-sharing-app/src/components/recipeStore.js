import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipes(updatedRecipes, get().searchTerm),
      recommendations: get().generateRecommendations(updatedRecipes, state.favorites)
    };
  }),
  setRecipes: (recipes) => set((state) => ({
    recipes,
    filteredRecipes: get().filterRecipes(recipes, get().searchTerm),
    recommendations: get().generateRecommendations(recipes, state.favorites)
  })),
  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter(r => r.id !== id);
    const updatedFavorites = state.favorites.filter(fid => fid !== id);
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipes(updatedRecipes, get().searchTerm),
      favorites: updatedFavorites,
      recommendations: get().generateRecommendations(updatedRecipes, updatedFavorites)
    };
  }),
  updateRecipe: (id, updated) => set((state) => {
    const updatedRecipes = state.recipes.map(r => r.id === id ? { ...r, ...updated } : r);
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipes(updatedRecipes, get().searchTerm),
      recommendations: get().generateRecommendations(updatedRecipes, state.favorites)
    };
  }),
  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: get().filterRecipes(state.recipes, term)
  })),
  filterRecipes: (recipes, term) => {
    if (!term) return recipes;
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
  },
  addFavorite: (recipeId) => set((state) => {
    if (state.favorites.includes(recipeId)) return {};
    const updatedFavorites = [...state.favorites, recipeId];
    return {
      favorites: updatedFavorites,
      recommendations: get().generateRecommendations(state.recipes, updatedFavorites)
    };
  }),
  removeFavorite: (recipeId) => set((state) => {
    const updatedFavorites = state.favorites.filter(id => id !== recipeId);
    return {
      favorites: updatedFavorites,
      recommendations: get().generateRecommendations(state.recipes, updatedFavorites)
    };
  }),
  generateRecommendations: (recipes, favorites) => {
    // Simple mock: recommend recipes not in favorites, randomly pick up to 3
    const notFavs = recipes.filter(r => !favorites.includes(r.id));
    return notFavs.sort(() => 0.5 - Math.random()).slice(0, 3);
  }
}));
