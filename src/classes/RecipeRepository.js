class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes;
  }

  filterByTag(tag) {
    const recipesByTag = this.recipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });

    return recipesByTag.map(recipe => recipe.id);
  }
}

export default RecipeRepository;
// A RecipeRepository should hold onto all Recipe objects.
// [x] It should have a parameter to take in recipe data.
// [x] It should have methods to determine:
// [x] A filtered list of recipes based on one or more tags.
// [ ] A filtered list of recipes based on its name or ingredients.
