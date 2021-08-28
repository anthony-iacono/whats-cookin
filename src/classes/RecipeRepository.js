class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes;
  }

  filterByTag(arr) {
    const recipesByTag = this.recipes.filter(recipe => {
      // access each tag in the tag array and filter by that tag
      //
      const filArr = arr.map(elm => recipe.tags.includes(elm))
      const recipesByTag = this.recipes.map(recipe => recipe.tags.includes(tag))
      // return recipe.tags.includes(tags);

      // given an array of tags that the user selected
      // loop over all recipes and return recipes that match ALL the tags in the array
        // loop through each recipe

// https://replit.com/@repellant49/UntidyPrimeRedundantcode#index.js
    });

    return recipesByTag.map(recipe => recipe.id);
  }
}

export default RecipeRepository;
// A RecipeRepository should hold onto all Recipe objects.
// [x] It should have a parameter to take in recipe data.
// [x] It should have methods to determine:
// [ ] A filtered list of recipes based on one or more tags.
// [ ] A filtered list of recipes based on its name or ingredients.
