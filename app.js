const menu = document.querySelector(".menu");
const hideMenu = document.querySelector(".hidemenu");

console.log(menu);

menu.onclick = function () {
  console.log("clicked");
  hideMenu.classList.toggle("hide");
};
