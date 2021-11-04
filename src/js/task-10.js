const createBtnJs = document.querySelector('button[data-create]')
const destroyBtnJs = document.querySelector('button[data-destroy]')
const inputJs = document.querySelector('input')
const divJs = document.querySelector('#boxes')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getInputValue () {

 const valueInput = inputJs.value
  createBoxes(valueInput)
}
function createBoxes(amount){
  const classBoxName = "newDiv"
  const allClassBoxes = document.querySelectorAll(`.${classBoxName}`)

  let height
  let width

  if(!allClassBoxes.length){
    height = 30
    width = 30
  } else {
    const lastBox = allClassBoxes[allClassBoxes.length-1]

    height = parseInt(lastBox.style.height) +10
    width = parseInt(lastBox.style.width) +10
  }


  for(let i = 0; i < amount; i += 1){
    const divCreate = document.createElement('div')
    divCreate.style.height = `${height}px`
    divCreate.style.width = `${width}px`
    divCreate.style.backgroundColor = getRandomHexColor()
    divCreate.classList.add(classBoxName)
    divJs.insertAdjacentElement("beforeend", divCreate)
    height += 10
    width += 10
  }

}

function reset(){
const divArrayJs = document.querySelectorAll(".newDiv")
  for(const value of divArrayJs) {
    value.remove()
  }
}

createBtnJs.addEventListener('click', getInputValue)
destroyBtnJs.addEventListener('click', reset)
