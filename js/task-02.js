const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsItems = ingredients.map(item => {
  const ingridient = document.createElement('li');
  ingridient.textContent = item;
  ingridient.classList.add('item');
  return ingridient;
});


const ingridientsListEl = document.querySelector('#ingredients');

ingridientsListEl.append(...ingredientsItems);