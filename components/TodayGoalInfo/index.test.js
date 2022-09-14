import { render, screen } from "@testing-library/react";
import TodayGoalInfo from ".";

const MOCK_USER = { dailyGoalAmount: 10, isDailyGoalComplete: true };
const MOCK_CURRENT_DAY = [
  { color: "Green", product: "Kale" },
  { color: "Red", product: "Banana" },
];

describe("TodayGoalInfo component", () => {
  beforeEach(() =>
    render(<TodayGoalInfo user={MOCK_USER} currentDay={MOCK_CURRENT_DAY} />)
  );
  it("should render the pie chart", () => {
    const pieChart = screen.getByTestId("victory-chart");
    expect(pieChart).toBeInTheDocument();
  });
  it("should render the pTag", () => {
    const pTag = screen.getByText(/10/i);
    expect(pTag).toBeInTheDocument();
  });
  it("should render the food list", () => {
    const foodList = screen.getByRole("foodList");
    expect(foodList).toBeInTheDocument();
  });
  it("should show the carrot when the goal is complete", () => {
    const carrotIMG = screen.getByRole("carrotIMG");
    expect(carrotIMG).toBeVisible();
  });
});
