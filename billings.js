const menu = document.querySelector(".menu")
const container1 = document.querySelector(".container1")
menu.addEventListener("click", () => {
    container1.style.display = 'flex'
    container1.style.transform = 'translateX(0)'
})
const close = document.querySelector(".close")
close.addEventListener("click", () => {
    container1.style.display = 'none'
    container1.style.transform = 'translate(400px)'
})