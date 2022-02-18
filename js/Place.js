class Place {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.newLine = spacer.newLine();
    this.items = [];
    this.exits = {};
  }

  getItemsInfo() {
    let itemsString = `Items: ${this.newLine}`;
    this.items.forEach((item, i) => {
      itemsString += "   - " + item + this.newLine;
    });
    return itemsString;
  }
  getExistsInfo() {
    let exitsString = "Exits from " + this.title;
    exitsString += ":" + this.newLine;

    Object.keys(this.exits).forEach((key) => {
      exitsString += " " + key
      exitsString+= this.newLine
    })
    return exitsString;

  }
  getTitleInfo() {
    return spacer.box(this.title, this.title.length + 4, "=");
  }
  getInfo() {
    let infoString = this.getTitleInfo();
    infoString += this.description;
    infoString += this.newLine + this.newLine;
    infoString += this.getItemsInfo() + this.newLine;
    infoString += this.getExistsInfo()
    infoString += spacer.line(40, "=" + this.newLine);
    return infoString;
  }

  showInfo(){
    console.log(this.getInfo())
  }
  addExit(direction,exit){
    this.exits[direction] = exit
  }
  addItem(item){
    this.items.push(item)
  }
  getExit(direction){
    return this.exits[direction] 
  }
}
