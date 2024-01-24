document.write(`
<!--If you somehow see this, I just wanna say, README.md exists and all rights reserved, not allowing any form of copying-->
<!DOCTYPE html>
<html lang="en">
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0, user-scramble=no">
<style type="text/css">
  html {
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>

<!--<script>
alert("loading")
</script>-->

<head>
  <link rel="stylesheet" href="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/scripts/style.css">
  <!--<link rel="preload" href="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/titlescreen.webp" as="script">
  <div id="background">
    <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/titlescreen.webp" loading="eager" class="not_drag">
  </div>
  <script>
document.getElementById("background").style.zIndex = 100
  </script>-->
<!--<script src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/credits/gif.js"></script>
<script src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/credits/gif.worker.js"></script>-->
<body>
  <audio id="grasswalkMusic">
    <source src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/music/grasswalk.mp3">
  </audio>
  <audio id="cysMusic" autoplay="true">
    <source src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/music/cys.mp3">
  </audio>
  <audio id="pointsMusic">
    <source src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/music/points.mp3">
  </audio>
  <audio id="seedliftMusic">
    <source src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/music/seedlift.mp3">
  </audio>
  <audio id="plantMusic">
    <source src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/music/plant.mp3">
  </audio>
  <audio id="readySetPlantMusic">
    <source src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/music/readysetplant.mp3">
  </audio>
  <audio id="losemusicMusic">
    <source src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/music/losemusic.mp3">
  </audio>
  <audio id="screamMusic">
    <source src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/music/scream.mp3">
  </audio>
  <div id="border" class="not_drag">
    <div id="plant1" onclick="start(0)">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/PeashooterSeedPacket.webp" width="35" height="49" class="not_drag">
      <!--50x70-->
    </div>
    <div id="plant2">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/peashooter.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant3">
      <img id="peashooterGif" src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/peashooter.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="proj1">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/pea.webp" width="15" height="15" class="not_drag">
    </div>
    <div id="proj2">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/snowPea.webp" width="15" height="15" class="not_drag">
    </div>
    <div id="proj3">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/puff.webp" width="15" height="15" class="not_drag">
    </div>
    <div id="zombie1">
      <!-- <img src="inflation.webp" width="25" height="50" class="not_drag"> -->
    </div>
    <div id="circle6"></div>
    <div id="circle7">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/sun.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="sunDisplay">
      <!--test-->50
    </div>
    <div id="plant4" onclick="start(1)">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/SunflowerSeedPacket.webp" width="35" height="49" class="not_drag">
    </div>
    <div id="plant5">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/sunflower.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant6">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/sunflower.gif" width="50" height="50" class="not_drag">
    </div>
    <!--<div id="cone">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/cone.webp" width="25" height="20">
    </div>-->
    <div id="plant7" onclick="start(2)">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/CherryBombSeedPacket.webp" width="35" height="49" class="not_drag">
    </div>
    <div id="plant8">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/cherry_bomb.gif" width="70" height="50" class="not_drag">
    </div>
    <div id="plant9">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/cherry_bomb.gif" width="70" height="50" class="not_drag">
    </div>
    <div id="plant10" onclick="start(3)">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/Wall-nutSeedPacket.webp" width="35" height="49" class="not_drag">
    </div>
    <div id="plant11">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/wallnut.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant12">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/wallnut.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant13" onclick="start(4)">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/potato_mineSeedPacket.webp" width="35" height="49" class="not_drag">
    </div>
    <div id="plant14">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/potato_mine_growing.webp" width="60" height="49" class="not_drag">
    </div>
    <div id="plant15">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/potato_mine_growing.webp" width="40" height="40" class="not_drag">
    </div> <!-- 70x70 for grown potato mine -->
    <div id="plant16" onclick="start(5)">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/snowPeaSeedPacket.webp" width="35" height="49" class="not_drag">
    </div>
    <div id="plant17">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/snowPea.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant18">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/snowPea.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant19" onclick="start(6)">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/chomperSeedPacket.webp" width="35" height="49" class="not_drag">
    </div>
    <div id="plant20">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/chomper.gif" width="75" height="55" class="not_drag">
    </div>
    <div id="plant21">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/chomper.gif" width="75" height="55" class="not_drag">
    </div>
    <div id="plant22" onclick="start(7)">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/repeaterSeedPacket.webp" width="35" height="49" class="not_drag">
    </div>
    <div id="plant23">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/repeater.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant24">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/repeater.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant25" onclick="start(8)">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/puffShroomSeedPacket.webp" width="35" height="49" class="not_drag">
    </div>
    <div id="plant26">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/PuffShroom.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant27">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/PuffShroom.gif" width="50" height="50" class="not_drag">
    </div>
    </div>
    <div id="plant28" onclick="start(9)">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/sunShroomSeedPacket.webp" width="35" height="49" class="not_drag">
    </div>
    <div id="plant29">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/SunShroom.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant30">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/SunShroom.gif" width="50" height="50" class="not_drag">
    </div>
    <!--<div id="plant61" onclick="start(20)">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/JalapenoSeedPacket.webp" width="35" height="49" class="not_drag">
    </div>-->
    <div id="CysBg">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/SeedChooser_Background.webp" width="300" height="300" class="not_drag">
    </div>
    <div id="SeedBank">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/SeedBank.webp" width="300" height="60" class="not_drag">
    </div>
    <div id="LetsRock">
      <img id="LR" src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/SeedChooser_Button_Disabled.webp" width="100" height="25" class="not_drag">
    </div>
    <div id="LetsRockRd" onclick="startButton()">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/SeedChooser_Button.webp" width="100" height="25" class="not_drag">
    </div>
    <div id="randomSeed" onclick="randomSeeds()">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/SeedChooser_Button2.webp" width="100" height="25" class="not_drag">
    </div>
    <div id="randomSeedText" onclick="randomSeeds()">
      Random&nbsp;Seed
    </div>
    <div id="background">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/background1.webp" width="1000" height="450" class="bg">
    </div>
    <div id="downBorder"></div>
    <div id="rightBorder"></div>
    <div id="basicZombieGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie.gif" width="40" height="70" class="not_drag">
    </div>
    <div id="basicZombieEatGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_eat.gif" width="50" height="100" class="not_drag">
    </div>
    <div id="coneZombieGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_cone.gif" width="60" height="100" class="not_drag">
    </div>
    <div id="coneZombieEatGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_cone_eat.gif" width="50" height="100" class="not_drag">
    </div>
    <div id="bucketZombieGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_bucket.gif" width="60" height="100" class="not_drag">
    </div>
    <div id="bucketZombieEatGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_bucket_eat.gif" width="50" height="100" class="not_drag">
    </div>
    <div id="polevaulterZombieGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_polevaulter.gif" width="120" height="80" class="not_drag">
    </div>
    <div id="polevaulterZombieEatGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_polevaulter_eat.gif" width="100" height="140" class="not_drag">
    </div>
    <div id="polevaulterZombieJumpGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_polevaulter_jump.gif" width="220" height="200" class="not_drag">
    </div>
    <div id="polevaulterZombieWalkGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_polevaulter_walk.gif" width="170" height="150" class="not_drag">
    </div>
    <div id="paperZombieWalkGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_paper.gif" width="130" height="200" class="not_drag">
    </div>
    <div id="paperZombieEatGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_paper_eat.gif" width="80" height="140" class="not_drag">
    </div>
    <div id="paperZombieGaspGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_paper_gasp.gif" width="80" height="130" class="not_drag">
    </div>
    <div id="paperZombieNopaperWalkGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_paper_nopaper.gif" width="150" height="220" class="not_drag">
    </div>
    <div id="paperZombieNopaperEatGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/zombie_paper_nopaper_eat.gif" width="90" height="135" class="not_drag">
    </div>
    <div id="lawnMower1">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/lawnMower.webp" width="48" height="40" class="not_drag"> <!-- 6:5 -->
    </div>
    <div id="lawnMower2">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/lawnMower.webp" width="48" height="40" class="not_drag"> <!-- 6:5 -->
    </div>
    <div id="lawnMower3">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/lawnMower.webp" width="48" height="40" class="not_drag"> <!-- 6:5 -->
    </div>
    <div id="lawnMower4">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/lawnMower.webp" width="48" height="40" class="not_drag"> <!-- 6:5 -->
    </div>
    <div id="lawnMower5">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/lawnMower.webp" width="48" height="40" class="not_drag"> <!-- 6:5 -->
    </div>
    <div id="startSet">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/StartSet.webp">
    </div>
    <div id="startReady">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/StartReady.webp">
    </div>
    <div id="startPlant">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/StartPlant.webp">
    </div>
    <div id="ZombiesWon">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/ZombiesWon.webp" height="100" width="100">
    </div>
    <div id="borderBig"></div>
    <div id="shovel">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/Shovel.webp" height="50" width="50" onclick="shovelClicked(true)" oncontextmenu="shovelClicked(false)">
    </div>
    <div id="shovelBank">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/ShovelBank.webp" height="60" width="60">
    </div>
    <div id="powie">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/powie.gif" height="180" width="240">
    </div>
    <div id="chomperEatGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/chomper_bite.gif" height="90" width="110">
    </div>
    <div id="chomperChewGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/chomper_chew.gif" height="60" width="60">
    </div>
    <div id="chomperSwallowGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/chomper_swallow.gif" height="75" width="70">
    </div>
    <div id="smallSun">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/sun.gif" width="25" height="25" class="not_drag">
    </div>
    <div id="sunShroomGrowGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/SunShroom_grow.gif" height="50" width="50">
    </div>
    <div id="sunShroomBigGif">
      <img src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/images/SunShroom_big.gif" height="50" width="50">
    </div>
    <div id="tpsCounter"></div>
    <button id="login" onclick="login()"></button>
    <div id="loginMenu"></div>
    <input id="username" type="text" placeholder="Username">
    <input id="password" type="password" placeholder="Password">
  </div>
</body>
</head>
<script src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/scripts/plant.js"></script>
<script src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/scripts/proj.js"></script>
<script src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/scripts/zombie.js"></script>
<script src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/scripts/sun.js"></script>
<script src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/scripts/general.js"></script>
<script src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/credits/accurateInterval.js"></script>
<script src="../pvzhtmlmarcwu531underphaith706/pvzhtmlmarcwu531underphaith706/.config/files20082022/scripts/account.js"></script>
</html>`)

/*

*/