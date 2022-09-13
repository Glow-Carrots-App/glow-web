import { render, screen, fireEvent } from "@testing-library/react";

import TodayGraph from ".";

const THIRTY_DAY_FOOD = [];

describe("TodayGraph component", () => {
  beforeEach(() =>
    render(<TodayGraph thirtyDayFoodHistory={THIRTY_DAY_FOOD} />)
  );
  it("should render 3 buttons", () => {
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements.length).toBe(3);
  });
  it("should show 7 bars on clicking 7 Days and disable button", () => {
    const sevenButton = screen.getByText(/7 days/i);
    fireEvent.click(sevenButton);
    const verticalBarElements = screen.getAllByText("_");
    expect(verticalBarElements.length).toBe(7);
    expect(sevenButton).toBeDisabled();
  });
  it("should show 14 bars on clicking 14 Days and disable button", () => {
    const fourteenButton = screen.getByText(/14 days/i);
    fireEvent.click(fourteenButton);
    const verticalBarElements = screen.getAllByText("_");
    expect(verticalBarElements.length).toBe(14);
    expect(fourteenButton).toBeDisabled();
  });
  it("should show 30 bars on clicking 30 Days and disable button", () => {
    const thirtyButton = screen.getByText(/30 days/i);
    fireEvent.click(thirtyButton);
    const verticalBarElements = screen.getAllByText("_");
    expect(verticalBarElements.length).toBe(30);
    expect(thirtyButton).toBeDisabled();
  });
});
