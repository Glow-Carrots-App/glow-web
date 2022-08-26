export default function countColors(foods) {
  if (!foods || foods.length === 0) {
    return null;
  }
  let colorCounts = [
    {
      count: 0,
      color: "Red",
      fillHex: "#fc7790",
      textHex: "#fc7790",
      percentage: "",
    },
    {
      count: 0,
      color: "Orange",
      fillHex: "#fd8f52",
      textHex: "#fd8f52",
      percentage: "",
    },
    {
      count: 0,
      color: "Yellow",
      fillHex: "#f3e28d",
      textHex: "#ffbb1c",
      percentage: "",
    },
    {
      count: 0,
      color: "White",
      fillHex: "#fef2d1",
      textHex: "#97906e",
      percentage: "",
    },
    {
      count: 0,
      color: "Green",
      fillHex: "#63dd92",
      textHex: "#479d45",
      percentage: "",
    },
    {
      count: 0,
      color: "Purple",
      fillHex: "#9a7dcc",
      textHex: "#7471e7",
      percentage: "",
    },
    { count: 0, color: "Total", percentage: "" },
  ];

  foods.forEach((item) => {
    switch (item.color) {
      case "Red":
        colorCounts[0].count++;
        break;
      case "Orange":
        colorCounts[1].count++;
        break;
      case "Yellow":
        colorCounts[2].count++;
        break;
      case "White":
        colorCounts[3].count++;
        break;
      case "Green":
        colorCounts[4].count++;
        break;
      case "Purple":
        colorCounts[5].count++;
        break;
    }
  });

  colorCounts[6].count = foods.length;

  colorCounts.forEach(
    (color) =>
      (color.percentage = (100 * color.count) / colorCounts[6].count + "%")
  );

  return colorCounts;
}
