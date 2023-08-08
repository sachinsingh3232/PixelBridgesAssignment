const menu = document.getElementById("menu");
const Menu = document.getElementById("Menu");
let right = -250;
menu.addEventListener("click", () => {
    if (right == 0) {
        right = -250;
    }
    else {
        right = 0;
    }
    return Menu.style.right = right + "px";
})
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});