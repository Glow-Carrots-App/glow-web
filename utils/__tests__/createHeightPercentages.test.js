import createHeightPercentages from "../createHeightPercentages";

const LENGTHS = [0, 3, 4, 7, 4, 9, 2];
const PERCENTAGE_CHAR = "%";

describe("createHeightPercentages", () => {
  it("should return an array", () => {
    const percentages = createHeightPercentages(LENGTHS);
    expect(Array.isArray(percentages)).toBe(true);
  });

  it("should return an array filled with strings", () => {
    const percentages = createHeightPercentages(LENGTHS);
    percentages.forEach((percentage) =>
      expect(typeof percentage).toBe("string")
    );
  });

  it("should return an array filled with strings containing %", () => {
    const percentages = createHeightPercentages(LENGTHS);
    percentages.forEach((percentage) =>
      expect(percentage).toContain(PERCENTAGE_CHAR)
    );
  });
});
