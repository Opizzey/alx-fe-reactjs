import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter(r => r.id !== id) })),
  updateRecipe: (id, updated) => set((state) => ({
    recipes: state.recipes.map(r => r.id === id ? { ...r, ...updated } : r)
  }))
}));
