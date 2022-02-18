const render = () => {
  console.clear();
  player.getPlace().showInfo();
  player.showInfo();
};

const go = (direction) => {
  let place = player.getPlace();
  let destination = place.getExit(direction);
  player.setPlace(destination);
  render();
  return "";
};
