import sampleIngredientsData from '../data/sample-ingredients';


class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients.map(ingredient => new Ingredient(ingredient));
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.costInCents = 0;
  }

  findIngredientName() {
    let ingredientNames = [];
    sampleIngredientsData.map(sampleIng => {
      if (this.ingredients.map(ing => ing.id).includes(sampleIng.id)) {
        ingredientNames.push(sampleIng.name)
      }
    })
    return ingredientNames
  };



  getCost() {
    const quantity = this.ingredients.map(ingredients => ingredients.quantity.amount);
    // let counter = 0;
    // sampleIngredientsData.map(sampleIng => {
    //   if (this.ingredients.map(ing => ing.id).includes(sampleIng.id)) {
    //     this.costInCents = this.costInCents + (sampleIng.estimatedCostInCents * quantity[counter])
    //     counter = counter++
    //   }
    // })
    // return this.costInCents

  const test = this.ingredients.map(ingredient => {
      sampleIngredientsData.find(sampleIngredient => sampleIngredient.id === ingredient.id)
    })
    console.log(test)
  }

  getIngredientCost() {

  }

  getInstructions() {
    return this.instructions;
  }
}





export default Recipe;
