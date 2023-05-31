const routes = {
  home: '/',
  
  // auth
  login: '/login',
  register: '/register',
  signout: '/signout',
  
  // recipes
  recipes: '/recipes',
  newRecipe: '/recipes/new',
  recipe: '/recipes/:id',
  editRecipe: '/recipes/:id/edit',
}

export default routes;