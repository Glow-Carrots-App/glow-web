const pickLowIcon = (lowestColor) => {
  switch (lowestColor.color) {
    case "Red":
      return "/colorIcons/red.png";
    case "Orange":
      return "/colorIcons/orange.png";
    case "Yellow":
      return "/colorIcons/yellow.png";
    case "Green":
      return "/colorIcons/green.png";
    case "Purple":
      return "/colorIcons/purple.png";
    case "White":
      return "/colorIcons/white.png";
    case "":
      return "/colorIcons/sad.png";
  }
};

export default pickLowIcon;
