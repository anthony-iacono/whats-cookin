let userData;
let ingredients;
let recipes;

fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
  .then((response) => response.json())
  .then((data) => userData = data.userData)

fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
  .then((response) => response.json())
  .then((data) => ingredients = data.ingredientsData)

fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
  .then((response) => response.json())
  .then((data) => recipes = data.recipeData)
