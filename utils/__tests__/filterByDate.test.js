import filterByDate from "../filterByDate";
import dayjs from "dayjs";

const daysBehind = 0;

const foodList = [
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
  test("returns an array", () => {
    const testFilteredDate = filterByDate(foodList, daysBehind);
    expect(Array.isArray(testFilteredDate)).toBe(true);
  });

  test("return array containing only objects with the specified date", () => {
    const testFilteredDate = filterByDate(foodList, daysBehind);
    testFilteredDate.forEach((food) =>
      expect(food).toMatchObject({ date: dayjs().format("YYYY/MM/DD") })
    );
  });
});
