const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
document.querySelector('#ingredients').append(...ingredients.map(ingredient => { 
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
}));