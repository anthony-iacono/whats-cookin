import './styles.css';
import apiCalls from './apiCalls';
import recipeData from './data/recipes';
import userData from './data/users';
import User from './classes/User'
import RecipeRepository from './classes/RecipeRepository';

const favoritesBtn = document.querySelector('.js-favorites-btn');
const favoritesSearchBox = document.querySelector('.js-favorites-search-box');
const favoritesSection = document.querySelector('.js-favorites-section');
const homeSection = document.querySelector('.js-home-section');
const homeBtn = document.querySelector('.js-home-btn');
const popout = document.querySelector('.js-recipe-popout');
const randomUserDataIndex = Math.round(Math.random() * (userData.length + 1));
const recipeRepo = new RecipeRepository(recipeData);
const recipesToCookSection = document.querySelector('.js-recipes-to-cook-section');
const recipesToCookBtn = document.querySelector('.js-recipes-to-cook-btn');
const resultsSection = document.querySelector('.js-results-section');
const mainSearchBox = document.querySelector('.js-search-box');
const searchSection = document.querySelector('.js-search-section');
const tagsSection = document.querySelector('.js-tags-section');
const user = new User(userData[randomUserDataIndex]);

window.onload = displayRecipes(recipeRepo.recipes, homeSection);
favoritesBtn.addEventListener('click', showFavorites);
favoritesSearchBox.addEventListener('keypress', function(event) {
  showResults(event, favoritesSection);
})
homeBtn.addEventListener('click', showHome);
homeSection.addEventListener('click', displayPopout);
popout.addEventListener('click', handleClick);
resultsSection.addEventListener('click', displayPopout);
mainSearchBox.addEventListener('keypress', function() {
  showResults(event, searchSection)
});
tagsSection.addEventListener('click', filterResultsByTag);

function displayPopout(event) {
  hide(homeSection, searchSection);
  show(popout);
  const selectedRecipe = recipeRepo.recipes.find(recipe => {
    return event.target.classList.contains(recipe.id)
  });

  fillPopout(selectedRecipe);
  fillIngredients(selectedRecipe);
  fillInstructions(selectedRecipe);
}

function fillIngredients(selectedRecipe) {
  selectedRecipe.ingredients.forEach(ingredient => {
    document.querySelector('.js-ingredients').innerHTML +=
    `<li>${ingredient.amount} ${ingredient.unit} ${ingredient.name}</li>`;
  });
}

function fillInstructions(selectedRecipe) {
  selectedRecipe.instructions.forEach(instruction => {
    document.querySelector('.js-instructions').innerHTML +=
    `<li>${instruction.instruction}</li>`;
  });
}

function displayRecipes(recipes, section) {
  section.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeCard =
    `<article class="recipe ${recipe.id}">
      <img class="recipe-image ${recipe.id}" src="${recipe.image}">
      <div class="article-title ${recipe.id}">
        <h2 class="card-title ${recipe.id}">${recipe.name}</h2>
      </div>
    </article>`;
    section.innerHTML += recipeCard;
  });
}

function displayResults(keywords, section) {
  hide(popout, homeSection, favoritesSection, searchSection);
  show(section);
  recipeRepo.search(keywords);
  filterTags();
  displayTags(section);
  const convertedRecipes = recipeRepo.convertToRecipes()
  displayRecipes(convertedRecipes, resultsSection);
}

function displayTags() {
  tagsSection.innerHTML = ''
  recipeRepo.matchingTags.forEach(tag => {
    const tagCard =
    `<label class="tags">
        <input class="tag" type="checkbox" name="${tag}">${tag}
    </label>`;
    tagsSection.innerHTML += tagCard;
  })
}

function fillPopout(selectedRecipe) {
  popout.innerHTML =
    `<article class="full-recipe" id="${selectedRecipe.id}">
      <img src="${selectedRecipe.image}">
      <h2>${selectedRecipe.name}</h2>
      <button class="js-add-favorite-btn">Add to Favorites</button>
      <button class="js-add-recipe-btn">Add to Recipes to Cook</button>
      <div class="test">
        <h3>Ingredients</h3>
        <ul class="js-ingredients"></ul>
      </div>
      <div class="test-two">
        <h3>Directions</h3>
        <ol class="js-instructions"></ol>
      </div>
      <div class="test-three">
        <h3>Cost</h3>
        <p class="js-cost">${selectedRecipe.cost}</p>
      </div>
    </article>`;
}

function filterTags() {
  recipeRepo.matchingTags = [];
  const convertedRecipes = recipeRepo.convertToRecipes(recipeRepo.matchingIds);
  convertedRecipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!recipeRepo.matchingTags.includes(tag)) {
        recipeRepo.matchingTags.push(tag);
      }
    })
  })
}

function handleClick(event) {
  event.preventDefault()
  const btn = event.target;
  const recipeId = btn.parentNode.id;
  if (btn.matches('.js-add-favorite-btn')) {
    btn.classList.toggle('clicked')
    toggleFavorites(recipeId)
  } else if (btn.matches('.js-add-recipe-btn')) {
    btn.classList.toggle('clicked')
    toggleRecipesToCook(recipeId)
  }
}

function toggleFavorites(recipeId) {
  if (!user.favorites.includes(recipeId)) {
    user.addToFavorites(recipeId);
  } else {
    user.removeFromFavorites(recipeId);
  }
}

function toggleRecipesToCook(recipeId) {
  if (!user.recipesToCook.includes(recipeId)) {
    user.addToRecipesToCook(recipeId);
  } else {
    user.removeFromRecipesToCook(recipeId);
  }
}

function hide(...views) {
  views.forEach(view => view.classList.add('hidden'));
}

function show(...views) {
  views.forEach(view => view.classList.remove('hidden'));
}

function showFavorites() {
  hide(popout, homeSection, searchSection, recipesToCookSection);
  show(favoritesSection);
  displayRecipes(user.favorites, favoritesSection);
}

function showRecipesToCook() {
hide(popout, homeSection, searchSection);
show(recipesToCookSection)
}

function showHome() {
  location.reload()
}

function showResults(event, section) {
  if (event.key === 'Enter') {
    event.preventDefault();
    displayResults(mainSearchBox.value.toLowerCase(), section);
  }
}

function filterResultsByTag(event) {
  const checkbox = event.target;
  const tag = checkbox.name;
  if (!checkbox.matches('[type="checkbox"]')) {
    return;
  } else if (checkbox.checked) {
    addTag(tag);
  } else {
    removeTag(tag)
  }
}

function addTag(tag) {
  recipeRepo.selectedTags.push(tag);
  const filteredRecipes = recipeRepo.filterByTag();
  displayRecipes(filteredRecipes, resultsSection);
}

function removeTag(tag) {
  recipeRepo.selectedTags = recipeRepo.selectedTags.filter(tag => {
    return tag !== tag;
  })
  if (recipeRepo.selectedTags.length) {
    const filteredRecipes = recipeRepo.filterByTag();
    displayRecipes(filteredRecipes, resultsSection);
  } else {
    const convertedRecipes = recipeRepo.convertToRecipes()
    displayRecipes(convertedRecipes, resultsSection);
  }
}
