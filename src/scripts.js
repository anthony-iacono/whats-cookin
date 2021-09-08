import './styles.css';
import {
  fetchUsers,
  fetchIngredients,
  fetchRecipes,
} from './apiCalls'
import User from './classes/User'
import RecipeRepository from './classes/RecipeRepository';

let recipeData = [];
let userData = [];
let ingredientsData = [];
let recipeRepo;

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
const randomUserDataIndex = Math.round(Math.random() * (userData.length + 1));
const recipesToCookSection = document.querySelector('.js-recipes-to-cook-section');
const recipesToCookBtn = document.querySelector('.js-recipes-to-cook-btn');
const recipesToCookResults = document.querySelector('.js-recipes-to-cook-results')
const resultsSection = document.querySelector('.js-results-section');
const searchSection = document.querySelector('.js-search-section');
const searchTagsSection = document.querySelector('.js-tags-section');
let user;

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
  displayRecipes(filteredRecipes, section);
}

function displayPopout(event) {
  if (!event.target.parentNode.classList.contains('recipe')
    && !event.target.classList.contains('recipe')) {
    return;
  }
  hideAll();
  show(popout);
  const selectedRecipe = recipeRepo.recipes.find(recipe => {
    return event.target.classList.contains(recipe.id)
  });

  fillPopout(selectedRecipe);
  fillIngredients(selectedRecipe);
  fillInstructions(selectedRecipe);
}

function displayRecipes(recipes, section) {
  section.innerHTML = '';
  if (!recipes.length) {
    section.innerHTML =
    `<p>We couldn't find any recipes that matches your search criteria.</p>`
  } else {
    recipes.forEach(recipe => {
      const recipeCard =
      `<article class="recipe ${recipe.id}">
      <img class="recipe-image ${recipe.id}" src="${recipe.image}">
      <h2 class="article-title card-title ${recipe.id}">${recipe.name}</h2>
      </article>`;
      section.innerHTML += recipeCard;
    });
  }
}

function displayResults(keywords, section, recipes, tagsSection) {
  hideAll();
  if (section === favoritesResultsSection) {
    show(favoritesWrapper)
  } else {
    show(searchSection);
  }
  recipeRepo.search(keywords, recipes);
  filterTags();
  displayTags(tagsSection);
  displayRecipes(recipeRepo.matchingRecipes, section || resultsSection);
}

function displayTags(tagsSection) {
  tagsSection.innerHTML = ''
  recipeRepo.matchingTags.forEach(tag => {
    const tagCard =
    `<label class="tags">
    <input class="tag" type="checkbox" name="${tag}">${tag}
    </label>`;
    tagsSection.innerHTML += tagCard;
  })
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

function fillPopout(selectedRecipe) {
  popout.innerHTML =
    `<article class="full-recipe" id="${selectedRecipe.id}">
      <img src="${selectedRecipe.image}">
      <h2>${selectedRecipe.name}</h2>
      <button class="add-favorite-btn js-add-favorite-btn">Add to Favorites</button>
      <button class="add-recipe-btn js-add-recipe-btn">Add to Recipes to Cook</button>
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
        <p class="cost js-cost">${selectedRecipe.cost}</p>
      </div>
    </article>`;
  updateBtnToClicked(selectedRecipe);
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

function filterTags() {
  recipeRepo.matchingTags = [];
  recipeRepo.matchingRecipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!recipeRepo.matchingTags.includes(tag)) {
        recipeRepo.matchingTags.push(tag);
      }
    })
  })
}

function getApis() {
  Promise.all([fetchUsers(), fetchIngredients(), fetchRecipes()])
  .then(allArrays => storeData(allArrays));
}

function addFavoriteOrRecipeToCook(event) {
  event.preventDefault()
  const btn = event.target;
  const recipeId = btn.parentNode.id;
  const recipe = recipeRepo.recipes.find(recipe => recipe.id === parseInt(recipeId));
  if (btn.matches('.js-add-favorite-btn')) {
    btn.classList.toggle('clicked')
    toggleFavorites(recipe)
  } else if (btn.matches('.js-add-recipe-btn')) {
    btn.classList.toggle('clicked')
    toggleRecipesToCook(recipe)
  }
}

function hideAll() {
  homeSection.classList.add('hidden');
  favoritesWrapper.classList.add('hidden');
  recipesToCookSection.classList.add('hidden');
  searchSection.classList.add('hidden');
  popout.classList.add('hidden');
}

function removeTag(tag, section) {
  recipeRepo.selectedTags = recipeRepo.selectedTags.filter(tag => {
    return tag !== tag;
  })
  if (recipeRepo.selectedTags.length) {
    const filteredRecipes = recipeRepo.filterByTag();
    displayRecipes(filteredRecipes, section);
  } else {
    displayRecipes(recipeRepo.matchingRecipes, section);
  }
}

function show(...views) {
  views.forEach(view => view.classList.remove('hidden'));
}

function showFavorites() {
  hideAll();
  show(favoritesWrapper);
  recipeRepo.matchingRecipes = user.favorites
  filterTags()
  displayTags(favoritesTagsSection)
  if (!user.favorites.length) {
    favoritesResultsSection.innerHTML =
    `<p>You haven't yet saved any recipes to your favorites.</p>`
    return;
  }
  displayRecipes(user.favorites, favoritesResultsSection);
}

function showHome() {
  hideAll();
  show(homeSection);
}

function showRecipesToCook() {
  hideAll();
  show(recipesToCookSection);
  if (!user.recipesToCook.length) {
    recipesToCookResults.innerHTML =
    `<p>You haven't yet saved any recipes to cook this week</p>`
  }
  displayRecipes(user.recipesToCook, recipesToCookResults)
}

function showResults(event, section, searchBox, recipes, tagsSection) {
  if (event.key === 'Enter') {
    event.preventDefault();
    displayResults(searchBox.value.toLowerCase(), section, recipes, tagsSection);
  }
}

function storeData(arrays) {
  arrays[0].forEach((user) => userData.push(user));
  arrays[1].forEach((ingredient) => ingredientsData.push(ingredient));
  arrays[2].forEach((recipe) => recipeData.push(recipe));
  user = new User(userData[randomUserDataIndex]);
  recipeRepo = new RecipeRepository(recipeData);
  displayRecipes(recipeRepo.recipes, homeSection);
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

function updateBtnToClicked(selectedRecipe) {
  user.favorites.forEach(favoriteRecipe => {
    if (favoriteRecipe.id === selectedRecipe.id) {
      document.querySelector('.js-add-favorite-btn').classList.add('clicked');
    }
  })
  user.recipesToCook.forEach(recipe => {
    if (recipe.id === selectedRecipe.id) {
      document.querySelector('.js-add-recipe-btn').classList.add('clicked')
    }
  })
}

export { ingredientsData }
