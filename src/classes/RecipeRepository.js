class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes;
  }

  filterByTag(userTags) {
    const matchingRecipes = [];
    userTags.forEach(userTag => {
      this.recipes.forEach(recipe => {
        if (recipe.tags.includes(userTag) && !matchingRecipes.includes(recipe.id)) {
          matchingRecipes.push(recipe.id)
        }
      })
    })
    return matchingRecipes;
  }
}

export default RecipeRepository;
// A RecipeRepository should hold onto all Recipe objects.
// [x] It should have a parameter to take in recipe data.
// [x] It should have methods to determine:
// [ ] A filtered list of recipes based on one or more tags.
// [ ] A filtered list of recipes based on its name or ingredients.

// const recipesByTag = this.recipes.filter(recipe => {
//   // access each tag in the tag array and filter by that tag
//   //
//   const filArr = arr.map(elm => recipe.tags.includes(elm))
//   const recipesByTag = this.recipes.map(recipe => recipe.tags.includes(tag))
//   // return recipe.tags.includes(tags);

  // given an array of tags that the user selected
  // loop over all recipes and return recipes that match ALL the tags in the array
    // loop through each recipe
    //   });

      // return recipesByTag.map(recipe => recipe.id);

// https://replit.com/@repellant49/UntidyPrimeRedundantcode#index.js

// PesudoCode Goes Here
/* user selects one or more tags
tags will always be an array
when that array is passed into the filterByTag...
evaluate array of tags passed through and iterate through the array of tags
and for each tag look through all of the tag properties of each recipe
if there is a match, return the id of the match and store it in array (holds
recipes that the user will see)
the deepest layer would be includes() and so that is the condition (t or f)
next layer is filter -- returns array of recipes that include current tag
we need another condition to ensure that the same recipe isn't added twice

if we use forEach()
 */
