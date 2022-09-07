import organizeFoodHistory from "../organizeFoodHistory";
import dayjs from "dayjs";

const userHistorySnapshot = [
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs().subtract(0, "day").format("YYYY/MM/DD"),
  },
  {
    product: "Lettuce",
    productSearch: "Lettuce (Green)",
    color: "Red",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs().subtract(2, "day").format("YYYY/MM/DD"),
  },
  {
    product: "Arugula",
    productSearch: "Arugula",
    color: "Red",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: dayjs().subtract(1, "day").format("YYYY/MM/DD"),
  },
];

const NUM_DAYS = 2;
const EXPECTED_OBJECT = {
  days: expect.any(Array),
  percentages: expect.any(Array),
};
const string = "%";

describe("organizeFoodHistory", () => {
  it("returns an object", () => {
    const testOrganized = organizeFoodHistory(userHistorySnapshot, NUM_DAYS);
    expect(typeof testOrganized).toBe("object");
  });

  it("returns object that has the correct format", () => {
    const testOrganized = organizeFoodHistory(userHistorySnapshot, NUM_DAYS);
    expect(testOrganized).toEqual(expect.objectContaining(EXPECTED_OBJECT));
  });

  it("returns an object where the percentages property is an array containing strings with %", () => {
    const testOrganized = organizeFoodHistory(userHistorySnapshot, NUM_DAYS);
    testOrganized.percentages.forEach((percentage) =>
      expect(percentage).toEqual(expect.stringContaining(string))
    );
  });

  it("returns an object where the days property is an array containing arrays containing objects with the appropriate day value", () => {
    const testOrganized = organizeFoodHistory(userHistorySnapshot, NUM_DAYS);
    testOrganized.days.forEach((day, i) =>
      day.forEach((food) =>
        expect(food.date).toEqual(
          dayjs().subtract(i, "day").format("YYYY/MM/DD")
        )
      )
    );
  });
});
