// DOM UPDATE METHODS OBJECT
const domUpdates = {
  hide(...elements) {
    elements.forEach(element => {
      element.classList.add('hidden');
    })
  },

  show(...views) {
    views.forEach(view => view.classList.remove('hidden'));
  },


  fillIngredients(selectedRecipe) {
    selectedRecipe.ingredients.forEach(ingredient => {
      document.querySelector('.js-ingredients').innerHTML +=
      `<li>${ingredient.amount} ${ingredient.unit} ${ingredient.name}</li>`;
    });
  },

  fillInstructions(selectedRecipe) {
    selectedRecipe.instructions.forEach(instruction => {
      document.querySelector('.js-instructions').innerHTML +=
      `<li>${instruction.instruction}</li>`;
    });
  },

  updateBtnToClicked(selectedRecipe, user) {
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
  },

  fillPopout(selectedRecipe, user, popout) {
    popout.innerHTML =
    `<article class="full-recipe" id="${selectedRecipe.id}">
    <img src="${selectedRecipe.image}" alt="${selectedRecipe.name}">
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
    this.updateBtnToClicked(selectedRecipe, user);
  }
}

export default domUpdates;
