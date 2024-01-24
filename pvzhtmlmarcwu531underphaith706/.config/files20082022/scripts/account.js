function getLoginMenu() {
  
}
var loginMenu;
loginMenu = getEById("loginMenu")
loginMenu.innerText = "Login";
username = getEById("username")
password = getEById("password")

username.style.display = "none"
password.style.display = "none"

function login() {
  loginMenu != undefined ? () => {} : getLoginMenu()
  loginMenu.style.display = loginMenu.style.display != "block" ? "block" : "none"
  if (loginMenu.style.display == "block") {
    loginMenu.innerText = "Login"
  } else {
    loginMenu.innerText = "Back to game"
  }
  username.style.display = loginMenu.style.display
  password.style.display = loginMenu.style.display
}