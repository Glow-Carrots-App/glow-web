import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

export default function filterByDateRange(foodList, daysBehind) {
  let dateToCompare = dayjs().subtract(daysBehind, "day");
  let today = dayjs();
  const filteredFoodList = foodList.filter((food) => {
    return dayjs(food.date).isBetween(dateToCompare, today, "day", "[]");
  });
  return filteredFoodList;
}
