import pickHighIcon from "../pickHighIcon";

let highestCount = {
  count: 8,
  color: "Red",
  fillHex: "#fc7790",
  textHex: "#fc7790",
  percentage: "",
};

describe("pickHighIcon", () => {
  it("returns the correct color icon", () => {
    const testIcon = pickHighIcon(highestCount);
    expect(testIcon).toBe("/colorIcons/red.png");
  });
  it("returns the correct file type of png", () => {
    const testIcon = pickHighIcon(highestCount);
    expect(testIcon).toContain(".png");
  });
});
