import { faItalic } from "@fortawesome/free-solid-svg-icons";
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
    expect(pickHighIcon(highestCount)).toBe("/colorIcons/red.png");
  });
  it("returns the correct file type of png", () => {
    expect(pickHighIcon(highestCount)).toContain(".png");
  });
});
