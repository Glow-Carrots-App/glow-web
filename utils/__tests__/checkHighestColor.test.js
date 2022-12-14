import checkHighestColor from "../checkHighestColor";

const TOTAL_FOODS = [
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

describe("checkHighestColor", () => {
  it("should return highest color object", () => {
    const testRun = checkHighestColor(TOTAL_FOODS);
    expect(testRun.color).toBe("Red");
  });
  it("should return empty string when no foods present", () => {
    const testRun = checkHighestColor([]);
    expect(testRun.color).toBe("");
  });
});
