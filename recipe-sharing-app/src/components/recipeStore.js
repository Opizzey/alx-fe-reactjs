import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipes(updatedRecipes, get().searchTerm)
    };
  }),
  setRecipes: (recipes) => set({
    recipes,
    filteredRecipes: get().filterRecipes(recipes, get().searchTerm)
  }),
  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter(r => r.id !== id);
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipes(updatedRecipes, get().searchTerm)
    };
  }),
  updateRecipe: (id, updated) => set((state) => {
    const updatedRecipes = state.recipes.map(r => r.id === id ? { ...r, ...updated } : r);
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipes(updatedRecipes, get().searchTerm)
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
  }
}));
