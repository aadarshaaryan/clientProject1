const menu = document.getElementById("menu");
const sideBar = document.getElementById("sideBar");

menu.addEventListener("click", () => {
    sideBar.classList.toggle("open");
});
