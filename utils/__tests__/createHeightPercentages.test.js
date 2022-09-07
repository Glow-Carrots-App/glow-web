import createHeightPercentages from "../createHeightPercentages";

const lengths = [0, 3, 4, 7, 4, 9, 2];
const percentageChar = "%";

describe("createHeightPercentages", () => {
  test("returns an array", () => {
    const percentages = createHeightPercentages(lengths);
    expect(Array.isArray(percentages)).toBe(true);
  });

  test("return array filled with strings", () => {
    const percentages = createHeightPercentages(lengths);
    percentages.forEach((percentage) =>
      expect(typeof percentage).toBe("string")
    );
  });

  test("return array filled with strings containing %", () => {
    const percentages = createHeightPercentages(lengths);
    percentages.forEach((percentage) =>
      expect(percentage).toEqual(expect.stringContaining(percentageChar))
    );
  });
});
