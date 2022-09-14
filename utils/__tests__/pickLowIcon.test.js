import pickLowIcon from "../pickLowIcon";

const LOWEST_COLOR = {
  count: 0,
  color: "Orange",
  fillHex: "#fd8f52",
  textHex: "#fd8f52",
  percentage: "",
};

describe("pickLowIcon", () => {
  it("should return the correct string given a lowest count color object", () => {
    const testIcon = pickLowIcon(LOWEST_COLOR);
    expect(testIcon).toBe("/colorIcons/orange.png");
  });
  it("makes sure the return value contains .png", () => {
    const testIcon = pickLowIcon(LOWEST_COLOR);
    expect(testIcon).toContain(".png");
  });
});
