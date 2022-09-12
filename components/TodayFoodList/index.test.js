import { render, screen } from "@testing-library/react";

import TodayFoodList from ".";

const IMAGE_SRC1 = "/stats/sun.png";
const IMAGE_SRC2 = "/pageBackgrounds/confused.png";
const CURRENT_DAY_EMPTY = [];
const CURRENT_DAY_NOT_EMPTY = [
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
  it("should receive all foods eaten today", () => {
    render(<TodayFoodList currentDay={CURRENT_DAY_NOT_EMPTY} />);
    const populatedList = screen.getByRole("populatedList");
    expect(populatedList).toBeInTheDocument();
  });
});
