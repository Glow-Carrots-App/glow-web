import { render, screen } from "@testing-library/react";

import EatColorFilter from ".";

describe("EatColorFilter", () => {
  it("should render descriptor text", () => {
    render(<EatColorFilter />);
    const paragraphElement = screen.getByText(/filter by color/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render 6 clickable divs", () => {
    render(<EatColorFilter />);
    const divElements = screen.getAllByRole(/filter-button/i);
    expect(divElements.length).toBe(6);
  });

  it("should have default styles first rendered", () => {
    render(<EatColorFilter />);
    const divElement = screen.getByRole(/filter-button-0/i);
    expect(divElement).toHaveClass("iconContainer");
  });

  it("when clicked div should have different styles rendered", () => {
    render(<EatColorFilter selectedColor={"Red"} />);
    const divElement = screen.getByRole(/filter-button-0/i);
    expect(divElement).toHaveClass("iconHighlight");
  });
});
