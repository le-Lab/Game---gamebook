kitchen.addItem('potion')
library.addItem('Holy book')


kitchen.addExit("south", library)
library.addExit("north", kitchen)

const player = new Player("John", 70)
player.addItem("l'épée du destin")
player.setPlace(kitchen)

render()