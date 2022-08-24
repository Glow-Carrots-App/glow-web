import dayjs from "dayjs";

export default function filterByDate(array, daysBehind) {
  let dateToCompare = dayjs().subtract(daysBehind, "day");
  const filteredArr = array.filter((item) => {
    return dateToCompare.isSame(item.date, "day");
  });
  return filteredArr;
}
