const pickHighIcon = (highestColor) => {
  switch (highestColor.color) {
    case "red":
      return "/colorIcons/red.png";
      break;
    case "orange":
      return "/colorIcons/orange.png";
      break;
    case "yellow":
      return "/colorIcons/yellow.png";
      break;
    case "green":
      return "/colorIcons/green.png";
      break;
    case "purple":
      return "/colorIcons/purple.png";
      break;
    case "white":
      return "/colorIcons/white.png";
      break;
  }
};

export default pickHighIcon;
