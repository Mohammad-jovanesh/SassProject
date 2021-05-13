const Btn_menu = document.querySelector(".menu_btn")
const Menu = document.querySelector(".menu")

Btn_menu.addEventListener("click", () => {
    Btn_menu.classList.toggle("show")
    Menu.classList.toggle("show")
})