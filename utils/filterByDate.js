import formatStringToDate from "./formatStringToDate";
import formatDateToString from "./formatDateToString";

export default function filterByDate(array, date, daysBehind) {
  let dateToCompare =
    formatStringToDate(formatDateToString(date)).getTime() -
    daysBehind * 86400000;
  const filteredArr = array.filter((item) => {
    let itemDate = formatStringToDate(item.date).getTime();
    return itemDate === dateToCompare;
  });

  return filteredArr;
}
