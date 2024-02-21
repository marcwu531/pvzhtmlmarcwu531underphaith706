let upgradeUpdateAmount = 3

function getLoginMenu() {

}
var loginMenu;
loginMenu = getEById("loginMenu")
let username = getEById("username")
let password = getEById("password")
let loginButton = getEById("login")
let loginFr = getEById("loginFr")
let loginInfo = getEById("loginInfo")
let exportAcc = getEById("exportAcc")
let currentUsername;
let exportedInfo = getEById("exportedInfo")
let importedAcc = getEById("importedAcc")
let importInput = getEById("importInput")
let stats = getEById("stats")
let showStatsVar = getEById("showStats")
let upgrade = getEById("upgrade")
let upgradeMenu = getEById("upgradeMenu")

username.style.display = "none"
password.style.display = "none"
loginFr.style.display = "none"
loginInfo.style.display = "none"
exportAcc.style.display = "none"
exportedInfo.style.display = "none"
importAcc.style.display = "none"
loginButton.innerText = "Login"
importInput.style.display = "none"

let [statsVar, updates] = [{
peashooterShooted: 0,
sunflowerProducedSun: 0,
cherrybombKilled: 0,
wallnutLostHp: 0,
potatomineKilled: 0
}, 0]

function login(type) {
  switch (type) {
    case 0:
      loginMenu != undefined ? () => { } : getLoginMenu()
      loginMenu.style.display = loginMenu.style.display != "block" ? "block" : "none"
      loginFr.style.display = loginMenu.style.display
      loginInfo.style.display = loginMenu.style.display
      if (loginMenu.style.display != "block") {
        loginButton.innerText = "Login"
      } else {
        loginButton.innerText = "Back to Game"
      }
      username.style.display = loginMenu.style.display
      password.style.display = loginMenu.style.display
      exportAcc.style.display = loginMenu.style.display
      exportedInfo.style.display = loginMenu.style.display
      importAcc.style.display = loginMenu.style.display
      importInput.style.display = loginMenu.style.display

      showStatsVar.style.display = loginMenu.style.display == "block" ? "none" : "block"
      upgrade.style.display = loginMenu.style.display == "block" ? "none" : "block"
      break;
    case 1:
      let usernameTyped = username.value
      let passwordTyped = password.value

      if (usernameTyped == '' || passwordTyped == '') {
        loginInfo.innerText = "Invalid username or password"
        return;
      }

      let user = JSON.parse(localStorage.getItem(usernameTyped));

      if (user != null) {
        if (passwordTyped != localStorage.getItem(usernameTyped).split('"password":"')[1].split('"')[0]) {
          loginInfo.innerText = "Invalid username or password"
          return;
        }
      /*[statsVar, updates] = [
	JSON.parse(localStorage.getItem(currentUsername)).stats, JSON.parse(localStorage.getItem(currentUsername)).updates
      ]*/
        loginInfo.innerText = "Logged in successfully!"
      } else {
        let account = JSON.stringify({
          username: usernameTyped,
          password: passwordTyped,
          stats: {
            peashooterShooted: 0,
            sunflowerProducedSun: 0,
            cherrybombKilled: 0,
            wallnutLostHp: 0,
            potatomineKilled: 0
          },
	  updates: ""
        })
        localStorage.setItem(usernameTyped, account)
        loginInfo.innerText = "Account created successfully!"
      }
      currentUsername = usernameTyped
  }
	statsVar = JSON.parse(localStorage.getItem(currentUsername)).stats
	updates = JSON.parse(localStorage.getItem(currentUsername)).updates
}

function accInfo(type) {
  switch (type) {
    case 0:
      if (currentUsername == null) {
        loginInfo.innerText = "Please log in"
      } else {
        exportedInfo.innerText = stringToHex(localStorage.getItem(currentUsername))
      }
      break;

    case 1:
      if (importInput.value == '') {
        loginInfo.innerText = "Please enter code"
      } else {
        let enumValue;
        try {
          enumValue = JSON.parse(hexToString(importInput.value.toString()))
        } catch (e) {
          loginInfo.innerText = "Invalid Code"
          return;
        }
        localStorage.setItem(enumValue.username, JSON.stringify(enumValue))
        currentUsername = enumValue.username
        username.value = enumValue.username
        password.value = enumValue.password
        loginInfo.innerText = "Imported and logged in successfully"
      }
  }
}

let stringToHex = (str) => {
  let encryptPassword = "wupaklong"
  let hex = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const hexValue = charCode.toString(16);

    // Pad with zeros to ensure two-digit representation
    hex += hexValue.padStart(2, '0');
  }
  //alert(hex)
  return CryptoJS.AES.encrypt(hex, encryptPassword).toString();
};

let hexToString = (hex) => {
  let encryptPassword = "wupaklong"
  let str = '';
  hex = CryptoJS.AES.decrypt(hex, encryptPassword).toString(CryptoJS.enc.Utf8);
  //alert(hex)
  for (let i = 0; i < hex.length; i += 2) {
    const hexValue = hex.substr(i, 2);
    const decimalValue = parseInt(hexValue, 16);
    str += String.fromCharCode(decimalValue);
  }
  return str;
};

function showStats() {
  if (showStatsVar.innerText == "Show Stats") {
    try {
      updateStat()
      showStatsVar.innerText = "Hide Stats"
    } catch (e) { }
  } else {
    stats.innerText = ""
    showStatsVar.innerText = "Show Stats"
  }
}

function changeStat(type, amount) {
  switch (type) {
    case 0:
      statsVar.peashooterShooted += amount
  }
  currentUsername != null ? saveState(type) : () => { }
}

function saveState(type) {
  switch (type) {
    case 0:
      var tar = localStorage.getItem(currentUsername)
      tar = tar.split('"peashooterShooted":')[0] + '"peashooterShooted":' + statsVar.peashooterShooted + "," + tar.split('"peashooterShooted":')[1].replace(",", "!@#$%^&*()").split("!@#$%^&*()")[1]
      localStorage.setItem(currentUsername, tar)
      break;
    case -1:
      var tar = localStorage.getItem(currentUsername)
      tar = tar.split('"updates":')[0] + '"updates":"' + updates + '"}'
      //alert(tar)
      localStorage.setItem(currentUsername, tar)
  }
  updateStat()
}

function updateStat() {
  stats.innerText = JSON.stringify(localStorage.getItem(currentUsername)).replaceAll(/\\"/g, "").split("stats:")[1].replaceAll(",", "\n").replaceAll(`"`, '').replaceAll("{", "").replaceAll("}", "").replaceAll(":", ": ")
}

let upgrade1 = getEById("upgrade1")
let upgrade1Tooltip = getEById("upgrade1Tooltip");
let upgrade2 = getEById("upgrade2")
let upgrade2Tooltip = getEById("upgrade2Tooltip");
let upgrade3 = getEById("upgrade3")

function showUpgrades() {
  if (currentUsername == null) return;
  upgradeMenu.style.display = upgradeMenu.style.display != "block" ? "block" : "none"
  loginButton.style.display = upgradeMenu.style.display == "block" ? "none" : "block"
  //showStatsVar.style.display = upgradeMenu.style.display == "block" ? "none" : "block"
  upgrade.innerText = upgradeMenu.style.display == "none" ? "Upgrade" : "Back to Game"
  if (upgradeMenu.style.display == "block") {
    upgradeUpdate = []
    for (i=0; i<upgradeUpdateAmount; i++) {
      j = i+1
      getEById("upgrade"+j).style.left = "-35px"
      getEById("upgrade"+j).style.top = "-49px"
    }

    if (statsVar.peashooterShooted < 100) {
      upgrade1.style.filter = "brightness(0.5)"
      upgrade2.style.filter = "brightness(0.5)"
    } else {
      upgrade1.style.filter = ""
      upgrade2.style.filter = ""
    }

    upgrade1.style.display = "block"
    upgrade2.style.display = "block"
    upgrade3.style.display = "block"
    svg.style.display = "block"
    upgrade1Tooltip.innerText = 'Upgrade: Peashooters have 10% to shoot 1 extra pea. \n Unlock Requirement: Peashooters shot at least 100 peas.'
    upgrade2Tooltip.innerText = 'Upgrade: Peashooters have 3% to shoot melon instead. \n Unlock Requirement: Peashooters shot at least 100 peas.'
    upgradeMoveAround = setInterval(() => {
    }, 1)
  } else {
    upgrade1.style.display = "none"
    upgrade2.style.display = "none"
    svg.style.display = "none"
    upgrade3.style.display = "none"
  }
}

let upgradeMoveAround;
let shineInterval = []

function buyUpgrade(type) {
  switch (type) {
    case 1:
    case 2:
      statsVar.peashooterShooted < 100 && shineInterval[type] == undefined ? shineInterval[type] = setInterval("shineUpgrade("+type+")",1) : buyUpgrade(type)
  }
}

var shineCd = []
var shineTime = []

function buyUpgrade(type) {
  if (updates == undefined) {
    updates = ''
  }
  switch (type) {
    case 1:
      if (!updates.includes("upgrade1;") && !updates.includes("upgrade2;")) {
        updates += 'upgrade1;'
	saveState(-1)
      }
  }
}

function shineUpgrade(type) {
  var target = getEById("upgrade"+type)
  if (shineCd[type] == undefined) {
    shineCd[type] = 0
    shineTime[type] = 0
  } else if (shineCd[type] > 0) {
    shineCd[type]--
  } else {
    shineCd[type] = 10
    target.style.filter = target.style.filter == "brightness(1.5)" ? "brightness(0.5)" : "brightness(1.5)"
    if (shineTime[type] < 5) {
      shineTime[type]++
    } else {
      shineCd[type] = undefined
      clearInterval(shineInterval[type])
      shineInterval[type] = undefined
    }
  }
}

var upgradeUpdate = []
let upgradeUpdateLoop = setInterval(() => { upgradesUpdate() }, 1)
var haveInitialUpgradeOnMouse = false

function upgradesUpdate() {
  if (!(currentUsername == null || upgradeMenu.style.display == "none" || upgradeMenu.style.display == "")) {
    if (!haveInitialUpgradeOnMouse) {
      haveInitialUpgradeOnMouse = true
      initialUpgradeOnMouse()
    }
    for (i = 0; i < upgradeUpdateAmount; i++) {
      if (upgradeIsMoveOver[i] == undefined) {
        upgradeIsMoveOver[i] = false
      }
      if (!upgradeIsMoveOver[i]) {
        upgradesUpdateRunFunc(i)
      }

      var up1X, up1Y, up2X, up2Y;
      up1X = Number(upgrade1.style.left.split("px")[0]) + 35 / 2
      up2X = Number(upgrade2.style.left.split("px")[0]) + 35 / 2
      up1Y = Number(upgrade1.style.top.split("px")[0]) + 49 / 2
      up2Y = Number(upgrade2.style.top.split("px")[0]) + 49 / 2

      document.getElementById("svg").width.baseVal.value = Math.max(up1X, up2X)
      document.getElementById("svg").height.baseVal.value = Math.max(up1Y, up2Y)
      document.getElementById("line").x1.baseVal.value = up1X
      document.getElementById("line").x2.baseVal.value = up2X
      document.getElementById("line").y1.baseVal.value = up1Y
      document.getElementById("line").y2.baseVal.value = up2Y
      continue;
      let targetUpgradeUpdate = getEById("upgrade" + (i + 1))
      if (upgradeUpdate[i] == null) {
        initialUpdate(i, targetUpgradeUpdate)
      } else if (upgradeUpdate[i].updatedAmount > 99) {
        initialUpdate(i, targetUpgradeUpdate)
      }
      upgradeUpdate[i].updatedAmount++
      targetUpgradeUpdate.style.left = upgradeUpdate[i].initialX + (upgradeUpdate[i].x - upgradeUpdate[i].initialX) * upgradeUpdate[i].updatedAmount / 100
      alert(targetUpgradeUpdate.style.left)
    }
  }
}

var SeedPacketMoveTotalAmount = 200
var randomDeltaXY = 20
var upgradeIsMoveOver = []

function getXYByI(xy, i) {
  switch(i) {
    case 1:
      return xy == 0 ? 50 : 100
    case 2:
      return xy == 0 ? 50 : 200
    case 3:
      return xy == 0 ? 150 : 100
  }
}

function upgradesUpdateRunFunc(j) {
  i = j++
  let targetUpgradeUpdate = getEById("upgrade" + (i + 1))
  if (upgradeUpdate[i] == undefined) {
    upgradeUpdate[i] = {
      initialX: Number(targetUpgradeUpdate.style.left.split("px")[0]),
      initialY: Number(targetUpgradeUpdate.style.top.split("px")[0]),
      X: getXYByI(0, i + 1) - randomDeltaXY / 2 + Math.random() * randomDeltaXY,
      Y: getXYByI(1, i + 1) - randomDeltaXY / 2 + Math.random() * randomDeltaXY,
      Amount: 0
    }
    //console.log(upgradeUpdate[i])
  }
  upgradeUpdate[i].Amount++
  var targetX = Math.sin(upgradeUpdate[i].Amount / SeedPacketMoveTotalAmount) * (upgradeUpdate[i].X - upgradeUpdate[i].initialX) * upgradeUpdate[i].Amount / SeedPacketMoveTotalAmount + upgradeUpdate[i].initialX + "px"
  var targetY = Math.cos(upgradeUpdate[i].Amount / SeedPacketMoveTotalAmount) * (upgradeUpdate[i].Y - upgradeUpdate[i].initialY) * upgradeUpdate[i].Amount / SeedPacketMoveTotalAmount + upgradeUpdate[i].initialY + "px"
  targetUpgradeUpdate.style.left = targetX
  targetUpgradeUpdate.style.top = targetY
  if (upgradeUpdate[i].Amount > SeedPacketMoveTotalAmount) {
    upgradeUpdate[i] = undefined
  }
}

function initialUpdate(i, targetUpgradeUpdate) {
  upgradeUpdate[i] = {
    initialX: Number(targetUpgradeUpdate.style.left.split("px")[0]),
    initialY: Number(targetUpgradeUpdate.style.top.split("px")[0]),
    x: Number(targetUpgradeUpdate.style.left.split("px")[0]) + 100 * Math.random() - 10,
    y: Number(targetUpgradeUpdate.style.top.split("px")[0]) + 100 * Math.random() - 10,
    updatedAmount: 0
  }
}

/*upgrade1.onmouseover = function () {
  upgradeIsMoveOver[0] = true
  let heightDelta = 49 * 0.2
  let widthDelta = 35 * 0.2
  upgrade1.querySelector("img").height = 49 + heightDelta
  upgrade1.querySelector("img").width = 38.5 + widthDelta
  upgrade1.style.left = Number(upgrade1.style.left.split("px")[0]) - widthDelta / 2
  upgrade1.style.top = Number(upgrade1.style.top.split("px")[0]) - heightDelta / 2
}*/

upgrade1.onmouseout = function () {
  upgradeIsMoveOver[0] = false
  upgrade1.querySelector("img").height = 49
  upgrade1.querySelector("img").width = 35
  upgrade1.style.left = 50
  upgrade1.style.top = 50
}

function initialUpgradeOnMouse() {
  for (j = 0; j < upgradeUpdateAmount; j++) {
    var i = j + 1
    var y = 'upgrade1.onmouseover=function(){upgradeIsMoveOver[targetReplace]=!0,upgrade1.querySelector("img").height=58.8,upgrade1.querySelector("img").width=45.5,upgrade1.style.left=Number(upgrade1.style.left.split("px")[0])-3.5,upgrade1.style.top=Number(upgrade1.style.top.split("px")[0])-4.9};'.replaceAll("upgrade1", "upgrade" + i).replace("targetReplace", j)
    var x = new Function(y)
    x()
    y = 'upgrade1.onmouseout=function(){upgradeIsMoveOver[targetReplace]=!1,upgrade1.querySelector("img").height=49,upgrade1.querySelector("img").width=35,upgrade1.style.left=Number(upgrade1.style.left.split("px")[0])+3.5,upgrade1.style.top=Number(upgrade1.style.top.split("px")[0])+4.9};'.replaceAll("upgrade1", "upgrade" + i).replace("targetReplace", j)
    x = new Function(y)
    x()
  }
}