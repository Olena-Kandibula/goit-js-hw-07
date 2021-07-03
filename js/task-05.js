 
const input = document.querySelector("#name-input");

function onInputUserName(event) {
    
    if (event.currentTarget.value.length === 0) {
        document.querySelector("#name-output")
            .textContent = "незнакомец";
    } else {    
        document.querySelector("#name-output")
            .textContent = event.currentTarget.value;
    
        document.querySelector("#name-output")
            .classList.add("user-name");
    }    
}

input.addEventListener("input", onInputUserName);