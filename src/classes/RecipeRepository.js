import Recipe from './Recipe';
import Ingredient from './Ingredient';

class RecipeRepository {
  constructor(recipes, ingredientsData) {
    this.recipes = recipes;
    this.matchingRecipes;
    this.matchingTags;
    this.selectedTags = [];
    this.ingredientsData = ingredientsData;
  }

  addRecipes() {
    this.recipes = this.recipes.map(recipe => {
      const newRecipe = new Recipe(recipe);
      newRecipe.ingredients = recipe.ingredients.map(ingredient => new Ingredient(ingredient));
      return newRecipe;
    });
  }

  getRecipesInformation() {
    this.recipes.forEach(recipe => {
      recipe.getIngredientsInformation(this.ingredientsData);
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
    this.selectedTags.forEach(selectedTag => {
      this.addToFilteredRecipe(selectedTag, filteredRecipes);
    });
    return filteredRecipes;
  }

  addToFilteredRecipe(selectedTag, filteredRecipes) {
    this.matchingRecipes.forEach(matchingRecipe => {
      if(matchingRecipe.tags.includes(selectedTag) && !filteredRecipes.includes(matchingRecipe)){
        filteredRecipes.push(matchingRecipe)
      }
    });
  }

  search(keywords, recipes) {
    this.matchingRecipes = [];
    keywords = keywords.split(' ');
    recipes.forEach(recipe => {
      this.checkNamesIngredientsAndTags(keywords, recipe);
    })
  }

  checkNamesIngredientsAndTags(keywords, recipe) {
    keywords.forEach(keyword => {
      this.checkNames(keyword, recipe);
      this.checkIngredients(keyword, recipe);
      this.checkTags(keyword, recipe);
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
