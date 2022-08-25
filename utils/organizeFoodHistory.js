import createHeightPercentages from "./createHeightPercentages";
import filterByDate from "./filterByDate";

export default function organizeFoodHistory(foodHistory, numberOfDays) {
  let organizedHistory = {
    days: [],
    percentages: [],
  };
  let lengths = [];

  for (let i = 0; i < numberOfDays; i++) {
    organizedHistory.days.push(filterByDate(foodHistory, i));
    lengths.push(organizedHistory.days[i].length);
  }

  organizedHistory.percentages = createHeightPercentages(lengths);

  return organizedHistory;
}
