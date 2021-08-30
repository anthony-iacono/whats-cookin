import sampleIngredientsData from '../data/sample-ingredients';

class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.amount = ingredient.quantity.amount;
    this.unit = ingredient.quantity.unit;
    this.cost = this.getCost();

  }

  getCost() {
    const matchingIng = sampleIngredientsData.find(ingredient => ingredient.id === this.id) 
    return matchingIng.estimatedCostInCents * this.amount
  }


}







export default Ingredient;