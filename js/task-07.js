const inputControl = document.querySelector("#font-size-control");
 
const inputTextSize = document.querySelector("#text");

inputTextSize.style.fontSize = window.getComputedStyle(inputTextSize).fontSize;

function onChangeTextSize (event) {

    inputTextSize.style.fontSize = Number(event.currentTarget.value)*
    0.32 + "px";   
}

inputControl.addEventListener("input", onChangeTextSize);