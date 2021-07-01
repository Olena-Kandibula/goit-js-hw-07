const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.style.listStyleType = 'none';
 
const items = ingredients.map(options => {
 const itemEl =  document.createElement("li");
 itemEl.textContent = options;

 return itemEl;
});

ingredientsEl.append(...items);

//  console.log(...items)