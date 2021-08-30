import sampleIngredientsData from '../data/sample-ingredients';
import Ingredient from './Ingredient';


class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients.map(ingredient => new Ingredient(ingredient));
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.costInCents = this.getCost();
  }

  findIngredientsName() {
    return this.ingredients.map(ingredient => ingredient.name);
  };



  getCost() {
    let total = 0;
    this.ingredients.forEach(ingredient => {
      total = total + ingredient.cost;
    })
    return total;
  }

  getInstructions() {
    return this.instructions;
  }
}





export default Recipe;
