import filterByDateRange from "../filterByDateRange";
import dayjs from "dayjs";

const daysBehind = 1;

const foodHistory = [
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "White",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs().subtract(daysBehind, "day").format("YYYY/MM/DD"),
  },
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "Yellow",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: "2022/09/05",
  },
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: "2022/09/05",
  },
  {
    product: "Lettuce",
    productSearch: "Lettuce (Green)",
    color: "Orange",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: "2022/09/05",
  },
  {
    product: "Arugula",
    productSearch: "Arugula",
    color: "Red",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: "2022/09/05",
  },
];

const filteredRangeOutput = [
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "White",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs().subtract(daysBehind, "day").format("YYYY/MM/DD"),
  },
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs().format("YYYY/MM/DD"),
  },
];

describe("filterByDateRange", () => {
  it("should return an array of food objects that have date within today and days behind", () => {
    const filteredList = filterByDateRange(foodHistory, 1);
    expect(filteredList).toStrictEqual(filteredRangeOutput);
  });
});
