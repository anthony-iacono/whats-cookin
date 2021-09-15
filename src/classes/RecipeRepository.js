import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes;
    this.matchingRecipes;
    this.matchingTags;
    this.selectedTags = [];
  }

  addRecipes() {
    this.recipes = this.recipes.map(recipe => new Recipe(recipe));
  }

  getRecipesInformation(ingredientsData) {
    this.recipes.forEach(recipe => {
      recipe.getIngredientsInformation(ingredientsData);
    })
  }

  getRecipeCost() {
    this.recipes.forEach(recipe => {
      recipe.getCost();
    })
  }

  filterTags() {
    this.matchingTags = [];
    this.matchingRecipes.forEach(recipe => {
      recipe.tags.forEach(tag => {
        if (!this.matchingTags.includes(tag)) {
          this.matchingTags.push(tag);
        }
      })
    })
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

  search(keywords, recipes) {
    this.matchingRecipes = [];
    keywords = keywords.split(' ');
    recipes.forEach(recipe => {
      keywords.forEach(keyword => {
        this.checkNames(keyword, recipe);
        this.checkIngredients(keyword, recipe);
        this.checkTags(keyword, recipe);
      })
    })
  }

  checkNames(keyword, recipe, containsRecipe) {
    if (recipe.name.toLowerCase().includes(keyword)
    && !this.matchingRecipes.includes(recipe)) {
      this.matchingRecipes.push(recipe);
    }
  }

  checkTags(keyword, recipe, containsRecipe) {
    if (recipe.tags.includes(keyword)
    && !this.matchingRecipes.includes(recipe)) {
      this.matchingRecipes.push(recipe)
    }
  }

  checkIngredients(keyword, recipe, containsRecipe) {
    const ingredientNames = recipe.ingredients.map(ingredient => ingredient.name)
    if (ingredientNames.join(' ').toLowerCase().includes(keyword)
    && !this.matchingRecipes.includes(recipe)) {
      this.matchingRecipes.push(recipe)
    }
  }
}

export default RecipeRepository;
