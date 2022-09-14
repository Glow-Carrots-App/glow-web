import pickHighIcon from "../pickHighIcon";

let HIGHEST_COLOR = {
  count: 8,
  color: "Red",
  fillHex: "#fc7790",
  textHex: "#fc7790",
  percentage: "",
};

describe("pickHighIcon", () => {
  it("returns the correct color icon", () => {
    const testIcon = pickHighIcon(HIGHEST_COLOR);
    expect(testIcon).toBe("/colorIcons/red.png");
  });
  it("returns the correct file type of png", () => {
    const testIcon = pickHighIcon(HIGHEST_COLOR);
    expect(testIcon).toContain(".png");
  });
});
