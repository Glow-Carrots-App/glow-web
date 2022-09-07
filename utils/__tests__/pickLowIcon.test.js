import pickLowIcon from "../pickLowIcon";

const lowestColor = {
  count: 0,
  color: "Orange",
  fillHex: "#fd8f52",
  textHex: "#fd8f52",
  percentage: "",
};

describe("pickLowIcon", () => {
  it("should return the correct string given a lowest count color object", () => {
    expect(pickLowIcon(lowestColor)).toBe("/colorIcons/orange.png");
  });
  it("makes sure the return value contains .png", () => {
    expect(pickLowIcon(lowestColor)).toContain(".png");
  });
});
