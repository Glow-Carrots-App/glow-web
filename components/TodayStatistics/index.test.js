import { render, screen } from "@testing-library/react";

import TodayStatistics from ".";

const USER = { dayStreak: 10, goldenCarrots: 10 };
const LIFETIME_FOOD_HISTORY = [];

const CARD_TITLES = [
  "Day Streak",
  "Golden Carrots",
  "Highest Color",
  "Lowest Color",
];

describe("TodayStatistics component", () => {
  render(
    <TodayStatistics user={USER} lifetimeFoodHistory={LIFETIME_FOOD_HISTORY} />
  );
  it("should render four different stats cards", () => {
    CARD_TITLES.map((title) => {
      const cardTitle = screen.getByText(title);
      screen.debug(cardTitle);
      expect(cardTitle).toBeInTheDocument();
    });
  });
});
