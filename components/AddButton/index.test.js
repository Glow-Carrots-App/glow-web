import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AddButton from ".";

describe("AddButton component", () => {
  beforeEach(() => render(<AddButton />));

  it("should render a container div", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });

  it("should render an anchor tag", () => {
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toBeInTheDocument();
  });

  it("should render an add(+) image", () => {
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });
});
