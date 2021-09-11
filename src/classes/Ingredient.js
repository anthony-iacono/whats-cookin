import { ingredientsData } from '../scripts';
// import { sampleIngredientsData } from '../data/sample-ingredients';

class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.amount = ingredient.quantity.amount;
    this.unit = ingredient.quantity.unit;
    this.cost = this.getCost();
    this.name = this.getName();
  }

  getCost() {
    const matchingIng = ingredientsData.find(ingredient => {
      return ingredient.id === this.id;
    })
    return matchingIng.estimatedCostInCents * this.amount;
  }

  getName() {
    return ingredientsData.find(ingredient => ingredient.id === this.id).name
  }
}

export default Ingredient;
