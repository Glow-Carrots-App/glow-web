import pickLowIcon from "../pickLowIcon";

const lowestColor = {
  count: 0,
  color: "Orange",
  fillHex: "#fd8f52",
  textHex: "#fd8f52",
  percentage: "",
};

describe("pickLowIcon", () => {
  test("the correct string is provided given a lowest count color object", () => {
    expect(pickLowIcon(lowestColor)).toBe("/colorIcons/orange.png");
  });
  test("make sure the retun value to contain .png", () => {
    expect(pickLowIcon(lowestColor)).toContain(".png");
  });
});
