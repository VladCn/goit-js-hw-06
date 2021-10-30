const inputJs = document.querySelector("#font-size-control")
const spanJs = document.querySelector("#text")

const inputActionChange = (event) => {
  console.log("111")

    console.log(event.target.value)
    // spanJs.style.fontSize = event.target.value + "px"
    spanJs.style.fontSize = `${event.target.value}px`


}

inputJs.addEventListener("change", inputActionChange)