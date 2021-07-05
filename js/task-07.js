const inputControl = document.querySelector("#font-size-control");

const inputTextSize = document.querySelector("#text");

// console.log(window.getComputedStyle(inputTextSize).fontSize);
inputTextSize.style.fontSize = '16px';


function onChangeTextSize (event) {

    inputTextSize.style.fontSize = Number(event.currentTarget.value)*
    0.32 + "px";   
}

inputControl.addEventListener("input", onChangeTextSize);