
function fetchUsers() {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
    .then((response) => response.json())
    .then((data) => data.usersData);
    // .catch(error => console.log("error")
}

function fetchIngredients() {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
    .then((response) => response.json())
    .then((data) => data.ingredientsData);
    // .catch(error => console.log("error")
}

function fetchRecipes() {
   return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
    .then((response) => response.json())
    .then((data) => data.recipeData);
}

export {
  // userData,
  // ingredientsData,
  // recipeData,
  fetchUsers,
  fetchIngredients,
  fetchRecipes
}
