import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';



describe('Recipe', () => {
  let recipe;
  let recipeRepository;
  beforeEach(function() {
     recipe = [{
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        }
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": ["antipasti", "starter"]
    }]
    recipeRepository = new RecipeRepository(recipe);
  })


  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of RecipeRepository', function() {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository);
  })

  it('Should take in recipe data', function() {
    expect(recipeRepository.recipes.length).to.equal(1);
  })

  it.skip('Recipes should be instances of Recipe', function() {
    expect(recipeRepository.recipes).to.be.an.instanceof(Recipe)
  })

  it('Should be able to filter recipes based on tags', function() {
    let filteredRecipes = recipeRepository.filterByTag("starter");
    expect(filteredRecipes).to.deep.equal([595736])

  })
})
