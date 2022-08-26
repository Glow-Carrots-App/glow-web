import dayjs from "dayjs";

export default function filterByDate(foodList, daysBehind) {
  let dateToCompare = dayjs().subtract(daysBehind, "day");
  const filteredFoodList = foodList.filter((food) => {
    return dateToCompare.isSame(food.date, "day");
  });
  return filteredFoodList;
}
