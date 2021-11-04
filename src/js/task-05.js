const nameOutputJs = document.querySelector("#name-output")
const nameInputJs = document.querySelector("#name-input")



const actionSubmitInput = (event) => {
    console.log(event)
    if (event.target.value === ""){
        return nameOutputJs.textContent = "Anonymous"

    } else
    nameOutputJs.textContent = event.target.value;
    console.log(event)
}

nameInputJs.addEventListener("input", actionSubmitInput)
console.log(nameInputJs.textContent)

