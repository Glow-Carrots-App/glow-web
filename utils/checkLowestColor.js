import countColors from "./countColors";

export default function checkLowestColor(lifetimeEaten) {
  if (!lifetimeEaten) {
    return null;
  }
  let counts = countColors(lifetimeEaten);
  counts.pop();

  return counts.reduce((acc, item) => (item.count < acc.count ? item : acc));
}
