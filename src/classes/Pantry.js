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
        previous.push({id: current.id, name: current.name, difference: current.amount, unit: current.unit})
      } else if (matchingPantryIngredient.amount < current.amount) {
        previous.push({id: current.id, name: current.name, difference: current.amount - matchingPantryIngredient.amount, unit: current.unit})
      }
      return previous;
    }, [])
    console.log('ingredients', this.ingredients)
    console.log('differences', differences)
    return differences;
  }
  nameIngredients(recipeRepo) {
    return this.ingredients.map(ingredient => {
      const matchingIng = recipeRepo.ingredientsData.find(ingData => {
        return ingData.id === ingredient.ingredient
      })
      const unit = this.findIngredientUnit(ingredient, recipeRepo)
      return `<li>${ingredient.amount} ${unit} ${matchingIng.name}</li>`
    })
  }

  findIngredientUnit(ingredient, recipeRepo) {
    let ingredientUnit;
    recipeRepo.recipes.forEach(recipe => {
      recipe.ingredients.forEach(recipeIngredient => {
        if (recipeIngredient.id === ingredient.ingredient) {
          ingredientUnit = recipeIngredient.unit
        }
      })
    })
    return ingredientUnit
  }

  increaseIngredient(ingredientId, ingredientAmount) {
    ingredientId = parseInt(ingredientId);
    ingredientAmount = parseInt(ingredientAmount)
    const ingredientIds = this.ingredients.map(ingredient => ingredient.ingredient)
    if (!ingredientIds.includes(ingredientId)) {
      return this.ingredients.push({ingredient: ingredientId, amount: ingredientAmount})
    }
    this.ingredients.forEach(ingredient => {
      if(ingredient.ingredient === ingredientId) {
        ingredient.amount += ingredientAmount
      }
    })
  }
}

export default Pantry;

// User should be able to indicate that they cooked a meal and then those ingredients + quantities used in the recipe will be removed from their pantry.
// button should only be usable when the user's pantry has enough ingredients.
