export default function createHeightPercentages(lengths, organizedFoodHistory) {
  let maxLength = Math.max(...lengths);
  organizedFoodHistory.forEach((day, i) => {
    if (lengths[i] !== 0) {
      day.percentage = (100 * lengths[i]) / maxLength + "%";
    }
  });

  return organizedFoodHistory;
}
