var ball7 = document.getElementById("circle7")
var smallSun = document.getElementById("smallSun")

function checkSun(amount) {
  return haveSun >= amount
}

var startSun = 50 //50 //1000
var haveSun = startSun
var sun = []
var sunAmount = 0
var sunStartCd = 100 * (Math.random() * 5 + 5)
var sunCd = sunStartCd
var sunDefaultCd = (24 + Math.random() * 6) * 100
var sunFallY = []
var sunFallSpeed = []
var sunType = []

function sunSpawn() {
  if (sunCd <= 0) {
    spawnDefaultSun()
    sunCd = sunDefaultCd
  } else {
    sunCd--
  }
}

var sunMovementType = []

function spawnDefaultSun() {
  createSun((20 + (Math.random() * 460)) + "px", "-50px", 0)
}

var dragCollect = false
var dragCollectFunc;

function createSun(x, y, movement) {
  createSun(x, y, movement, 0)
}

//movement: 0->normal falling 1->produced
function createSun(x, y, movement, type) {
  sunMovementType[sunAmount] = movement
  sun[sunAmount] = (type == 0 ? ball7 : smallSun).cloneNode(true)
  document.body.appendChild(sun[sunAmount])
  sun[sunAmount].style.left = x //"200px"
  sun[sunAmount].style.top = y
  sun[sunAmount].onclick = function() {
    //dragCollect = true
    sunClicked(sunAmount)
  }
  sunType[sunAmount] = type
  sunFallSpeed[sunAmount] = Math.random() * 0.01 + 0.05
  sunFallY[sunAmount] = //200
    (Math.random() * 175) + 200
  isSunMoving[sunAmount] = 0
  sunAmount++
}

var removedSun = []

var sunTypeOneMovement = []
var sunTypeOneFallTo = []
var sunTypeOneDx = []

function sunTick() {
  if (sunAmount > 0) {
    for (i = 0; i < sunAmount; i++) {
      if (!removedSun.includes(i)) {
        if (isSunMoving[i] == 0) {
          if (Number(sun[i].style.left.split("px")[0]) < 0) {
            sun[i].style.left = "0px"
          }
          //var rightest = 485
          if (Number(sun[i].style.left.split("px")[0]) > 485) {
            sun[i].style.left = "485px"
          }
          //avoid offscreen

          if (sunMovementType[i] == 0) {
            if (Number(sun[i].style.top.split("px")[0]) < sunFallY[i]) {
              sun[i].style.top = (Number(sun[i].style.top.split("px")[0]) + sunFallSpeed[i]) + "px"
            }
          } else if (sunMovementType[i] == 1) {
            //console.log("moving")
            if (sunTypeOneMovement[i] == undefined) {
              sunTypeOneMovement[i] = -2
              sunTypeOneFallTo[i] = Number(sun[i].style.top.split("px")[0])
              sunTypeOneDx[i] = -0.25 + Math.random() * 0.5
            }
            var canFall = sunTypeOneMovement[i] < 0 ||
              Number(sun[i].style.top.split("px")[0]) < sunTypeOneFallTo[i]
            if (canFall) {
              sun[i].style.top = Number(sun[i].style.top.split("px")[0]) + sunTypeOneMovement[i] + "px"
              sun[i].style.left = Number(sun[i].style.left.split("px")[0]) + sunTypeOneDx[i] + "px"
              sunTypeOneMovement[i] < 0 ? sunTypeOneMovement[i] *= 0.98 : sunTypeOneMovement[i] /= 0.98
              if (sunTypeOneMovement[i] > -0.1 && sunTypeOneMovement[i] < 0) {
                sunTypeOneMovement[i] = 0.15
              }
            }
          }
        }
      }
    }
  }
}

var firstTime = false

function sunClicked(id) {
  firstTime = true
  dragCollectFunc = setInterval(function() {
    if (!dragCollect && !firstTime) return;
    firstTime = false
    //console.log(id)
    //console.log("clicked")
    for (i = 0; i < sunAmount; i++) {
      //0 to +25
      if (!removedSun.includes(i)) {
        var sunY = Number(sun[i].style.top.split("px")[0])
        var sunSize = sunType[id] == 0 ? 50 : 25
        if ((mouseY - sunY) < sunSize && mouseY >= sunY) {
          var sunX = Number(sun[i].style.left.split("px")[0])
          //alert(sunSize)
          if ((mouseX - sunX) < sunSize && mouseX >= sunX && !isSunMoving[i]) {
            dragCollect = true
            playSunSound()
            sunCollected(i)
            //pointsSong.onended = "alert('end')"
            //pointsMusic.play()
            //console.log("collected")
          }
        }
      }
    }
  }, 1)
}

function playSunSound() {
             pointsSong[pointsSrcAmount] = new Audio();
            pointsSrc[pointsSrcAmount] = document.createElement("source")
            pointsSrc[pointsSrcAmount].type = "audio/mpeg";
            pointsSrc[pointsSrcAmount].src = "../.config/files20082022/music/points.mp3"
            pointsSong[pointsSrcAmount].appendChild(pointsSrc[pointsSrcAmount]);
            //console.log(pointsSong[pointsSrcAmount])
            pointsSong[pointsSrcAmount].play();
            pointsSrcAmount++
}

/*var pointsSrc = document.createElement("points");
            pointsSrc.type = "audio/mpeg";
            pointsSrc.src = "../.config/files20082022/music/points.mp3";*/

var pointsSong = []
var pointsSrc = []
var pointsSrcAmount = 0

var isSunMoving = []

function sunCollected(i) {
  if (!isSunMoving[i]) {
    isSunMoving[i] = true
    var sunX = Number(sun[i].style.left.split("px")[0])
    var sunY = Number(sun[i].style.top.split("px")[0])
    var dx = sunX
    var dy = sunY
    var delta = 100
    var targetX = 35 - 25 //-half of sun size (25)
    var targetY = 20 - 25
    dx -= targetX
    dy -= targetY

    sunGlideLoop[i] = setInterval(function() { sunGlide(i, dx, dy, delta) }, 1)
    /*if (isSunMoving[i]<delta)
    {
      sunGlide(i)
    }
    else {
    /*removeChilds(sun[i])
    removedSun.push(i)*
      haveSun += 50
    }*/
  }
}

var sunGlideLoop = []

function sunGlide(i, DX, DY, DELTA) {
  sunX = Number(sun[i].style.left.split("px")[0])
  sunY = Number(sun[i].style.top.split("px")[0])
  sun[i].style.left = (sunX - (DX / DELTA)) + "px"
  sun[i].style.top = (sunY - (DY / DELTA)) + "px"
  isSunMoving[i]++
  if (isSunMoving[i] > DELTA) {
    clearInterval(sunGlideLoop[i])
    haveSun += 25
    removeChilds(sun[i])
    removedSun.push(i)
  }
}

var sunDisplay = document.getElementById("sunDisplay")

function sunUpdate() {
  sunDisplay.innerHTML = `<span style='color: black;'>${haveSun}</span>`;
}