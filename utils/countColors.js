export default function countColors(foods) {
  if (!foods || foods.length === 0) {
    return null;
  }
  let colorCounts = [
    {
      count: 0,
      color: "red",
      fillHex: "#f94d4d",
    },
    {
      count: 0,
      color: "orange",
      fillHex: "#fd8f52",
    },
    {
      count: 0,
      color: "yellow",
      fillHex: "#f9c449",
    },
    {
      count: 0,
      color: "green",
      fillHex: "#6aab9c",
    },
    {
      count: 0,
      color: "blue",
      fillHex: "#4b37a8",
    },
    {
      count: 0,
      color: "tan",
      fillHex: "#f2edcf",
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
      case "blue":
        colorCounts[4].count++;
        break;
      case "tan":
        colorCounts[5].count++;
        break;
    }
  });
  colorCounts[6].count = foods.length;
  return colorCounts;
}
