import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes.map(recipe => new Recipe(recipe));
    this.matchingRecipes;
    this.matchingTags;
  }

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

  filterByKeyword(keywords) {
    this.matchingRecipes = [];
    this.filterByName(keywords);
    this.filterByIngredient(keywords);
  }

  filterByName(keywords) {
    const splitKeywords = keywords.split(' ');
    this.recipes.forEach(recipe => {
      splitKeywords.forEach(keyword => {
        if (recipe.name.toLowerCase().includes(keyword) && !this.matchingRecipes.includes(recipe.id)) {
          this.matchingRecipes.push(recipe.id)
        }
      })
    })
  }

  filterByIngredient(keywords) {
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
