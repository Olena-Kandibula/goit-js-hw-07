const categoriesItemsByClass = document.querySelectorAll("li.item");

console.log(`В списке  ${categoriesItemsByClass.length} категории.`);


const elemCategorie = document
.querySelector('#categories')
.querySelectorAll('.item')
.forEach(item => {    
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`); 
});

  