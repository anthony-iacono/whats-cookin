// import { ingredientsData } from '../scripts';
// import { sampleIngredientsData } from '../data/sample-ingredients';

class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.amount = ingredient.amount;
    this.unit = ingredient.unit;
    this.cost;
    this.name;
  }

  retrieveNameAndCost(ingredientsData) {
    const ingredient = ingredientsData.find(ingredient => ingredient.id === this.id);
    this.name = ingredient.name
    this.cost = ingredient.estimatedCostInCents * this.amount / 100;
  }
  //
  // calculateCost() {
  //   return this.estimatedCostInCents * this.amount / 100;
  // }
  // getCost() {
  //   const matchingIng = ingredientsData.find(ingredient => {
  //     return ingredient.id === this.id;
  //   })
  //   return matchingIng.estimatedCostInCents * this.amount;
  // }

}

export default Ingredient;
