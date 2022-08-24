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
      case "red":
        data[0].y++;
        break;
      case "orange":
        data[1].y++;
        break;
      case "yellow":
        data[2].y++;
        break;
      case "white":
        data[3].y++;
        break;
      case "green":
        data[4].y++;
        break;
      case "purple":
        data[5].y++;
        break;
    }
    if (data[6].y > 0) {
      data[6].y--;
    }
  });
  return data;
}
