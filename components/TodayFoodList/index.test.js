import { render, screen } from "@testing-library/react";

import TodayFoodList from ".";

const IMAGE_SRC1 = "/stats/sun.png";
const IMAGE_SRC2 = "/pageBackgrounds/confused.png";
const CURRENT_DAY = [];

//confused pineapple

describe("TodayFoodList component", () => {
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
  it("should render a pineapple image if list is empty", () => {
    const confusedPineapple = screen.getByRole("confused");
    expect(confusedPineapple).toBeVisible();
    expect(confusedPineapple).toHaveAttribute("src", IMAGE_SRC2);
  });
});
