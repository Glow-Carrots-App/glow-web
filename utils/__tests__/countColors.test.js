import countColors from "../countColors";

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

let counts = [
  {
    count: 1,
    color: "Red",
    fillHex: "#fc7790",
    textHex: "#fc7790",
    percentage: "20%",
  },
  {
    count: 1,
    color: "Orange",
    fillHex: "#fd8f52",
    textHex: "#fd8f52",
    percentage: "20%",
  },
  {
    count: 1,
    color: "Yellow",
    fillHex: "#f3e28d",
    textHex: "#ffbb1c",
    percentage: "20%",
  },
  {
    count: 1,
    color: "White",
    fillHex: "#fef2d1",
    textHex: "#97906e",
    percentage: "20%",
  },
  {
    count: 1,
    color: "Green",
    fillHex: "#63dd92",
    textHex: "#479d45",
    percentage: "20%",
  },
  {
    count: 0,
    color: "Purple",
    fillHex: "#9a7dcc",
    textHex: "#7471e7",
    percentage: "0%",
  },
  { count: 5, color: "Total", percentage: "100%" },
];

describe("countColors", () => {
  test("return null if input is an empty array", () => {
    expect(countColors([])).toBeNull();
  });
  test("return null if input is a falsy value", () => {
    expect(countColors(undefined)).toBeNull();
  });
  test("return array of objects with accurate counts of colors, percentage, and other color properties", () => {
    expect(countColors(totalFoods)).toStrictEqual(counts);
  });
});
