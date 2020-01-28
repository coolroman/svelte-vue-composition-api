import { writable, get } from 'svelte/store';

export const current = writable(null);

function createRecipes() {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    selectRecipe: (id) => current.set(get(recipes).find(r => r.id === id)),
    addRecipe: (recipe) => update(rcs => rcs = [...rcs, recipe]),
    removeRecipe: (id) => {
      current.set(null);
      update(rcs => rcs.filter(r => r.id !== id));
    }
	};
}

export const recipes = createRecipes();
