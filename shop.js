let shopToggle = 0
let enchToggle = 0

function shop() {

  image(menu, width - 50, 50)
  text("[M]", width - 50, 100)
  if (currentScreen == 1) {
    shopScreen.draw()
    fill(0)
    textSize(40)
    fill('gold')
    text("Coins: " + money, 375, 175)
    woodSword.shopDraw(width / 2 - 382.5, height / 2 - 150)
    stoneSword.shopDraw(width / 2 - 382.5, height / 2 - 70)
    ironSword.shopDraw(width / 2 - 382.5, height / 2 + 10)
    diamondSword.shopDraw(width / 2 - 382.5, height / 2 + 90)
    textSize(30)
    fill(0)
    text("Icon", width / 2 - 335, height / 2 - 175)
    text("Name", width / 2 - 225, height / 2 - 175)
    text("Cost", width / 2 - 85, height / 2 - 175)
    text("Damage", width / 2 + 65, height / 2 - 175)

    if (currentSword == woodSword) {
      checkmark(width / 2 + 320, height / 2 - 110)
    } else if (currentSword == stoneSword) {
      checkmark(width / 2 + 320, height / 2 - 30)
    } else if (currentSword == ironSword) {
      checkmark(width / 2 + 320, height / 2 + 50)
    } else if (currentSword == diamondSword) {
      checkmark(width / 2 + 320, height / 2 + 130)
    }
    noStroke()
    fill(0)
    textSize(50)
    text("Shop", width / 2, height / 2 - 220)
  } else if (currentScreen == 2) {
    techScreen.draw()
  } else if (currentScreen == 3) {
    upScreen.draw()
    if (currentSword != handWeapon) {
      textSize(40)
      fill('gold')
      text("Coins: " + money, 275, 175)
      fill(0)
      textSize(30)
      text("Icon", width / 2 - 435, height / 2 - 175)
      text("Name", width / 2 - 325, height / 2 - 175)
      text("Cost", width / 2 - 185, height / 2 - 175)
      text("Level", width / 2 - 35, height / 2 - 175)
      currentSword.upDraw(width / 2 - 500 + 20, height/2 -150)
    } else {
      fill(0)
      text("You do not have a weapon equipped.", width / 2, height / 2)
    }
    noStroke()
    fill(0)
    textSize(50)
    text("Upgrades", width / 2, height / 2 - 220)
  } else if (currentScreen == 4) {
    menuScreen.draw()
    achiButton.draw()
    settingButton.draw()
    techTreeButton.draw()
    statButton.draw()
    upgradeButton.draw()
    shopButton.draw()
    text(round(frameRate()) + " fps", width / 2, height / 2 + 230)
    if (round(frameRate()) > 55) {
      fill('lime')
    } else if (round(frameRate()) < 55 && round(frameRate()) > 45) {
      fill('yellow')
    } else if (round(frameRate()) < 45 && round(frameRate()) > 30) {
      fill('orange')
    } else {
      fill('red')
    }
    circle(width / 2 + 50, height / 2 + 230, 25)
  } else if (currentScreen == 5) {
    achiScreen.draw()
    noStroke()
    fill(0)
    textSize(50)
    text("Achievements", width / 2, height / 2 - 220)
  } else if (currentScreen == 6) {
    settingScreen.draw()
    noStroke()
    fill(0)
    textSize(50)
    text("Settings", width / 2, height / 2 - 220)
  } else if (currentScreen == 7) {
    statScreen.draw()
    strokeWeight(2)
    line(width / 2 - 360, height / 2 - 180, width / 2 + 360, height / 2 - 180)
    noStroke()
    fill(0)
    textSize(50)
    text("Statistics", width / 2, height / 2 - 220)
    textSize(25)
    textAlign(LEFT, CENTER)
    text("Monsters Killed: " + killed, width / 2 - 360, height / 2 - 125)
    text("Clicks: " + clicks, width / 2 - 360, height / 2 - 75)
    textAlign(CENTER, CENTER)
  }
  if (currentScreen != 0 && currentScreen != 4) {
    stroke(0)
    strokeWeight(1)
    fill(0)
    textSize(30)
    text("Back", width / 2 + 250, height / 2 - 225)
  }
}

function checkmark(x, y) {
  stroke('lime')
  strokeWeight(4)
  line(x - 10, y, x, y + 10)
  line(x, y + 10, x + 15, y - 15)
  strokeWeight(1)
}