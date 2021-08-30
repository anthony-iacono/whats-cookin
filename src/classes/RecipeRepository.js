import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipes, ingredients) {
    this.recipes = recipes.map(recipe => new Recipe(recipe));
    this.ingredients = ingredients;
    this.matchingRecipes;
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
      let nameContainsKeyword = true;
      splitKeywords.forEach(keyword => {
        if (!recipe.name.includes(keyword)) {
          nameContainsKeyword = false;
          return;
        }
        if (!this.matchingRecipes.includes(recipe.id) && nameContainsKeyword) {
          this.matchingRecipes.push(recipe.id)
        }
      })
    })
  }

  filterByIngredient(keywords) {
    this.recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredient.name === keywords
        && !this.matchingRecipes.includes(recipe.id)) {
          this.matchingRecipes.push(recipe.id)
        }
      })
    })
  }
}

export default RecipeRepository;
