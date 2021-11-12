
function fetchUsers() {
  return fetch("https://whats-cookin-api-data.herokuapp.com/api/v1/users")
    .then((response) => response.json())
    .catch(error => console.error(error))
}

function fetchRecipes() {
  return fetch("https://whats-cookin-api-data.herokuapp.com/api/v1/recipes")
    .then((response) => response.json())
    .catch(error => console.error(error))
}

function fetchIngredients() {
  return fetch("https://whats-cookin-api-data.herokuapp.com/api/v1/ingredients")
    .then((response) => response.json())
    .catch(error => console.error(error))
}

export {
  fetchUsers,
  fetchRecipes,
  fetchIngredients
}
