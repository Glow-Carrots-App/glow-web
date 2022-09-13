import chunkArray from "../chunkArray";

const USER_HISTORY_SNAPSHOT = [
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

let MAX_WRITES_PER_BATCH = 2;

describe("chunkArray", () => {
  it("should return an array", () => {
    const testRun = chunkArray(USER_HISTORY_SNAPSHOT, MAX_WRITES_PER_BATCH);
    expect(Array.isArray(testRun)).toBe(true);
  });

  it("should return subarrays does not exceed max count", () => {
    const testRun = chunkArray(USER_HISTORY_SNAPSHOT, MAX_WRITES_PER_BATCH);
    testRun.forEach((test) =>
      expect(test.length).toBeLessThanOrEqual(MAX_WRITES_PER_BATCH)
    );
  });
});
