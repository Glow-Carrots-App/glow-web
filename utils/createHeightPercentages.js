export default function createHeightPercentages(lengths) {
  let percentages = [];

  let maxLength = Math.max(...lengths);
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i] === maxLength) {
      percentages.push("100%");
    } else {
      percentages.push((100 * lengths[i]) / maxLength + "%");
    }
  }

  return percentages;
}
