function storeItems() {
  storeItem('coins', money)
  storeItem('weapon', currentSword.name)
  storeItem('statKilled', killed)
  storeItem('health', health)
  storeItem('maxHealth', maxHealth)
  storeItem('fireLevel', enchFireAspect.level)
  storeItem('fireCost', enchFireAspect.cost)
  storeItem('sharpLevel', enchSharpness.level)
  storeItem('sharpCost', enchSharpness.cost)
  storeItem('currentSword.upgrade1level', currentSword.upgrade1val)
  storeItem('clicks', clicks)
}

function getItems() {
  money = getItem('coins')
  killed = getItem('statKilled')
  health = getItem('health')
  maxHealth = l = getItem('maxHealth')
  enchFireAspect.level = getItem('fireLevel')
  enchFireAspect.cost = getItem('fireCost')
  enchSharpness.level = getItem('sharpLevel')
  enchSharpness.cost = getItem('sharpCost')
  clicks = getItem('clicks')

  if (getItem('weapon') == 'Hand') {
    currentSword = handWeapon
  } else if (getItem('weapon') == 'Wooden Sword') {
    currentSword = woodSword
  } else if (getItem('weapon') == 'Stone Sword') {
    currentSword = stoneSword
  } else if (getItem('weapon') == 'Iron Sword') {
    currentSword = ironSword
  } else if (getItem('weapon') == 'Diamond Sword') {
    currentSword = diamondSword
  }

  currentSword.upgrade1val = getItem('currentSword.upgrade1level')

  if (money == null) {
    money = 5
  }
  if (health == null) {
    health = 10
  }
  if (killed == null) {
    killed = 0
  }
  if (maxHealth == null) {
    maxHealth = 10
  }

  if (enchFireAspect.level == null) {
    enchFireAspect.level = 0
  }
  if (enchFireAspect.cost == null) {
    enchFireAspect.cost = 15
  }
  if (enchSharpness.level == null) {
    enchSharpness.level = 0
  }
  if (enchSharpness.cost == null) {
    enchSharpness.cost = 10
  }
  if (currentSword.upgrade1val == null) {
    currentSword.upgrade1val = 0
  }
  if(clicks == null){
    clicks = 0
  }
  if(l == null){
    l=10
  }
}