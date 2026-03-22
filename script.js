const menu = document.getElementById("menu");
const sideBar = document.getElementById("sideBar"); // Ensure this ID matches your HTML

menu.addEventListener("click", () => {
    sideBar.classList.toggle("open"); 
    // This adds the class "open" if it's missing, and removes it if it's there.
});