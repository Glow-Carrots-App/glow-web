import { render, screen } from "@testing-library/react";

import EatFoodsList from ".";

const MOCKED_DATA = [
  {
    productSearch: "Cabbage (Green)",
  },
  {
    productSearch: "Blackberry",
  },
  {
    productSearch: "Strawberry",
  },
  {
    productSearch: "Lemon",
  },
  {
    productSearch: "Apricot (Orange)",
  },
];

describe("EatFoodsList", () => {
  beforeEach(() => render(<EatFoodsList data={MOCKED_DATA} />));

  it("should render a container div for food list", () => {
    const containerElement = screen.getByRole("listContainer");
    expect(containerElement).toBeInTheDocument();
  });

  it("should render text for a food list item", () => {
    const listElement = screen.getByText(/cabbage/i);
    expect(listElement).toBeInTheDocument();
  });

  it("should render 5 divs for each food list item", () => {
    const listElements = screen.getAllByRole(/foodListItem/i);
    expect(listElements.length).toBe(5);
  });
});
