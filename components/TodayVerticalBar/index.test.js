import { render, screen } from "@testing-library/react";

import TodayVerticalBar from ".";

const DAY = [
  { color: "Red" },
  { color: "Red" },
  { color: "Green" },
  { color: "Green" },
];
const NUMBER_OF_DAYS = 7;
const HEIGHT = "100%";

describe("TodayVerticalBar", () => {
  describe("test with no props", () => {
    it("should render underscore when there are no props", () => {
      render(<TodayVerticalBar />);
      const underscoreElement = screen.getByText("_");
      expect(underscoreElement).toBeInTheDocument();
    });
  });

  describe("test with props", () => {
    beforeEach(() =>
      render(
        <TodayVerticalBar
          day={DAY}
          numberOfDays={NUMBER_OF_DAYS}
          height={HEIGHT}
        />
      )
    );
    it("should render div with 100% height and class of progressBar7", () => {
      const barElement = screen.getByRole("entireBar");
      expect(barElement).toHaveClass("progressBar7");
      expect(barElement).toHaveAttribute("style", "height: 100%;");
    });

    it("should render 2 bar items", () => {
      const barItems = screen.getAllByRole("progressItem");
      expect(barItems.length).toBe(2);
    });

    it("should check that each item has correct styles and class", () => {
      const barItems = screen.getAllByRole("progressItem");
      expect(barItems[0]).toHaveClass("progressItem");
      expect(barItems[0]).toHaveAttribute(
        "style",
        "background-color: rgb(252, 119, 144); height: 50%;"
      );
      expect(barItems[1]).toHaveClass("progressItem");
      expect(barItems[1]).toHaveAttribute(
        "style",
        "background-color: rgb(99, 221, 146); height: 50%;"
      );
    });
  });
});
