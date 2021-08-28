import sampleIngredientsData from '../data/sample-ingredients';


class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.costInCents = 0;
  }

  findIngredientName() {
    let ingredientNames = [];
    // return this.ingredients.map(ing => ing.id)
    sampleIngredientsData.map(sampleIng => {
      if (this.ingredients.map(ing => ing.id).includes(sampleIng.id)) {
        ingredientNames.push(sampleIng.name)
      }
    })
    return ingredientNames
  }

  getCost() {
    sampleIngredientsData.map(sampleIng => {
      if (this.ingredients.map(ing => ing.id).includes(sampleIng.id)) {
        this.costInCents = this.costInCents + sampleIng.estimatedCostInCents
      }
    })
    return this.costInCents
  }
}





export default Recipe;
