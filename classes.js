class screen {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.strokeColor = 0
    this.strokeWeight = 5
    this.fillColor = 'white'
  }
  draw() {
    fill(this.fillColor)
    stroke(this.strokeColor)
    strokeWeight(this.strokeWeight)
    rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
    strokeWeight(1)
  }
}

class enemy {
  constructor(i, x, y, width, height) {
    this.i = i
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  draw() {
    image(this.i, this.x, this.y, this.width * 2, this.height * 2)
  }
}

class weapon {
  constructor(name, image, damage, cost) {
    this.name = name
    this.image = image
    this.damage = damage
    this.cost = cost
    this.buyX = 0
    this.buyY = 0
    this.upgrade1X = 0
    this.upgrade1Y = 0
    this.upgrade1icon = null
    this.upgrade1name = ""
    this.upgrade1val = 0
    this.upgrade1max = 0
    this.upgrade1cost = 0
  }
  setUpgrade1(u1name, u1value, u1max, u1cost, u1image) {
    this.upgrade1name = u1name
    this.upgrade1val = u1value
    this.upgrade1max = u1max
    this.upgrade1cost = u1cost
    this.upgrade1icon = u1image
  }
  draw(x, y) {
    image(this.image, x, y)
  }
  shopDraw(x, y) {
    strokeWeight(2)
    line(x, y, x + 765, y)
    line(x, y + 80, x + 765, y + 80)
    strokeWeight(1)
    image(this.image, x + 50, y + 40)
    textSize(20)
    fill(0)
    text(this.name, x + 160, y + 40)
    text(this.cost + " coins", x + 300, y + 40)
    text(this.upgrade1val + " hp", x + 450, y + 40)

    textSize(35)
    if (money >= this.cost) {
      fill('lime')
      text("BUY", x + 600, y + 40)
    } else {
      fill('red')
      text("BUY", x + 600, y + 40)

      this.buyX = x + 600
      this.buyY = y + 40
    }
  }
  upDraw(x, y) {
    strokeWeight(2)
    line(x, y, x + 960, y)
    line(x, y + 80, x + 960, y + 80)
    line(x, y + 160, x + 960, y + 160)
    line(x, y + 240, x + 960, y + 240)
    strokeWeight(1)
    textSize(20)
    fill(0)
    image(this.upgrade1icon, x + 50, y + 40)
    text(this.upgrade1name, x + 150, y + 40)
    text(this.upgrade1cost, x + 250, y + 40)
    for (let i = 0; i < this.upgrade1max; i++) {
      strokeWeight(0)
      fill('lightgray')
      rectMode(CENTER)
      rect(x + 320 + (i * 12), y + 40, 8, 40)
      rectMode(CORNER)
      strokeWeight(1)
    }
    for (let i = 0; i < this.upgrade1val; i++) {
      strokeWeight(0)
      fill('gold')
      rectMode(CENTER)
      rect(x + 320 + (i * 12), y + 40, 8, 40)
      rectMode(CORNER)
      strokeWeight(1)
    }
    if (this.upgrade1val >= this.upgrade1max) {
      textSize(30)
      fill('red')
      text("MAX", width/2+300, height/2-110)
    } else if (money >= this.upgrade1cost) {
      textSize(30)
      fill('lime')
      text("UPGRADE", width/2+300, height/2-110)
    } else if (money < this.upgrade1cost) {
      textSize(30)
      fill('red')
      text("UPGRADE", width/2+300, height/2-110)
    }
    this.upgrade1X = x + 775
    this.upgrade1Y = y + 20
    
  }
}
class enchantment {
  constructor(name, image, cost) {
    this.name = name
    this.image = image
    this.cost = cost
    this.buyX = 0
    this.buyY = 0
    this.level = 0
  }
  shopDraw(x, y) {
    strokeWeight(2)
    line(x, y, x + 765, y)
    line(x, y + 80, x + 765, y + 80)
    strokeWeight(1)
    image(this.image, x + 50, y + 40)
    textSize(20)
    fill(0)
    text(this.name, x + 160, y + 40)
    text(this.cost + " coins", x + 300, y + 40)
    text("lvl: " + this.level, x + 450, y + 40)

    textSize(35)
    if (money >= this.cost) {
      fill('lime')
      text("BUY", x + 600, y + 40)
    } else {
      fill('red')
      text("BUY", x + 600, y + 40)

      this.buyX = x + 600
      this.buyY = y + 40
    }
  }
}
class menuClick{
  constructor(name,icon,x,y,width,height){
    this.name = name
    this.icon = icon
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  draw(){
    if(mouseX > this.x-this.width/2 && mouseX < this.x+this.width/2 && mouseY > this.y-this.height/2 && mouseY < this.y + this.height/2){
      fill(0,0.25)
    }else{
      noFill()
    }
    rect(this.x-this.width/2,this.y-this.height/2,this.width,this.height,5)
    fill(0)
    image(this.icon,this.x,this.y-10)
    text(this.name,this.x,this.y+40)
  }
}
class achievement{
  constructor(name,icon,rarity,type){
    this.name = name
    this.icon = icon
    this.rarity = rarity
    this.type = type
    this.achieved = 0
    this.x = -100
    this.y = -100
    this.width = 0
    this.height = 0
  }
  draw(){
    
  }
}