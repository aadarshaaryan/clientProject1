const menu = document.getElementById("menu");
const sideBar = document.getElementById("sideBar");
const cross = document.getElementById("cross");


menu.addEventListener("click", () => {
    sideBar.classList.toggle("open");
});

cross.addEventListener("click", () => {
    sideBar.classList.toggle("open");
});
