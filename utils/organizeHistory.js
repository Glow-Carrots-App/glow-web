import createHeightPercentages from "./createHeightPercentages";
import filterByDate from "./filterByDate";

export default function organizeHistory(lifetimeArr, days) {
  let history = {
    dayArrays: [],
    lengths: [],
    percentages: [],
  };

  for (let i = 0; i < days; i++) {
    history.dayArrays.push(filterByDate(lifetimeArr, i));
    history.lengths.push(history.dayArrays[i].length);
  }

  history.percentages = createHeightPercentages(history.lengths);

  return history;
}
