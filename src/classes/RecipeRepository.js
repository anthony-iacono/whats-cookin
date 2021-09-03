import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes.map(recipe => new Recipe(recipe));
    this.matchingRecipeIds;
    this.matchingTags;
    this.selectedTags = [];
  }

  // when a tag's box is checked
  // iterate through matchingRecipes
    // use the fn we already have to display only recipes in matchingRecipes that have the tag

  // This method not currently used; consider removing it and its tests before submission
  filterByTag() {
    let translatedRecipes = this.translateIdsToRecipes(this.matchingRecipeIds)
    let filteredRecipes = []
    this.selectedTags.forEach(tag => {
      translatedRecipes.forEach(recipe => {
        if(recipe.tags.includes(tag) && !filteredRecipes.includes(recipe)){
          filteredRecipes.push(recipe)
        }
      })
    })
    return filteredRecipes;
  }

  search(keywords) {
    this.matchingRecipeIds = [];
    keywords = keywords.split(' ');
    this.recipes.forEach(recipe => {
      keywords.forEach(keyword => {
        this.checkNames(keyword, recipe);
        this.checkIngredients(keyword, recipe);
        this.checkTags(keyword, recipe);
      })
    })
  }

  checkNames(keyword, recipe) {
    if (recipe.name.toLowerCase().includes(keyword) && !this.matchingRecipeIds.includes(recipe.id)) {
      this.matchingRecipeIds.push(recipe.id)
    }
  }

  checkTags(keyword, recipe) {
    if (recipe.name.toLowerCase().includes(keyword) && !this.matchingRecipeIds.includes(recipe.id)) {
      this.matchingRecipeIds.push(recipe.id)
    }
  }

  checkIngredients(keyword, recipe) {
    const ingredientNames = recipe.ingredients.map(ingredient => ingredient.name)
    if (ingredientNames.join(' ').toLowerCase().includes(keyword)
    && !this.matchingRecipeIds.includes(recipe.id)) {
      this.matchingRecipeIds.push(recipe.id)
    }
  }

  translateIdsToRecipes(recipeIds) {
    return this.recipes.filter(recipe => recipeIds.includes(recipe.id));
  }
}

export default RecipeRepository;
