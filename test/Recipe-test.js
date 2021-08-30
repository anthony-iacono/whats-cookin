import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import sampleRecipeData from '../src/data/sample-recipes';

describe('Recipe', function() {
  let recipe;
  beforeEach(function() {
    recipe = new Recipe(sampleRecipeData[0]);
  });

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should hold imported values', function() {
    expect(recipe.id).to.equal(sampleRecipeData[0].id);
    expect(recipe.image).to.equal(sampleRecipeData[0].image);
    expect(recipe.ingredients).to.deep.equal(sampleRecipeData[0].ingredients);
    expect(recipe.instructions).to.deep.equal(sampleRecipeData[0].instructions);
    expect(recipe.name).to.equal(sampleRecipeData[0].name);
    expect(recipe.tags).to.deep.equal(sampleRecipeData[0].tags);
  });

  it('should determine the names of ingredients needed', function() {
    const ingredients = ['wheat flour', 'bicarbonate of soda', 'eggs', 'sucrose', 'instant vanilla pudding', 'brown sugar', 'salt', 'fine sea salt', 'semi sweet chips', 'unsalted butter', 'vanilla']
    expect(recipe.findIngredientName()).deep.equal(ingredients);
  });

  it('should get the cost of its ingredients', function() {
    expect(recipe.getCost()).to.equal(5921)
  })

  it('should get the instructions', function() {
    expect(recipe.getInstructions()).to.equal(sampleRecipeData[0].instructions);
  })

})
