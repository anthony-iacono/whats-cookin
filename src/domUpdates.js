// QUERY SELECTORS
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

// DOM METHODS OBJECT
const domUpdates = {
  hideAll() {
    homeSection.classList.add('hidden');
    favoritesWrapper.classList.add('hidden');
    recipesToCookSection.classList.add('hidden');
    searchSection.classList.add('hidden');
    popout.classList.add('hidden');
  },
  homeSection,
  favoritesWrapper,
  recipesToCookSection,
  searchSection,
  popout
}

export default domUpdates;
