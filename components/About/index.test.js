import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import About from ".";

describe("About component", () => {
  beforeEach(() => render(<About />));

  it("should render a container div", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });

  it("should render the first paragraph tag", () => {
    const paragraphElement = screen.getByRole("firstParagraph");
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render the second paragraph tag", () => {
    const paragraphElement = screen.getByRole("secondParagraph");
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render the third paragraph tag", () => {
    const paragraphElement = screen.getByRole("thirdParagraph");
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render a Freepik anchor tag", () => {
    const anchorElement = screen.getByText(/Freepik/i);
    expect(anchorElement).toBeInTheDocument();
  });

  it("should render a www.flaticon.com anchor tag", () => {
    const anchorElement = screen.getByText(/www.flaticon.com/);
    expect(anchorElement).toBeInTheDocument();
  });
});
