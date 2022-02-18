class Player {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.newLine = spacer.newLine()
    this.items = [];
    //this.place = null
  }
  getNameInfo() {
    return this.name;
  }
  getHealthInfo() {
    return this.health;
  }
  getTitleInfo = () => `${this.getNameInfo()} ${this.getHealthInfo()}`;

  getItemsInfo() {
    let itemsString = "Items:" + "\n";
    this.items.forEach((item, i) => {
      itemsString += "   - " + item + "\n";
    });
    return itemsString;
  }

  getInfo = () => {
    let info = spacer.box(this.getTitleInfo(), 40, "*");
    info += `  ${this.getItemsInfo()}`;
    info += spacer.line(40, "*");
    info += "\n";
    return info;
  };

  addItem(item) {
    this.items.push(item);
  }
  showInfo(character) {
    console.log(this.getInfo(character));
  }
}
