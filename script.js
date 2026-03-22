const menu = document.getElementById("menu");
const sideBar = document.getElementById("sideBar");

menu.addEventListener("click", (e) => {
    e.stopPropagation();
    sideBar.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (sideBar.classList.contains("open") && !sideBar.contains(e.target)) {
        sideBar.classList.remove("open");
    }
});
