import checkLowestColor from "../checkLowestColor";

const totalFoods = [
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "White",
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
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "Yellow",
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
    color: "Orange",
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

describe("checkLowestColor", () => {
  it("should return lowest color object", () => {
    const testRun = checkLowestColor(totalFoods);
    expect(testRun.color).toBe("Purple");
  });
  it("should return empty string when no foods present", () => {
    const testRun = checkLowestColor([]);
    expect(testRun.color).toBe("");
  });
});
