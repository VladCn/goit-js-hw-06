const inputJs = document.querySelector("#font-size-control")
const spanJs = document.querySelector("#text")
inputJs.setAttribute("value","16")
spanJs.style.fontSize = "16px"

const inputActionChange = (event) => {
    spanJs.style.fontSize = `${event.target.value}px`
}

inputJs.addEventListener("change", inputActionChange)