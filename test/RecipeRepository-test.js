import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import sampleRecipeData from '../src/data/sampleRecipeData';
import sampleIngredientsData from '../src/data/sampleIngredientsData';
import Recipe from '../src/classes/Recipe';

describe('Recipe Repo', function() {
  let recipeRepository;
  beforeEach(function() {
    recipeRepository = new RecipeRepository(sampleRecipeData);
    recipeRepository.addRecipes();
    recipeRepository.getRecipesInformation(sampleIngredientsData);
    recipeRepository.getRecipeCost();
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
    // recipeRepository.addRecipes();
    expect(recipeRepository.recipes[0]).to.be.an.instanceof(Recipe)
  })

  it('Should be able to filter recipes based on one tag', function() {
    // recipeRepository.addRecipes();
    recipeRepository.matchingRecipes = recipeRepository.recipes
    recipeRepository.selectedTags = ['starter']
    expect(recipeRepository.filterByTag()).to.deep.equal([recipeRepository.recipes[0]]);
  })

  it('Should be able to filter recipes based on more than one tag', function() {
    // recipeRepository.addRecipes();
    let expectedResults = [recipeRepository.recipes[0], recipeRepository.recipes[2]]
    recipeRepository.matchingRecipes = recipeRepository.recipes
    recipeRepository.selectedTags = ['starter', 'sauce']
    expect(recipeRepository.filterByTag()).to.deep.equal(expectedResults);
  })

  it('Should be able to filter recipes by a single keyword string', function() {
    // recipeRepository.addRecipes();
    recipeRepository.search('sauce', recipeRepository.recipes);
    expect(recipeRepository.matchingRecipes).to.deep.equal([recipeRepository.recipes[0], recipeRepository.recipes[1], recipeRepository.recipes[2]]);
  })

  it('should be able to filter by ingredient', function () {
    recipeRepository.search('wheat flour', recipeRepository.recipes);
    expect(recipeRepository.matchingRecipes).to.deep.equal([recipeRepository.recipes[0]]);
  })
})
