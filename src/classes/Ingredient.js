class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.amount = ingredient.quantity.amount;
    this.unit = ingredient.quantity.unit;
    this.name;
    this.cost;
  }

  retrieveNameAndCost(ingredientsData) {
    const ingredient = ingredientsData.find(ingredient => ingredient.id === this.id);
    this.name = ingredient.name;
    this.cost = ingredient.estimatedCostInCents * this.amount;
  }
}

export default Ingredient;
