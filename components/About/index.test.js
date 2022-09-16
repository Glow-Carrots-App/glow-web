import { render, screen } from "@testing-library/react";

import About from ".";

describe("About component", () => {
  beforeEach(() => render(<About />));

  it("should render the first paragraph tag", () => {
    const paragraphElement = screen.getByText(
      /Glow is a food tracker app inspired/i
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render the second paragraph tag", () => {
    const paragraphElement = screen.getByText(
      /This app is intended for all ages/i
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render the third paragraph tag", () => {
    const paragraphElement = screen.getByText(/Icons are made/i);
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
