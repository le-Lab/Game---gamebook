const spacer = {
  blank: () => {
    return "";
  },
  newLine: () => {
    return "\n";
  },
  line: (length, character) => {
    let longString = "****************************************";
    longString += "--------------------------------";
    longString += "================================";
    longString += "++++++++++++++++++++++++++++++++";
    longString += "                                ";
    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },
  wrap: (text, length, character) => {
    let padLength = length - text.length - 3;
    let wrapText = `${character} ${text}`;
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },
  box: (text, length, character) => {
    let boxText = spacer.line();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  },
};
