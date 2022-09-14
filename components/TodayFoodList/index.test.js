import { render, screen } from "@testing-library/react";

import TodayFoodList from ".";

const IMAGE_SRC1 = "/stats/sun.png";
const IMAGE_SRC2 = "/pageBackgrounds/confused.png";
const CURRENT_DAY_EMPTY = [];
const CURRENT_DAY = [
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
];

describe("TodayFoodList component", () => {
  beforeEach(() => render(<TodayFoodList currentDay={CURRENT_DAY_EMPTY} />));
  it("should render a sun image", () => {
    const sunImage = screen.getByRole("sunImage");
    expect(sunImage).toBeInTheDocument();
    expect(sunImage).toHaveAttribute("src", IMAGE_SRC1);
  });

  it("should render title span text", () => {
    const todaysNoms = screen.getByText(/Today's Noms/i);
    expect(todaysNoms).toBeInTheDocument();
  });

  it("should render a pineapple image if list is empty", () => {
    const confusedPineapple = screen.getByRole("confused");
    expect(confusedPineapple).toBeVisible();
    expect(confusedPineapple).toHaveAttribute("src", IMAGE_SRC2);
  });
});

describe("TodayFodoList when food is eaten", () => {
  beforeEach(() => render(<TodayFoodList currentDay={CURRENT_DAY} />));
  it("should render a sun image", () => {
    const sunImage = screen.getByRole("sunImage");
    expect(sunImage).toBeInTheDocument();
    expect(sunImage).toHaveAttribute("src", IMAGE_SRC1);
  });

  it("should render title span text", () => {
    const todaysNoms = screen.getByText(/Today's Noms/i);
    expect(todaysNoms).toBeInTheDocument();
  });

  it("should render a list", () => {
    const populatedList = screen.getByRole("list");
    expect(populatedList).toBeInTheDocument();
  });

  it("should render list with 3 text elements", () => {
    const textElements = screen.getAllByRole("listitem");
    expect(textElements.length).toBe(3);
  });
});
