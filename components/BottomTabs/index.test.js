import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BottomTabs from ".";

describe("BottomTabs component", () => {
  beforeEach(() => render(<BottomTabs />));

  it("should render a container div", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });

  it("should render a /today anchor with a /today href", () => {
    const anchorElement = screen.getByRole("todayAnchor");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", "/today");
  });

  it("should render a /eat anchor with a /eat href", () => {
    const anchorElement = screen.getByRole("eatAnchor");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", "/eat");
  });

  it("should render a /profile anchor with a /profile href", () => {
    const anchorElement = screen.getByRole("profileAnchor");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", "/profile");
  });
});
