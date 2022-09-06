import alphabetizeFoods from "../alphabetizeFoods";

const unorderedFoods = [
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
  {
    product: "Lettuce",
    productSearch: "Lettuce (Green)",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
  {
    product: "Arugula",
    productSearch: "Arugula",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
];

const orderedFoods = [
  {
    product: "Arugula",
    productSearch: "Arugula",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
  {
    product: "Lettuce",
    productSearch: "Lettuce (Green)",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
];

describe("alphabetizeFoods", () => {
  test("arrange foods alphabetically by productSearch property", () => {
    const testRun = alphabetizeFoods(unorderedFoods);
    expect(testRun).toStrictEqual(orderedFoods);
  });

  test("data output is an array with objects", () => {
    const testRun = alphabetizeFoods(unorderedFoods);
    expect(testRun.constructor === Array).toBe(true);
  });
  test("data out is an array with ONLY objects", () => {
    const testRun = alphabetizeFoods(unorderedFoods);
    expect(
      testRun.every((food) => {
        typeof food === "Object";
      })
    );
  });
});
