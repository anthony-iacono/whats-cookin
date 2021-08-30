import { expect } from 'chai';
import sampleIngredientsData from '../src/data/sample-ingredients';
import sampleRecipeData from '../src/data/sample-recipes';
import Ingredient from '../src/classes/Ingredient.js';

describe('Ingredient', function() {
  it('should be a function', function() {
    expect(Ingredient).to.be.a('function');
  });

  let ingredient;
  beforeEach(function() {
    ingredient = new Ingredient(sampleRecipeData[0].ingredients[0]);
  });

  it('should calculate its own cost', function() {
    expect(ingredient.cost).to.equal(213);

  })

});