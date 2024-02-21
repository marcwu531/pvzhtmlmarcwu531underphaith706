var initialPlantStatus = id => {
  var param = id => {
    switch(id) {
      case 0:
        return ["peashooter", 100, 300, 750, 100, 150]
      case 1:
        return ["sunflower", 50, 300, 750, 800, 2500]
      case 2:
        return ["cherry bomb", 150, 1800, 5000, 100, 0]
    }
  }
  //alert(id)
  return IPSConstructor(param(id))
}

var IPSConstructor = param => {
  var name, cost, hp, seedPacketCd, firstAttackCd, continuousAttackCd;
  [name, cost, hp, seedPacketCd, firstAttackCd, continuousAttackCd] = param
  //alert(param)
  return {
    name: name,
    cost: cost,
    hp: hp,
    seedPacketCd: seedPacketCd,
    firstAttackCd: firstAttackCd,
    continuousAttackCd: continuousAttackCd
  }
}
//switch by id (name, cd, etc)

var plantTypeStartCd = [ //first attack
  100, //peashooter //0
  800, //sunflower //1
  100, //cherry bomb //2
  0, //wallnut //3
  1500, //potato mine //4
  100, //snow pea //5
  0, //90(bite) //chomper //6
  100, //repeater //7
  100, //puffshroom //8
  100 //800 //sunshroom //9
]

var plantAttackCd = [ //continuous attack
  150,
  2500,
  0,
  0,
  0,
  150,
  4000,
  150,
  150,
  2500
]

var maxPlantIdAmount = 10
var maxSlotAvailable = 7

var cost = [ //sun cost
  100,
  50,
  150,
  50,
  25,
  175,
  150,
  200,
  0,
  25
]

var slotPlantId = [
  //before set (cys)
]

var seedCd = [ //seed packet cd
  750,
  750,
  0, //5000,
  3000,
  2000,
  750,
  750,
  750,
  750,
  750
]

var plantDefaultHp = [ //plant hp
  300,
  300,
  531706,
  4000,
  300,
  300,
  300,
  300,
  300,
  300
]

var loop;
var mouseX;
var mouseY;
var moving = false
var ball = document.getElementById("plant1")
var ball2 = document.getElementById("plant2")
var ball3 = document.getElementById("plant3")
var plant = []
var plantAmount = 0
var plantCd = []
var plantType = []
var ball8 = document.getElementById("plant4")
var ball9 = document.getElementById("plant5")
var ball10 = document.getElementById("plant6")
var ball11 = document.getElementById("plant7")
var ball12 = document.getElementById("plant8")
var ball13 = document.getElementById("plant9")
var shovel = document.getElementById("shovel")
var shovelBank = document.getElementById("shovelBank")
var powie = document.getElementById("powie")
var chomperEatGif = document.getElementById("chomperEatGif")
var chomperChewGif = document.getElementById("chomperChewGif")
var chomperSwallowGif = document.getElementById("chomperSwallowGif")
var plantTargettingZombieId = []

var powieAnimation = []
var powieAnimExistTime = []
var powieCd = 60
var removedPowie = []
var puffShroomAttackRange = 200
var plantExistTime = []
var sunShroomGrowRequireTime = 12000

function powieTick() {
  if (powieAnimation.length > 0) {
    for (i in powieAnimation) {
      if (!removedPowie.includes(i)) {
        if (powieAnimExistTime[i] == undefined) {
          powieAnimExistTime[i] = 0
        }
        if (powieAnimExistTime[i] > powieCd) {
          try {
            removeChilds(powieAnimation[i])
          } catch (e) {
            console.log(e)
          }
          removedPowie.push(i)

        } else {
          powieAnimExistTime[i]++
        }
      }
    }
  }
}

function shovelClicked(isLeftClick) {
  //console.log(started)
  lastOutput = undefined
  if (!started) return;
  shovelMoving = !shovelMoving
  if (shovelMoving && isLeftClick) {
    shovelMoveFunc = setInterval(function() {
      shovel.style.left = mouseX - 25 + "px"
      shovel.style.top = mouseY - 25 + "px"
      detectIfTouchingPlant(false)
    }, 1)
  } else {
    clearInterval(shovelMoveFunc)
    detectIfTouchingPlant(isLeftClick)
    shovel.style.top = "5px"
    shovel.style.left = "313px"
  }
}

function detectIfTouchingPlant(remove) {
  var targetX = Math.round((mouseX - 25) / xPlantRate) * xPlantRate
  targetX = mouseX >= 575 ? -100 : targetX
  targetX = mouseX <= 55 ? -100 : targetX
  var targetY = Math.round((mouseY - 25) / yPlantRate) * yPlantRate
  targetY = mouseY <= 63 ? -100 : targetY
  targetY = targetY >= 430 ? -100 : targetY

  var targetPlant = null;
  for (i in plant) {
    if (plant[i].style.left == targetX + "px" && plant[i].style.top == targetY + "px" && targetX != -100 && targetY != -100) {
      targetPlant = i
      break;
    }
  }
  if (targetPlant != null) {
    plant[targetPlant].style.filter = "brightness(1.5)"
    plantOnShovelTimer[targetPlant] = 2
    if (remove) {
      plantHp[targetPlant] = 0
      /*removeChilds(plant[targetPlant])
      removedplant.push(targetPlant)*/
    }
  }
}

var plantOnShovelTimer = []
var shovelMoving = false
var shovelMoveFunc;

function getPlantById(id) {
  return document.getElementById("plant" + id)
  //1 in cys
  //1,2->fake 3->true
  //4 5 6 etc
}

window.oncontextmenu = function() {
  plantPlantReset()
  moving = false
  clearInterval(loop)
  return false
}

var plantHp = []

function plantPlantReset() {
  /*ball2.style.left = ball.style.left
  ball2.style.top = ball.style.top
  ball3.style.left = ball.style.left
  ball3.style.top = ball.style.top
  ball9.style.left = ball8.style.left
  ball9.style.top = ball8.style.top
  ball10.style.left = ball8.style.left
  ball10.style.top = ball8.style.top
  ball12.style.top = ball11.style.top
  ball12.style.top = ball11.style.top
  ball13.style.left = ball11.style.left
  ball13.style.top = ball11.style.top*/
  for (i = 0; i < maxPlantIdAmount; i++) {
    var j = i + 1
    //getPlantById(3 * j - 1).style.left = getPlantById(3 * j - 2).style.left
    getPlantById(3 * j - 1).style.top = "-100px"//getPlantById(3 * j - 2).style.top
    //getPlantById(3 * j).style.left = getPlantById(3 * j - 2).style.left
    getPlantById(3 * j).style.top = "-100px"//getPlantById(3 * j - 2).style.top
  }
}

function playSeedliftMusic() {
  //seedliftMusic.play()
  seedliftSong[seedliftSrcAmount] = new Audio();
  seedliftSrc[seedliftSrcAmount] = document.createElement("source")
  seedliftSrc[seedliftSrcAmount].type = "audio/mpeg";
  seedliftSrc[seedliftSrcAmount].src = "../.config/files20082022/music/seedlift.mp3"
  seedliftSong[seedliftSrcAmount].appendChild(seedliftSrc[seedliftSrcAmount]);
  //console.log(seedliftSong[seedliftSrcAmount])
  seedliftSong[seedliftSrcAmount].play();
  seedliftSrcAmount++
}

var seedliftSong = []
var seedliftSrc = []
var seedliftSrcAmount = 0
var movingType = 0;

/*var isSlotMoving = []
for (i=0; i<maxPlantIdAmount; i++) {
  isSlotMoving[i] = 0
}*/

function start(id) { //id change to slot id
  if (!movingSlot || started) playSeedliftMusic()
  if (started) {
    //id = slotPlantId[id] //set to target plant id
    if (moving || !realStart) return;
    //alert("test")
    //ev.preventDefault();
    var enoughSun = checkSun(cost[id])
    if (enoughSun && (plantCurrentCd[id] == undefined || plantCurrentCd[id] <= 0)) {
      moving = true
      loop = setInterval(function() { move(id) }, 1)
    }
  } else {
    if (slotClickedNum >= maxSlotAvailable && movingType == 0) return
    //console.log(id)
    //if (movingSlot) return
    if (seedPacketMoving[id] == undefined) seedPacketMoving[id] = false
    //if (seedPacketMoving[id]) return
    if (seedPacketMoving[id] || (movingSlot && movingType != 2 && (((getPlantById(Number(id) * 3 + 1).style.top == "" || getPlantById(Number(id) * 3 + 1).style.top != "45px") && movingType != 0) || (movingType != 1 && !(getPlantById(Number(id) * 3 + 1).style.top == "" || getPlantById(Number(id) * 3 + 1).style.top != "45px"))))) return
    seedPacketMoving[id] = true
    //isSlotMoving[i] =
    if (getPlantById(Number(id) * 3 + 1).style.top == "" || getPlantById(Number(id) * 3 + 1).style.top != "45px") {
      movingType = 0
      slotPlantId[slotClickedNum] = id
      startSlotGlide(slotClickedNum, 0)
      slotClickedNum++
    } else {
      movingType = 1
      slotBack[slotBackNum] = id
      startSlotGlide(slotBackNum, 1)
      //slotBackNum++
      slotClickedNum--
    }
  }
}

var seedPacketMoving = []

var slotBack = []
var slotBackNum = 0
var slotBackGlide = []

function startSlotGlide(id, type) {
  movingSlot = true
  if (/*!movingSlot&&*/type == 0) { slotGlide[slotClickedNum] = setInterval(function() { moveSlotFr(id, 0) }) } else {
    slotBackGlide[slotBackNum] = setInterval(function() { moveSlotFr(slotBackNum, 1) }) //id, 1
  }
}

var slotClickedNum = 0
var movingSlot = false
var realStart = false

function moveSlotFr(id, type) {
  moveSlot(id, type, null, null)
}

function slotGlideLeft(exclude) {
  //canMoveLeft = true
  //exclude++\
  //newOutput(exclude)
  for (i = 0; i < maxPlantIdAmount; i++) {
    var target = getPlantById(i * 3 + 1)
    //alert("target: "+i+" top: "+target.style.top)
    if (target.style.top == "45px" && i != exclude && (Number(target.style.left.split("px")[0]) > Number(getPlantById(exclude * 3 + 1).style.left.split("px")[0]) || seedPacketAlreadyMoving[i]) && seedPacketAlreadyMoving[i] !== null) {
      //console.log("start")
      //alert(i+" :"+(target.style.top == "45px" && i != exclude && (Number(target.style.left.split("px")[0]) > Number(getPlantById(exclude * 3 + 1).style.left.split("px")[0])) || seedPacketAlreadyMoving[i]))
      seedPacketAlreadyMoving[i] = true
      target.style.left = Number(target.style.left.split("px")[0]) - (35 / 115) + "px"
      /*
      //console.log(i)
      slotBackGlideFunc(target, slotBackGlide[slotBackNum], i)
      slotBackNum++
      minusSlotBackNum++*/
    } else {
      seedPacketAlreadyMoving[i] = null
    }
  }
}

function newOutput(output) {
  if (lastOutput !== output) {
    lastOutput = output
    alert(output)
  }
}
var lastOutput = undefined

var seedPacketAlreadyMoving = []

function slotBackGlideFunc(target, target2, id) {
  target2 = slotBackNum
  slotBackGlide[slotBackNum] = setInterval(function() { moveSlot(target, 2, target2, id, slotBackNum) })
}

function moveSlot(id, type, type2Cancel, realId) {
  moveSlot(id, type, type2Cancel, realId, null)
}

function getSeedPacketOriginalPlaceById(id, type) {
  if (type == 0) { //top y
    return (125+49*Math.round(id/16))
  } else { //left x
    return (20 + id%8/*slotPlantId[id]*/ * 35)
  }
}

function moveSlot(id, type, type2Cancel, realId, type2RemoveVar) {
  /*if (slotBackGlide[id] != undefined) {
    clearInterval(slotBackGlide[id])
  }*/
  //if (type==2) return
  //console.log(type)
  movingSlot = true
  //console.log(id)
  //id--
  //console.log(slotPlantId[id])
  var targetIdBaseOnType = (type == 0 ? slotPlantId[id] : (type == 1 ? slotBack[id] : id))
  var target = (type == 0 ? getPlantById(Number(slotPlantId[id]) * 3 + 1) : (type == 1 ? getPlantById(Number(slotBack[id]) * 3 + 1) : id))
  if (type == 0) {
    if (target.style.top == "") {
      target.style.top = getSeedPacketOriginalPlaceById(targetIdBaseOnType, 0)+"px"
    }
    if (target.style.left == "") {
      target.style.left = getSeedPacketOriginalPlaceById(targetIdBaseOnType, 1) + "px"
    }
    var wantedY = 45
    var wantedX = 58 + 35 * (id - slotBackNum + minusSlotBackNum)
  } else if (type == 1) {
    var wantedY = getSeedPacketOriginalPlaceById(targetIdBaseOnType, 0)+"px" //125
    var wantedX = getSeedPacketOriginalPlaceById(targetIdBaseOnType, 1)+"px" //20 + 35 * slotBack[id]
    //alert(slotPlantId[id])
    //newOutput("id: "+id+" slotBack: "+slotBack[id]+" slotPlantId: "+slotPlantId[id])
    if (canMoveLeftTargetX.length == 0) { slotGlideLeft(slotBack[id]) }
  } else {
    //console.log(target)
    var wantedY = 45
    //console.log(Number(target.style.left.split("px")[0]))
    var wantedX;
    if (canMoveLeftTargetX[realId] == undefined) {
      //alert("set")
      wantedX = Number(target.style.left.split("px")[0]) - 35
      canMoveLeftTargetX[realId] = wantedX
    }
    wantedX = canMoveLeftTargetX[realId]
    //console.log(wantedX)
  }
  var nowX = Number(target.style.left.split("px")[0])
  var nowY = Number(target.style.top.split("px")[0])
  if (Math.abs(wantedY - nowY) < 0.8) {
    //console.log(id)
    if (target.style.left == wantedX + "px" && target.style.top == wantedY + "px") {
      //console.log("cleared" + type)
      //console.log(slotGlide[id])
      //alert("type: "+type)
      //id, type, type2Cancel, realId
      //alert(slotPlantId[id]
      var seedPacketMovingTarget = (type == 0 ? slotPlantId[id] : (type == 1 ? slotBack[id] : id))
      //alert(seedPacketMovingTarget)
      seedPacketMoving[seedPacketMovingTarget] = false
      //alert(type == 0 || type == 1 ? id : type2Cancel)
      if (type == 0) {
        //alert("cleared: "+id)
        clearInterval(slotGlide[id])
        slotGlide[id] = undefined
      } else if (type == 1) {
        clearInterval(slotBackGlide[type2RemoveVar]) //id
        slotBackGlide[type2RemoveVar] = undefined
      } else {
        clearInterval(slotBackGlide[type2Cancel])
        slotBackGlide[type2Cancel] = undefined
      }

      /*type == 0 ? function() {
        
      } : type == 1 ? function() {
        
      } : function() {
        
      }*/

      var noGlidingHappening = true
      for (i of slotBackGlide) {
        //alert(i)
        if (i != undefined) {
          //alert(i)
          noGlidingHappening = false
          break
        }
      }
      for (i of slotGlide) {
        if (!noGlidingHappening) break
        //alert(i)
        if (i != undefined) {
          //alert(i)
          noGlidingHappening = false
          break
        }
      }

      if (noGlidingHappening) {
        glideCd()
      }

      if (type == 1) {
        canMoveLeftTargetX = []
        canMoveLeftTargetX.length = 0
      }
    } else {
      target.style.left = wantedX + "px"
      target.style.top = wantedY + "px"
    }
    //console.log(id)
  } else {
    var divideFactor = 25
    target.style.top = (((wantedY - nowY) / divideFactor) + nowY) + "px"
    target.style.left = (((wantedX - nowX) / divideFactor) + nowX) + "px"
  }
}

function glideCd() {
  //await new Promise(resolve => setTimeout(resolve, 10));
  movingSlot = false
  for (i in seedPacketAlreadyMoving) {
    seedPacketAlreadyMoving[i] = false
  }
}

var canMoveLeftTargetX = []
var minusSlotBackNum = 0

var randomSeed = document.getElementById("randomSeed")
var randomSeedText = document.getElementById("randomSeedText")

function startButton() {
  //pressed Let's rock
  randomSeed.style.display = "none"
  randomSeedText.style.display = "none"

  canPlayCys = false
  cysMusic.pause()
  document.getElementById("LetsRockRd").style.top = "600px"
  document.getElementById("LetsRock").style.top = "600px"
  var seedSelectGlide = setInterval(function() {
    if (document.getElementById("CysBg").style.top == "") {
      document.getElementById("CysBg").style.top = "100px"
    }
    if (document.getElementById("sunDisplay").style.top == "") {
      document.getElementById("sunDisplay").style.top = "80px"
    }
    document.getElementById("CysBg").style.top =
      Number(document.getElementById("CysBg").style.top.split("px")[0]) + 3 + "px"

    for (i = 0; i < maxPlantIdAmount; i++) {
      if (getPlantById(i * 3 + 1).style.top == "") {
        getPlantById(i * 3 + 1).style.top = "125px"
      }
      if (getPlantById(i * 3 + 1).style.top.split("px")[0] >= 125) {
          getPlantById(i * 3 + 1).style.top =
          Number(getPlantById(i * 3 + 1).style.top.split("px")[0]) + 3 + "px"
      }
    }
    
    if (Number(document.getElementById("CysBg").style.top.split("px")[0]) > 600) {
      clearInterval(seedSelectGlide)
      document.getElementById("CysBg").style.top = "-300px"
      document.getElementById("LetsRock").style.top = "-100px"
      document.getElementById("LetsRockRd").style.top = "-100px"
      for (i = 0; i < maxPlantIdAmount; i++) {
        if (getPlantById(i * 3 + 1).style.top.split("px")[0] > 125) {
            getPlantById(i * 3 + 1).style.top = "-100px"
        }
      }
    }
  })
  var sunBankGlide = setInterval(function() {
    if (document.getElementById("SeedBank").style.top == "") {
      document.getElementById("SeedBank").style.top = "40px"
      shovel.style.top = "45px"
      shovelBank.style.top = "40px"
    }
    document.getElementById("SeedBank").style.top =
      Number(document.getElementById("SeedBank").style.top.split("px")[0]) - 0.5 + "px"
    shovel.style.top =
      Number(shovel.style.top.split("px")[0]) - 0.5 + "px"
    shovelBank.style.top =
      Number(shovelBank.style.top.split("px")[0]) - 0.5 + "px"
    for (i = 0; i < slotPlantId.length; i++) {
      var target = getPlantById(Number(slotPlantId[i]) * 3 + 1)
      target.style.top = Number(target.style.top.split("px")[0]) - 0.5 + "px"
      target.style.filter = "brightness(0.5)"
      plantCurrentCd[slotPlantId[i]] = 0
    } document.getElementById("sunDisplay").style.top =
      Number(document.getElementById("sunDisplay").style.top.split("px")[0]) - 0.5 + "px"
    if (Number(document.getElementById("SeedBank").style.top.split("px")[0]) <= 0) {
      clearInterval(sunBankGlide)
      setupForStart()
    }
  })
}

function getLawnById(id) {
  return document.getElementById("lawnMower" + id)
}

var lawnMowerSetupAmount = 1
var lawnMowerSetupFunc;
var lawnMowerAmount = 5
var lawnMowerSetupDelay = 100
var lawnMowerMovementFunc = []
var lawnMowerSpeed = []

function triggerLawnMower(id) {
  lawnMowerExist[id] = false
  lawnMowerMovementFunc[id] = setInterval(function() {
    if (Number(getLawnById(id).style.left.split("px")[0]) < 600) {
      if (lawnMowerSpeed[id] == undefined) {
        lawnMowerSpeed[id] = Math.random() + 1
      }
      getLawnById(id).style.left = Number(getLawnById(id).style.left.split("px")[0]) + lawnMowerSpeed[id] + "px"
    }
  }, 1)
}

function setupForStart() {
  lawnMowerSetupFunc = setInterval(function() {
    if (lawnMowerSetupAmount <= lawnMowerAmount) {
      var target = 6 - lawnMowerSetupAmount
      getLawnById(target).style.top = (70 + (target - 1) * 75) + "px"
      lawnMowerSetupAmount++
    } else {
      clearInterval(lawnMowerSetupFunc)
      readySetPlant()
    }
  }, lawnMowerSetupDelay)
}

var startReady = document.getElementById("startReady")
var startSet = document.getElementById("startSet")
var startPlant = document.getElementById("startPlant")
var rdSetPlantAmount = 0

function readySetPlant() {
  var startCharFunc = setInterval(function() {
    if (rdSetPlantAmount <= 2) {
      if (rdSetPlantAmount == 0) {
        readySetPlantMusic.play()
        startReady.style.top = "150px"
      } else if (rdSetPlantAmount == 1) {
        startReady.style.top = "-150px"
        startSet.style.top = "150px"
      } else {
        startSet.style.top = "-150px"
        startPlant.style.top = "150px"
      }
      rdSetPlantAmount++
    } else {
      startPlant.style.top = "-150px"
      clearInterval(startCharFunc)
      startFr()
    }
  }, rdSetPlantCd)
}

var rdSetPlantCd = 600

function startFr() {
  grasswalkMusic.play()
  startTick()
  realStart = true
}

var slotGlide = []
var canPlayCys = true

var movingId = null;

function move(id) {
  //console.log("hi")
  //alert("hi")
  if (moving) {
    movingId = id
    id++
    movePlantById(getPlantById(id * 3 - 1), getPlantById(id * 3)) //nvm: before removing google drive, the last one without -1
  }
  else {
    plantPlantReset()
  }
}

var xPlantRate = 58
var yPlantRate = 75

function movePlantById(id2, id3) {
  //id2 -> ball2 id3 -> ball3
  id2.style.left = (mouseX - 12.5) + "px"
  //alert(mouseY)
  id2.style.top = (mouseY - 12.5) + "px"
  var ball3X = Math.round((mouseX - 25) / xPlantRate) * xPlantRate
  ball3X = mouseX >= 575 ? -100 : ball3X
  ball3X = mouseX <= 55 ? -100 : ball3X
  var ball3Y = Math.round((mouseY - 25) / yPlantRate) * yPlantRate
  ball3Y = mouseY <= 63 ? -100 : ball3Y
  ball3Y = ball3Y >= 430 ? -100 : ball3Y
  id3.style.left = ball3X + "px"
  id3.style.top = ball3Y + "px"
  //alert(ball3.style.left)
}

var gifSrc = []
//var loadGifEle = document.getElementById("lawnMower1")

function stop(id) {
  var targetMovePlantId = id + 1

  movePlantById(getPlantById(targetMovePlantId * 3 - 1), getPlantById(targetMovePlantId * 3)
                /*getPlantById(targetMovePlantId * 3)*/)
  movingId = null
  //console.log(id)
  var havePlanted = false
  var targetBall;
  targetBall = getPlantById((id + 1) * 3/* - 1*/)
  for (i = 0; i < plantAmount; i++) {
    if (plant[i].style.left == targetBall.style.left
      && plant[i].style.top == targetBall.style.top) {
      if (!removedplant.includes(i)) { havePlanted = true }
    }
  } //check if already have plant

  if (!havePlanted) {
    //alert("hi")
    //clearInterval(loop)
    if (moving) {
      moving = false
      clearInterval(loop)
      if (targetBall.style.top != "-100px" && targetBall.style.left != "-100px")
      //alert("hi")
      {
        /*if (plantTypePlantedAmount[id] == undefined) {
          plantTypePlantedAmount[id] = gifsPreload
        } else {
          plantTypePlantedAmount[id]++
        }*/      
        /*plantGifs[id][plantGifs[id].length] = new Image()
        plantGifs[id][plantGifs[id].length - 1].src = getPlantById((targetMovePlantId) * 3).querySelector("img").src + "&cache=" + plantTypePlantedAmount[id]*/

        plantMusic.play()
        haveSun -= cost[id]
        plantCurrentCd[id] = seedCd[id]
        setPlantCardCd(id)

        //reloadAnimation(targetBall)
        plant[plantAmount] = targetBall.cloneNode(true)
        //new SuperGif({ gif: plant[plantAmount] } ).load()
        plantHp[plantAmount] = plantDefaultHp[id]
        plantCd[plantAmount] = plantTypeStartCd[id]
        plantType[plantAmount] = id
        //plant[plantAmount].src="sunflower.gif"
        //console.log(document.getElementById("peashooterGif"))
        //plant[plantAmount].animate
        document.body.appendChild(plant[plantAmount])
        reloadAnimation(plant[plantAmount], targetBall) //.querySelector("img").src = plantGifs[id][plantGifs[id].length - 1 - gifsPreload].src
        //sup1.move_to(0)
        //console.log(plant[plantAmount].style)
        plantAmount++
      }
      plantPlantReset()
    }
  }
}
//alert("hi")
//var gifsPreload = 5
//var plantGifs = {}

/*for (i = 0; i < gifsPreload; i++) {
  for (j = 0; j < maxPlantIdAmount; j++) {
    if (plantGifs[j] == undefined) {
      plantGifs[j] = []
    }
    plantGifs[j][i] = new Image()
    //alert(getPlantById((j+1) * 3).querySelector("img").src)
    plantGifs[j][i].src = getPlantById((j + 1) * 3).querySelector("img").src + "&cache=" + i
  }
}*/

//var plantTypePlantedAmount = []

var plantCurrentCd = []

function setPlantCardCd(id) {
  plantCurrentCd[id] = seedCd[id]
}

function seedPacketUpdate() {
  if (plantCurrentCd.length > 0) {
    for (i = 0; i < plantCurrentCd.length; i++) {
      if (plantCurrentCd[i] != undefined) {
        var targetCard;
        targetCard = getPlantById((3 * i) + 1)
        if (plantCurrentCd[i] > 0 || haveSun < cost[i]) {
          targetCard.style.filter = "brightness(0.5)"
          if (plantCurrentCd[i] > 0) {
            plantCurrentCd[i]--
          }
        } else {
          targetCard.style.filter = "brightness(1)"
        }
      }
    }
  }
}

var removedplant = []
var plantDamagedCd = []
var plantChangedBrightness = []

function plantTick() {
  powieTick()
  if (plantAmount > 0) {
    for (i = 0; i < plantAmount; i++) {
      if (plantExistTime[i] == undefined) {
        plantExistTime[i] = 0
      }
      plantExistTime[i]++
      
      if (removedplant.includes(i)) {
        //plant[i].style.top = "-100px"
        //console.log(i)
        continue;
      }

      if (plantState[i] == undefined) {
        plantState[i] = 0
      }

      if (plantChangedBrightness[i] == undefined) {
        plantChangedBrightness[i] = true
        plant[i].style.filter = "brightness(1)"
      }

      if (plantOnShovelTimer[i] != undefined) {
        if (plantOnShovelTimer[i] > 0) {
          plantOnShovelTimer[i]--
        } else {
          plant[i].style.filter = "brightness(1)"
        }
      }

      if (plantHp[i] <= 0) {
        //alert(i)
        removeChilds(plant[i])
        removedplant.push(i)

        if (plantType[i] == 4) {
          if (potatoGrowingPngArray[i] != undefined) {
            removeChilds(potatoGrowingPngArray[i])
            potatoGrowingPngArray[i] = undefined
          }
        }
        continue;
      }

      if (plantDamagedCd[i] != undefined) {
        if (plantDamagedCd[i] > 0) {
          plantDamagedCd[i]--
        } else {
          plant[i].style.filter = "brightness(1)"
          if (plantType[i] == 4 && potatoGrowingPngArray[i] != undefined) {
            potatoGrowingPngArray[i].style.filter = "brightness(1)"
          }
        }
      }

      if (plantType[i] == 0 || plantType[i] == 5 || plantType[i] == 7 || plantType[i] == 8) {

        if (plantType[i] == 7) {
          if (repeaterAttackTwiceFactor[i] == undefined) {
            repeaterAttackTwiceFactor[i] = 0
          }
        }

        var haveZombiesInSameLane = false
        if (zombieAmount > 0) {
          for (j = 0; j < zombieAmount; j++) {
            if (!zombieremoved.includes(j)) {
              if (plant[i].style.top == zombie[j].style.top) {
                if (Number(zombie[j].style.left.split("px")[0]) < 600 && plantType[i] != 8 || Number(zombie[j].style.left.split("px")[0]) - Number(plant[i].style.left.split("px")[0]) < puffShroomAttackRange)
                //if(Number(zombie[j].style.top.split("px")[0])<)
                { haveZombiesInSameLane = true } //x < 509
              }
            }
          }
        }
        //alert(plant[i].style.right)
        if (plantCd[i] <= 0 && (false || haveZombiesInSameLane)) {
          summonProj(
            Number(plant[i].style.left.split("px")[0])
            + projDx + "px",
            Number(plant[i].style.top.split("px")[0])
            + projDy + "px",
            (plantType[i] == 0 || plantType[i] == 7) ? 1 : (plantType[i] == 5 ? 2 : 3)
          )
          
          if (plantType[i] == 0) {
            changeStat(0, 1)
          }

          if (plantType[i] != 7) {
            plantCd[i] = plantAttackCd[plantType[i]] + (15 * Math.random())
          } else {
            var repeaterDoubleShootDelay = 15
            if (repeaterAttackTwiceFactor[i] == 0) {
              plantCd[i] = repeaterDoubleShootDelay
              repeaterAttackTwiceFactor[i] = 1
            } else {
              plantCd[i] = plantAttackCd[plantType[i]] + (15 * Math.random()) - repeaterDoubleShootDelay
              repeaterAttackTwiceFactor[i] = 0
            }
          }
        }
        else {
          if (haveZombiesInSameLane || plantCd[i] > plantAttackCd[i]) { plantCd[i]-- }
        }
      } else if (plantType[i] == 1 || plantType[i] == 9) {
        if (plantType[i] == 9 && plantExistTime[i] >= sunShroomGrowRequireTime && plantState[i] != 0.5 && plantState[i] != 1) {
          changeAnimation(plant[i], document.getElementById("sunShroomGrowGif").querySelector("img"))
          plantState[i] = 0.5
          plantCd[i] = 96
        }
        //console.log("detected")
        if (plantCd[i] <= 0) {
          if (plantState[i] != 0.5) {
            createSun(plant[i].style.left, plant[i].style.top, 1, (plantType[i] == 1 || (plantType[i] == 9 && plantState[i] == 1) ? 0 : 1))
            plantCd[i] = (plantAttackCd[plantType[i]]/100 + Math.random() * 6) * 100
          } else {
            changeAnimation(plant[i], document.getElementById("sunShroomBigGif").querySelector("img"))
            plantState[i] = 1
            plantCd[i] = plantExistTime[i] % plantAttackCd[plantType[i]]
          }
        } else {
          plantCd[i]--
        }
      } else if (plantType[i] == 2) {
        if (plantCd[i] > 0) {
          /*var dSize = 1
          plant[i].style.width = Number(plant[i].style.width.split("px")[0])+dSize+"px"
          plant[i].style.height = Number(plant[i].style.height.split("px")[0])+dSize+"px"*/
          plantCd[i]--
        } else {
          //explode
          //powie 240*180
          //cherry 70*50
          powieAnimation[powieAnimation.length] = powie.cloneNode(true)
          document.body.appendChild(powieAnimation[powieAnimation.length - 1])
          powieAnimation[powieAnimation.length - 1].style.left = Number(plant[i].style.left.split("px")[0]) + 35 - 120 + "px"
          powieAnimation[powieAnimation.length - 1].style.top = Number(plant[i].style.top.split("px")[0]) + 25 - 90 + "px"
          removeChilds(plant[i])
          removedplant.push(i)
          //dist between each sq is 50px
          if (zombieAmount > 0) {
            for (j = 0; j < zombieAmount; j++) {
              if (!zombieremoved.includes(j)) {
                var plantX = Number(plant[i].style.left.split("px")[0])
                var plantY = Number(plant[i].style.top.split("px")[0]) / 75
                var zombieX = Number(zombie[j].style.left.split("px")[0])
                var zombieY = Number(zombie[j].style.top.split("px")[0]) / 75
                if (Math.abs(plantX - zombieX) <= 100 &&
                  Math.abs(plantY - zombieY) <= 1) {
                  hurtZombie(1800, false, j)
                }
              }
            }
          }
        }
      } else if (plantType[i] == 4) {
        if (plantCd[i] <= 0) {
          /*if (potatoGrowingPngArray[i] != undefined) {
            removeChilds(potatoGrowingPngArray[i])
            potatoGrowingPngArray[i] = undefined
            plant[i].style.display = "block"
          }*/
          if (plant[i].querySelector("img").src != getPlantById(15).querySelector("img").src) { plant[i].querySelector("img").src = getPlantById(15).querySelector("img").src }
          var exploded = false
          if (zombieAmount > 0 && plantHp[i] > 0) {
            for (j1 = 0; j1 < zombieAmount; j1++) {
              if (!zombieremoved.includes(j1) && !removedplant.includes(i)) {
                if (plant[i].style.top == zombie[j1].style.top) {
                  //var plantTop = plant[i].style.top
                  var detectRange = 25
                  var explodeRange = 50
                  var zombieX = Number(zombie[j1].style.left.split("px")[0])
                  var plantX = Number(plant[i].style.left.split("px")[0])

                  if (zombieX - plantX <= detectRange && zombieX >= plantX ||
                    zombieX - plantX >= -detectRange && zombieX <= plantX) {
                    exploded = true
                    console.log("explode")

                    for (k1 = 0; k1 < zombieAmount; k1++) {
                      if (!zombieremoved.includes(k1)) {
                        if (plant[i].style.top == zombie[k1].style.top) {
                          var zombieX2 = Number(zombie[k1].style.left.split("px")[0])
                          if (zombieX2 - plantX <= explodeRange && zombieX2 >= plantX ||
                            zombieX2 - plantX >= -explodeRange && zombieX2 <= plantX) {
                            hurtZombie(1800, true, k1)
                          }
                        }
                      }
                    }
                    break;
                  }
                }
              }
            }
          }
          if (exploded) {
            plantHp[i] = 0
          }
        } else {
          /*if (potatoGrowingPngArray[i] == undefined) {
            potatoGrowingPngArray[i] = getPlantById(14).cloneNode(true)
            document.body.appendChild(potatoGrowingPngArray[i])
          }

          potatoGrowingPngArray[i].style.left = plant[i].style.left
          potatoGrowingPngArray[i].style.top = plant[i].style.top

          //plantCd[i].querySelector("img").src = getPlantById(14).querySelector("img").src //not working*/
          //plant[i].style.display = "none"
          if (plant[i].querySelector("img").src != getPlantById(14).querySelector("img").src) { plant[i].querySelector("img").src = getPlantById(14).querySelector("img").src }
          plantCd[i]--
        }
      } else if (plantType[i] == 6) {
        //chomper
        if (plantCd[i] <= 0) {
          if (plantState[i] == 0) {
            var targetting = false
            if (zombieAmount > 0 && plantHp[i] > 0) {
              for (j1 = 0; j1 < zombieAmount; j1++) {
                if (!zombieremoved.includes(j1) && !removedplant.includes(i)) {
                  if (plant[i].style.top == zombie[j1].style.top) {
                    var detectRange = 100//75
                    var zombieX = Number(zombie[j1].style.left.split("px")[0])
                    var plantX = Number(plant[i].style.left.split("px")[0])
                    if (zombieX - plantX <= detectRange && zombieX >= plantX) {
                      if (plantTargettingZombieId[i] == undefined || (plantTargettingZombieId[i] == undefined ? false : plantTargettingZombieId[i][1] > zombieX)) {
                        plantTargettingZombieId[i] = [j1, zombieX]
                        if (plant[i].querySelector("img").src != chomperEatGif.querySelector("img").src) { 
                          plant[i].querySelector("img").src = chomperEatGif.querySelector("img").src 
                          plant[i].querySelector("img").width = chomperEatGif.querySelector("img").width 
                          plant[i].querySelector("img").height = chomperEatGif.querySelector("img").height 
                          plant[i].querySelector("img").style.transform = "translate(0px, -35px)"
                        }
                        plantState[i] = 1
                        plantCd[i] = 400 //250 //2 sec
                        targetting = true
                      }
                    }
                  }
                }
              }
            }
            if (!targetting) {
              if (plant[i].querySelector("img").src != getPlantById(21).querySelector("img").src) { 
                plant[i].querySelector("img").src = getPlantById(21).querySelector("img").src 
                plant[i].querySelector("img").width = getPlantById(21).querySelector("img").width 
                plant[i].querySelector("img").height = getPlantById(21).querySelector("img").height 
              }
            }
          } else if (plantState[i] == 1) {
            if (plant[i].querySelector("img").src != chomperChewGif.querySelector("img").src) { 
              plant[i].querySelector("img").src = chomperChewGif.querySelector("img").src 
              plant[i].querySelector("img").width = chomperChewGif.querySelector("img").width 
              plant[i].querySelector("img").height = chomperChewGif.querySelector("img").height
              plant[i].querySelector("img").style.transform = ""
            }
            plantState[i] = 2
            plantCd[i] = plantAttackCd[plantType[i]] //200
          } else {
            if (plant[i].querySelector("img").src != chomperSwallowGif.querySelector("img").src) { 
              plant[i].querySelector("img").src = chomperSwallowGif.querySelector("img").src 
              plant[i].querySelector("img").width = chomperSwallowGif.querySelector("img").width 
              plant[i].querySelector("img").height = chomperSwallowGif.querySelector("img").height 
            }
            plantState[i] = 0
            plantCd[i] = 224
          }
        } else {
          if (plantState[i] == 1 && plantCd[i] <= chomperDamageDelay && plantTargettingZombieId[i] != undefined) {
            if(!zombieremoved.includes(plantTargettingZombieId[i][0]) && zombieHealth[plantTargettingZombieId[i][0]] > 0) {
              killZombie(plantTargettingZombieId[i][0])
              //hurtZombie(1800, false, plantTargettingZombieId[i][0])
            }
            plantTargettingZombieId[i] = undefined
          }
          plantCd[i]--
        }
      }
    }
  }
}

var chomperDamageDelay = 50*2
//var chomperSwallowTime = 224
var plantState = []
var repeaterAttackTwiceFactor = []
var potatoGrowingPngArray = []

var projDy = 5
var projDx = 35

function randomSeeds() {
  var randomSeedsArray = []
  //var targetNumberRandomSeed = maxPlantIdAmount
  for (i = slotClickedNum; i < maxSlotAvailable; i++) {
    //alert(i)
    var randomSeedId = Math.round(Math.random() * (maxPlantIdAmount - 1))
    //try {
    var targetTop = getPlantById(randomSeedId * 3 + 1).style.top
    /*} catch(e) {
      alert(randomSeedId)
    }*/
    if (randomSeedsArray.includes(randomSeedId) || !(targetTop == "" || targetTop != "45px")) {
      i--
      continue;
    }
    randomSeedsArray.push(randomSeedId)
    start(randomSeedId)
  }
}

function reloadAnimation(object, target) {
  var actualSrc = target.querySelector("img").src
  var image = new Image()
  image.src = actualSrc
  image.width = target.querySelector("img").width
  image.height = target.querySelector("img").height
  //object.querySelector("img").src = ""
  document.body.appendChild(image)
  object.querySelector("img").src = image.src + "?cache=" + new Date().getTime()
  //object.replaceChild(actualSrc, object.querySelector("img"))
}