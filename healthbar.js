function fhealthBar() {

  fill(healthBar / 10, 100, 100)
  noStroke()
  rect(200, 100, healthBar, 30, 5)
  noFill()
  stroke(0)
  rect(200, 100, width - 400, 30, 5)
  fill(0)
  textSize(30)
  if (health == 0) {
    text("DEAD", width / 2, 50)
  } else {
    text("Health: " + health, width / 2, 50)
  }
}