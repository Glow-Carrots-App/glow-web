import { render, screen } from "@testing-library/react";

import HomeStatsContainer from ".";

const STATS_SRC = [
  "/landing/glow-stats1-home.png",
  "/landing/glow-stats2-home.png",
];

describe("HomeStatsContainer component", () => {
  beforeEach(() => render(<HomeStatsContainer />));

  it("should render a statsContainer", () => {
    const statsContainer = screen.getByRole("statsContainer");
    expect(statsContainer).toBeInTheDocument();
  });

  describe("statsContainer", () => {
    it("should render 2 stats images", () => {
      const stats = screen.getAllByRole("img");
      stats.forEach((stat, i) => {
        expect(stat).toBeInTheDocument();
        expect(stat).toHaveAttribute("src", STATS_SRC[i]);
      });
    });

    it("should render stats text", () => {
      const statsText = screen.getByText(/Keep track of statistics and more!/);
      expect(statsText).toBeInTheDocument();
    });
  });
});
