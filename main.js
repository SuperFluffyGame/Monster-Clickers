/*things to do
1. Multi res support (maybe done, needs checking on 1080p+ monitor)
2. COMMENTS COMMENTS COMMENTS
2. Switch weapons.
3. Achievements

16. Weapon level
17. Attack Speed
18. UPGRADES
19. TECH TREE
20. More weapons
21. BOSSES

*/
let health, healthBar, maxHealth, killed = 0
let back, arrow, swirl, l,
  info, strings
let sharpCost = 1,
  sharpDamage = 1,
  sharpLevel = 0
let button
let equipped
let damage
let money = 0
let isOnFire
let startScreen = 1
let fade = 0, fadeAmount = 1
let circleWidth = 2000

function setup() {
  createCanvas(displayWidth, displayHeight);
  colorMode(HSB)
  textAlign(CENTER, CENTER)
  imageMode(CENTER)
  button = createButton("reset")
  button.mousePressed(reset)
  init()
  getItems()
  pixelDensity(1)
}

function draw() {
  if (startScreen == 1) {
    // background(11)
    // button.position(-100,-100)
    // if(fade < 0){fadeAmount = 2}
    // if(fade > 255){fadeAmount = -2}
    // fade += fadeAmount 
    // fill(0)
    // circle(width/2,height/2,circleWidth)
    // fill(255,map(fade,0,255,0,1))
    // text("SuperFluffyGame presents\nMonster Clickers",width/2,height/2)
    // if(fade < 0){fade = 0; startScreen = 0}
    startScreen = 0
  } else {
    button.position(width/2+250,height/2+225)
    healthBar = map(health, 0, maxHealth, 0, width - 400)
    blueEnemy.x = width / 2
    blueEnemy.y = height / 2
    currentSword.damage = currentSword.upgrade1val

    imageMode(CORNERS)
    image(back, 0, 0, width, height)

    imageMode(CENTER)
    fhealthBar()
    swordDisplay()
    onFire()
    if (health != 0) {
      blueEnemy.draw()
    } else {
      Reset()
      money++
    }

    textSize(25)
    fill("yellow")
    text("Coins: " + money, width / 2, 160)
    shop()
    storeItems()
    fill(0)
    circle(width/2,height/2,circleWidth)
    if(circleWidth > 0){circleWidth -= 20}
    
    if(currentScreen != 4){
      button.hide()
    }else{
      button.show()
    }
  }
}

function attack(x) {
  if (health - x <= 0) {
    health = 0
    killed++
  } else {
    health -= x
  }
}

function Reset() {
  l++
  maxHealth = health = l
  cen1 = new enemy(en1, 200, 200)
}

function reset() {
  removeItem('coins', money)
  removeItem('weapon', currentSword.name)
  removeItem('statKilled', killed)
  removeItem('health', health)
  removeItem('maxHealth', maxHealth)
  removeItem('fireLevel', enchFireAspect.level)
  removeItem('fireCost', enchFireAspect.cost)
  removeItem('sharpLevel', enchSharpness.level)
  removeItem('sharpCost', enchSharpness.cost)
  removeItem('currentSword.upgrade1level', currentSword.upgrade1val)
  removeItem('clicks', clicks)
  remove() 
}