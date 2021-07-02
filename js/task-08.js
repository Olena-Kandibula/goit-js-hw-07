
const inputEl = document.querySelector('#controls').firstElementChild;
console.log(inputEl);// куда вводим

const clearBtnElEl = document.querySelector('#controls').lastElementChild;
console.log(clearBtnElEl);//очистить

const creatBtnElEl = clearBtnElEl.previousElementSibling;
console.log(creatBtnElEl);//создать

const boxesEl = document.querySelector("#boxes");
console.log(boxesEl);//бокс контейнер



creatBtnElEl.addEventListener("click", createBoxes)

function createBoxes() {

    let amount = inputEl.valueAsNumber;//число которое ввели после  создать
  
    const arrayBox = [];

    for (let i=0; i< amount; i++) {       

        let sizeDiv = 30 + i*10;

        let color = '#'+ Math.round(0xffffff * Math.random()).toString(16);//рандомный цвет

        arrayBox.push(`<div 
        style="width: ${sizeDiv}px; height: ${sizeDiv}px; margin: 20px;
        background:${color};" ></div>`)
        
    }

     return boxesEl.insertAdjacentHTML("afterbegin" , arrayBox.join(" "));
}



clearBtnElEl.addEventListener("click", destroyBoxes)

function destroyBoxes() {    

    boxesEl.innerHTML = ' ';    
}