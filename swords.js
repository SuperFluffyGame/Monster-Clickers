function swordDisplay() {
  damage = currentSword.damage + enchSharpness.level
  textSize(30)
  if (currentSword != handWeapon) {
    text("Equipped: " + currentSword.name, width / 2, height - 100)
  } else {
    text("No Weapon Equipped", width / 2, height - 100)
  }
  text("Damage: " + damage, width / 2, height - 150)
  text("Sharpness Lvl: " + enchSharpness.level, width / 2, height - 50)

}