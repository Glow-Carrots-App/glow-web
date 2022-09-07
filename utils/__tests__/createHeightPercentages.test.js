import createHeightPercentages from "../createHeightPercentages";

const lengths = [0, 3, 4, 7, 4, 9, 2];
const percentageChar = "%";

describe("createHeightPercentages", () => {
  it("should return an array", () => {
    const percentages = createHeightPercentages(lengths);
    expect(Array.isArray(percentages)).toBe(true);
  });

  it("should return an array filled with strings", () => {
    const percentages = createHeightPercentages(lengths);
    percentages.forEach((percentage) =>
      expect(typeof percentage).toBe("string")
    );
  });

  it("should return an array filled with strings containing %", () => {
    const percentages = createHeightPercentages(lengths);
    percentages.forEach((percentage) =>
      expect(percentage).toEqual(expect.stringContaining(percentageChar))
    );
  });
});
