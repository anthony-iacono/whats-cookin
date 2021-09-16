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
  }

  
}

export default Pantry;
