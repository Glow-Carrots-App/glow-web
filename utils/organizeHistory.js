import createHeightPercentages from "./createHeightPercentages";
import filterByDate from "./filterByDate";

export default function organizeHistory(arr, days) {
  let history = {
    dayArrays: [],
    percentages: [],
  };
  let lengths = [];

  for (let i = 0; i < days; i++) {
    history.dayArrays.push(filterByDate(arr, i));
    lengths.push(history.dayArrays[i].length);
  }

  history.percentages = createHeightPercentages(lengths);

  return history;
}
