export default function alphabetizeFoods(arr) {
  return arr.sort(function (a, b) {
    return a.productSearch.localeCompare(b.productSearch);
  });
}
