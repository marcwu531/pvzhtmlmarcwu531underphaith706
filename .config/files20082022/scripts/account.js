function getLoginMenu() {
  
}
var loginMenu;
loginMenu = getEById("loginMenu")
loginMenu.innerText = "Login";

function login() {
  loginMenu != undefined ? () => {} : getLoginMenu()
  loginMenu.style.display = loginMenu.style.display != "block" ? "block" : "none"
  if (loginMenu.style.display == "block") {
    loginMenu.innerText = "Login"
  } else {
    loginMenu.innerText = "Back to game"
  }
}