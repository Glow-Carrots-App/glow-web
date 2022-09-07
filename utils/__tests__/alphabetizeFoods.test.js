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
  it("should arrange foods alphabetically by productSearch property", () => {
    const testRun = alphabetizeFoods(unorderedFoods);
    expect(testRun).toStrictEqual(orderedFoods);
  });

  it("should return an array with objects", () => {
    const testRun = alphabetizeFoods(unorderedFoods);
    expect(Array.isArray(testRun)).toBe(true);
  });

  it("should return an array with ONLY objects", () => {
    const testRun = alphabetizeFoods(unorderedFoods);
    expect(
      testRun.every((food) => {
        console.log(food);
        expect(food).toEqual({
          product: expect.any(String),
          productSearch: expect.any(String),
          color: expect.any(String),
          textHex: expect.any(String),
          fillHex: expect.any(String),
          date: null,
        });
      })
    );
  });
});
