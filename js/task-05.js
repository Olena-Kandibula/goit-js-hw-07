 

const input = document.querySelector("#name-input");

input.addEventListener("input", onInputUserName);

function onInputUserName(event) {
    
    document.querySelector("#name-output")
        .textContent = event.currentTarget.value;
    
    document.querySelector("#name-output")
    .classList.add("user-name");    
}

