let currentScreen = 0, clicks = 0

function mouseClicked() {
  //click enemy
  if (mouseX > blueEnemy.x - blueEnemy.width &&
    mouseX < blueEnemy.x + blueEnemy.width &&
    mouseY > blueEnemy.y - blueEnemy.height &&
    mouseY < blueEnemy.y + blueEnemy.height &&
    currentScreen == 0) {
    attack(damage)
    clicks++
    isOnFire = enchFireAspect.level
  }
  //shop buying
  if (currentScreen == 1) {
    if (currentSword == handWeapon) {
      if (mouseX > woodSword.buyX - 50 && mouseX < woodSword.buyX + 50 &&
        mouseY > woodSword.buyY - 50 && mouseY < woodSword.buyY + 100 &&
        money >= woodSword.cost) {
        money -= woodSword.cost
        currentSword = woodSword
      }
    } else if (currentSword == woodSword) {
      if (mouseX > stoneSword.buyX - 50 && mouseX < stoneSword.buyX + 50 &&
        mouseY > stoneSword.buyY - 50 && mouseY < stoneSword.buyY + 100 &&
        money >= stoneSword.cost) {

        money -= stoneSword.cost
        currentSword = stoneSword
      }
    } else if (currentSword == stoneSword) {
      if (mouseX > ironSword.buyX - 50 && mouseX < ironSword.buyX + 50 &&
        mouseY > ironSword.buyY - 50 && mouseY < ironSword.buyY + 100 &&
        money >= ironSword.cost) {

        money -= ironSword.cost
        currentSword = ironSword
      }
    } else if (currentSword == ironSword) {
      if (mouseX > diamondSword.buyX - 50 && mouseX < diamondSword.buyX + 50 &&
        mouseY > diamondSword.buyY - 50 && mouseY < diamondSword.buyY + 100 &&
        money >= diamondSword.cost) {

        money -= diamondSword.cost
        currentSword = diamondSword
      }
    }
    //upgrade buys
  }else if(currentScreen == 3){
    if (mouseX > currentSword.upgrade1X && mouseX < currentSword.upgrade1X + 150 && mouseY > currentSword.upgrade1Y && mouseY < currentSword.upgrade1Y + 40 && money >= currentSword.upgrade1cost && currentSword.upgrade1val < currentSword.upgrade1max && currentSword != handWeapon){
      money -= currentSword.upgrade1cost
      currentSword.upgrade1val ++
    }
  }
  //menu clicks
  if(currentScreen == 4){
    //shop click
    if(mouseX > shopButton.x - shopButton.width/2 && mouseX < shopButton.x + shopButton.width/2 && mouseY > shopButton.y - shopButton.height/2 && mouseY < shopButton.y + shopButton.height/2){
      currentScreen = 1
    }
    //upgrade click
    else if(mouseX > upgradeButton.x - upgradeButton.width/2 && mouseX < upgradeButton.x + upgradeButton.width/2 && mouseY > upgradeButton.y - upgradeButton.height/2 && mouseY < upgradeButton.y + upgradeButton.height/2){
      currentScreen = 3
    }
    //tech tree click
    else if(mouseX > techTreeButton.x - techTreeButton.width/2 && mouseX < techTreeButton.x + techTreeButton.width/2 && mouseY > techTreeButton.y - techTreeButton.height/2 && mouseY < techTreeButton.y + techTreeButton.height/2){
      currentScreen = 2
    }   
    //achievement click
    else if(mouseX > achiButton.x - achiButton.width/2 && mouseX < achiButton.x + achiButton.width/2 && mouseY > achiButton.y - achiButton.height/2 && mouseY < achiButton.y + achiButton.height/2){
      currentScreen = 5
    }  
    //settings click
    else if(mouseX > settingButton.x - settingButton.width/2 && mouseX < settingButton.x + settingButton.width/2 && mouseY > settingButton.y - settingButton.height/2 && mouseY < settingButton.y + settingButton.height/2){
      currentScreen = 6
    }   
    //stat click
    else if(mouseX > statButton.x - statButton.width/2 && mouseX < statButton.x + statButton.width/2 && mouseY > statButton.y - statButton.height/2 && mouseY < statButton.y + statButton.height/2){
      currentScreen = 7
    }   
  }
  //back to menu
  else if(currentScreen != 0 && currentScreen != 4 && mouseX > width/2+200 && mouseX < width/2+200+100 && mouseY > height/2 - 250 && mouseY < height/2 - 250+40){
    currentScreen = 4
  }
}
function keyPressed() {
  if (keyCode === 70) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
  if (keyCode === 77) {
    if (currentScreen != 0) {
      currentScreen = 0
    } else {
      currentScreen = 4
    }
  }
}