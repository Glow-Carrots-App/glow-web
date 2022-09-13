import { render, screen } from "@testing-library/react";

import AddButton from ".";

describe("AddButton component", () => {
  beforeEach(() => render(<AddButton />));

  it("should render an anchor tag", () => {
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toBeInTheDocument();
  });

  it("should render an add(+) image", () => {
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });
});
