let timer

function onFire() {

  if (isOnFire >= 1) {
    image(fireIcon, width - 40, height - 40)
    text(isOnFire, width - 40, height - 40)
  }


  if (isOnFire >= 1 && frameCount % 60 == 1) {
    attack(1)
    isOnFire--
  }
}