export default function populateDonutChartData(foodArr, userGoal) {
  const data = [
    { x: " ", y: 0 },
    { x: " ", y: 0 },
    { x: " ", y: 0 },
    { x: " ", y: 0 },
    { x: " ", y: 0 },
    { x: " ", y: 0 },
    { x: " ", y: userGoal },
  ];
  foodArr.forEach((food) => {
    switch (food.color) {
      case "Red":
        data[0].y++;
        break;
      case "Orange":
        data[1].y++;
        break;
      case "Yellow":
        data[2].y++;
        break;
      case "White":
        data[3].y++;
        break;
      case "Green":
        data[4].y++;
        break;
      case "Purple":
        data[5].y++;
        break;
    }
    if (data[6].y > 0) {
      data[6].y--;
    }
  });
  return data;
}
