import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import sampleRecipeData from '../src/data/sampleRecipeData';
import sampleIngredientsData from '../src/data/sampleIngredientsData';
import Recipe from '../src/classes/Recipe';

describe('Recipe', function() {
  let recipeRepository;
  beforeEach(function() {
    recipeRepository = new RecipeRepository(
      sampleRecipeData,
      sampleIngredientsData
    );
  })

  it('Should be a function', function() {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of RecipeRepository', function() {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository);
  })

  it('Should take in recipe data', function() {
    expect(recipeRepository.recipes.length).to.equal(3);
  })

  it('Recipes should be instances of Recipe', function() {
    expect(recipeRepository.recipes[0]).to.be.an.instanceof(Recipe)
  })

  it('Should be able to filter recipes based on one tag', function() {
    recipeRepository.filterByTag(['starter']);
    expect(recipeRepository.matchingRecipes).to.deep.equal([595736]);
  })

  it('Should be able to filter recipes based on more than one tag', function() {
    recipeRepository.filterByTag(['starter', 'sauce']);
    expect(recipeRepository.matchingRecipes).to.deep.equal([595736, 412309]);
  })

  it('Should be able to filter recipes by a single keyword string', function() {
    recipeRepository.filterByKeyword('Sauce');
    expect(recipeRepository.matchingRecipes).to.deep.equal([595736, 412309]);
  })

  it('should be able to filter by ingredient', function () {
    recipeRepository.filterByKeyword('wheat flour');
    expect(recipeRepository.matchingRecipes).to.deep.equal([595736]);
  })
})
