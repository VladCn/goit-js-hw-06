const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const ingredientEl = document.createElement(`li`);
// ingredientEl.textContent =`1111`;
// ingredientEl.classList.add(`item`);
//
// console.log(ingredientEl)

const makeArrayIngredients = ingredients.map( ingredient => {
  console.log(ingredient)
  const ingredientEl = document.createElement(`li`);
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add(`item`);
  return ingredientEl;

})

console.log(makeArrayIngredients)

const conteinerIngredientEl = document.querySelector(`#ingredients`)
conteinerIngredientEl.append(...makeArrayIngredients);