const button = document.querySelector("button");
const list = document.querySelector("ul");
const img = document.querySelector("img");

let menu = true;

button.onclick = () => {
  if (menu) {
    button.style.background = "url('close.jpg')";
    button.style.backgroundSize = "cover";
    button.style.height = "36px";
    button.style.margin = "32px 0";
    button.style.marginRight = "32px";
    button.style.transition = "all 0.15s ease-out";
    list.style.visibility = "visible";
    menu = false;
  } else {
    button.style.background = "url('menu.png')";
    button.style.backgroundSize = "cover";
    button.style.height = "30px";
    button.style.margin = "35px 0";
    button.style.marginRight = "35px";
    button.style.transition = "all 0.15s ease-in";
    list.style.visibility = "hidden";
    menu = true;
  }
};
