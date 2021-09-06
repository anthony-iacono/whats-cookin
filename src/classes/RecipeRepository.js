import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes.map(recipe => new Recipe(recipe));
    this.matchingRecipes;
    this.matchingTags;
    this.selectedTags = [];
  }

  filterByTag() {
    let filteredRecipes = []
    this.selectedTags.forEach(tag => {
      this.matchingRecipes.forEach(recipe => {
        if(recipe.tags.includes(tag) && !filteredRecipes.includes(recipe)){
          filteredRecipes.push(recipe)
        }
      })
    })
    return filteredRecipes;
  }

  search(keywords) {
    this.matchingRecipes = [];
    keywords = keywords.split(' ');
    this.recipes.forEach(recipe => {
      const containsRecipe = this.matchingRecipes.includes(recipe)
      keywords.forEach(keyword => {
        this.checkNames(keyword, recipe, containsRecipe);
        this.checkIngredients(keyword, recipe, containsRecipe);
        this.checkTags(keyword, recipe, containsRecipe);
      })
    })
  }

  checkNames(keyword, recipe, containsRecipe) {
    if (recipe.name.toLowerCase().includes(keyword)
    && !containsRecipe) {
      this.matchingRecipes.push(recipe)
    }
  }

  checkTags(keyword, recipe, containsRecipe) {
    if (recipe.tags.includes(keyword)
    && !containsRecipe) {
      this.matchingRecipes.push(recipe)
    }
  }

  checkIngredients(keyword, recipe, containsRecipe) {
    const ingredientNames = recipe.ingredients.map(ingredient => ingredient.name)
    if (ingredientNames.join(' ').toLowerCase().includes(keyword)
    && !containsRecipe) {
      this.matchingRecipes.push(recipe)
    }
  }

}

export default RecipeRepository;
