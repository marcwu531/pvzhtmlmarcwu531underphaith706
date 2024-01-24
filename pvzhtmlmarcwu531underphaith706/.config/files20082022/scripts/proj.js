var ball4 = document.getElementById("proj1")
var proj = []
var projAmount = 0
var projType = []

function getProjById(id) {
  return document.getElementById("proj" + id)
}

function summonProj(left, top, type) {
  //alert("test")
  proj[projAmount] = getProjById(type).cloneNode(true)
  projType[projAmount] = type
  document.body.appendChild(proj[projAmount])
  var target = proj[projAmount]
  target.style.left = left
  target.style.top = top
  //alert(right)
  projAmount++
}

var bulletremoved = []

var projSPd = 2

function projTick() {
  //alert(projAmount)
  if (projAmount > 0) {
    for (i = 0; i < projAmount; i++) {
      if (!bulletremoved.includes(i)) {
        try {
          if (true) {
            proj[i].style.left = (Number(proj[i].style.left.split("px")[0]) + projSPd) + "px"
            if (Number(proj[i].style.left.split("px")[0] > 600)) {
              //destroy bullet
              var targetDestroyProj = proj[i]
              bulletremoved.push(i)
              //node.
              try {//document.getElementById("border").removeChild(targetDestroyProj)
                removeChilds(targetDestroyProj)
                //targetDestroyProj=null
              } catch (e) {
                //console.log(e)
              }
            }
          }
        } catch (e) { }
      }
    }
  }
}

/*var removeChilds = function (node) 
{
    var last;
    while (last = node.lastChild) node.removeChild(last);
  //change to create new div and remove??
};*/

function removeChilds(child) {
  document.body.removeChild(child)
}