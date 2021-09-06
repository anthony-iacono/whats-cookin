class User {
  constructor(userData) {
    this.name = userData.name;
    this.id = userData.id;
    this.pantry = userData.pantry;
    this.favorites = [];
    this.recipesToCook = [];
  }

  addToFavorites(recipeId) {
    this.favorites.push(recipeId);
  }

  removeFromFavorites(recipeId) {
    this.favorites = this.favorites.filter(favorite => {
      return favorite !== recipeId;
    });
  }

  addToRecipesToCook(recipeId) {
    this.recipesToCook.push(recipeId);
  }

  removeFromRecipesToCook(recipeId) {
    this.recipesToCook = this.recipesToCook.filter(recipe => {
      return recipe !== recipeId;
    });
  }
}

export default User;
