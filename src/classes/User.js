class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.favorites = [];
    this.recipesToCook = [];
  }

  addToFavorites(recipe) {
    this.favorites.push(recipe);
  }

  removeFromFavorites(recipe) {
    this.favorites = this.favorites.filter(favorite => {
      return favorite !== recipe;
    });
  }

  addToRecipesToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

  removeFromRecipesToCook(recipe) {
    this.recipesToCook = this.recipesToCook.filter(recipeToCook => {
      return recipeToCook !== recipe;
    });
  }
}

export default User;
