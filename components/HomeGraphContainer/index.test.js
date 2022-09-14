import { render, screen } from "@testing-library/react";

import HomeGraphContainer from ".";

const IMG_SRC = "/landing/glow-graph-home.png";

describe("HomeGraphContainer component", () => {
  beforeEach(() => render(<HomeGraphContainer />));

  describe("graphContainer", () => {
    it("should render graph text", () => {
      const graphText = screen.getByText(/Data driven graphs!/);
      expect(graphText).toBeInTheDocument();
    });

    it("should render an image with a graph", () => {
      const graphImage = screen.getByRole("img");
      expect(graphImage).toBeInTheDocument();
      expect(graphImage).toHaveAttribute("src", IMG_SRC);
    });
  });
});
