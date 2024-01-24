var zombieSpawnTimer = 1800 //1800 //start timer 1800 //10
//https://pvzhtmlmarcwu531underphaith706.mw531.repl.co
var ball5 = document.getElementById("zombie1")
var zombie = []
var zombieAmount = 0
var zombieremoved = []
var zombieHealth = []
var zombieDefaultHealth = [200, 200, 200, 500] //TODO: 70 for dying
var zombieDefaultSpawnTimer = 2500 //continuous timer -> should make to wave spawn //2500 //20
var ball6 = document.getElementById("circle6")
var zombieSpawnMeta;
var zombieWave = 0
var cone = document.getElementById("cone")
var zombieDefaultSpeed = [0.05, 0.05, 0.05, 0.2] //0.05 0.05 //3
var zombieDefaultSpeed2 = [0, 0, 0, 0.05]
var defaultArmorHp = [0, 370, 1100, 0]
var defaultMeta = [1, 2, 4, 2] //1 2 4 is the value deduct when they spawn
var lowestWave = [1, 1, 1, 5]
var defaultWeight = [4000, 4000, 3000, 2000] //4k or 3k is weight or % chance of spawning
var basicZombieGif = document.getElementById("basicZombieGif")
var basicZombieEatGif = document.getElementById("basicZombieEatGif")
var ZombiesWon = document.getElementById("ZombiesWon")
//249 test
var coneZombieGif = document.getElementById("coneZombieGif")
var coneZombieEatGif = document.getElementById("coneZombieEatGif")
var bucketZombieGif = document.getElementById("bucketZombieGif")
var bucketZombieEatGif = document.getElementById("bucketZombieEatGif")
var polevaulterZombieGif = document.getElementById("polevaulterZombieGif")
var polevaulterZombieEatGif = document.getElementById("polevaulterZombieEatGif")
var polevaulterZombieJumpGif = document.getElementById("polevaulterZombieJumpGif")
var polevaulterZombieWalkGif = document.getElementById("polevaulterZombieWalkGif")
var zombieState = []

function getZombieById(id) {
  return document.getElementById("zombie" + id)
}

function zombieSpawn() {
  //alert(zombieSpawnMeta)
  if (zombieSpawnTimer <= 0) {
    //newOutput(zombieremoved.length)
    if (zombieAmount - (zombieremoved.length) < 10) { //zombie spawn if zombies are less than 10
      //while (zombieSpawnMeta > 0) {
      zombieWave++
      zombieSpawnMeta = Math.round(((zombieWave + 1) * 5000 * (zombieWave ** 1.5) / 20) / 4000 + 1)
      zombieSpawnTimer = zombieDefaultSpawnTimer
      zombieSpawnFunc()
      //}
    }
  } else {
    zombieSpawnTimer--
  }
}

function zombieSpawnFunc() {
  //var zombieRng = Math.round(Math.random()) -> default weight
  var totalWeight = 0
  for (i of defaultWeight) {
    totalWeight += i
  }

  var zombieRng = Math.round(Math.random() * totalWeight)
  //console.log(zombieRng)
  var zombieRngType = 0
  for (i = 0; zombieRng > 0; i++) {
    if (zombieRng <= defaultWeight[i]) {
      zombieRngType = i
      break;
    }
    zombieRng -= defaultWeight[i]
  }

  if (zombieSpawnMeta < defaultMeta[zombieRngType] || zombieWave < lowestWave[zombieRngType]) {
    if (zombieSpawnMeta >= 1) {
      zombieSpawnFunc()
    }
    return;
  }

  spawnDefaultZombie(zombieRngType)
}

var zombieLane = []

function spawnDefaultZombie(id) {
  if (zombieAmount - (zombieremoved.length) > 60) {
    //alert(zombieAmount - (zombieremoved.length))
    return
  }
  var rngY = Math.round(Math.random() * 4) + 1
  zombieLane[id] = rngY
  //alertTime(zombieLane[id], 5)
  //alert(zombieSpawnMeta)
  //rngY *= 75
  var rngX = zombieStartLeft + Math.random() * 100
  var rngId = id
  var rngSpd = zombieDefaultSpeed[rngId] * (Math.random() + 0.5)
  var zHp = zombieDefaultHealth[rngId]
  var atkCd = (Math.random() + 2) * 100
  var armorHp = defaultArmorHp[rngId]
  var rngMeta = defaultMeta[rngId] * (Math.random() * 0.1 + 0.95)
  spawnZombie(zombieLane[id] * 75, rngX, rngId, rngSpd, zHp, atkCd, armorHp, rngMeta)
}

var basicZombieGifArray = []
var basicZombieEatGifArray = []

function spawnZombie(rngY, rngX, rngId, rngSpd, zHp, atkCd, armorHp, rngMeta) {
  zombieLane[zombieAmount] = rngY / 75
  zombie[zombieAmount] = getZombieById(/*rngId*/1).cloneNode(true)
  //zombie[zombieAmount].setAttribute("id", `zombieNumber${zombieAmount}`)
  document.body.appendChild(zombie[zombieAmount])
  zombie[zombieAmount].style.top = rngY + "px"
  zombie[zombieAmount].style.left = rngX + "px"
  zombieHealth[zombieAmount] = zHp
  zombieSpeed[zombieAmount] = rngSpd
  zombieCanMove[zombieAmount] = true
  zombieAttackCd[zombieAmount] = atkCd
  zombieType[zombieAmount] = rngId
  zombieArmorHp[zombieAmount] = armorHp
  armorDamagedTime[zombieAmount] = 0
  if (true/*rngId == 0 || rngId == 1 || rngId == 2*/) {
    basicZombieGifArray[zombieAmount] = basicZombieGif.cloneNode(true)
    document.body.appendChild(basicZombieGifArray[zombieAmount])
    /*basicZombieEatGifArray[zombieAmount] = basicZombieEatGif.cloneNode(true)
    document.body.appendChild(basicZombieEatGifArray[zombieAmount])
    basicZombieEatGifArray[zombieAmount].style.display = "none"*/
  }
zombieAmount++
zombieSpawnMeta -= rngMeta
if (zombieSpawnMeta > 0) {
  //var zombieRng = Math.round(Math.random())
  //spawnDefaultZombie(zombieRng)
  zombieSpawnFunc()
}
}

var zombieStartLeft = 600
var zombieSpeed = []
var zombieType = [] //0->normal 1->cone
var zombieArmorHp = []
var zombieArmor = []
var armorremoved = []
var zombieAnimId = []

function gameLost(z) {
  if (!started) return;
  grasswalkMusic.pause()
  losemusicMusic.play()
  started = false
  lostZombieMoveTarget = z
  //console.log("lost")
  for (j of tick) {
    //alert(j)
    stopTick()
  }

  document.getElementById("rightBorder").style.left = "601px"
  lostLoop = setInterval(function() {
    var allDivs = document.getElementsByTagName('div');
    for (var i in allDivs) {
      try {
        var speed = 0.5
        if (allDivs[i].style.left == "" || allDivs[i].style.left == undefined) allDivs[i].style.left = "0px"
        if (allDivs[i] == document.getElementById("downBorder")) continue;
        allDivs[i].style.left = Number(allDivs[i].style.left.split("px")[0]) + speed + "px"
        if (Number(document.getElementById("background").style.left.split("px")[0]) >= 125) {
          //console.log("cleared")
          clearInterval(lostLoop)
          //alert(lostZombieMoveTarget)
          //alert(zombie)
          /*var currentX = Number(zombie[lostZombieMoveTarget].style.left.split("px")[0])
          //alert(currentX)
          var currentY = Number(zombie[lostZombieMoveTarget].style.top.split("px")[0])
          var targetX = 0
          var targetY = 200
          //zombie[lostZombieMoveTarget].style.left = currentX + (targetX - currentX)/50 + "px"
          //zombie[lostZombieMoveTarget].style.top = currentY + (targetY - currentY)/50 + "px"
          //zombie[lostZombieMoveTarget].style.filter = "brightness(1.5)"
          //console.log(zombie[lostZombieMoveTarget])*/
          //ZombiesWon.style.top = "0px"
          //break;


          //lostZombieMove = setInterval(function() {
          /*var targetZombie = zombie[lostZombieMoveTarget]
          //console.log(target + " " + currentX + " " + currentY + " " + targetX + " " + targetY)
          targetZombie.style.left = "50px"//currentX + (targetX - currentX)/50 + "px"
          targetZombie.style.top = "200px"//currentY + (targetY - currentY)/50 + "px"
          targetZombie.style.filter = "brightness(1.5)"*/
          //console.log(target)
          //}, 1)
          //zombieLostGlide(zombie[lostZombieMoveTarget], currentX, currentY, targetX, targetY)
          //break;
          turnDark()
          break;
        }
      } catch (e) {
        //console.log(e)
        //try { allDivs[i].style.left = "0px" } catch (e) { }
      }
    }
  }, 1)
}

var border = document.getElementById("border")

function getAllElements() {
  //alert(1)
  var targetElem = []
  var targetElem2 = border.children
  for (j of targetElem2) {
    //alert(targetElem)
    targetElem.push(j)
  }

  for (j of basicZombieGifArray) {
    //alert(targetElem)
    targetElem.push(j)
  }

  for (j of basicZombieEatGifArray) {
    targetElem.push(j)
  }

  for (j in plant) {
    //alert(targetElem)
    targetElem.push(plant[j])
  }
  for (j in zombieArmor) {
    //alert(targetElem)
    targetElem.push(zombieArmor[j])
  }
  for (j of sun) {
    //alert(targetElem)
    targetElem.push(j)
  }
  for (j of proj) {
    targetElem.push(j)
  }

  return targetElem;
}

function turnDark() {
  var allDivs = getAllElements()//document.getElementsByTagName('div');
  //console.log(allDivs)
  //return;
  for (var i of allDivs) {
    //console.log(allDivs[i])
    //alert(allDivs[i].toString())
    //alert(i)
    try {
      //alert(1)
      //alert(i)
      //alert(i)
      i.style.filter = "brightness(1)"
      //alert(2)
    } catch (e) {
      //alert(e) 
    }
  }
  //alert("HI")
  //alert(1)
  //return;

  gameLostBlack = setInterval(function() {
    //alert(1)
    var allDivs = getAllElements()//document.getElementsByTagName('div');
    for (var i in allDivs) {
      try {
        var currentBrightness = Number(allDivs[i].style.filter.split("brightness(")[1].split(")")[0])

        if (currentBrightness <= 0) {
          clearInterval(gameLostBlack)
          //alert("cleared")
          ZombiesWon.style.filter = "brightness(1)"
          ZombiesWon.style.top = "0px"
          zombieWonGrow()
          break;
        }
        //if (allDivs[i] == ZombiesWon) continue;
        allDivs[i].style.filter = "brightness(" + (currentBrightness - 0.005) + ")"
        //ZombiesWon.style.filter = "brightness(1)"
      } catch (e) { }
    }
  }, 1)
}

var zombieWonGrowFunc;

function zombieWonGrow() {
  screamMusic.play()
  ZombiesWon.style.height = "0px"
  ZombiesWon.style.width = "0px"
  zombieWonGrowFunc = setInterval(function() {
    if (Number(ZombiesWon.style.height.split("px")[0]) >= 468) {
      clearInterval(zombieWonGrowFunc)
    }
    var ratio = 1
    var maxX = 564
    var maxY = 468
    ZombiesWon.style.top = (maxY - Number(ZombiesWon.style.height.split("px")[0])) / 2 + "px"
    ZombiesWon.style.left = (maxX - Number(ZombiesWon.style.height.split("px")[0])) / 2 + "px"
    ZombiesWon.style.height = Number(ZombiesWon.style.height.split("px")[0]) + 1 * ratio + "px"
    ZombiesWon.style.width = Number(ZombiesWon.style.width.split("px")[0]) + (maxX / maxY) * ratio + "px"
  }, 1)
}

function zombieLostGlide(targetUseless, currentX, currentY, targetX, targetY) {
  return;
}

var gameLostBlack;
var lostLoop;
var lostZombieMove;
var lostZombieMoveTarget = null

//var loop = setInterval(function() { if (started) spawnDefaultZombie(1) }, 100) //test
//6(0), 1, 2, 3, 4, 5
var lawnMowerExist = [null, true, true, true, true, true]
//var poleJumpedOffset = 50 //43

function zombieTick() {
  if (zombieAmount > 0) {
    for (i in zombieEating) {
      if (zombieEating[i] == undefined) {
        zombieEating[i] = false
      }
    }

    for (i = 0; i < zombieAmount; i++) {
      if (!zombieremoved.includes(i)) {
        if (zombieType[i] == 3 && zombieAttackCd[i] <= 0 && zombieState[i] == 0) {
          zombieState[i] = 1
          basicZombieGifArray[i].querySelector("img").style.transform = ""
          zombie[i].style.left = Number(zombie[i].style.left.split("px")[0]) - 43 + "px"
          zombieSpeed[i] /= 4
          zombieSpeed[i] += (Math.random()*0.01)//-0.05
        }
        
        if (zombieChillTime[i] == undefined) {
          zombieChillTime[i] = 0
        }

        if (!basicZombieGifArray[i].style.filter.includes("brightness")) {
          //if (basicZombieGifArray[i].style.filter == undefined) {
          basicZombieGifArray[i].style.filter = "brightness(1)"
        }
        //hue-rotate(150deg) contrast(160%)
        //invert(29%) sepia(99%) saturate(6417%) hue-rotate(232deg) brightness(106%) contrast(102%)
        //#194bff
        if (zombieChillTime[i] > 0) {
          console.log(zombieChillTime[i])
          zombieChillTime[i]--

          basicZombieGifArray[i].style.filter = basicZombieGifArray[i].style.filter.split(")")[0] + ")" + " invert(29%) sepia(99%) saturate(6417%) hue-rotate(232deg) brightness(106%) contrast(102%)"
          /*
          var filterStringArray = basicZombieGifArray[i].style.filter.split(" ")
          var hueInOrder
          var contrastInOrder
          for (j in filterStringArray) {
            if (filterStringArray[j].includes("hue-rotate")) {
              hueInOrder = j
              break;
            }
          }
          for (j in filterStringArray) {
            if (filterStringArray[j].includes("contrast")) {
                contrastInOrder = j
              break;
            }
          }
          var filterString = ""
          for (j in filterStringArray) {
            if (j == hueInOrder) {
              filterString += " hue-rotate(150deg)"
            } else if (j == contrastInOrder) {
              filterString += " contrast(160%)"
            } else {
              filterString += " " + filterStringArray[j]
            }
          }
          basicZombieGifArray[i].style.filter = filterString*/
        } else {
          basicZombieGifArray[i].style.filter = basicZombieGifArray[i].style.filter.split(")")[0] + ")"
          //console.log(i)
          /*if (basicZombieGifArray[i].style.filter.split("hue-rotate")[1].includes("contrast")) {
            //hue b4 contrast
            basicZombieGifArray[i].style.filter = basicZombieGifArray[i].style.filter.split("hue-rotate")[0]
            +"hue-rotate(0)"+basicZombieGifArray[i].style.filter.split("hue-rotate")[1].split(")")[1].split("contrast")[0]+
              "contrast(1)"+(basicZombieGifArray[i].style.filter.split("hue-rotate")[1].split(")")[1].split("contrast")[1].split(")")[1] == undefined ? "" : basicZombieGifArray[i].style.filter.split("hue-rotate")[1].split(")")[1].split("contrast")[1].split(")")[1])
          } else { //contrast b4 hue
            basicZombieGifArray[i].style.filter = basicZombieGifArray[i].style.filter.split("contrast")[0]
            +"contrast(1)"+basicZombieGifArray[i].style.filter.split("contrast")[1].split(")")[1].split("hue-rotate")[0]+
              "hue-rotate(0)"+(basicZombieGifArray[i].style.filter.split("contrast")[1].split(")")[1].split("hue-rotate")[1].split(")")[1] == undefined ? "" : basicZombieGifArray[i].style.filter.split("contrast")[1].split(")")[1].split("hue-rotate")[1].split(")")[1])
          }*/
        }

        if (Number(zombie[i].style.left.split("px")[0]) < 0) {
          //gameLost()
          //alert(zombieLane[i])
          if (lawnMowerExist[zombieLane[i]]) {
            alert(zombieLane[i])
            triggerLawnMower(zombieLane[i])
          } else if (Number(zombie[i].style.left.split("px")[0]) < -20) {
            //alert(zombie[i])
            gameLost(i)
          }
        }

        for (j = 1; j < lawnMowerAmount + 1; j++) {
          if (zombieLane[i] == j) {
            if (!lawnMowerExist[j] && Number(getLawnById(j).style.left.split("px")[0]) < 600 &&
              (Number(getLawnById(j).style.left.split("px")[0]) - Number(zombie[i].style.left.split("px")[0])) > -48 && (Number(getLawnById(j).style.left.split("px")[0]) - Number(zombie[i].style.left.split("px")[0])) < 25) {
              //Number(getLawnById(j).style.left.split("px")[0]) == Number(zombie[i].style.left.split("px")[0])
              //<600
              killZombie(i)
            }
          } /*else if (Number(getLawnById(j).style.left.split("px")[0]) < 600 &&
               (Number(getLawnById(j).style.left.split("px")[0]) - Number(zombie[i].style.left.split("px")[0])) > -48 && (Number(getLawnById(j).style.left.split("px")[0]) - Number(zombie[i].style.left.split("px")[0])) < 25) {
            alert(i)
               }*/
        }

        if (damagedZombieTime[i] > 0) {
          damagedZombieTime[i]--
        } else {
          //var basicZombieGifArrayString = basicZombieGifArray[i].style.filter.split("brightness(")
          //basicZombieGifArray[i].style.filter = basicZombieGifArray[i].style.filter.split("brightness(")[0]+
          //"brightness(1)"+basicZombieGifArray[i].style.filter.split("brightness(")[1]
          //basicZombieEatGifArray[i].style.filter = "brightness(1)"
          var string = basicZombieGifArray[i].style.filter
          var stringArrays = string.split(")")
          var finalString = ""
          for (j of stringArrays) {
            if (!j.includes("brightness")) {
              finalString += j + ")"
            }
          }

          basicZombieGifArray[i].style.filter = string.split("brightness(")[0] + "brightness(1)" + finalString.slice(0, -1)
        }
        if (basicZombieGifArray[i] != undefined) {
          basicZombieGifArray[i].style.top = Number(zombie[i].style.top.split("px")[0]) - 30 + "px"
          basicZombieGifArray[i].style.left = zombie[i].style.left
        }
        /*if (basicZombieEatGifArray[i] != undefined) {
          basicZombieEatGifArray[i].style.top = Number(zombie[i].style.top.split("px")[0]) - 30 + "px"
          basicZombieEatGifArray[i].style.left = zombie[i].style.left
        }*/
        /*if (zombieType[i] == 1) {
          if (zombieArmorHp[i] > 0) {
            if (basicZombieGifArray[i].querySelector('img').src != coneZombieGif[i].querySelector('img').src) {
                basicZombieGifArray[i].querySelector('img').src = coneZombieGif[i].querySelector('img').src
            } else {
              
            }
          }
          //if (!armorremoved.includes(i)) {
            /*(if (zombieArmor[i] == undefined) {
              zombieArmor[i] = cone.cloneNode(true)
              document.body.appendChild(zombieArmor[i])
            }*/
        /*zombieArmor[i].style.left = zombie[i].style.left
        zombieArmor[i].style.top = Number(zombie[i].style.top.split("px")[0]) - 40 + "px"
        if (armorDamagedTime[i] > 0) {
          armorDamagedTime[i]--
        } else {
          zombieArmor[i].style.filter = "brightness(1)"
        }
        if (zombieArmorHp[i] <= 0) {
          removeChilds(zombieArmor[i])
          armorremoved.push(i)
        }*
      //}
    }*/
        if (zombieAttackCd[i] > 0) {
          zombieAttackCd[i]--
        }
        try {
          if (Number(zombie[i].style.left.split("px")[0]) < -50) {
            zombieremoved.push(i)
            try {
              removeChilds(zombie[i])
            } catch (e) {
              //console.log(e)
            }
          }
          if (zombieCanMove[i]) {
            var delta = -zombieSpeed[i]
            var movement = delta * (zombieChillTime[i] > 0 ? 0.5 : 1)
            zombie[i].style.left = Number(zombie[i].style.left.split("px")[0]) + movement + "px"
          } else {
            zombieCanMove[i] = true
          }
        }
        catch (err) {/*console.log(err)*/ }
        if (zombieHealth[i] <= 0) {
          killZombie(i)
        }

        handleZombieAnimation(zombieEating[i], zombieType[i], i)
      } else {
        /*if (!armorremoved.includes(i)/*&&zombieType[i]==1* && zombieArmor[i] != undefined) {
          removeChilds(zombieArmor[i])
          armorremoved.push(i)
        }*/
        if (basicZombieGifArray[i] != undefined) {
          removeChilds(basicZombieGifArray[i])
          basicZombieGifArray[i] = undefined
        }
        /*if (basicZombieEatGifArray[i] != undefined) {
          removeChilds(basicZombieEatGifArray[i])
          basicZombieEatGifArray[i] = undefined
        }*/
      }
    }
    zombieCheckDamage()
  }
  zombieDamageCloneTick()
  zombieDamagePlant()
}

//zombieEating[i], zombieType[i], i
function handleZombieAnimation(animEating, type, i) {
  if (animEating) {
    switch (type) {
      case 0:
        if (basicZombieGifArray[i].querySelector('img').src != basicZombieEatGif.querySelector('img').src) {
          //basicZombieGifArray[i].querySelector('img').src = basicZombieEatGif.querySelector('img').src
          changeZombieAnimation(basicZombieGifArray[i], basicZombieEatGif.querySelector('img').src)
          basicZombieGifArray[i].querySelector('img').width = basicZombieEatGif.querySelector('img').width
          basicZombieGifArray[i].querySelector('img').height = basicZombieEatGif.querySelector('img').height
        }
        break;
      case 1:
        if (zombieArmorHp[i] <= 0) {
          handleZombieAnimation(animEating, 0, i)
          break;
        }
        if (basicZombieGifArray[i].querySelector('img').src != coneZombieEatGif.querySelector('img').src) {
          //basicZombieGifArray[i].querySelector('img').src = coneZombieEatGif.querySelector('img').src
          changeZombieAnimation(basicZombieGifArray[i], coneZombieEatGif.querySelector('img').src)
          basicZombieGifArray[i].querySelector('img').width = coneZombieEatGif.querySelector('img').width
          basicZombieGifArray[i].querySelector('img').height = coneZombieEatGif.querySelector('img').height
        }
        break;
      case 2:
        if (zombieArmorHp[i] <= 0) {
          handleZombieAnimation(animEating, 0, i)
          break;
        }
        if (basicZombieGifArray[i].querySelector('img').src != bucketZombieEatGif.querySelector('img').src) {
          //basicZombieGifArray[i].querySelector('img').src = bucketZombieEatGif.querySelector('img').src
          changeZombieAnimation(basicZombieGifArray[i], bucketZombieEatGif.querySelector('img').src)
          basicZombieGifArray[i].querySelector('img').width = bucketZombieEatGif.querySelector('img').width
          basicZombieGifArray[i].querySelector('img').height = bucketZombieEatGif.querySelector('img').height
        }
        break;
      case 3:  
        if (basicZombieGifArray[i].querySelector('img').src != polevaulterZombieEatGif.querySelector('img').src) {
          //basicZombieGifArray[i].querySelector('img').src = polevaulterZombieEatGif.querySelector('img').src
          changeZombieAnimation(basicZombieGifArray[i], polevaulterZombieEatGif.querySelector('img').src)
          basicZombieGifArray[i].querySelector('img').width = polevaulterZombieEatGif.querySelector('img').width
          basicZombieGifArray[i].querySelector('img').height = polevaulterZombieEatGif.querySelector('img').height
          basicZombieGifArray[i].querySelector('img').style.transform = ''
        }
        break;
    }
  } else {
    switch (type) {
      case 0:
        if (basicZombieGifArray[i].querySelector('img').src != basicZombieGif.querySelector('img').src) {
          //basicZombieGifArray[i].querySelector('img').src = basicZombieGif.querySelector('img').src
          changeZombieAnimation(basicZombieGifArray[i], basicZombieGif.querySelector('img').src)
          basicZombieGifArray[i].querySelector('img').width = basicZombieGif.querySelector('img').width
          basicZombieGifArray[i].querySelector('img').height = basicZombieGif.querySelector('img').height
        }
        break;
      case 1:
        if (zombieArmorHp[i] <= 0) {
          handleZombieAnimation(animEating, 0, i)
          break;
        }
        if (basicZombieGifArray[i].querySelector('img').src != coneZombieGif.querySelector('img').src) {
          //basicZombieGifArray[i].querySelector('img').src = coneZombieGif.querySelector('img').src
          changeZombieAnimation(basicZombieGifArray[i], coneZombieGif.querySelector('img').src)
          basicZombieGifArray[i].querySelector('img').width = coneZombieGif.querySelector('img').width
          basicZombieGifArray[i].querySelector('img').height = coneZombieGif.querySelector('img').height
        }
        break;
      case 2:
        if (zombieArmorHp[i] <= 0) {
          handleZombieAnimation(animEating, 0, i)
          break;
        }
        if (basicZombieGifArray[i].querySelector('img').src != bucketZombieGif.querySelector('img').src) {
          //basicZombieGifArray[i].querySelector('img').src = bucketZombieGif.querySelector('img').src
          changeZombieAnimation(basicZombieGifArray[i], bucketZombieGif.querySelector('img').src)
          basicZombieGifArray[i].querySelector('img').width = bucketZombieGif.querySelector('img').width
          basicZombieGifArray[i].querySelector('img').height = bucketZombieGif.querySelector('img').height
        }
        break;
      case 3:
          if (zombieState[i] == undefined && basicZombieGifArray[i].querySelector('img').src != polevaulterZombieGif.querySelector('img').src) {
            //basicZombieGifArray[i].querySelector('img').src = polevaulterZombieGif.querySelector('img').src
            changeZombieAnimation(basicZombieGifArray[i], polevaulterZombieGif.querySelector('img').src)
            basicZombieGifArray[i].querySelector('img').width = polevaulterZombieGif.querySelector('img').width
            basicZombieGifArray[i].querySelector('img').height = polevaulterZombieGif.querySelector('img').height
          } else if (zombieState[i] == 1 && basicZombieGifArray[i].querySelector('img').src != polevaulterZombieWalkGif.querySelector('img').src) {
            basicZombieGifArray[i].querySelector('img').src = polevaulterZombieWalkGif.querySelector('img').src
            basicZombieGifArray[i].querySelector('img').width = polevaulterZombieWalkGif.querySelector('img').width
            basicZombieGifArray[i].querySelector('img').height = polevaulterZombieWalkGif.querySelector('img').height
            basicZombieGifArray[i].querySelector("img").style.transform = "translate(-30px, 0px)"
          }
        break;
    }
  }
}

function killZombie(i) {
  removeChilds(zombie[i])
  zombieremoved.push(i)
}

function zombieCheckDamage() {
  if (projAmount > 0 && zombieAmount > 0) {
    for (i = 0; i < projAmount; i++) {
      if (!bulletremoved.includes(i)) {
        for (j = 0; j < zombieAmount; j++) {
          if (!zombieremoved.includes(j)) {
            var tProj = proj[i]
            var tZom = zombie[j]
            if (projType[i] == 1 || projType[i] == 2 || projType[i] == 3) {
              try {
                if ((Number(tProj.style.top.split("px")[0]) - 5) + "px" == tZom.style.top) {
                  //console.log("touched")
                  //console.log(tProj.style.left)
                  //console.log(tZom.style.left)
                  if (Math.abs(Number(tProj.style.left.split("px")[0]) - Number(tZom.style.left.split("px")[0])) < 17.5) {
                    removeChilds(tProj)
                    bulletremoved.push(i)

                    if (projType[i] == 2) {
                      zombieChillTime[j] = ((zombieChillTime[j] < 300) ? 300 : zombieChillTime[j])
                    }

                    if (zombieHealth[j] <= 1)
                    //console.log("touched")
                    //tProj.style.top = "-100px"
                    //tZom.style.top = "-100px"
                    {
                      removeChilds(tZom)
                      zombieremoved.push(j)
                    } else {
                      hurtZombie(20, false, j)
                    }
                  }
                }
              } catch (e) { }
            }
          }
        }
      }
    }
  }
}

var zombieChillTime = []
//ggg
var damagedZombieClone = []
var damagedZombieAmount = 0
var damagedZombieFollowId = []
var damagedZombieTime = []
var damagedZombieDefaultTime = 20
var removedDamageClone = []
var armorDamagedTime = []

function hurtZombie(damageAmount, ignoreArmor, j) {
  var damageArmor = !ignoreArmor
  if (damageArmor && zombieArmorHp[j] != undefined) {
    if (zombieArmorHp[j] <= 0) {
      damageArmor = false
    }
  }
  //alert("1")
  zombieDamaged(j)
  if (!damageArmor) {
    zombieHealth[j] -= damageAmount
    //console.log(tZom)
    //zombieDamaged(j)
  } else {
    if (zombieArmorHp[j] >= damageAmount) {
      zombieArmorHp[j] -= damageAmount
      //zombieArmor[j].style.filter = "brightness(1.5)"
      armorDamagedTime[j] = damagedZombieDefaultTime
    } else {
      var conDamage = damageAmount - zombieArmorHp[j]
      zombieArmorHp[j] = 0
      hurtZombie(conDamage, false, j)
    }
  }
}

function zombieDamageCloneTick() {
  //alefrt("hi")
  //console.log(damagedZombieAmount)
  if (damagedZombieAmount > 0) {
    for (i = 0; i < damagedZombieAmount; i++) {
      if (!removedDamageClone.includes(i)) {
        //console.log(damagedZombieTime[i])
        if (damagedZombieTime[i] >= 1) {
          //alert("tick")
          //console.log(damagedZombieClone)
          damagedZombieClone[i].style.left = zombie[damagedZombieFollowId[i]].style.left
          damagedZombieClone[i].style.top = zombie[damagedZombieFollowId[i]].style.top
          damagedZombieTime[i]--
        } else {
          removedDamageClone.push(i)
          removeChilds(damagedZombieClone[i])
        }
      }
    }
  }
}

function zombieDamaged(targetId) {
  //console.log(ball6)
  //console.log(damagedZombieAmount)
  //alert(damagedZombieAmount)
  //damagedZombieClone[damagedZombieAmount] =
  //ball6.cloneNode(true);
  //console.log(damagedZombieAmount)
  //damagedZombieFollowId[damagedZombieAmount] = targetId
  damagedZombieTime[targetId] = damagedZombieDefaultTime

  var string = basicZombieGifArray[targetId].style.filter
  var stringArrays = string.split(")")
  var finalString = ""
  for (k of stringArrays) {
    if (!k.includes("brightness")) {
      finalString += k + ")"
    }
  }

  basicZombieGifArray[targetId].style.filter = string.split("brightness(")[0] + "brightness(1.5)" + finalString.slice(0, -1)
  //basicZombieGifArray[targetId].style.filter = basicZombieGifArray[i].style.filter.split("brightness(")[0]+
  //"brightness(1.5)"+basicZombieGifArray[i].style.filter.split("brightness(")[1]
  //basicZombieEatGifArray[targetId].style.filter = "brightness(1.5)"
  //document.body.appendChild(damagedZombieClone[damagedZombieAmount])
  //console.log(damagedZombieTime[damagedZombieAmount])
  //damagedZombieAmount++
}

var eatingAnimation = "../.config/files20082022/images/zombie_eat.gif"
var zombieEating = []
var poleJumpDuration = 344*2 //900 //1200

function zombieDamagePlant() {
  /*if (plantAmount <= 0 && zombieAmount > 0) {
    for (j = 0; j < zombieAmount; j++) {
      if (basicZombieGifArray[j].querySelector('img').src != basicZombieGif.querySelector('img').src) {
        //alert(basicZombieGifArray[j].querySelector('img').src)
        basicZombieGifArray[j].querySelector('img').src = basicZombieGif.querySelector('img').src
      }
    }
  } else*/ if (plantAmount > 0 && zombieAmount > 0) {
    for (j = 0; j < zombieAmount; j++) {
      if (zombieremoved.includes(j)) continue;
      var eating = false
      for (i = 0; i < plantAmount; i++) {
        if (!removedplant.includes(i)) {
          if (plantType[i] == 4 && plantCd[i] <= 0) continue;
          if (plant[i].style.top == zombie[j].style.top) {
            var zombieX = Number(zombie[j].style.left.split("px")[0])
            var plantX = Number(plant[i].style.left.split("px")[0])
            if (zombieX - plantX <= 25 && zombieX >= plantX ||
              zombieX - plantX >= -25 && zombieX <= plantX) {
              if (zombieType[j] == 3) {
                if (zombieState[j] == undefined) {
                  zombieState[j] = 0
                  zombieSpeed[j] = 0.1
                  //alert(j)
                  basicZombieGifArray[j].querySelector('img').src = polevaulterZombieJumpGif.querySelector('img').src
                  basicZombieGifArray[j].querySelector('img').height = polevaulterZombieJumpGif.querySelector('img').height
                  basicZombieGifArray[j].querySelector('img').width = polevaulterZombieJumpGif.querySelector('img').width
                  basicZombieGifArray[j].querySelector("img").style.transform = "translate(-90px, -60px)"
                  zombieAttackCd[j] = poleJumpDuration
                  continue;
                } else if (zombieState[j] == 0) {
                  //zombieAttackCd[j]--
                  continue;
                }
              }
              eating = true
              //document.querySelector(`#zombieNumber${j} > img`).src = eatingAnimation
              /*basicZombieGifArray[j].style.display = "none"
              basicZombieEatGifArray[j].style.display = "block"*/
              zombieCanMove[j] = false
              if (zombieAttackCd[j] <= 0) {
                plantHp[i] -= 36
                zombieAttackCd[j] = ((Math.random() * 20) + 90) * (zombieChillTime[j] > 0 ? 2 : 1)
                plant[i].style.filter = "brightness(1.5)"
                plantDamagedCd[i] = 20
                /*if (plantType[i] == 4 && potatoGrowingPngArray[i] != undefined) {
                  potatoGrowingPngArray[i].style.filter = "brightness(1.5)"
                }*/
              }
            } else {
            }
          }
        }
      }
      zombieEating[j] = eating
      /*if (!eating) {
        if (basicZombieGifArray[j].querySelector('img').src != basicZombieGif.querySelector('img').src) { 
          //alert(basicZombieGifArray[j].querySelector('img').src)
          basicZombieGifArray[j].querySelector('img').src = basicZombieGif.querySelector('img').src 
        }
        /*try {
          basicZombieGifArray[j].style.display = "block"
          basicZombieEatGifArray[j].style.display = "none"
        } catch (e) { }*
      }*/
    }
  }
}

var zombieCanMove = []
var zombieAttackCd = []

function changeZombieAnimation(target, source) {
  target.querySelector('img').src = source + "?cache=" + new Date().getTime()
}

function changeAnimation(target, source) {
  target.querySelector('img').src = source.src + "?cache=" + new Date().getTime()
  target.querySelector('img').width = source.width
  target.querySelector('img').height = source.height
}