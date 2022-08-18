export default function checkLowestColor(lifetimeEaten) {
  if (!lifetimeEaten) {
    return null;
  }
  let counts = countColors(lifetimeEaten);

  return counts.reduce((acc, item) => (item.count < acc.count ? item : acc));
}
