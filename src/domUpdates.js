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
    console.log(selectedRecipe);
    popout.innerHTML =
    `<article class="full-recipe" id="${selectedRecipe.id}">
      <img src="${selectedRecipe.image}" alt="${selectedRecipe.name}">
      <h2>${selectedRecipe.name}</h2>
      <button class="add-favorite-btn js-add-favorite-btn">Add to Favorites</button>
      <button class="add-recipe-btn js-add-recipe-btn">Add to Recipes to Cook</button>
      <button class="make-recipe-btn js-make-recipe-btn hidden">Make this Recipe</button>
      <div class="test">
        <h3>Ingredients</h3>
        <ul class="js-ingredients"></ul>
      </div>
      <div class="js-ingredients-needed-container hidden">
        <h3>You Need</h3>
        <ul class="js-ingredients-needed-list"></ul>
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
  },

  fillDifferences(ingredientsNeeded) {
    if (!ingredientsNeeded.length) {
      this.show(document.querySelector('.js-make-recipe-btn'));
      return;
    }
    this.show(document.querySelector('.js-ingredients-needed-container'))
    ingredientsNeeded.forEach(ingredientNeeded => {
      document.querySelector('.js-ingredients-needed-list').innerHTML +=
      `<li>${ingredientNeeded.name} ${ingredientNeeded.difference} ${ingredientNeeded.unit}</li>`;
    });
  },

  displayRecipes(recipes, section) {
    section.innerHTML = '';
    if (!recipes.length) {
      section.innerHTML =
      `<p>We couldn't find any recipes that matches your search criteria.</p>`
    } else {
      recipes.forEach(recipe => {
        const recipeCard =
        `<article class="recipe ${recipe.id}">
        <img class="recipe-image ${recipe.id}" src="${recipe.image}" alt="plate of ${recipe.name}">
        <h2 class="article-title card-title ${recipe.id}">${recipe.name}</h2>
        </article>`;
        section.innerHTML += recipeCard;
      });
    }
  },

  determineClickedBtn(btn) {
    if (btn.matches('.js-add-favorite-btn')) {
      btn.classList.toggle('clicked')
      return "Favorites"
    } else if (btn.matches('.js-add-recipe-btn')) {
      btn.classList.toggle('clicked')
    }
  },

  displayNoRecipeMsg(section) {
    section.innerHTML =
    `<p>You haven't added any recipes yet</p>`
  },

  displayTags(tagsSection, recipeRepo) {
    tagsSection.innerHTML = ''
    recipeRepo.matchingTags.forEach(tag => {
      const tagCard =
      `<label class="tags">
      <input class="tag" type="checkbox" name="${tag}">${tag}
      </label>`;
      tagsSection.innerHTML += tagCard;
    })
  }
}

export default domUpdates;
