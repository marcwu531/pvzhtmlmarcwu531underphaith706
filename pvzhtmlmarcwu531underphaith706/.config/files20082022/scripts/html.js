document.write(`
<!--If you somehow see this, I just wanna say, README.md exists and all rights reserved, not allowing any form of copying-->
<!DOCTYPE html>
<html>
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
  <link rel="stylesheet" href="../.config/files20082022/scripts/style.css">
  <!--<link rel="preload" href="../.config/files20082022/images/titlescreen.jpg" as="script">
  <div id="background">
    <img src="../.config/files20082022/images/titlescreen.jpg" loading="eager" class="not_drag">
  </div>
  <script>
document.getElementById("background").style.zIndex = 100
  </script>-->
<!--<script src="../.config/files20082022/credits/gif.js"></script>
<script src="../.config/files20082022/credits/gif.worker.js"></script>-->
<body>
  <audio id="grasswalkMusic">
    <source src="../.config/files20082022/music/grasswalk.mp3">
  </audio>
  <audio id="cysMusic" autoplay="true">
    <source src="../.config/files20082022/music/cys.mp3">
  </audio>
  <audio id="pointsMusic">
    <source src="../.config/files20082022/music/points.mp3">
  </audio>
  <audio id="seedliftMusic">
    <source src="../.config/files20082022/music/seedlift.mp3">
  </audio>
  <audio id="plantMusic">
    <source src="../.config/files20082022/music/plant.mp3">
  </audio>
  <audio id="readySetPlantMusic">
    <source src="../.config/files20082022/music/readysetplant.mp3">
  </audio>
  <audio id="losemusicMusic">
    <source src="../.config/files20082022/music/losemusic.mp3">
  </audio>
  <audio id="screamMusic">
    <source src="../.config/files20082022/music/scream.mp3">
  </audio>
  <div id="border" class="not_drag">
    <div id="plant1" onclick="start(0)">
      <img src="../.config/files20082022/images/PeashooterSeedPacket.png" width="35" height="49" class="not_drag">
      <!--50x70-->
    </div>
    <div id="plant2">
      <img src="../.config/files20082022/images/peashooter.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant3">
      <img id="peashooterGif" src="../.config/files20082022/images/peashooter.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="proj1">
      <img src="../.config/files20082022/images/pea.png" width="15" height="15" class="not_drag">
    </div>
    <div id="proj2">
      <img src="../.config/files20082022/images/snowPea.png" width="15" height="15" class="not_drag">
    </div>
    <div id="proj3">
      <img src="../.config/files20082022/images/puff.png" width="15" height="15" class="not_drag">
    </div>
    <div id="zombie1">
      <!-- <img src="inflation.png" width="25" height="50" class="not_drag"> -->
    </div>
    <div id="circle6"></div>
    <div id="circle7">
      <img src="../.config/files20082022/images/sun.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="sunDisplay">
      <!--test-->50
    </div>
    <div id="plant4" onclick="start(1)">
      <img src="../.config/files20082022/images/SunflowerSeedPacket.png" width="35" height="49" class="not_drag">
    </div>
    <div id="plant5">
      <img src="../.config/files20082022/images/sunflower.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant6">
      <img src="../.config/files20082022/images/sunflower.gif" width="50" height="50" class="not_drag">
    </div>
    <!--<div id="cone">
      <img src="../.config/files20082022/images/cone.png" width="25" height="20">
    </div>-->
    <div id="plant7" onclick="start(2)">
      <img src="../.config/files20082022/images/CherryBombSeedPacket.png" width="35" height="49" class="not_drag">
    </div>
    <div id="plant8">
      <img src="../.config/files20082022/images/cherry_bomb.gif" width="70" height="50" class="not_drag">
    </div>
    <div id="plant9">
      <img src="../.config/files20082022/images/cherry_bomb.gif" width="70" height="50" class="not_drag">
    </div>
    <div id="plant10" onclick="start(3)">
      <img src="../.config/files20082022/images/Wall-nutSeedPacket.png" width="35" height="49" class="not_drag">
    </div>
    <div id="plant11">
      <img src="../.config/files20082022/images/wallnut.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant12">
      <img src="../.config/files20082022/images/wallnut.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant13" onclick="start(4)">
      <img src="../.config/files20082022/images/potato_mineSeedPacket.png" width="35" height="49" class="not_drag">
    </div>
    <div id="plant14">
      <img src="../.config/files20082022/images/potato_mine_growing.png" width="60" height="49" class="not_drag">
    </div>
    <div id="plant15">
      <img src="../.config/files20082022/images/potato_mine_growing.png" width="40" height="40" class="not_drag">
    </div> <!-- 70x70 for grown potato mine -->
    <div id="plant16" onclick="start(5)">
      <img src="../.config/files20082022/images/snowPeaSeedPacket.png" width="35" height="49" class="not_drag">
    </div>
    <div id="plant17">
      <img src="../.config/files20082022/images/snowPea.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant18">
      <img src="../.config/files20082022/images/snowPea.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant19" onclick="start(6)">
      <img src="../.config/files20082022/images/chomperSeedPacket.png" width="35" height="49" class="not_drag">
    </div>
    <div id="plant20">
      <img src="../.config/files20082022/images/chomper.gif" width="75" height="55" class="not_drag">
    </div>
    <div id="plant21">
      <img src="../.config/files20082022/images/chomper.gif" width="75" height="55" class="not_drag">
    </div>
    <div id="plant22" onclick="start(7)">
      <img src="../.config/files20082022/images/repeaterSeedPacket.png" width="35" height="49" class="not_drag">
    </div>
    <div id="plant23">
      <img src="../.config/files20082022/images/repeater.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant24">
      <img src="../.config/files20082022/images/repeater.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant25" onclick="start(8)">
      <img src="../.config/files20082022/images/puffShroomSeedPacket.png" width="35" height="49" class="not_drag">
    </div>
    <div id="plant26">
      <img src="../.config/files20082022/images/PuffShroom.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant27">
      <img src="../.config/files20082022/images/PuffShroom.gif" width="50" height="50" class="not_drag">
    </div>
    </div>
    <div id="plant28" onclick="start(9)">
      <img src="../.config/files20082022/images/sunShroomSeedPacket.png" width="35" height="49" class="not_drag">
    </div>
    <div id="plant29">
      <img src="../.config/files20082022/images/SunShroom.gif" width="50" height="50" class="not_drag">
    </div>
    <div id="plant30">
      <img src="../.config/files20082022/images/SunShroom.gif" width="50" height="50" class="not_drag">
    </div>
    <!--<div id="plant61" onclick="start(20)">
      <img src="../.config/files20082022/images/JalapenoSeedPacket.png" width="35" height="49" class="not_drag">
    </div>-->
    <div id="CysBg">
      <img src="../.config/files20082022/images/SeedChooser_Background.png" width="300" height="300" class="not_drag">
    </div>
    <div id="SeedBank">
      <img src="../.config/files20082022/images/SeedBank.png" width="300" height="60" class="not_drag">
    </div>
    <div id="LetsRock">
      <img id="LR" src="../.config/files20082022/images/SeedChooser_Button_Disabled.png" width="100" height="25" class="not_drag">
    </div>
    <div id="LetsRockRd" onclick="startButton()">
      <img src="../.config/files20082022/images/SeedChooser_Button.png" width="100" height="25" class="not_drag">
    </div>
    <div id="randomSeed" onclick="randomSeeds()">
      <img src="../.config/files20082022/images/SeedChooser_Button2.png" width="100" height="25" class="not_drag">
    </div>
    <div id="randomSeedText" onclick="randomSeeds()">
      Random&nbsp;Seed
    </div>
    <div id="background">
      <img src="../.config/files20082022/images/background1.png" width="1000" height="450" class="bg">
    </div>
    <div id="downBorder"></div>
    <div id="rightBorder"></div>
    <div id="basicZombieGif">
      <img src="../.config/files20082022/images/zombie.gif" width="40" height="70" class="not_drag">
    </div>
    <div id="basicZombieEatGif">
      <img src="../.config/files20082022/images/zombie_eat.gif" width="50" height="100" class="not_drag">
    </div>
    <div id="coneZombieGif">
      <img src="../.config/files20082022/images/zombie_cone.gif" width="60" height="100" class="not_drag">
    </div>
    <div id="coneZombieEatGif">
      <img src="../.config/files20082022/images/zombie_cone_eat.gif" width="50" height="100" class="not_drag">
    </div>
    <div id="bucketZombieGif">
      <img src="../.config/files20082022/images/zombie_bucket.gif" width="60" height="100" class="not_drag">
    </div>
    <div id="bucketZombieEatGif">
      <img src="../.config/files20082022/images/zombie_bucket_eat.gif" width="50" height="100" class="not_drag">
    </div>
    <div id="polevaulterZombieGif">
      <img src="../.config/files20082022/images/zombie_polevaulter.gif" width="120" height="80" class="not_drag">
    </div>
    <div id="polevaulterZombieEatGif">
      <img src="../.config/files20082022/images/zombie_polevaulter_eat.gif" width="100" height="140" class="not_drag">
    </div>
    <div id="polevaulterZombieJumpGif">
      <img src="../.config/files20082022/images/zombie_polevaulter_jump.gif" width="220" height="200" class="not_drag">
    </div>
    <div id="polevaulterZombieWalkGif">
      <img src="../.config/files20082022/images/zombie_polevaulter_walk.gif" width="170" height="150" class="not_drag">
    </div>
    <div id="paperZombieWalkGif">
      <img src="../.config/files20082022/images/zombie_paper.gif" width="130" height="200" class="not_drag">
    </div>
    <div id="paperZombieEatGif">
      <img src="../.config/files20082022/images/zombie_paper_eat.gif" width="80" height="140" class="not_drag">
    </div>
    <div id="paperZombieGaspGif">
      <img src="../.config/files20082022/images/zombie_paper_gasp.gif" width="80" height="130" class="not_drag">
    </div>
    <div id="paperZombieNopaperWalkGif">
      <img src="../.config/files20082022/images/zombie_paper_nopaper.gif" width="150" height="220" class="not_drag">
    </div>
    <div id="paperZombieNopaperEatGif">
      <img src="../.config/files20082022/images/zombie_paper_nopaper_eat.gif" width="90" height="135" class="not_drag">
    </div>
    <div id="lawnMower1">
      <img src="../.config/files20082022/images/lawnMower.png" width="48" height="40" class="not_drag"> <!-- 6:5 -->
    </div>
    <div id="lawnMower2">
      <img src="../.config/files20082022/images/lawnMower.png" width="48" height="40" class="not_drag"> <!-- 6:5 -->
    </div>
    <div id="lawnMower3">
      <img src="../.config/files20082022/images/lawnMower.png" width="48" height="40" class="not_drag"> <!-- 6:5 -->
    </div>
    <div id="lawnMower4">
      <img src="../.config/files20082022/images/lawnMower.png" width="48" height="40" class="not_drag"> <!-- 6:5 -->
    </div>
    <div id="lawnMower5">
      <img src="../.config/files20082022/images/lawnMower.png" width="48" height="40" class="not_drag"> <!-- 6:5 -->
    </div>
    <div id="startSet">
      <img src="../.config/files20082022/images/StartSet.png">
    </div>
    <div id="startReady">
      <img src="../.config/files20082022/images/StartReady.png">
    </div>
    <div id="startPlant">
      <img src="../.config/files20082022/images/StartPlant.png">
    </div>
    <div id="ZombiesWon">
      <img src="../.config/files20082022/images/ZombiesWon.png" height="100" width="100">
    </div>
    <div id="borderBig"></div>
    <div id="shovel">
      <img src="../.config/files20082022/images/Shovel.png" height="50" width="50" onclick="shovelClicked(true)" oncontextmenu="shovelClicked(false)">
    </div>
    <div id="shovelBank">
      <img src="../.config/files20082022/images/ShovelBank.png" height="60" width="60">
    </div>
    <div id="powie">
      <img src="../.config/files20082022/images/powie.gif" height="180" width="240">
    </div>
    <div id="chomperEatGif">
      <img src="../.config/files20082022/images/chomper_bite.gif" height="90" width="110">
    </div>
    <div id="chomperChewGif">
      <img src="../.config/files20082022/images/chomper_chew.gif" height="60" width="60">
    </div>
    <div id="chomperSwallowGif">
      <img src="../.config/files20082022/images/chomper_swallow.gif" height="75" width="70">
    </div>
    <div id="smallSun">
      <img src="../.config/files20082022/images/sun.gif" width="25" height="25" class="not_drag">
    </div>
    <div id="sunShroomGrowGif">
      <img src="../.config/files20082022/images/SunShroom_grow.gif" height="50" width="50">
    </div>
    <div id="sunShroomBigGif">
      <img src="../.config/files20082022/images/SunShroom_big.gif" height="50" width="50">
    </div>
    <div id="tpsCounter"></div>
    <button id="login" onclick="login()"></button>
    <div id="loginMenu"></div>
    <input id="username" type="text" placeholder="Username">
    <input id="password" type="password" placeholder="Password">
  </div>
</body>
</head>
<script src="../.config/files20082022/scripts/plant.js"></script>
<script src="../.config/files20082022/scripts/proj.js"></script>
<script src="../.config/files20082022/scripts/zombie.js"></script>
<script src="../.config/files20082022/scripts/sun.js"></script>
<script src="../.config/files20082022/scripts/general.js"></script>
<script src="../.config/files20082022/credits/accurateInterval.js"></script>
<script src="../.config/files20082022/scripts/account.js"></script>
</html>`)

/*

*/