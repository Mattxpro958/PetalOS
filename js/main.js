const launcherButton = document.getElementById("launcher");
const launcherMenu = document.getElementById("launcher-menu");

launcherButton.addEventListener("click", () => {
    launcherMenu.classList.toggle("open");
});