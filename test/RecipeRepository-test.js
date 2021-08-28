import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import sampleRecipeData from '../src/data/sample-recipes';

describe('Recipe', () => {
  let recipeRepository;
  beforeEach(function() {
    recipeRepository = new RecipeRepository(sampleRecipeData);
  })


  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of RecipeRepository', function() {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository);
  })

  it('Should take in recipe data', function() {
    expect(recipeRepository.recipes.length).to.equal(3);
  })

  it.skip('Recipes should be instances of Recipe', function() {
    expect(recipeRepository.recipes).to.be.an.instanceof(Recipe)
  })

  it('Should be able to filter recipes based on one tag', function() {
    let filteredRecipes = recipeRepository.filterByTag(['starter']);
    expect(filteredRecipes).to.deep.equal([595736]);
  })

  it('Should be able to filter recipes based on more than one tag', function() {
    let filteredRecipes = recipeRepository.filterByTag(['starter', 'sauce']);
    expect(filteredRecipes).to.deep.equal([595736, 412309]);
  })
})
