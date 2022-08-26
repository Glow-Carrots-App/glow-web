export default function alphabetizeFoods(foodList) {
  return foodList.sort(function (a, b) {
    return a.productSearch.localeCompare(b.productSearch);
  });
}
