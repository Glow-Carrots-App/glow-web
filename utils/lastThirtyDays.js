import formatStringToDate from "./formatStringToDate";
import formatDateToString from "./formatDateToString";

export default function lastThirtyDays(array) {
  let endDateToCompare = formatStringToDate(
    formatDateToString(new Date())
  ).getTime();
  let startDateToCompare = endDateToCompare - 29 * 86400000;

  const filteredArr = array.filter((item) => {
    let itemDate = formatStringToDate(item.date).getTime();
    return itemDate >= startDateToCompare && itemDate <= endDateToCompare;
  });

  return filteredArr;
}
