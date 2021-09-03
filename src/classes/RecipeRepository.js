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
      const containsRecipeId = this.matchingRecipeIds.includes(recipe.id)
      keywords.forEach(keyword => {
        this.checkNames(keyword, recipe, containsRecipeId);
        this.checkIngredients(keyword, recipe, containsRecipeId);
        this.checkTags(keyword, recipe, containsRecipeId);
      })
    })
  }

  checkNames(keyword, recipe, containsRecipeId) {
    if (recipe.name.toLowerCase().includes(keyword)
    && !containsRecipeId) {
      this.matchingRecipeIds.push(recipe.id)
    }
  }

  checkTags(keyword, recipe, containsRecipeId) {
    if (recipe.tags.includes(keyword)
    && !containsRecipeId) {
      this.matchingRecipeIds.push(recipe.id)
    }
  }

  checkIngredients(keyword, recipe, containsRecipeId) {
    const ingredientNames = recipe.ingredients.map(ingredient => ingredient.name)
    if (ingredientNames.join(' ').toLowerCase().includes(keyword)
    && !containsRecipeId) {
      this.matchingRecipeIds.push(recipe.id)
    }
  }

  translateIdsToRecipes(recipeIds) {
    return this.recipes.filter(recipe => recipeIds.includes(recipe.id));
  }
}

export default RecipeRepository;
