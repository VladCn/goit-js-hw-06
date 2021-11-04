function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color")
const textColorJs = document.querySelector(".color")
const bodyJS = document.querySelector("body")

const action = () => {
 const color = getRandomHexColor()
  textColorJs.textContent = color
  bodyJS.style.backgroundColor = `${color}`
}

changeColorBtn.addEventListener("click", action)
