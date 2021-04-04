let handWeapon, woodSword, stoneSword, ironSword, diamondSword, currentSword
let fireIcon, shopIcon, fire, sharp, menu, upgradeIcon, techTreeIcon, achieveIcon, settingIcon
let shopScreen, upScreen, techScreen, menuScreen, achiScreen,settingScreen, statScreen
let enchFireAspect, enchSharpness
let achiButton, settingButton, StatButton, techTreeButton, upgradeButton, shopButton

let clicks100, clicks100icon
function preload() {
  ss = loadImage('images/stoneSword.png')
  ws = loadImage('images/woodSword.png')
  is = loadImage('images/ironSword.png')
  ds = loadImage('images/diaSword.png')
  hand = loadImage('images/hand.png')
  en1 = loadImage('images/enemy1.png')
  back = loadImage('images/background.png')
  info = loadImage('images/info.png')
  fireIcon = loadImage('images/fireIcon.png')
  shopIcon = loadImage('images/shopIcon.png')
  fire = loadImage('images/fire.png')
  sharp = loadImage('images/sharpness.png')
  menu = loadImage('images/menu.png')
  upgradeIcon = loadImage('images/upgrades.png')
  techTreeIcon = loadImage('images/techTreeIcon.png')
  achieveIcon = loadImage('images/achievement.png')
  settingIcon = loadImage('images/settings.png')

  clicks100icon = loadImage('images/achievements/clicks/100taps.png')
}

function init() {
  blueEnemy = new enemy(en1, 200, 200, 128, 128)
  handWeapon = new weapon("Hand", hand, 1, 0)
  woodSword = new weapon("Wooden Sword", ws, 5, 5)
  stoneSword = new weapon("Stone Sword", ss, 12, 15)
  ironSword = new weapon("Iron Sword", is, 30, 25)
  diamondSword = new weapon("Diamond Sword", ds, 75, 40)
  currentSword = handWeapon

  enchFireAspect = new enchantment("Fire Aspect", fire, 50)
  enchSharpness = new enchantment("Sharpness", sharp, 10)

  woodSword.setUpgrade1("Damage", 3, 8, 2, sharp)
  stoneSword.setUpgrade1("Damage", 6, 14, 4, sharp)
  ironSword.setUpgrade1("Damage", 12, 20, 5, sharp)
  diamondSword.setUpgrade1("Damage", 18, 30, 5, sharp)


  techScreen = new screen(width / 2, height / 2, 800, 500)
  techScreen.strokeColor = 0
  techScreen.strokeWeight = 5
  techScreen.fillColor = 'white'


  shopScreen = new screen(width / 2, height / 2, 800, 500)
  shopScreen.strokeColor = 0
  shopScreen.strokeWeight = 5
  shopScreen.fillColor = 'white'


  upScreen = new screen(width / 2, height / 2, 1000, 500)
  upScreen.strokeColor = 0
  upScreen.strokeWeight = 5
  upScreen.fillColor = 'white'


  menuScreen = new screen(width / 2, height / 2, 600, 500)
  menuScreen.strokeColor = 0
  menuScreen.strokeWeight = 5
  menuScreen.fillColor = 'white'

  
  achiScreen = new screen(width / 2, height / 2, 800, 500)
  achiScreen.strokeColor = 0
  achiScreen.strokeWeight = 5
  achiScreen.fillColor = 'white'
  
  
  settingScreen = new screen(width / 2, height / 2, 800, 500)
  settingScreen.strokeColor = 0
  settingScreen.strokeWeight = 5
  settingScreen.fillColor = 'white'

  
  statScreen = new screen(width / 2, height / 2, 800, 500)
  statScreen.strokeColor = 0
  statScreen.strokeWeight = 5
  statScreen.fillColor = 'white'
  
  
  woodSword.shopDraw(300, 250)
  stoneSword.shopDraw(300, 330)
  ironSword.shopDraw(300, 410)
  diamondSword.shopDraw(300, 490)
  enchFireAspect.shopDraw(300, 250)
  enchSharpness.shopDraw(300, 330)

  achiButton = new menuClick("Achievements", achieveIcon, width / 2 - 200, height / 2 - 175, 175, 125)
  settingButton = new menuClick("Settings", settingIcon, width / 2, height / 2 - 175, 175, 125)
  statButton = new menuClick("Statistics", info, width / 2 + 200, height / 2 - 175, 175, 125)
  techTreeButton = new menuClick("Tech Tree", techTreeIcon, width / 2 - 200, height / 2, 175, 125)
  shopButton = new menuClick("Shop", shopIcon, width / 2, height / 2, 175, 125)
  upgradeButton = new menuClick("Upgrades", upgradeIcon, width / 2 + 200, height / 2, 175, 125)

  
  clicks100 = new achievement("100 Clicks", clicks100icon, 'common', 'clicks')
  
}