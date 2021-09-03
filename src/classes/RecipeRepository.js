import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes.map(recipe => new Recipe(recipe));
    this.matchingIds;
    this.matchingTags;
    this.selectedTags = [];
  }

  filterByTag() {
    let translatedRecipes = this.convertToRecipes(this.matchingIds)
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
    this.matchingIds = [];
    keywords = keywords.split(' ');
    this.recipes.forEach(recipe => {
      const containsRecipeId = this.matchingIds.includes(recipe.id)
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
      this.matchingIds.push(recipe.id)
    }
  }

  checkTags(keyword, recipe, containsRecipeId) {
    if (recipe.tags.includes(keyword)
    && !containsRecipeId) {
      this.matchingIds.push(recipe.id)
    }
  }

  checkIngredients(keyword, recipe, containsRecipeId) {
    const ingredientNames = recipe.ingredients.map(ingredient => ingredient.name)
    if (ingredientNames.join(' ').toLowerCase().includes(keyword)
    && !containsRecipeId) {
      this.matchingIds.push(recipe.id)
    }
  }

  convertToRecipes() {
    return this.recipes.filter(recipe => this.matchingIds.includes(recipe.id));
  }
}

export default RecipeRepository;
