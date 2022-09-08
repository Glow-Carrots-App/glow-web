import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EatColorFilter from "../index";

describe("EatColorFilter", () => {
  it(" should render descriptor text", async () => {
    render(<EatColorFilter />);
    const paragraphElement = screen.getByText(/filter by color/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it(" should render 6 clickable divs", async () => {
    render(<EatColorFilter />);
    const divElements = screen.getAllByTestId(/filter-button/i);
    expect(divElements.length).toBe(6);
  });

  it("should have default styles first rendered", async () => {
    render(<EatColorFilter />);
    const divElement = screen.getByTestId(/filter-button-0/i);
    expect(divElement).toHaveClass("iconContainer");
  });

  it("when clicked div should have different styles rendered", async () => {
    render(<EatColorFilter selectedColor={"Red"} />);
    const divElement = screen.getByTestId(/filter-button-0/i);
    expect(divElement).toHaveClass("iconHighlight");
  });
});
