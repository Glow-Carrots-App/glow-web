import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import EatFoodsList from ".";

const mockedData = [
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
  beforeEach(() => render(<EatFoodsList data={mockedData} />));

  it("should render a container div for food list", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });

  it("should render text for a food list item", () => {
    const listElement = screen.getByText(/cabbage/i);
    expect(listElement).toBeInTheDocument();
  });

  it("should render 5 divs for each food list item", () => {
    const listElements = screen.getAllByRole("food-list-item");
    expect(listElements.length).toBe(5);
  });
});
