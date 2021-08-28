class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes;

  }
  filterByTag(tag) {
    let filteredRecipes = this.recipes.map(recipe => {
      if (recipe.tags.includes(tag)) {
          return recipe.id;
      }
    });
    return filteredRecipes;
  }
}

export default RecipeRepository;
