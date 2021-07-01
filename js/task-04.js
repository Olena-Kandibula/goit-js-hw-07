
const counterValue = document.querySelector('#value');

let counterValueNumber = Number(counterValue.textContent);



const btnDecrementEl = document.querySelector('[data-action="decrement"]');

const btnIncrementEl = document.querySelector('[data-action="increment"]');


function increment  () {       
     return counterValue.textContent = counterValueNumber += 1;
}

function decrement () {    
           return counterValue.textContent = counterValueNumber -= 1;
}


btnIncrementEl.addEventListener('click', increment);

btnDecrementEl.addEventListener('click', decrement);

