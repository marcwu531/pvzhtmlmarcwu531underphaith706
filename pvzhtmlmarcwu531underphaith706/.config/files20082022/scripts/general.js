console.warn("Developer Tools detected")
console.warn("Resources Self-Destructed")
console.warn("Missing Resources - Unable to get and match getCode() function")
/*window.onresize*/
clearInterval(checkDebug)
var checkDebug = setInterval(function() {
  if (!notDebugging && (window.outerWidth - window.innerWidth) > 117 && (window.outerWidth - window.innerWidth) != 762) {
    //alert(window.outerWidth - window.innerWidth)
    document.write('<script>window.open("about:blank", "_self").close()</script>')
  }
}, 1)
//<script>open(location, '_self').close();</script>

var grasswalkMusic = document.getElementById("grasswalkMusic")
var cysMusic = document.getElementById("cysMusic")
var pointsMusic = document.getElementById("pointsMusic")
var seedliftMusic = document.getElementById("seedliftMusic")
var plantMusic = document.getElementById("plantMusic")
var readySetPlantMusic = document.getElementById("readySetPlantMusic")
var losemusicMusic = document.getElementById("losemusicMusic")
var screamMusic = document.getElementById("screamMusic")

grasswalkMusic.loop = true;
cysMusic.loop = true;

//cysMusic.play()
//alert("hi")

document.onkeydown = checkKeydown;
document.onkeyup = checkKeyup;
document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mouseup', handleMouseUp);
//e.button
//0 is left, 1 is middle, 2 is right

function handleMouseDown(e) {
  if (e.button == 0) {
    sunClicked()
    if (moving && movingId != null) {
      stop(movingId)
    }
  }
  if (e.button == 1) {
    //console.log("X: " + mouseX + ", Y: " + mouseY)
  }
}

function handleMouseUp(e) {
  //console.log(e.button)
  //console.log(dragCollect)
  if (e.button == 0 && dragCollect) {
    dragCollect = false
    clearInterval(dragCollectFunc)
  }
}

var upClicking = false
var downClicking = false


function checkKeydown(e) {
  e = e || window.event;

  if (e.keyCode === 38 && !upClicking) {
    //up
    upClicking = true
    startTick()
  }
  else if (e.keyCode === 40 && !downClicking) {
    //down
    downClicking = true
    if (tick.length > 1) { stopTick() }
  }
  if (e.keyCode == 123 && !notDebugging) { // Prevent F12
    //prompt("Password:")
    return false;
  } else if (/*e.ctrlKey*//* && event.shiftKey && */e.keyCode == 73 || e.keyCode == 85) { // Prevent Ctrl+Shift+I      
    return false;
  }
}

function checkKeyup(e) {
  e = e || window.event;

  if (e.keyCode === 38) {
    upClicking = false
  }
  else if (e.keyCode === 40) {
    downClicking = false
  }
}

var checkHaveEnoughPlant = setInterval(function() {
  if (slotClickedNum == maxSlotAvailable && !movingSlot) {
    //clearInterval(checkHaveEnoughPlant)
    document.getElementById("LetsRockRd").style.zIndex = 1
  } else {
    document.getElementById("LetsRockRd").style.zIndex = -1
  }
})
function startTick() {
  started = true
  tick[tick.length] = accurateInterval(function() { normalTickFunc() }, 1)//true
  //tickFunc(tick.length - 1)
}

var startTime = []
var nextTime = []

async function tickFunc(id) {
  //try {
  if (!startTime[id]) {
    startTime[id] = new Date().getTime();
    nextTime[id] = startTime[id];
  }
  nextTime[id] += 1000

  //consoleTick()
  //console.log(nextTime[id] - new Date().getTime())
  if (tick[id]) setTimeout(tickFunc(id), 1000)
  //} catch (e) {
  //console.log(e)
  //tickFunc(id)
  //}
}

function normalTickFunc() {
  plantTick()
  projTick()
  zombieSpawn()
  zombieTick()
  sunSpawn()
  sunTick()
  sunUpdate()
  seedPacketUpdate()
  checkTps()
}

function stopTick() {
  //clearInterval(tick[tick.length - 1])
  (tick[tick.length - 1]).cancel()// = false
  tick = tick.slice(0, -1)
}
var tick = [];
var started = false
//startTick() //should only activate after selecting plants
//function consoleTick()

document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
  var eventDoc, doc, body;
  event = event || window.event;
  if (event.pageX == null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;
    event.pageX = event.clientX +
      (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
      (doc && doc.clientLeft || body && body.clientLeft || 0);
    event.pageY = event.clientY +
      (doc && doc.scrollTop || body && body.scrollTop || 0) -
      (doc && doc.clientTop || body && body.clientTop || 0);
  }
  mouseX = event.pageX
  mouseY = event.pageY
  //alert(mouseY)
  //console.log("X: " + mouseX + ", Y: " + mouseY)
  if (canPlayCys) {
    cysMusic.play()
  }
}

/*document.getElementById("background").onload = async function() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  killBackground()
}

function killBackground() {
  //if (document.getElementById("background")) {
    document.getElementById("background").parentNode.removeChild(document.getElementById("background"));
    //killBackground()
  //}
}*/
var alertTimeVar = 0
function alertTime(msg, time) {
  if (alertTimeVar < time) {
    alert(msg)
    alertTimeVar++
  } else {
    //alertTime = 0
  }
}

var checkTpsTime = new Date().getTime()
var checkTpsTimer = 0
var checkTpsOgAmount = 100
var checkTpsAmount = 0
var tpsCounter = document.getElementById("tpsCounter")
//var gameTps;
function checkTps() {
  /*if (checkTpsTimer < 100) {
    checkTpsTimer = new Date().getTime() - checkTpsTime
    return
  }/* else {
    checkTpsTimer = 0
  }*/
  /*if (checkTpsTime == undefined) {
    checkTpsTime = 
  } else {*/
  checkTpsTimer = new Date().getTime() - checkTpsTime
  var time = checkTpsTimer //checkTpsTime
  checkTpsTime = new Date().getTime()
  //time = checkTpsTimer
  checkTpsTimer = 0
  time = Math.round(100000 / time) / 100
  time = !(time % 1 != 0) ? time + ".00" : time
    /*haveSun gameTps*/ tpsCounter.innerHTML = "TPS: " + time
  //}
  checkTpsAmount = checkTpsOgAmount
}

var getEById = id => document.getElementById(id)