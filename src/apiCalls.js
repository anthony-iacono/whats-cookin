function fetchUsers() {
  return fetch("http://localhost:3001/api/v1/users")
    .then((response) => response.json())
    .catch(error => console.error(error))
}

function fetchRecipes() {
  return fetch("http://localhost:3001/api/v1/recipes")
    .then((response) => response.json())
    .catch(error => console.error(error))
}

function fetchIngredients() {
  return fetch("http://localhost:3001/api/v1/ingredients")
    .then((response) => response.json())
    .catch(error => console.error(error))
}

export {
  fetchUsers,
  fetchRecipes,
  fetchIngredients
}
