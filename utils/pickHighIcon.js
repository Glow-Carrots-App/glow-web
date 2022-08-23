const pickHighIcon = (highestColor) => {
  switch (highestColor.color) {
    case "red":
      return "/colorIcons/red.png";
    case "orange":
      return "/colorIcons/orange.png";
    case "yellow":
      return "/colorIcons/yellow.png";
    case "green":
      return "/colorIcons/green.png";
    case "purple":
      return "/colorIcons/purple.png";
    case "white":
      return "/colorIcons/white.png";
  }
};

export default pickHighIcon;
