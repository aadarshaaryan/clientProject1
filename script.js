const menu = document.getElementById("menu");
const sideBar = document.getElementById("sideBar");

menu.addEventListener("click", (e) => {
    sideBar.classList.toggle("open");
});
