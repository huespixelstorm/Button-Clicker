const countText = document.querySelector("#counter")
const button = document.querySelector("#btn")

let counter = 0

button.addEventListener("click", () => {
    counter++
    countText.textContent = counter
})

const reset = document.querySelector("#reset")

reset.addEventListener("click", () => {
    counter = 0
    countText.textContent = counter
})