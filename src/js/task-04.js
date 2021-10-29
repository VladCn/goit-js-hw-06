

const value = document.querySelector('#value')
const decrement = document.querySelector('[data-action="decrement"]')
const increment = document.querySelector('[data-action="increment"]')
// let counterValue = Number(value.textContent);
let counterValue = 0;


const decrementAction = () => {
   counterValue -= 1;
    value.innerHTML = counterValue;

}
const incrementAction = () => {
    counterValue += 1;
    value.innerHTML = counterValue;
}


increment.addEventListener('click', incrementAction)
decrement.addEventListener('click', decrementAction)

value.innerHTML = counterValue;
console.log(counterValue)
