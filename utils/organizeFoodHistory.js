import hashDay from "./hashDay";
import populateWithHeightPercentages from "./populateWithHeightPercentages";
import filterByDate from "./filterByDate";

export default function organizeFoodHistory(foodHistory, numberOfDays) {
  let organizedFoodHistory = [];
  let lengths = [];

  for (let i = 0; i < numberOfDays; i++) {
    const day = filterByDate(foodHistory, i);
    lengths.push(day.length);
    
    const hashedDay = hashDay(day)
    organizedFoodHistory.push(hashedDay);
  }

  populateWithHeightPercentages(lengths, organizedFoodHistory);

  return organizedFoodHistory;
}
