import countColors from "./countColors";

export default function checkHighestColor(lifetimeEaten) {
  if (lifetimeEaten.length === 0) {
    return { color: "" };
  }
  let counts = countColors(lifetimeEaten);
  counts.pop();

  return counts.reduce((acc, item) => (item.count > acc.count ? item : acc));
}
