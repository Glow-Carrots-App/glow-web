import { render, screen } from "@testing-library/react";

import ProfileStatistics from ".";

const LIFETIME_FOOD_HISTORY = [
  {
    product: "Açai",
    productSearch: "Açai",
    color: "Purple",
    textHex: "#7471E7",
    fillHex: "#4B37A8",
    date: null,
  },
  {
    product: "Almond",
    productSearch: "Almond",
    color: "White",
    textHex: "#97906E",
    fillHex: "#F2EDCF",
    date: null,
  },
  {
    product: "Artichoke",
    productSearch: "Artichoke (Purple)",
    color: "Purple",
    textHex: "#7471E7",
    fillHex: "#4B37A8",
    date: null,
  },
  {
    product: "Arugula",
    productSearch: "Arugula",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
];

const CARD_TITLES = [
  "Day Streak",
  "Golden Carrots",
  "Highest Color",
  "Lowest Color",
];

const USER = {
  dayStreak: 1,
  goldenCarrots: 7,
};

describe("ProfileStatistics component", () => {
  beforeEach(() =>
    render(
      <ProfileStatistics
        user={USER}
        lifetimeFoodHistory={LIFETIME_FOOD_HISTORY}
      />
    )
  );

  it("should render Statistics text", () => {
    const statisticsText = screen.getByText(/^Statistics$/);
    expect(statisticsText).toBeInTheDocument();
  });

  it("should render four different stats cards", () => {
    CARD_TITLES.map((title) => {
      const cardTitle = screen.getByText(title);
      expect(cardTitle).toBeInTheDocument();
    });
  });
});
