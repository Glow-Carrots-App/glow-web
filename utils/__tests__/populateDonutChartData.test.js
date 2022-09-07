import populateDonutChartData from "../populateDonutChartData";

const dailyGoal = 5;

const todayFoods = [
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

const expectedResult = [
  { x: " ", y: 1 },
  { x: " ", y: 1 },
  { x: " ", y: 1 },
  { x: " ", y: 1 },
  { x: " ", y: 1 },
  { x: " ", y: 0 },
  { x: " ", y: 0 },
];

describe("populateDonutChartData", () => {
  it("should return an array with the expectedResult", () => {
    expect(populateDonutChartData(todayFoods, dailyGoal)).toStrictEqual(
      expectedResult
    );
  });
});
