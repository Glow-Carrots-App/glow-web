import filterByDate from "../filterByDate";
import dayjs from "dayjs";

const DAYS_BEHIND = 0;

const FOOD_LIST = [
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs("9/6/2022").format("YYYY/MM/DD"),
  },
  {
    product: "Lettuce",
    productSearch: "Lettuce (Green)",
    color: "Red",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    product: "Arugula",
    productSearch: "Arugula",
    color: "Red",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs("9/6/2022").format("YYYY/MM/DD"),
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
    product: "Lettuce",
    productSearch: "Lettuce (Green)",
    color: "Red",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    product: "Arugula",
    productSearch: "Arugula",
    color: "Red",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs().format("YYYY/MM/DD"),
  },
];

describe("filterByDate", () => {
  it("should return an array", () => {
    const testFilteredDate = filterByDate(FOOD_LIST, DAYS_BEHIND);
    expect(Array.isArray(testFilteredDate)).toBe(true);
  });

  it("should return an array containing only objects with the specified date", () => {
    const testFilteredDate = filterByDate(FOOD_LIST, DAYS_BEHIND);
    testFilteredDate.forEach((food) =>
      expect(food).toMatchObject({ date: dayjs().format("YYYY/MM/DD") })
    );
  });
});
