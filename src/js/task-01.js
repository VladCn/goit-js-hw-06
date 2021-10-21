const numberOfCategoriesJs = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategoriesJs.length}`);

const categoriesJs = document.querySelectorAll(".item");
categoriesJs.forEach(element => {
    console.log("Category: ", element.querySelector("h2").innerText)
    console.log("Elements: ", element.querySelectorAll("ul li").length)
})



