const inputJs = document.querySelector("#validation-input")
const numb = inputJs.getAttribute("data-length")

const blurAction = (event) => {
    console.log(event.target.value.length)
 if (event.target.value.length === Number(numb)){
     inputJs.setAttribute("class", "valid")

 } else inputJs.setAttribute("class", "invalid")

}

inputJs.addEventListener("blur", blurAction)


