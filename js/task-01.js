const categoriesItemsByClass = document.querySelectorAll("#categories .item");

console.log(`В списке  ${categoriesItemsByClass.length} категории.`);

const categoriesAndElements = document
.querySelectorAll('#categories .item')
.forEach(item => {    
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`); 
});

