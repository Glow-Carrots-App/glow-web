export default function countColors(foods) {
  if (!foods || foods.length === 0) {
    return null;
  }
  let colorCounts = [
    {
      count: 0,
      color: "red",
      fillHex: "#f94d4d",
      textHex: "#f94d4d",
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
      fillHex: "#f9c449",
      textHex: "#ffbb1c",
    },
    {
      count: 0,
      color: "green",
      fillHex: "#6aab9c",
      textHex: "#479d45",
    },
    {
      count: 0,
      color: "purple",
      fillHex: "#4b37a8",
      textHex: "#7471e7",
    },
    {
      count: 0,
      color: "white",
      fillHex: "#f2edcf",
      textHex: "#97906e",
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
      case "green":
        colorCounts[3].count++;
        break;
      case "purple":
        colorCounts[4].count++;
        break;
      case "white":
        colorCounts[5].count++;
        break;
    }
  });
  colorCounts[6].count = foods.length;
  return colorCounts;
}
