import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes.map(recipe => new Recipe(recipe));
    this.matchingRecipes;
    this.matchingTags;
    this.selectedTags = [];
  }

  // when a tag's box is checked
  // iterate through matchingRecipes
    // use the fn we already have to display only recipes in matchingRecipes that have the tag

  // This method not currently used; consider removing it and its tests before submission
  filterByTag(userTags) {
    this.matchingRecipes = [];
    userTags.forEach(userTag => {
      this.recipes.forEach(recipe => {
        if (recipe.tags.includes(userTag)
        && !this.matchingRecipes.includes(recipe.id)) {
          this.matchingRecipes.push(recipe.id)
        }
      })
    })
    return this.matchingRecipes;
  }

  searchByKeyword(keywords) {
    this.matchingRecipes = [];
    this.searchByName(keywords);
    this.searchByIngredient(keywords);
  }

  searchByName(keywords) {
    const splitKeywords = keywords.split(' ');
    this.recipes.forEach(recipe => {
      splitKeywords.forEach(keyword => {
        if (recipe.name.toLowerCase().includes(keyword) && !this.matchingRecipes.includes(recipe.id)) {
          this.matchingRecipes.push(recipe.id)
        }
      })
    })
  }

  filterByTag(keywords) {
    const splitKeywords = keywords.split(' ');
    this.recipes.forEach(recipe => {
      splitKeywords.forEach(keyword => {
        if (recipe.name.toLowerCase().includes(keyword) && !this.matchingRecipes.includes(recipe.id)) {
          this.matchingRecipes.push(recipe.id)
        }
      })
    })
  }

  searchByIngredient(keywords) {
    const splitKeywords = keywords.split(' ');
    this.recipes.forEach(recipe => {
      const ingredientNames = recipe.ingredients.map(ingredient => ingredient.name)
      splitKeywords.forEach(keyword => {
        if (ingredientNames.join(' ').toLowerCase().includes(keyword)
        && !this.matchingRecipes.includes(recipe.id)) {
          this.matchingRecipes.push(recipe.id)
        }
      })
    })
  }

  translateIdsToRecipes(recipeIds) {
    return this.recipes.filter(recipe => recipeIds.includes(recipe.id));
  }
}

export default RecipeRepository;
