import { expect } from 'chai';
import sampleRecipeData from '../src/data/sampleRecipeData';
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
  });

  it('should be able to find its name', function() {
    expect(ingredient.name).to.equal('wheat flour');
  });
});
