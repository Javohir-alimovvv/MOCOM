const menuEl = document.querySelector(".menu_icon");
const saidbarEl = document.querySelector(".saidbar");
const closeEl = document.querySelector(".close_icon");



menuEl.addEventListener("click", (e) => {
    saidbarEl.style.display = "block"
    closeEl.style.display = "block"
    menuEl.style.display = "none"
})

closeEl.addEventListener("click", (e) => {
    saidbarEl.style.display = "none"
    closeEl.style.display = "none"
    menuEl.style.display = "block"
})