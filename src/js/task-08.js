const formJs = document.querySelector(".login-form")

const passwordJs = document.querySelector('input[type="password"]')
const emailJs = document.querySelector('input[type="email"]')
const buttonJs = document.querySelector('input[type="submit"]')

const inEmail = (event) => {

    console.log(event.target)
    console.log(passwordJs.getAttribute("name"))
    event.preventDefault();

    if(!passwordJs.value || !emailJs.value){
    alert("все поля должны быть заполнены")
    } else {
        console.log({
            [passwordJs.getAttribute("name")]: passwordJs.value,
            [emailJs.getAttribute("name")]: emailJs.value
        })
        formJs.reset()
    }
}
formJs.addEventListener("submit", inEmail)

console.log(emailJs.innerHTML)
