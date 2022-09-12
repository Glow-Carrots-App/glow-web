import { render, screen } from "@testing-library/react";

import ProfileGraph from ".";

const POPULATED_FOOD_HISTORY = [
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

const UNPOPULATED_FOOD_HISTORY = [];

describe("ProfileGraph component with data", () => {
  beforeEach(() =>
    render(<ProfileGraph lifetimeFoodHistory={POPULATED_FOOD_HISTORY} />)
  );

  it("should render a container", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });

  describe("container", () => {
    it("should render a graph text", () => {
      const graphText = screen.getByText(/Total Color Breakdown/);
      expect(graphText).toBeInTheDocument();
    });

    it("should render a progressBar container", () => {
      const barContainer = screen.getByRole("progressBar");
      expect(barContainer).toBeInTheDocument();
    });

    describe("progressBar container", () => {
      it("shoulder render 3 progressItem containers", () => {
        const progressItems = screen.getAllByRole("progressItem");
        progressItems.forEach((progressItem) =>
          expect(progressItem).toBeInTheDocument()
        );
        expect(progressItems.length).toBe(3);
      });
    });
  });
});

describe("ProfileGraph component without data", () => {
  beforeEach(() =>
    render(<ProfileGraph lifetimeFoodHistory={UNPOPULATED_FOOD_HISTORY} />)
  );

  it("should render a container", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });

  describe("container", () => {
    it("should render a graph text", () => {
      const graphText = screen.getByText(/Total Color Breakdown/);
      expect(graphText).toBeInTheDocument();
    });

    it("should render a progressBar container", () => {
      const barContainer = screen.getByRole("progressBar");
      expect(barContainer).toBeInTheDocument();
    });

    describe("progressBar container", () => {
      it("should render an Eat Something text", () => {
        const emptyText = screen.getByText(/Eat Something/);
        expect(emptyText).toBeInTheDocument();
      });
    });
  });
});
