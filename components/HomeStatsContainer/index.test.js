import { render, screen } from "@testing-library/react";

import HomeStatsContainer from ".";

const STATS1 = "/landing/glow-stats1-home.png";
const STATS2 = "/landing/glow-stats2-home.png";

describe("HomeStatsContainer component", () => {
  beforeEach(() => render(<HomeStatsContainer />));

  it("should render a statsContainer", () => {
    const statsContainer = screen.getByRole("statsContainer");
    expect(statsContainer).toBeInTheDocument();
  });

  describe("statsContainer", () => {
    it("should render stats1 image", () => {
      const stats1 = screen.getByRole("stats1");
      expect(stats1).toBeInTheDocument();
      expect(stats1).toHaveAttribute("src", STATS1);
    });
    it("should render stats2 image", () => {
      const stats2 = screen.getByRole("stats2");
      expect(stats2).toBeInTheDocument();
      expect(stats2).toHaveAttribute("src", STATS2);
    });
    it("should render stats text", () => {
      const statsText = screen.getByText(/Keep track of statistics and more!/);
      expect(statsText).toBeInTheDocument();
    });
  });
});
