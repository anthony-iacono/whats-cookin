/*
Pantry Data
[] Determine whether a user’s pantry has enough ingredients to cook a given meal
[] Determine the amount of missing ingredients still needed to cook a given meal, based on what’s in the user’s pantry

Pantry User Stories
[] As a user, I should be able to view what ingredients exist inside of my pantry

// View the Pantry
// we need a pantry page that lists of the pantry items
// We also want a button at the top with the user's checkNames
// when clicked, it shows a section with the users Pantry

[] As a user, I should be able to check my list of recipes to cook and see if my pantry has enough ingredients to cook a meal
[] As a user, I should be told what ingredients are still needed if I don’t have enough ingredients in my pantry to cook the recipe
[] As a user, I should not be able to cook a recipe if I don’t have the ingredients required
[] As a user, when I cook a meal, those ingredients should be removed from my pantry
[] As a user, I should be able to add more ingredients to my pantry
*/

class Pantry {
  constructor(ingredients) {
    this.ingredients = ingredients;
    this.neededIngredients = [];
  }

  checkPantry(recipeIngredients) {
    const differences = recipeIngredients.reduce((previous, current) => {
      const matchingPantryIngredient = this.ingredients.find(ingredient => {
        return current.id === ingredient.ingredient
      })
      if (!matchingPantryIngredient) {
        previous.push({name: current.name, difference: current.amount, unit: current.unit})
      } else if (matchingPantryIngredient.amount < current.amount) {
        previous.push({name: current.name, difference: current.amount - matchingPantryIngredient.amount, unit: current.unit})
      }
      return previous;
    }, [])
    return differences;
  }
// Brainstorm: maybe flatMap to break out arrays and compare?

// when user clicks a recipe IN RTC, a recipe popout display
// the popout includes a list of the ingredient differences
// if all the ingredients differences are greater than or equal to 0,
// then display a cook recipe button
// which, when clicked, removes the amounts of each ingredient from Pantry and removed the recipe from the user's RTC section.
// if any differences are less than 0, the app tells the user that they need to make a  grocery run with a grocery list!
// while checking ingredient diff, save ingredient name to the array of objects (pantry.neededIngredients) in lieu of the ingredientID
// if the array returns length of 0, then display button to cook meal, otherwise display disparity.
// we have a method on pantry that takes in one array, selectedRecipeIngredients as a parameter, and call filter on it. first we find in pantry.ingredients and returns first instance of what it finds.

// Input: array of recipe ingredients
// Output: object storing ingredientID and difference from ingredient in pantry

// given a recipe, check the recipes ingredients against pantry ingredients

}

export default Pantry;
