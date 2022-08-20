export default function countColors(foods) {
  if (!foods || foods.length === 0) {
    return null;
  }
  let colorCounts = [
    {
      count: 0,
      color: "red",
      fillHex: "#fc7790",
      textHex: "#fc7790",
    },
    {
      count: 0,
      color: "orange",
      fillHex: "#fd8f52",
      textHex: "#fd8f52",
    },
    {
      count: 0,
      color: "yellow",
      fillHex: "#f3e28d",
      textHex: "#ffbb1c",
    },
    {
      count: 0,
      color: "white",
      fillHex: "#fef2d1",
      textHex: "#97906e",
    },
    {
      count: 0,
      color: "green",
      fillHex: "#63dd92",
      textHex: "#479d45",
    },
    {
      count: 0,
      color: "purple",
      fillHex: "#9a7dcc",
      textHex: "#7471e7",
    },
    { count: 0, color: "total" },
  ];

  foods.forEach((item) => {
    switch (item.color) {
      case "red":
        colorCounts[0].count++;
        break;
      case "orange":
        colorCounts[1].count++;
        break;
      case "yellow":
        colorCounts[2].count++;
        break;
      case "white":
        colorCounts[3].count++;
        break;
      case "green":
        colorCounts[4].count++;
        break;
      case "purple":
        colorCounts[5].count++;
        break;
    }
  });
  colorCounts[6].count = foods.length;
  return colorCounts;
}
