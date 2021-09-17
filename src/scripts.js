import './styles.css';
import { fetchUsers, fetchRecipes, fetchIngredients } from './apiCalls';
import User from './classes/User'
import RecipeRepository from './classes/RecipeRepository';
import domUpdates from './domUpdates'
let recipeRepo;
let user;

const favoritesBtn = document.querySelector('.js-favorites-btn');
const favoritesResultsSection = document.querySelector('.favorites-results-section');
const favoritesSearchBox = document.querySelector('.js-favorites-search-box');
const favoritesSection = document.querySelector('.js-favorites-section');
const favoritesTagsSection = document.querySelector('.js-favorites-tags-section')
const favoritesWrapper = document.querySelector('.js-favorites-wrapper');
const homeSection = document.querySelector('.js-home-section');
const homeBtn = document.querySelector('.js-home-btn');
const mainSearchBox = document.querySelector('.js-search-box');
const popout = document.querySelector('.js-recipe-popout');
const recipesToCookSection = document.querySelector('.js-recipes-to-cook-section');
const recipesToCookBtn = document.querySelector('.js-recipes-to-cook-btn');
const recipesToCookResults = document.querySelector('.js-recipes-to-cook-results')
const resultsSection = document.querySelector('.js-results-section');
const searchSection = document.querySelector('.js-search-section');
const searchTagsSection = document.querySelector('.js-tags-section');

window.addEventListener('load', getApis)
favoritesBtn.addEventListener('click', showFavorites);
favoritesSearchBox.addEventListener('keypress', function(event) {
  showResults(event, favoritesResultsSection, favoritesSearchBox,
    user.favorites, favoritesTagsSection
  );
})
favoritesSection.addEventListener('click', displayPopout);
favoritesTagsSection.addEventListener('click', function(event) {
  filterResultsByTag(event, favoritesResultsSection);
});
homeBtn.addEventListener('click', showHome);
homeSection.addEventListener('click', displayPopout);
popout.addEventListener('click', addFavoriteOrRecipeToCook);
recipesToCookBtn.addEventListener('click', showRecipesToCook);
recipesToCookSection.addEventListener('click', displayPopout);
resultsSection.addEventListener('click', displayPopout);
mainSearchBox.addEventListener('keypress', function(event) {
  showResults(event, resultsSection, mainSearchBox, recipeRepo.recipes,
    searchTagsSection
  );
});
searchTagsSection.addEventListener('click', function(event) {
  filterResultsByTag(event, resultsSection);
});

function addTag(tag, section) {
  recipeRepo.selectedTags.push(tag);
  const filteredRecipes = recipeRepo.filterByTag();
  domUpdates.displayRecipes(filteredRecipes, section);
}

function displayPopout(event) {
  if (!event.target.parentNode.classList.contains('recipe')
    && !event.target.classList.contains('recipe')) {
    return;
  }
  domUpdates.hide(homeSection, favoritesWrapper, recipesToCookSection, searchSection, popout);
  domUpdates.show(popout);
  const selectedRecipe = recipeRepo.recipes.find(recipe => {
    return event.target.classList.contains(recipe.id)
  });

  domUpdates.fillPopout(selectedRecipe, user, popout);
  domUpdates.fillIngredients(selectedRecipe);
  domUpdates.fillInstructions(selectedRecipe);
}

function displayResults(keywords, section, recipes, tagsSection) {
  domUpdates.hide(homeSection, favoritesWrapper, recipesToCookSection, searchSection, popout);
  if (section === favoritesResultsSection) {
    domUpdates.show(favoritesWrapper)
  } else {
    domUpdates.show(searchSection);
  }
  recipeRepo.search(keywords, recipes);
  recipeRepo.filterTags();
  domUpdates.displayTags(tagsSection, recipeRepo);
  domUpdates.displayRecipes(recipeRepo.matchingRecipes, section || resultsSection);
}

function filterResultsByTag(event, section) {
  const checkbox = event.target;
  const tag = checkbox.name;
  if (!checkbox.matches('[type="checkbox"]')) {
    return;
  } else if (checkbox.checked) {
    addTag(tag, section);
  } else {
    removeTag(tag, section);
  }
}

async function getApis() {
  const usersData = await Promise.resolve(fetchUsers());
  const recipesData = await Promise.resolve(fetchRecipes());
  const ingredientsData = await Promise.resolve(fetchIngredients());
  const randomUsersDataIndex = Math.round(Math.random() * (usersData.length + 1));
  user = new User(usersData[randomUsersDataIndex]);
  user.addPantry();
  domUpdates.addUserName(user.name);
  recipeRepo = new RecipeRepository(recipesData);
  recipeRepo.addRecipes();
  recipeRepo.getRecipesInformation(ingredientsData);
  recipeRepo.getRecipeCost();
  domUpdates.displayRecipes(recipeRepo.recipes, homeSection);
}

function addFavoriteOrRecipeToCook(event) {
  event.preventDefault()
  const btn = event.target;
  const recipeId = btn.parentNode.id;
  const recipe = recipeRepo.recipes.find(recipe => recipe.id === parseInt(recipeId));
  if (domUpdates.determineClickedBtn(btn)) {
    toggleFavorites(recipe)
  } else {
    toggleRecipesToCook(recipe)
  }
}

function removeTag(tag, section) {
  recipeRepo.selectedTags = recipeRepo.selectedTags.filter(tag => {
    return tag !== tag;
  })
  if (recipeRepo.selectedTags.length) {
    const filteredRecipes = recipeRepo.filterByTag();
    domUpdates.displayRecipes(filteredRecipes, section);
  } else {
    domUpdates.displayRecipes(recipeRepo.matchingRecipes, section);
  }
}

function showFavorites() {
  domUpdates.hide(homeSection, favoritesWrapper, recipesToCookSection, searchSection, popout);
  domUpdates.show(favoritesWrapper);
  recipeRepo.matchingRecipes = user.favorites
  recipeRepo.filterTags()
  domUpdates.displayTags(favoritesTagsSection, recipeRepo)
  if (!user.favorites.length) {
    domUpdates.displayNoRecipeMsg(favoritesResultsSection);
    return;
  }
  domUpdates.displayRecipes(user.favorites, favoritesResultsSection);
}

function showHome() {
  domUpdates.hide(homeSection, favoritesWrapper, recipesToCookSection, searchSection, popout);
  domUpdates.show(homeSection);
}

function showRecipesToCook() {
  domUpdates.hide(homeSection, favoritesWrapper, recipesToCookSection, searchSection, popout);
  domUpdates.show(recipesToCookSection);
  if (!user.recipesToCook.length) {
    domUpdates.displayNoRecipeMsg(recipesToCookResults)
    return
  }
  domUpdates.displayRecipes(user.recipesToCook, recipesToCookResults)
}

function showResults(event, section, searchBox, recipes, tagsSection) {
  if (event.key === 'Enter') {
    event.preventDefault();
    displayResults(searchBox.value.toLowerCase(), section, recipes, tagsSection);
  }
}

function toggleFavorites(recipe) {
  if (!user.favorites.includes(recipe)) {
    user.addToFavorites(recipe);
  } else {
    user.removeFromFavorites(recipe);
  }
}

function toggleRecipesToCook(recipe) {
  if (!user.recipesToCook.includes(recipe)) {
    user.addToRecipesToCook(recipe);
  } else {
    user.removeFromRecipesToCook(recipe);
  }
}
