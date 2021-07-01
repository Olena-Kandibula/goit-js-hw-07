const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
     

    if (event.currentTarget.value.length ===
        Number(input.getAttribute('data-length'))) {
        
        input.classList.add("valid")
       input.classList.replace("invalid","valid")
       
        return;
    }

    input.classList.add("invalid")    
}


 
