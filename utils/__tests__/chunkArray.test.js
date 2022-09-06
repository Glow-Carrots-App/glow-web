import chunkArray from "../chunkArray";

const userHistorySnapshot = [
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
    color: "Red",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
  {
    product: "Arugula",
    productSearch: "Arugula",
    color: "Red",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
];

let MAX_COUNT = 2;

describe("chunkArray", () => {
  test("returns an array", () => {
    const testRun = chunkArray(userHistorySnapshot, MAX_COUNT);
    expect(Array.isArray(testRun)).toBe(true);
  });

  test("return subarrays does not exceed max count", () => {
    const testRun = chunkArray(userHistorySnapshot, MAX_COUNT);
    testRun.forEach((test) =>
      expect(test.length).toBeLessThanOrEqual(MAX_COUNT)
    );
  });
});
