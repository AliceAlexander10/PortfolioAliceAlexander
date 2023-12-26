function toggleMenu() {
    const menu = document.getElementById("toggleMenu");
    if (menu.className === "menu") {
      menu.className += "responsive";
    } else {
      menu.className = "menu";
    }
}
